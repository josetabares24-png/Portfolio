import { chromium } from 'playwright'
import fs from 'node:fs/promises'
import path from 'node:path'

const targets = [
  { slug: 'estaba-en-lisboa', url: 'https://estabaenlisboa.com/' },
  { slug: 'mil-sabores', url: 'https://www.milsaboresbrunch.com/' },
]
const sizes = [
  { key: 'desktop', width: 1440, height: 920, isMobile: false },
  { key: 'mobile', width: 390, height: 844, isMobile: true },
]
const folder = path.join(process.cwd(), 'public', 'showcase-captures')
await fs.mkdir(folder, { recursive: true })
const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
const manifest = { createdAt: new Date().toISOString(), files: [] }
try {
  for (const target of targets) {
    for (const size of sizes) {
      const page = await browser.newPage({
        viewport: { width: size.width, height: size.height },
        deviceScaleFactor: 1,
        isMobile: size.isMobile,
        hasTouch: size.isMobile,
        reducedMotion: 'reduce',
        locale: 'es-ES',
      })
      try {
        console.log('CAPTURING', target.url, size.key)
        const response = await page.goto(target.url, { waitUntil: 'domcontentloaded', timeout: 45000 })
        if (!response || response.status() >= 400) throw new Error('Bad HTTP status: ' + response?.status())
        if (new URL(page.url()).hostname.replace(/^www\./,'') !== new URL(target.url).hostname.replace(/^www\./,''))
          throw new Error('Unexpected redirected host: '+page.url())
        await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {})
        await page.evaluate(() => document.fonts.ready)
        await page.waitForTimeout(2400)
        const title = await page.title()
        const textLength = await page.locator('body').innerText().then(s => s.trim().length)
        if (textLength < 150) throw new Error('Page content too short for authentic screenshot: ' + textLength)
        const filename = target.slug + '-' + size.key + '.jpg'
        await page.screenshot({ path: path.join(folder, filename), type: 'jpeg', quality: 82, animations: 'disabled' })
        manifest.files.push({ filename, source: target.url, finalUrl: page.url(), title, viewport: size, capturedAt: new Date().toISOString() })
        console.log('SAVED', filename, title, textLength)
      } finally {
        await page.close()
      }
    }
  }
  await fs.writeFile(path.join(folder, 'SOURCES.json'), JSON.stringify(manifest, null, 2) + '\n')
} finally {
  await browser.close()
}

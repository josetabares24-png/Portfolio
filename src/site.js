const button = document.querySelector('.menu-button')
const menu = document.getElementById('mobile-nav')
const setOpen = (open) => {
  if (!button || !menu) return
  button.setAttribute('aria-expanded', String(open))
  menu.hidden = !open
}
if (button && menu) {
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'))
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)))
  window.addEventListener('keydown', event => { if (event.key === 'Escape') setOpen(false) })
}
const copy = document.querySelector('.copy-email')
if (copy) {
  const label = copy.textContent
  copy.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard unavailable')
      await navigator.clipboard.writeText(copy.dataset.email)
      copy.textContent = copy.dataset.copied
    } catch {
      copy.textContent = copy.dataset.fail
    }
    setTimeout(() => { copy.textContent = label }, 2600)
  })
}

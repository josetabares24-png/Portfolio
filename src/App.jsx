import { useEffect, useState } from 'react'

const EMAIL = 'josetabares24@gmail.com'

const content = {
  es: {
    nav: ['Proyectos', 'Servicios', 'Cómo trabajo', 'Precios'],
    navContact: 'Pedir propuesta',
    eyebrow: 'Diseño y desarrollo web independiente · Lisboa',
    heroA: 'Tu negocio',
    heroB: 'ya existe.',
    heroC: 'Hagamos que',
    heroD: 'se vea.',
    intro: 'Diseño páginas web para restaurantes, profesionales y negocios locales. Una web clara, con personalidad y preparada para que tus clientes te encuentren y contacten.',
    heroCTA: 'Hablemos de tu web',
    heroSecondary: 'Ver trabajos reales',
    heroFoot: 'Diseño propio · Adaptable a móviles · Bases de SEO',
    ticketTop: 'Lo que importa',
    ticketTitle: 'Tu próxima web tiene que hacer tres cosas.',
    ticketItems: [['01', 'Explicar', 'Qué haces, sin dar rodeos.'], ['02', 'Convencer', 'Con diseño y contenido que tengan sentido.'], ['03', 'Conectar', 'Con una forma directa de escribirte.']],
    note: 'Sin plantillas que hacen que todos los negocios se vean iguales.',
    projectsLabel: '01 / Proyectos',
    projectsTitleA: 'No son promesas.',
    projectsTitleB: 'Son webs que puedes abrir.',
    projectsDesc: 'Estos son proyectos reales. Puedes entrar, navegar y decidir si te gusta cómo trabajo.',
    project1Cat: 'Guía editorial · Turismo',
    project1Desc: 'Una guía independiente sobre Lisboa, con contenido organizado para responder búsquedas reales y ayudar a los viajeros.',
    project2Cat: 'Restauración · Lisboa',
    project2Desc: 'Una web de restaurante con carta, información práctica y formas de contacto y reserva.',
    projectVisit: 'Visitar sitio real',
    projectPreview: 'Composición tipográfica · no es una captura del sitio',
    projectNext: '¿El próximo proyecto?',
    projectNext2: 'Puede ser tu negocio.',
    projectNextCTA: 'Cuéntame qué necesitas',
    servicesLabel: '02 / Qué puedo hacer',
    servicesTitle: 'Una web hecha para tu negocio. No al revés.',
    servicesIntro: 'No necesitas una página enorme para empezar. Necesitas que se entienda qué vendes, por qué elegirte y cómo contactarte.',
    services: [
      { number: '01', title: 'Web de presentación', desc: 'Una página cuidada para explicar tu negocio, mostrar servicios, ubicación y contacto.', tags: ['Diseño responsive', 'Contenido claro', 'Contacto directo'] },
      { number: '02', title: 'Web para restaurantes', desc: 'Carta, fotos autorizadas, ubicación y acceso a reservas o WhatsApp cuando corresponda.', tags: ['Carta y horarios', 'Google Maps', 'Reservas o consulta'] },
      { number: '03', title: 'Mejora de una web existente', desc: 'Revisión de estructura, diseño, navegación y bases técnicas de SEO sin perder lo que ya funciona.', tags: ['Auditoría inicial', 'Diseño y UX', 'SEO técnico básico'] },
    ],
    processLabel: '03 / La manera de trabajar',
    processTitle: 'Sin reuniones eternas ni tecnicismos innecesarios.',
    steps: [
      { number: '01', title: 'Me cuentas tu idea', desc: 'Qué negocio tienes, qué necesitas mostrar y qué quieres que haga quien entre en tu web.' },
      { number: '02', title: 'Preparo la propuesta', desc: 'Te explico el alcance, el precio y cómo se vería. Si encaja, empezamos.' },
      { number: '03', title: 'Revisamos antes de publicar', desc: 'Compruebo diseño, móvil y enlaces. Tú ves el resultado antes de dar el visto bueno.' },
    ],
    priceLabel: '04 / Para empezar',
    priceHeadline: 'Empezar no tiene por qué costar una fortuna.',
    pricePrefix: 'Web sencilla',
    priceFrom: 'Desde',
    priceValue: '150 €',
    priceDesc: 'Precio de partida orientativo para una página de presentación básica. La propuesta final depende de las secciones, el contenido y las funciones que necesites.',
    priceFeatures: ['Adaptada a móvil y escritorio', 'Estructura y metadatos básicos para buscadores', 'Enlaces de contacto y redes', 'Revisión antes de publicar'],
    priceNote: 'Dominio, hosting, reservas especiales, traducciones y mantenimiento se concretan según el proyecto. No prometo posiciones en Google.',
    priceCTA: 'Solicitar presupuesto',
    aboutLabel: 'Un rostro detrás de la pantalla',
    aboutTitle: 'Soy José. Prefiero enseñarte lo que hago a llenarte de palabras.',
    aboutText: 'Trabajo desde Lisboa creando y desarrollando proyectos digitales. Sé lo importante que es para un negocio pequeño tener una web que se entienda, funcione y no parezca igual que todas las demás.',
    aboutSub: 'Trabajo de forma directa. Hablas conmigo, no con un departamento comercial.',
    contactLabel: '05 / Contacto',
    contactTitleA: '¿Tienes un negocio?',
    contactTitleB: 'Hablemos de su web.',
    contactDesc: 'Escríbeme qué haces y qué te gustaría conseguir. Te responderé con preguntas concretas o una propuesta de siguiente paso, sin compromiso.',
    contactCTA: 'Escribir un correo',
    contactHelp: 'El botón abre tu aplicación de correo con un mensaje preparado. No hay ningún formulario que finja enviar datos.',
    footerOne: 'Diseño web independiente',
    footerTwo: 'Sin nombre definitivo, todavía. El trabajo habla primero.',
    footerTop: 'Volver arriba',
    emailSubject: 'Quiero una propuesta para mi página web',
    emailBody: 'Hola, quiero una página web para mi negocio.\n\nNombre del negocio:\nQué hago:\nWeb actual (si tengo):\nQué necesito:\n\nGracias.',
    langName: 'Español',
  },
  pt: {
    nav: ['Projetos', 'Serviços', 'Como trabalho', 'Preços'],
    navContact: 'Pedir proposta',
    eyebrow: 'Design e desenvolvimento web independente · Lisboa',
    heroA: 'O teu negócio',
    heroB: 'já existe.',
    heroC: 'Vamos fazê-lo',
    heroD: 'notar.',
    intro: 'Crio websites para restaurantes, profissionais e negócios locais. Sites claros, com personalidade e preparados para que os teus clientes te encontrem e entrem em contacto.',
    heroCTA: 'Vamos falar do teu site',
    heroSecondary: 'Ver projetos reais',
    heroFoot: 'Design próprio · Adaptado a telemóveis · Bases de SEO',
    ticketTop: 'O que importa',
    ticketTitle: 'O teu próximo site deve fazer três coisas.',
    ticketItems: [['01', 'Explicar', 'O que fazes, sem rodeios.'], ['02', 'Convencer', 'Com design e conteúdo que façam sentido.'], ['03', 'Ligar', 'Com uma forma simples de te contactarem.']],
    note: 'Sem modelos que fazem todos os negócios parecer iguais.',
    projectsLabel: '01 / Projetos',
    projectsTitleA: 'Não são promessas.',
    projectsTitleB: 'São sites que podes abrir.',
    projectsDesc: 'Estes projetos existem. Podes entrar, navegar e perceber como trabalho.',
    project1Cat: 'Guia editorial · Turismo',
    project1Desc: 'Um guia independente de Lisboa, com conteúdo organizado para responder a pesquisas reais e ajudar viajantes.',
    project2Cat: 'Restauração · Lisboa',
    project2Desc: 'Um website de restaurante com menu, informações úteis e meios de contacto e reserva.',
    projectVisit: 'Visitar website',
    projectPreview: 'Composição tipográfica · não é uma captura do site',
    projectNext: 'E o próximo projeto?',
    projectNext2: 'Pode ser o teu negócio.',
    projectNextCTA: 'Conta-me o que precisas',
    servicesLabel: '02 / O que posso fazer',
    servicesTitle: 'Um site feito para o teu negócio. Não ao contrário.',
    servicesIntro: 'Não precisas de um website enorme para começar. Precisas de explicar bem o que ofereces, porque te devem escolher e como falar contigo.',
    services: [
      { number: '01', title: 'Website de apresentação', desc: 'Uma página cuidada para mostrar o teu negócio, serviços, localização e contactos.', tags: ['Design responsivo', 'Conteúdo claro', 'Contacto direto'] },
      { number: '02', title: 'Sites para restaurantes', desc: 'Menu, fotografias autorizadas, localização e acesso a reservas ou WhatsApp quando fizer sentido.', tags: ['Menu e horários', 'Google Maps', 'Reservas ou contacto'] },
      { number: '03', title: 'Melhorar um site existente', desc: 'Revisão da estrutura, design, navegação e bases técnicas de SEO, sem estragar o que já funciona.', tags: ['Análise inicial', 'Design e UX', 'SEO técnico básico'] },
    ],
    processLabel: '03 / Como trabalho',
    processTitle: 'Sem reuniões intermináveis nem complicações desnecessárias.',
    steps: [
      { number: '01', title: 'Contas-me a tua ideia', desc: 'Que negócio tens, o que precisas de mostrar e o que queres que as pessoas façam no teu site.' },
      { number: '02', title: 'Preparo a proposta', desc: 'Explico o âmbito, o preço e a abordagem visual. Se fizer sentido, avançamos.' },
      { number: '03', title: 'Revemos antes de publicar', desc: 'Verifico o design, a versão móvel e os links. Vês o resultado antes de aprovar.' },
    ],
    priceLabel: '04 / Para começar',
    priceHeadline: 'Começar não precisa de custar uma fortuna.',
    pricePrefix: 'Website simples',
    priceFrom: 'Desde',
    priceValue: '150 €',
    priceDesc: 'Preço inicial indicativo para um website básico de apresentação. A proposta final depende das secções, dos conteúdos e das funcionalidades necessárias.',
    priceFeatures: ['Adaptado a telemóvel e computador', 'Estrutura e metadados básicos para pesquisa', 'Links de contacto e redes sociais', 'Revisão antes de publicar'],
    priceNote: 'Domínio, alojamento, reservas especiais, traduções e manutenção dependem do projeto. Não prometo posições no Google.',
    priceCTA: 'Pedir orçamento',
    aboutLabel: 'Uma pessoa por trás do ecrã',
    aboutTitle: 'Sou o José. Prefiro mostrar o que faço a encher-te de promessas.',
    aboutText: 'Trabalho a partir de Lisboa a criar e desenvolver projetos digitais. Sei como é importante para um pequeno negócio ter um site claro, funcional e com identidade própria.',
    aboutSub: 'Trabalho diretamente contigo. Falas comigo, não com um departamento comercial.',
    contactLabel: '05 / Contacto',
    contactTitleA: 'Tens um negócio?',
    contactTitleB: 'Vamos falar do site.',
    contactDesc: 'Diz-me o que fazes e o que gostavas de conseguir. Respondo com perguntas concretas ou uma proposta de próximo passo, sem compromisso.',
    contactCTA: 'Enviar um email',
    contactHelp: 'O botão abre a tua aplicação de email com uma mensagem preparada. Não há formulários a fingir que enviam dados.',
    footerOne: 'Design web independente',
    footerTwo: 'Ainda sem nome definitivo. O trabalho vem primeiro.',
    footerTop: 'Voltar ao início',
    emailSubject: 'Gostava de receber uma proposta para o meu website',
    emailBody: 'Olá, gostava de criar um website para o meu negócio.\n\nNome do negócio:\nO que faço:\nWebsite atual (se existir):\nO que preciso:\n\nObrigado.',
    langName: 'Português',
  },
}

const work = [
  { id: 'lisboa', title: 'Estaba en Lisboa', url: 'https://estabaenlisboa.com', domain: 'estabaenlisboa.com', year: '2026' },
  { id: 'sabores', title: 'Mil Sabores', url: 'https://www.milsaboresbrunch.com/', domain: 'milsaboresbrunch.com', year: '2026' },
]

function makeMailto(t) {
  return 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(t.emailSubject) + '&body=' + encodeURIComponent(t.emailBody)
}

function Label({ children, light = false }) {
  return <p className={'section-label' + (light ? ' on-dark' : '')}>{children}</p>
}

function BrowserArtwork({ project, t }) {
  return (
    <div className={'project-art project-art--' + project.id} aria-label={project.title + ': ' + t.projectPreview}>
      <div className="art-browser" aria-hidden="true">
        <div className="art-browser-bar"><span /><span /><span /><small>{project.domain}</small></div>
        {project.id === 'lisboa' ? (
          <div className="art-lisboa">
            <span className="art-eyebrow">LISBOA / UNA CIUDAD PARA LEER</span>
            <strong>La ciudad<br />se camina.</strong>
            <div className="art-lisboa-line" />
            <p>Una guía con rutas, barrios e historias.</p>
          </div>
        ) : (
          <div className="art-sabores">
            <span className="art-eyebrow">MIL SABORES · LISBOA</span>
            <div className="art-circles" />
            <strong>BRUNCH<br />& GELATO</strong>
            <span className="art-sabores-line">RUA DA PRATA · 152</span>
          </div>
        )}
      </div>
      <span className="art-caption">{t.projectPreview}</span>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    return new URLSearchParams(window.location.search).get('lang') === 'pt' ? 'pt' : 'es'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]
  const contactLink = makeMailto(t)

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'es'
    document.title = language === 'pt'
      ? 'Websites para negócios em Lisboa | Design web independente'
      : 'Diseño de páginas web para negocios en Lisboa | Estudio independiente'
  }, [language])

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const changeLanguage = (next) => {
    setLanguage(next)
    const url = new URL(window.location.href)
    if (next === 'es') url.searchParams.delete('lang')
    else url.searchParams.set('lang', 'pt')
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <>
      <a href="#contenido" className="skip-link">{language === 'pt' ? 'Saltar para o conteúdo' : 'Saltar al contenido'}</a>
      <nav className="site-nav" aria-label={language === 'pt' ? 'Navegação principal' : 'Navegación principal'}>
        <a href="#inicio" className="brand" aria-label={language === 'pt' ? 'Início' : 'Inicio'} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-text">ESTUDIO<span className="brand-sub">/ WEB</span></span>
        </a>
        <div className={'nav-panel' + (menuOpen ? ' is-open' : '')} id="menu-principal">
          <div className="nav-links">
            {['#proyectos', '#servicios', '#proceso', '#precios'].map((href, i) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>{t.nav[i]}</a>
            ))}
          </div>
          <div className="lang-switch" aria-label="Idioma / Língua">
            <button type="button" onClick={() => changeLanguage('es')} className={language === 'es' ? 'active' : ''} aria-pressed={language === 'es'}>ES</button>
            <span>/</span>
            <button type="button" onClick={() => changeLanguage('pt')} className={language === 'pt' ? 'active' : ''} aria-pressed={language === 'pt'}>PT</button>
          </div>
          <a className="nav-contact" href={contactLink}>{t.navContact}<span className="dot" aria-hidden="true" /></a>
        </div>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="menu-principal" aria-label={menuOpen ? 'Cerrar / Fechar' : 'Menú'} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? '✕' : '☰'}</button>
      </nav>

      <main id="contenido">
        <section className="hero" id="inicio">
          <div className="hero-content wrap">
            <Label>{t.eyebrow}</Label>
            <h1><span>{t.heroA}</span><br /><span>{t.heroB}</span><br /><span>{t.heroC}</span><br /><span className="highlight-word">{t.heroD}<svg viewBox="0 0 360 25" preserveAspectRatio="none" aria-hidden="true"><path d="M2 16 C90 4 210 7 358 13" /></svg></span></h1>
            <div className="hero-bottom">
              <p>{t.intro}</p>
              <div className="hero-cta-row">
                <a className="button button-dark" href={contactLink}>{t.heroCTA}</a>
                <a className="text-link" href="#proyectos">{t.heroSecondary}</a>
              </div>
            </div>
          </div>
          <aside className="hero-statement">
            <div className="statement-top"><span>{t.ticketTop}</span><span>001 / 003</span></div>
            <h2>{t.ticketTitle}</h2>
            <div className="statement-list">{t.ticketItems.map(([num, title, desc]) => (
              <div className="statement-item" key={num}><span>{num}</span><div><strong>{title}</strong><small>{desc}</small></div></div>
            ))}</div>
            <p className="statement-note">{t.note}</p>
          </aside>
        </section>

        <div className="ticker" aria-hidden="true"><div className="wrap ticker-inner"><span>WEB</span><b>✳</b><span>DISEÑO</span><b>✳</b><span>NEGOCIOS REALES</span><b>✳</b><span>SEO</span><b>✳</b><span>LISBOA</span></div></div>

        <section id="proyectos" className="projects section-space">
          <div className="wrap">
            <Label>{t.projectsLabel}</Label>
            <div className="section-heading projects-heading"><h2>{t.projectsTitleA}<br /><em>{t.projectsTitleB}</em></h2><p>{t.projectsDesc}</p></div>
            <div className="projects-list">
              {work.map((project, index) => (
                <article className="project-entry" key={project.id}>
                  <div className="project-meta"><span>0{index + 1} / {project.year}</span><span>{project.id === 'lisboa' ? t.project1Cat : t.project2Cat}</span></div>
                  <BrowserArtwork project={project} t={t} />
                  <div className="project-info">
                    <div><h3>{project.title}</h3><p>{project.id === 'lisboa' ? t.project1Desc : t.project2Desc}</p></div>
                    <a className="project-visit" href={project.url} target="_blank" rel="noopener noreferrer">{t.projectVisit}<span className="sr-only">({project.domain})</span></a>
                  </div>
                </article>
              ))}
            </div>
            <div className="next-project"><span className="next-project-star" aria-hidden="true">✳</span><div><p>{t.projectNext}</p><h3>{t.projectNext2}</h3></div><a href={contactLink} className="button button-outline">{t.projectNextCTA}</a></div>
          </div>
        </section>

        <section className="services section-space" id="servicios">
          <div className="wrap">
            <Label>{t.servicesLabel}</Label>
            <div className="section-heading services-heading"><h2>{t.servicesTitle}</h2><p>{t.servicesIntro}</p></div>
            <div className="service-rows">{t.services.map((service) => (
              <div className="service-row" key={service.number}>
                <span className="service-index">{service.number}</span>
                <h3>{service.title}</h3>
                <div className="service-body"><p>{service.desc}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              </div>
            ))}</div>
          </div>
        </section>

        <section className="process section-space" id="proceso">
          <div className="wrap process-layout">
            <div className="process-intro"><Label light>{t.processLabel}</Label><h2>{t.processTitle}</h2><div className="process-graphic" aria-hidden="true"><span className="large-asterisk">✳</span><span>CREAR · REVISAR · PUBLICAR</span></div></div>
            <div className="process-steps">{t.steps.map(step => (
              <div className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.desc}</p></div></div>
            ))}</div>
          </div>
        </section>

        <section className="price section-space" id="precios">
          <div className="wrap price-grid">
            <div className="price-intro"><Label>{t.priceLabel}</Label><h2>{t.priceHeadline}</h2><p className="price-side-note">{t.priceNote}</p></div>
            <div className="price-panel">
              <p className="price-panel-top">{t.pricePrefix}</p>
              <div className="price-amount"><span>{t.priceFrom}</span><strong>{t.priceValue}</strong></div>
              <p className="price-desc">{t.priceDesc}</p>
              <ul>{t.priceFeatures.map(feature => <li key={feature}>{feature}</li>)}</ul>
              <a href={contactLink} className="button button-lime">{t.priceCTA}</a>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="wrap about-layout">
            <div><Label>{t.aboutLabel}</Label><h2>{t.aboutTitle}</h2></div>
            <div className="about-copy"><p>{t.aboutText}</p><p>{t.aboutSub}</p><span className="signature">José / Lisboa</span></div>
          </div>
        </section>

        <section className="contact section-space" id="contacto">
          <div className="wrap">
            <Label light>{t.contactLabel}</Label>
            <h2>{t.contactTitleA}<br /><span>{t.contactTitleB}</span></h2>
            <div className="contact-bottom"><p>{t.contactDesc}</p><div><a className="button button-lime" href={contactLink}>{t.contactCTA}</a><a className="contact-email" href={'mailto:' + EMAIL}>{EMAIL}</a></div></div>
            <p className="contact-help">{t.contactHelp}</p>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="wrap footer-inner"><div><span className="footer-mark">///</span><p>{t.footerOne}</p><small>{t.footerTwo}</small></div><a href="#inicio">{t.footerTop}</a><span>© {new Date().getFullYear()}</span></div></footer>
    </>
  )
}

export default App

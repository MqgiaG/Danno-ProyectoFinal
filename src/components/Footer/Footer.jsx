import './Footer.css'

const footerLinks = [
  {
    label: 'Inicio',
    href: '#inicio',
  },
  {
    label: 'Sobre mí',
    href: '#sobre-mi',
  },
  {
    label: 'Portafolio',
    href: '#portafolio',
  },
  {
    label: 'Servicios',
    href: '#servicios',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* =========================
            MAIN ROW
        ========================= */}

        <div className="footer__main">
          {/* BRAND */}

          <a
            className="footer__brand"
            href="#inicio"
            aria-label="Volver al inicio"
          >
            <strong>DANNO</strong>

            <span>
              PHOTOGRAPHY / VIDEO
            </span>
          </a>

          {/* NAV */}

          <nav
            className="footer__nav"
            aria-label="Navegación del pie de página"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}

          <a
            className="footer__cta"
            href="#reservar"
          >
            <span>
              Reservar
            </span>

            <span
              className="footer__cta-arrow"
              aria-hidden="true"
            >
              <span />
            </span>
          </a>
        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="footer__bottom">
          <div className="footer__location">
            <span className="footer__dot" />

            <span>
              San Felipe, Guanajuato · México
            </span>
          </div>

          <span className="footer__copyright">
            DANNO © {year}
          </span>

          <a
            className="footer__top"
            href="#inicio"
            aria-label="Volver arriba"
          >
            <span>
              VOLVER ARRIBA
            </span>

            <span className="footer__top-arrow">
              <span />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
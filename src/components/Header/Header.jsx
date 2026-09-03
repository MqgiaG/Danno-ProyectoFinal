import { useEffect, useState } from 'react'
import './Header.css'

const navigation = [
  {
    id: 'inicio',
    label: 'Inicio',
  },
  {
    id: 'sobre-mi',
    label: 'Sobre mí',
  },
  {
    id: 'portafolio',
    label: 'Portafolio',
  },
  {
    id: 'servicios',
    label: 'Servicios',
  },
  {
    id: 'contacto',
    label: 'Contacto',
  },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    let animationFrame = null

    const handleScroll = () => {
      if (animationFrame) return

      animationFrame = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 45)

        const referencePoint =
          window.scrollY + window.innerHeight * 0.36

        let currentSection = 'inicio'

        navigation.forEach(({ id }) => {
          const section = document.getElementById(id)

          if (!section) return

          if (section.offsetTop <= referencePoint) {
            currentSection = id
          }
        })

        setActiveSection(currentSection)

        animationFrame = null
      })
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleNavigation = (id) => {
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`header ${
        isScrolled ? 'header--scrolled' : ''
      } ${
        isMenuOpen ? 'header--menu-open' : ''
      }`}
    >
      <div className="header__inner">
        {/* =========================
            LOGO
        ========================= */}

        <a
          className="header__logo"
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={() => handleNavigation('inicio')}
        >
          <span className="header__logo-word">
            DANNO
          </span>

          <span className="header__logo-meta">
            <span className="header__logo-dot" />

            PHOTOGRAPHY / VIDEO
          </span>
        </a>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="header__right">
          {/* =========================
              NAV
          ========================= */}

          <nav
            className="header__nav"
            aria-label="Navegación principal"
          >
            <span
              className="header__nav-glass-light"
              aria-hidden="true"
            />

            {navigation.map((item) => {
              const isActive =
                activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`header__nav-link ${
                    isActive
                      ? 'header__nav-link--active'
                      : ''
                  }`}
                  aria-current={
                    isActive ? 'page' : undefined
                  }
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                >
                  <span className="header__nav-label">
                    {item.label}
                  </span>

                  <span
                    className="header__nav-active-line"
                    aria-hidden="true"
                  />

                  <span
                    className="header__nav-active-dot"
                    aria-hidden="true"
                  />
                </a>
              )
            })}
          </nav>

          {/* =========================
              CTA
          ========================= */}

          <a
            className="header__cta"
            href="#reservar"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className="header__cta-reflection"
              aria-hidden="true"
            />

            <span className="header__cta-text">
              Reservar
            </span>

            <span
              className="header__cta-icon"
              aria-hidden="true"
            >
              <span />
            </span>
          </a>

          {/* =========================
              MOBILE MENU
          ========================= */}

          <button
            type="button"
            className="header__menu-button"
            aria-label={
              isMenuOpen
                ? 'Cerrar menú'
                : 'Abrir menú'
            }
            aria-expanded={isMenuOpen}
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE PANEL
      ========================= */}

      <div className="header__mobile">
        <span
          className="header__mobile-light"
          aria-hidden="true"
        />

        <div className="header__mobile-head">
          <div>
            <span>
              DANNO
            </span>

            <small>
              NAVIGATION
            </small>
          </div>

          <span className="header__mobile-code">
            001
          </span>
        </div>

        <nav
          className="header__mobile-nav"
          aria-label="Navegación móvil"
        >
          {navigation.map((item, index) => {
            const isActive =
              activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`header__mobile-link ${
                  isActive
                    ? 'header__mobile-link--active'
                    : ''
                }`}
                onClick={() =>
                  handleNavigation(item.id)
                }
              >
                <span className="header__mobile-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="header__mobile-name">
                  {item.label}
                </span>

                <span className="header__mobile-arrow">
                  ↗
                </span>
              </a>
            )
          })}
        </nav>

        <a
          className="header__mobile-cta"
          href="#reservar"
          onClick={() => setIsMenuOpen(false)}
        >
          <span>
            RESERVAR SESIÓN
          </span>

          <span>
            ↗
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header
import './Hero.css'
import heroImage from '../../assets/images/danno-hero.png'

const heroTitle = 'DANNO'

function Hero() {
  const handlePointerMove = (event) => {
    const hero = event.currentTarget
    const rect = hero.getBoundingClientRect()

    const x =
      (event.clientX - rect.left) /
      rect.width

    const y =
      (event.clientY - rect.top) /
      rect.height

    const rotateY =
      (x - 0.5) * 1.8

    const rotateX =
      (0.5 - y) * 1.15

    const moveX =
      (x - 0.5) * -8

    const moveY =
      (y - 0.5) * -5

    hero.style.setProperty(
      '--hero-rotate-x',
      `${rotateX}deg`
    )

    hero.style.setProperty(
      '--hero-rotate-y',
      `${rotateY}deg`
    )

    hero.style.setProperty(
      '--hero-move-x',
      `${moveX}px`
    )

    hero.style.setProperty(
      '--hero-move-y',
      `${moveY}px`
    )

    hero.style.setProperty(
      '--hero-light-x',
      `${x * 100}%`
    )

    hero.style.setProperty(
      '--hero-light-y',
      `${y * 100}%`
    )
  }

  const handlePointerLeave = (event) => {
    const hero = event.currentTarget

    hero.style.setProperty(
      '--hero-rotate-x',
      '0deg'
    )

    hero.style.setProperty(
      '--hero-rotate-y',
      '0deg'
    )

    hero.style.setProperty(
      '--hero-move-x',
      '0px'
    )

    hero.style.setProperty(
      '--hero-move-y',
      '0px'
    )

    hero.style.setProperty(
      '--hero-light-x',
      '58%'
    )

    hero.style.setProperty(
      '--hero-light-y',
      '45%'
    )
  }

  return (
    <section
      className="hero"
      id="inicio"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero__container">
        {/* =========================
            BACKGROUND
        ========================= */}

        <div className="hero__media">
          <img
            className="hero__image"
            src={heroImage}
            alt="Danno, fotógrafo y videógrafo"
          />

          <div className="hero__image-glow" />
        </div>

        {/* =========================
            CINEMATIC OVERLAYS
        ========================= */}

        <div className="hero__overlay" />
        <div className="hero__vignette" />

        <div className="hero__exposure">
          <span />
        </div>

        <div className="hero__grain" />

        {/* =========================
            CONTENT
        ========================= */}

        <div className="hero__content">
          {/* EYEBROW */}

          <div className="hero__eyebrow-wrap">
            <span className="hero__eyebrow-line" />

            <p className="hero__eyebrow">
              Fotografía & Video
            </p>
          </div>

          {/* =========================
              DANNO TITLE
          ========================= */}

          <h1
            className="hero__title"
            aria-label="DANNO"
          >
            <span
              className="hero__title-light"
              aria-hidden="true"
            />

            <span className="hero__title-letters">
              {heroTitle.split('').map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="hero__title-letter"
                  data-letter={letter}
                  style={{
                    '--letter-index': index,
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>

          {/* DIVIDER */}

          <div className="hero__title-divider">
            <span />
          </div>

          {/* DESCRIPTION */}

          <p className="hero__subtitle">
            Retratos, eventos y sesiones exteriores con
            una visión cinematográfica.
          </p>

          {/* LOCATION */}

          <div className="hero__location">
            <span className="hero__location-dot" />

            <span>
              San Felipe, Guanajuato · México
            </span>
          </div>

          {/* BUTTONS */}

          <div className="hero__buttons">
            <a
              href="#portafolio"
              className="hero__button hero__button--primary"
            >
              <span className="hero__button-light" />

              <span className="hero__button-text">
                Ver portafolio
              </span>

              <span className="hero__button-arrow">
                <span />
              </span>
            </a>

            <a
              href="#reservar"
              className="hero__button hero__button--secondary"
            >
              <span className="hero__button-light" />

              <span className="hero__button-text">
                Reservar sesión
              </span>

              <span className="hero__button-arrow">
                <span />
              </span>
            </a>
          </div>
        </div>

        {/* =========================
            FRAME METADATA
        ========================= */}

        <div
          className="hero__frame-meta hero__frame-meta--left"
          aria-hidden="true"
        >
          <span>
            DANNO / VISUAL STORIES
          </span>

          <small>
            FRAME 001
          </small>
        </div>

        <div
          className="hero__frame-meta hero__frame-meta--right"
          aria-hidden="true"
        >
          <span>
            SAN FELIPE · GTO
          </span>

          <small>
            MX / 2026
          </small>
        </div>

        {/* =========================
            CAMERA FOCUS
        ========================= */}

        <div
          className="hero__focus"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />

          <div className="hero__focus-cross">
            <span />
            <span />
          </div>
        </div>

        {/* =========================
            SCROLL
        ========================= */}

        <a
          href="#portafolio"
          className="hero__scroll"
          aria-label="Ir al portafolio"
        >
          <span className="hero__scroll-ring" />
          <span className="hero__scroll-arrow" />
        </a>
      </div>
    </section>
  )
}

export default Hero
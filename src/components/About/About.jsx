import './About.css'
import dannoAbout from '../../assets/images/danno-about.jpg'

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="about__background-word">
        DANNO
      </div>

      <div className="about__container">
        {/* =========================
            BRAND
        ========================= */}

        <div className="about__top">
          <div className="about__section-brand">
            <div className="about__brand-mark">
              <span className="about__brand-corner about__brand-corner--top-left" />

              <span className="about__brand-corner about__brand-corner--bottom-right" />

              <span className="about__brand-name">
                DANNO
              </span>
            </div>

            <span className="about__brand-section">
              SOBRE MÍ
            </span>
          </div>

          <span className="about__type">
            FOTOGRAFÍA · VIDEO · EXTERIORES
          </span>
        </div>

        {/* =========================
            INTRO
        ========================= */}

        <div className="about__intro">
          <p className="about__eyebrow">
            <span />

            DETRÁS DE LA CÁMARA

            <span />
          </p>

          <h2 className="about__title">
            <span className="about__title-word about__title-word--primary">
              Historias reales.
            </span>

            <span className="about__title-word about__title-word--accent">
              Una mirada propia.
            </span>
          </h2>

          <p className="about__intro-description">
            Fotografía y video con una estética urbana,
            dark y cinematográfica.
          </p>
        </div>

        {/* =========================
            MAIN
        ========================= */}

        <div className="about__layout">
          {/* =========================
              IMAGE
          ========================= */}

          <div className="about__visual">
            <div className="about__image-frame">
              <img
                className="about__image"
                src={dannoAbout}
                alt="Danno fotógrafo"
              />

              <div className="about__image-overlay" />

              <span className="about__frame-label">
                FRAME 001
              </span>

              <span className="about__vertical-location">
                SAN FELIPE / GUANAJUATO
              </span>

              <div className="about__focus">
                <span />
                <span />
                <span />
                <span />

                <div className="about__focus-cross">
                  <span />
                  <span />
                </div>
              </div>

              <div className="about__image-signature">
                <strong>
                  DANNO
                </strong>

                <span>
                  PHOTOGRAPHY / VIDEO
                </span>
              </div>

              <span className="about__image-light" />
            </div>

            <div className="about__image-meta">
              <span>
                001 / PORTRAIT
              </span>

              <span>
                SAN FELIPE · GTO
              </span>
            </div>
          </div>

          {/* =========================
              CONTENT
          ========================= */}

          <div className="about__content">
            {/* =========================
                STORY
            ========================= */}

            <div className="about__story">
              {/* ORIGEN */}

              <article className="about__story-block">
                <div className="about__story-meta">
                  <span className="about__story-number">
                    01
                  </span>

                  <small>
                    ORIGEN
                  </small>

                  <span className="about__story-line" />
                </div>

                <div className="about__story-content">
                  <h3>
                    De Hidalgo a San Felipe.
                  </h3>

                  <p>
                    Mi nombre es{' '}
                    <strong>
                      Daniel Romero Patlán
                    </strong>
                    . Soy originario del estado de Hidalgo
                    y actualmente radico en{' '}
                    <strong>
                      San Felipe, Guanajuato
                    </strong>
                    , lugar donde mi gusto por la fotografía
                    terminó convirtiéndose en una forma de vida.
                  </p>
                </div>
              </article>

              {/* PROCESO */}

              <article className="about__story-block">
                <div className="about__story-meta">
                  <span className="about__story-number">
                    02
                  </span>

                  <small>
                    PROCESO
                  </small>

                  <span className="about__story-line" />
                </div>

                <div className="about__story-content">
                  <h3>
                    Todo comenzó con un teléfono.
                  </h3>

                  <p>
                    Comencé a los{' '}
                    <strong>
                      17 años
                    </strong>
                    . Con el tiempo adquirí mi primera
                    cámara profesional y complementé mi
                    aprendizaje con cursos de fotografía
                    y edición. Gran parte de mi proceso
                    ha sido autodidacta.
                  </p>
                </div>
              </article>

              {/* ESTILO */}

              <article className="about__story-block">
                <div className="about__story-meta">
                  <span className="about__story-number">
                    03
                  </span>

                  <small>
                    ESTILO
                  </small>

                  <span className="about__story-line" />
                </div>

                <div className="about__story-content">
                  <h3>
                    Urbano. Dark. Cinematográfico.
                  </h3>

                  <p>
                    He participado en distintos proyectos
                    y eventos, entre ellos la cobertura
                    fotográfica de{' '}
                    <strong>
                      Under Side 821
                    </strong>
                    . Cada experiencia ha ayudado a definir
                    una identidad visual propia.
                  </p>
                </div>
              </article>
            </div>

            {/* =========================
                MANIFESTO
            ========================= */}

            <div className="about__manifesto">
              <span className="about__manifesto-light" />

              <div className="about__manifesto-header">
                <span>
                  DANNO / MANIFIESTO
                </span>

                <span className="about__manifesto-header-line" />

                <span>
                  001
                </span>
              </div>

              <blockquote className="about__manifesto-quote">
                <span className="about__manifesto-mark">
                  “
                </span>

                <p>
                  <span className="about__manifesto-text about__manifesto-text--one">
                    Lo hago por gusto,
                  </span>{' '}

                  <span className="about__manifesto-text about__manifesto-text--two">
                    lo hago por pasión,
                  </span>{' '}

                  <strong className="about__manifesto-text about__manifesto-text--accent">
                    lo hago por amor al arte.
                  </strong>
                </p>
              </blockquote>

              <div className="about__manifesto-signature">
                <span>
                  DANNO
                </span>

                <small>
                  FOTOGRAFÍA · VIDEO
                </small>
              </div>
            </div>

            {/* =========================
                CTA
            ========================= */}

            <a
              className="about__cta"
              href="#portafolio"
            >
              <div className="about__cta-copy">
                <small>
                  CONTINÚA EXPLORANDO
                </small>

                <strong>
                  VER PORTAFOLIO
                </strong>
              </div>

              <span className="about__cta-line" />

              <span className="about__cta-icon">
                <span />
                <span />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
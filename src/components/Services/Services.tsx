import { useState } from 'react'
import './Services.css'

const services = [
  {
    id: '01',
    title: 'Individual o pareja',
    category: 'Fotografía',
    tag: 'Sesión',
    price: '$1,300',
    description:
      'Una sesión pensada para retratarte de forma natural, ya sea individualmente o en pareja, cuidando cada detalle, locación y momento.',
    details: [
      '2 vestuarios',
      '1 h 30 min de sesión',
      '20 fotografías',
    ],
  },
  {
    id: '02',
    title: 'Video',
    category: 'Audiovisual',
    tag: 'Producción',
    price: '$1,500',
    description:
      'Producción audiovisual en diferentes spots para transformar una idea, persona o momento en una pieza con movimiento.',
    details: [
      '3 spots',
      'Video final',
      'Duración máxima de 5 minutos',
    ],
  },
  {
    id: '03',
    title: 'Eventos',
    category: 'Cobertura',
    tag: 'Eventos',
    price: '$1,500',
    description:
      'Cobertura fotográfica para capturar los momentos, detalles y personas que forman parte de tu evento.',
    details: [
      'Fiestas de cumpleaños',
      'Reuniones',
      'Eventos promocionales',
    ],
  },
]

function Services() {
  const [activeService, setActiveService] = useState(0)

  const handleServiceChange = (index) => {
    setActiveService(index)
  }

  return (
    <section
      className="services"
      id="servicios"
    >
      <div className="services__background-word">
        SERVICES
      </div>

      <div className="services__container">
        {/* =========================
            SECTION BRAND
        ========================= */}

        <div className="services__top">
          <div className="services__section-brand">
            <div className="services__brand-mark">
              <span className="services__brand-corner services__brand-corner--top-left" />

              <span className="services__brand-corner services__brand-corner--bottom-right" />

              <span className="services__brand-name">
                DANNO
              </span>
            </div>

            <span className="services__brand-section">
              SERVICIOS
            </span>
          </div>

          <span className="services__type">
            FOTOGRAFÍA · VIDEO · EVENTOS
          </span>
        </div>

        {/* =========================
            HEADING
        ========================= */}

        <div className="services__heading">
          <p className="services__eyebrow">
            <span />

            EXPERIENCIAS VISUALES

            <span />
          </p>

          <h2 className="services__title">
            <span className="services__title-primary">
              Una idea.
            </span>

            <span className="services__title-accent">
              Diferentes formas de contarla.
            </span>
          </h2>

          <p className="services__description">
            Fotografía, video y cobertura de eventos
            pensados para convertir cada idea en una
            historia visual propia.
          </p>
        </div>

        {/* =========================
            SERVICES LIST
        ========================= */}

        <div className="services__list">
          {services.map((service, index) => {
            const isActive =
              activeService === index

            return (
              <article
                key={service.id}
                className={`services__item ${
                  isActive
                    ? 'services__item--active'
                    : ''
                }`}
                style={{
                  '--service-delay': `${index * 3}s`,
                }}
                onMouseEnter={() =>
                  handleServiceChange(index)
                }
              >
                {/* ambient moving light */}

                <span className="services__item-light" />

                {/* =========================
                    TRIGGER
                ========================= */}

                <button
                  type="button"
                  className="services__trigger"
                  onClick={() =>
                    handleServiceChange(index)
                  }
                  onFocus={() =>
                    handleServiceChange(index)
                  }
                  aria-expanded={isActive}
                  aria-controls={`service-panel-${service.id}`}
                >
                  {/* INDEX */}

                  <div className="services__number-wrap">
                    <span className="services__number">
                      {service.id}
                    </span>

                    <span className="services__number-line" />
                  </div>

                  {/* NAME */}

                  <div className="services__main">
                    <div className="services__name">
                      <span className="services__category">
                        {service.category}
                      </span>

                      <h3>
                        {service.title}
                      </h3>
                    </div>

                    <span className="services__tag">
                      {service.tag}
                    </span>
                  </div>

                  {/* PRICE */}

                  <div className="services__price">
                    <small>
                      DESDE
                    </small>

                    <strong>
                      {service.price}
                    </strong>

                    <span>
                      MXN
                    </span>
                  </div>

                  {/* PLUS */}

                  <span
                    className="services__plus"
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                  </span>
                </button>

                {/* =========================
                    CONTENT
                ========================= */}

                <div
                  className="services__content"
                  id={`service-panel-${service.id}`}
                >
                  <div className="services__content-inner">
                    <div className="services__content-space" />

                    <div className="services__content-main">
                      <div className="services__content-label">
                        <span>
                          DANNO / SERVICE
                        </span>

                        <span className="services__content-label-line" />

                        <span>
                          {service.id}
                        </span>
                      </div>

                      <p className="services__item-description">
                        {service.description}
                      </p>

                      <div className="services__details">
                        {service.details.map(
                          (detail, detailIndex) => (
                            <span
                              key={detail}
                              style={{
                                '--detail-delay': `${
                                  detailIndex * 0.15
                                }s`,
                              }}
                            >
                              <i>
                                {String(
                                  detailIndex + 1
                                ).padStart(2, '0')}
                              </i>

                              {detail}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="services__content-side">
                      <span className="services__content-side-label">
                        INVERSIÓN
                      </span>

                      <strong>
                        {service.price}
                      </strong>

                      <small>
                        MXN
                      </small>
                    </div>
                  </div>
                </div>

                {/* =========================
                    GIANT NUMBER
                ========================= */}

                <span className="services__giant-number">
                  {service.id}
                </span>

                {/* =========================
                    CAMERA FOCUS
                ========================= */}

                <div className="services__focus">
                  <span />
                  <span />
                  <span />
                  <span />

                  <div className="services__focus-cross">
                    <span />
                    <span />
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* =========================
            FOOTER
        ========================= */}

        <div className="services__footer">
          <div className="services__footer-copy">
            <span>
              ¿TIENES OTRA IDEA EN MENTE?
            </span>

            <small>
              Cuéntame qué quieres crear y construimos
              una propuesta para tu proyecto.
            </small>
          </div>

          <a
            className="services__cta"
            href="#reservar"
          >
            <span className="services__cta-light" />

            <span className="services__cta-text">
              CUÉNTAME TU PROYECTO
            </span>

            <span className="services__cta-line" />

            <span className="services__cta-icon">
              <span />
              <span />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services
import { useState } from 'react'
import './Contact.css'

const WHATSAPP_NUMBER = '524281249374'

const services = [
  {
    value: 'Sesión individual o pareja',
    label: 'Sesión individual o pareja — $1,300',
  },
  {
    value: 'Video',
    label: 'Video — $1,500',
  },
  {
    value: 'Eventos',
    label: 'Eventos — $1,500',
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    location: '',
    message: '',
  })

  const getToday = () => {
    const today = new Date()

    const year = today.getFullYear()

    const month = String(
      today.getMonth() + 1
    ).padStart(2, '0')

    const day = String(
      today.getDate()
    ).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  const formatDate = (date) => {
    if (!date) return 'Por definir'

    const [year, month, day] =
      date.split('-')

    return `${day}/${month}/${year}`
  }

  const formatTime = (time) => {
    if (!time) return 'Por definir'

    const [hours, minutes] =
      time.split(':')

    const hour = Number(hours)

    const period =
      hour >= 12
        ? 'p. m.'
        : 'a. m.'

    const formattedHour =
      hour % 12 || 12

    return `${formattedHour}:${minutes} ${period}`
  }

  const handleChange = (event) => {
    const { name, value } =
      event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const buildMessage = () => {
    return `Hola Danno 👋

Vi tu trabajo y me gustaría solicitar información.

📸 *SOLICITUD DANNO*

*Nombre:* ${formData.name || 'Por definir'}
*Servicio:* ${formData.service || 'Por definir'}
*Fecha:* ${formatDate(formData.date)}
*Hora:* ${formatTime(formData.time)}
*Lugar:* ${formData.location || 'Por definir'}

*Mi idea:*
${formData.message || 'Quiero conocer más información sobre el servicio.'}

¿Tienes disponibilidad para esa fecha?`
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        buildMessage()
      )}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      className="contact"
      id="contacto"
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="contact__background-word">
        CONTACT
      </div>

      <div className="contact__ambient contact__ambient--one" />
      <div className="contact__ambient contact__ambient--two" />

      <div className="contact__container">
        {/* =========================
            SECTION BRAND
        ========================= */}

        <div className="contact__top">
          <div className="contact__section-brand">
            <div className="contact__brand-mark">
              <span className="contact__brand-corner contact__brand-corner--top-left" />

              <span className="contact__brand-corner contact__brand-corner--bottom-right" />

              <span className="contact__brand-name">
                DANNO
              </span>
            </div>

            <span className="contact__brand-section">
              CONTACTO
            </span>
          </div>

          <span className="contact__type">
            RESERVACIONES · WHATSAPP
          </span>
        </div>

        {/* =========================
            HEADING
        ========================= */}

        <div className="contact__heading">
          <p className="contact__eyebrow">
            <span />

            HABLEMOS DE TU IDEA

            <span />
          </p>

          <h2 className="contact__title">
            <span className="contact__title-primary">
              Reserva tu
            </span>

            <span className="contact__title-accent">
              próxima historia.
            </span>
          </h2>

          <p className="contact__description">
            Fecha, lugar y una idea. Cuéntame
            lo que tienes en mente y envía tu
            solicitud directamente por WhatsApp.
          </p>
        </div>

        {/* =========================
            RESERVATION
        ========================= */}

        <div
          className="contact__reservation"
          id="reservar"
        >
          {/* GLASS LIGHT */}

          <span className="contact__reservation-light" />
          <span className="contact__reservation-glow" />

          {/* =========================
              TOP
          ========================= */}

          <div className="contact__reservation-top">
            <div className="contact__reservation-heading">
              <span className="contact__reservation-index">
                001
              </span>

              <div>
                <span className="contact__reservation-label">
                  DATOS DE LA SOLICITUD
                </span>

                <small>
                  Completa tu solicitud
                </small>
              </div>
            </div>

            <div className="contact__reservation-request">
              <span>
                REQUEST / DANNO
              </span>

              <small>
                PHOTOGRAPHY · VIDEO
              </small>
            </div>
          </div>

          {/* =========================
              STEPS
          ========================= */}

          <div className="contact__steps">
            <div className="contact__step">
              <span>
                01
              </span>

              <div>
                <strong>
                  DATOS
                </strong>

                <small>
                  Tú y tu servicio
                </small>
              </div>
            </div>

            <span className="contact__steps-line" />

            <div className="contact__step">
              <span>
                02
              </span>

              <div>
                <strong>
                  FECHA
                </strong>

                <small>
                  Día y horario
                </small>
              </div>
            </div>

            <span className="contact__steps-line" />

            <div className="contact__step">
              <span>
                03
              </span>

              <div>
                <strong>
                  HISTORIA
                </strong>

                <small>
                  Cuéntame tu idea
                </small>
              </div>
            </div>
          </div>

          {/* =========================
              FORM
          ========================= */}

          <form
            className="contact__form"
            onSubmit={handleSubmit}
          >
            {/* =========================
                NAME / SERVICE
            ========================= */}

            <div className="contact__form-row">
              <div className="contact__field">
                <div className="contact__field-heading">
                  <span>
                    01
                  </span>

                  <label htmlFor="name">
                    Nombre
                  </label>
                </div>

                <div className="contact__input-shell">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="¿Cómo te llamas?"
                    autoComplete="name"
                    required
                  />

                  <span className="contact__input-line" />
                </div>
              </div>

              <div className="contact__field">
                <div className="contact__field-heading">
                  <span>
                    02
                  </span>

                  <label htmlFor="service">
                    Tipo de servicio
                  </label>
                </div>

                <div className="contact__input-shell contact__select-wrapper">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Selecciona un servicio
                    </option>

                    {services.map(
                      (service) => (
                        <option
                          key={service.value}
                          value={service.value}
                        >
                          {service.label}
                        </option>
                      )
                    )}
                  </select>

                  <span className="contact__select-arrow" />

                  <span className="contact__input-line" />
                </div>
              </div>
            </div>

            {/* =========================
                DATE / TIME
            ========================= */}

            <div className="contact__form-row">
              <div className="contact__field">
                <div className="contact__field-heading">
                  <span>
                    03
                  </span>

                  <label htmlFor="date">
                    Fecha
                  </label>
                </div>

                <div className="contact__input-shell">
                  <input
                    id="date"
                    type="date"
                    name="date"
                    min={getToday()}
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />

                  <span className="contact__input-line" />
                </div>
              </div>

              <div className="contact__field">
                <div className="contact__field-heading">
                  <span>
                    04
                  </span>

                  <label htmlFor="time">
                    Hora
                  </label>
                </div>

                <div className="contact__input-shell">
                  <input
                    id="time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />

                  <span className="contact__input-line" />
                </div>
              </div>
            </div>

            {/* =========================
                LOCATION
            ========================= */}

            <div className="contact__field">
              <div className="contact__field-heading">
                <span>
                  05
                </span>

                <label htmlFor="location">
                  Lugar
                </label>
              </div>

              <div className="contact__input-shell">
                <input
                  id="location"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="San Felipe, Gto. / Por definir"
                />

                <span className="contact__input-line" />
              </div>
            </div>

            {/* =========================
                IDEA
            ========================= */}

            <div className="contact__field contact__field--message">
              <div className="contact__field-heading">
                <span>
                  06
                </span>

                <label htmlFor="message">
                  Cuéntame tu idea
                </label>
              </div>

              <div className="contact__input-shell">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Platícame un poco sobre lo que tienes en mente..."
                />

                <span className="contact__input-line" />
              </div>
            </div>

            {/* =========================
                SUBMIT AREA
            ========================= */}

            <div className="contact__submit-area">
              <div className="contact__submit-info">
                <div className="contact__submit-status">
                  <span className="contact__status-dot" />

                  <span>
                    LISTO PARA ENVIAR
                  </span>
                </div>

                <small>
                  Se abrirá una conversación directamente
                  con Danno.
                </small>
              </div>

              <button
                type="submit"
                className="contact__submit"
              >
                <span className="contact__submit-light" />

                <span className="contact__submit-copy">
                  <strong>
                    SOLICITAR POR WHATSAPP
                  </strong>

                  <small>
                    Consultar disponibilidad
                  </small>
                </span>

                <span className="contact__submit-line" />

                <span className="contact__submit-icon">
                  <span />
                  <span />
                </span>
              </button>
            </div>
          </form>

          {/* =========================
              RESERVATION BOTTOM
          ========================= */}

          <div className="contact__reservation-bottom">
            <span>
              <i />
              WHATSAPP DIRECTO
            </span>

            <span>
              <i />
              RESPUESTA PERSONAL
            </span>

            <span>
              <i />
              SIN COMPROMISO
            </span>
          </div>

          {/* =========================
              CAMERA FOCUS
          ========================= */}

          <div
            className="contact__focus"
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
            <span />

            <div className="contact__focus-cross">
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================= */}

        <div className="contact__bottom">
          <span>
            SAN FELIPE / GUANAJUATO
          </span>

          <span className="contact__bottom-line" />

          <span>
            FOTOGRAFÍA + VIDEO
          </span>

          <span className="contact__bottom-line" />

          <span>
            DANNO © 2026
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
import { useEffect, useState } from 'react'
import './Portfolio.css'

/* =========================
   CARGAR TODAS LAS FOTOS
========================= */

const imageModules = import.meta.glob(
  [
    '../../assets/images/portafolio/*.jpg',
    '../../assets/images/portafolio/*.JPG',
    '../../assets/images/portafolio/*.jpeg',
    '../../assets/images/portafolio/*.JPEG',
    '../../assets/images/portafolio/*.png',
    '../../assets/images/portafolio/*.PNG',
    '../../assets/images/portafolio/*.webp',
    '../../assets/images/portafolio/*.WEBP',
  ],
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
)

/* =========================
   OBTENER NÚMERO
========================= */

const getImageNumber = (path) => {
  const filename = path.split('/').pop()

  const match = filename.match(/IMG_(\d+)/i)

  if (!match) {
    return Number.MAX_SAFE_INTEGER
  }

  return Number(match[1])
}

/* =========================
   DETECTAR FOTOS DE BEBÉ
========================= */

const isBabyPhoto = (path) => {
  const number = getImageNumber(path)

  return number >= 100 && number <= 399
}

/* =========================
   ORDENAR FOTOS
========================= */

const sortedImages = Object.entries(imageModules).sort(
  ([pathA], [pathB]) => {
    const numberA = getImageNumber(pathA)
    const numberB = getImageNumber(pathB)

    if (numberA !== numberB) {
      return numberA - numberB
    }

    return pathA.localeCompare(pathB)
  }
)

/* =========================
   SEPARAR SESIÓN DE BEBÉ
========================= */

const babyImages = sortedImages.filter(([path]) =>
  isBabyPhoto(path)
)

const otherImages = sortedImages.filter(
  ([path]) => !isBabyPhoto(path)
)

/* =========================
   INSERTAR SESIÓN DE BEBÉ
   APROX. DESDE FOTO 60
========================= */

const BABY_START_POSITION = 59

const babyInsertPosition = Math.min(
  BABY_START_POSITION,
  otherImages.length
)

const orderedImages = [
  ...otherImages.slice(0, babyInsertPosition),
  ...babyImages,
  ...otherImages.slice(babyInsertPosition),
]

/* =========================
   CREAR PORTFOLIO
========================= */

const portfolioItems = orderedImages.map(
  ([path, image], index) => {
    const babyPhoto = isBabyPhoto(path)

    return {
      id: index + 1,
      image,
      filename: path.split('/').pop(),
      title: 'DANNO',
      category: babyPhoto
        ? 'Sesión de bebé'
        : 'Fotografía',
    }
  }
)

/* =========================
   COMPONENTE
========================= */

function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)

  const total = portfolioItems.length

  /* =========================
     ANTERIOR
  ========================= */

  const goToPrevious = () => {
    if (!total) return

    setActiveIndex((current) =>
      current === 0
        ? total - 1
        : current - 1
    )
  }

  /* =========================
     SIGUIENTE
  ========================= */

  const goToNext = () => {
    if (!total) return

    setActiveIndex((current) =>
      current === total - 1
        ? 0
        : current + 1
    )
  }

  /* =========================
     DISTANCIA ENTRE SLIDES
  ========================= */

  const getSlideOffset = (index) => {
    let offset = index - activeIndex

    if (offset > total / 2) {
      offset -= total
    }

    if (offset < -total / 2) {
      offset += total
    }

    return offset
  }

  /* =========================
     CLASE DEL SLIDE
  ========================= */

  const getSlidePosition = (index) => {
    const offset = getSlideOffset(index)

    if (offset === 0) {
      return 'portfolio__slide--active'
    }

    if (offset === -1) {
      return 'portfolio__slide--prev'
    }

    if (offset === 1) {
      return 'portfolio__slide--next'
    }

    if (offset === -2) {
      return 'portfolio__slide--far-prev'
    }

    if (offset === 2) {
      return 'portfolio__slide--far-next'
    }

    return 'portfolio__slide--hidden'
  }

  /* =========================
     TECLADO
  ========================= */

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      goToPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      goToNext()
    }
  }

  /* =========================
     PROGRESS
     SOLO 7 INDICADORES
  ========================= */

  const getProgressIndexes = () => {
    if (!total) return []

    const amount = Math.min(7, total)
    const middle = Math.floor(amount / 2)

    return Array.from(
      {
        length: amount,
      },
      (_, position) =>
        (
          activeIndex -
          middle +
          position +
          total
        ) % total
    )
  }

  /* =========================
     PRECARGAR FOTOS CERCANAS
  ========================= */

  useEffect(() => {
    if (!total) return

    const indexesToPreload = [
      activeIndex,
      (activeIndex + 1) % total,
      (activeIndex + 2) % total,
      (activeIndex + 3) % total,
      (activeIndex - 1 + total) % total,
      (activeIndex - 2 + total) % total,
    ]

    indexesToPreload.forEach((index) => {
      const source =
        portfolioItems[index]?.image

      if (!source) return

      const image = new Image()

      image.src = source
    })
  }, [activeIndex, total])

  /* =========================
     SIN FOTOS
  ========================= */

  if (!total) {
    return (
      <section
        className="portfolio"
        id="portafolio"
      >
        <div className="portfolio__container">
          <p className="portfolio__empty">
            No se encontraron fotografías
            en el portafolio.
          </p>
        </div>
      </section>
    )
  }

  const activeItem =
    portfolioItems[activeIndex]

  const activeFilename =
    activeItem.filename.replace(
      /\.[^/.]+$/,
      ''
    )

  const progressIndexes =
    getProgressIndexes()

  return (
    <section
      className="portfolio"
      id="portafolio"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="portfolio__background-word">
        ARCHIVE
      </div>

      <div className="portfolio__container">
        {/* =========================
            SECTION BRAND
        ========================= */}

        <div className="portfolio__top">
          <div className="portfolio__section-brand">
            <div className="portfolio__brand-mark">
              <span className="portfolio__brand-corner portfolio__brand-corner--top-left" />

              <span className="portfolio__brand-corner portfolio__brand-corner--bottom-right" />

              <span className="portfolio__brand-name">
                DANNO
              </span>
            </div>

            <span className="portfolio__brand-section">
              PORTAFOLIO
            </span>
          </div>

          <span className="portfolio__type">
            ARCHIVO FOTOGRÁFICO
          </span>
        </div>

        {/* =========================
            INTRO
        ========================= */}

        <div className="portfolio__intro">
          <p className="portfolio__eyebrow">
            <span />
            ARCHIVO VISUAL
            <span />
          </p>

          <h2 className="portfolio__title">
            <span className="portfolio__title-primary">
              Momentos que permanecen.
            </span>

            <span className="portfolio__title-accent">
              Una imagen a la vez.
            </span>
          </h2>

          <p className="portfolio__description">
            Retratos, sesiones y momentos reunidos
            en un archivo visual construido
            a través de la fotografía.
          </p>
        </div>

        {/* =========================
            STAGE
        ========================= */}

        <div className="portfolio__stage">
          {/* =========================
              STAGE HEADER
          ========================= */}

          <div className="portfolio__stage-header">
            {/* COUNTER */}

            <div className="portfolio__counter">
              <span className="portfolio__counter-current">
                {String(
                  activeIndex + 1
                ).padStart(2, '0')}
              </span>

              <span className="portfolio__counter-line" />

              <span className="portfolio__counter-total">
                {String(total).padStart(
                  2,
                  '0'
                )}
              </span>
            </div>

            {/* ACTIVE CATEGORY */}

            <div className="portfolio__active-meta">
              <span>
                {activeItem.title}
              </span>

              <small>
                {activeItem.category}
              </small>
            </div>

            {/* FILE */}

            <div className="portfolio__archive-meta">
              <span>
                ARCHIVE / {activeFilename}
              </span>

              <small>
                SAN FELIPE · GTO
              </small>
            </div>
          </div>

          {/* =========================
              CAROUSEL
          ========================= */}

          <div className="portfolio__carousel-wrap">
            {/* CONTROL LEFT */}

            <button
              type="button"
              className="portfolio__control portfolio__control--left"
              onClick={goToPrevious}
              aria-label="Fotografía anterior"
            >
              <span className="portfolio__control-circle">
                <span className="portfolio__control-icon portfolio__control-icon--left" />
              </span>
            </button>

            {/* =========================
                PHOTOS
            ========================= */}

            <div className="portfolio__carousel">
              {portfolioItems.map(
                (item, index) => {
                  const positionClass =
                    getSlidePosition(index)

                  if (
                    positionClass ===
                    'portfolio__slide--hidden'
                  ) {
                    return null
                  }

                  const isActive =
                    index === activeIndex

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`portfolio__slide ${positionClass}`}
                      onClick={() =>
                        setActiveIndex(index)
                      }
                      aria-label={`Ver fotografía ${
                        index + 1
                      } de ${total}`}
                      aria-current={
                        isActive
                          ? 'true'
                          : undefined
                      }
                    >
                      <div
                        className="portfolio__frame"
                        style={{
                          '--portfolio-image': `url("${item.image}")`,
                        }}
                      >
                        {/* BACKDROP */}

                        <span className="portfolio__frame-backdrop" />

                        {/* IMAGE */}

                        <img
                          className="portfolio__image"
                          src={item.image}
                          alt={`Fotografía ${
                            index + 1
                          } del portafolio de Danno`}
                          loading={
                            isActive
                              ? 'eager'
                              : 'lazy'
                          }
                          decoding="async"
                          draggable="false"
                        />

                        {/* CINEMATIC OVERLAY */}

                        <div className="portfolio__overlay" />

                        {/* PERMANENT LIGHT */}

                        <span className="portfolio__exposure-light" />

                        {/* FRAME */}

                        <div className="portfolio__viewfinder">
                          <span />
                          <span />
                          <span />
                          <span />

                          <div className="portfolio__viewfinder-cross">
                            <span />
                            <span />
                          </div>
                        </div>

                        {/* TOP META */}

                        <div className="portfolio__frame-top">
                          <span>
                            FRAME{' '}
                            {String(
                              item.id
                            ).padStart(3, '0')}
                          </span>

                          <small>
                            DANNO / ARCHIVE
                          </small>
                        </div>

                        {/* BOTTOM META */}

                        <div className="portfolio__frame-info">
                          <div>
                            <span>
                              {item.title}
                            </span>

                            <small>
                              {item.category}
                            </small>
                          </div>

                          <span className="portfolio__frame-index">
                            {String(
                              index + 1
                            ).padStart(3, '0')}
                          </span>
                        </div>
                      </div>
                    </button>
                  )
                }
              )}
            </div>

            {/* CONTROL RIGHT */}

            <button
              type="button"
              className="portfolio__control portfolio__control--right"
              onClick={goToNext}
              aria-label="Siguiente fotografía"
            >
              <span className="portfolio__control-circle">
                <span className="portfolio__control-icon portfolio__control-icon--right" />
              </span>
            </button>
          </div>

          {/* =========================
              FOOTER
          ========================= */}

          <div className="portfolio__footer">
            <div className="portfolio__footer-meta">
              <span>
                DANNO / PHOTOGRAPHY
              </span>

              <span className="portfolio__footer-line" />

              <span>
                {activeFilename}
              </span>
            </div>

            {/* PROGRESS */}

            <div className="portfolio__progress">
              {progressIndexes.map(
                (index) => (
                  <button
                    key={portfolioItems[index].id}
                    type="button"
                    className={`portfolio__dot ${
                      activeIndex === index
                        ? 'portfolio__dot--active'
                        : ''
                    }`}
                    onClick={() =>
                      setActiveIndex(index)
                    }
                    aria-label={`Ir a fotografía ${
                      index + 1
                    }`}
                  >
                    <span />
                  </button>
                )
              )}
            </div>

            <p className="portfolio__hint">
              <span className="portfolio__hint-key">
                ←
              </span>

              Navega el archivo

              <span className="portfolio__hint-key">
                →
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

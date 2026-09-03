import { useEffect, useState } from 'react'
import './Loader.css'

import dannoLogo from '../../assets/images/danno777-logo.png'

function Loader() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true)
    }, 3000)

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false)

      document.body.style.overflow = previousOverflow
    }, 3700)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(removeTimer)

      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div
      className={`loader ${
        isLeaving ? 'loader--leaving' : ''
      }`}
      aria-label="Cargando DANNO"
    >
      {/* FILM TEXTURE */}

      <div
        className="loader__grain"
        aria-hidden="true"
      />

      <div
        className="loader__vignette"
        aria-hidden="true"
      />

      {/* CAMERA HUD */}

      <div
        className="loader__hud"
        aria-hidden="true"
      >
        <div className="loader__hud-top">
          <div>
            <span className="loader__rec-dot" />

            <span>DANNO</span>
          </div>

          <span>FRAME 001</span>
        </div>

        <div className="loader__hud-bottom">
          <span>ISO 200</span>

          <span>F / 2.8</span>

          <span>1 / 125</span>
        </div>
      </div>

      {/* VIEWFINDER */}

      <div
        className="loader__viewfinder"
        aria-hidden="true"
      >
        <span className="loader__corner loader__corner--tl" />
        <span className="loader__corner loader__corner--tr" />
        <span className="loader__corner loader__corner--bl" />
        <span className="loader__corner loader__corner--br" />

        <div className="loader__focus">
          <span />
          <span />
          <span />
          <span />

          <div className="loader__focus-center">
            <span />
            <span />
          </div>
        </div>

        <div className="loader__focus-lock">
          <span className="loader__focus-lock-dot" />

          FOCUS LOCK
        </div>
      </div>

      {/* LENS */}

      <div
        className="loader__lens"
        aria-hidden="true"
      >
        <div className="loader__lens-ring loader__lens-ring--outer" />
        <div className="loader__lens-ring loader__lens-ring--middle" />

        <div className="loader__iris">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="loader__lens-center" />
      </div>

      {/* FLASH */}

      <div
        className="loader__flash"
        aria-hidden="true"
      />

      <div
        className="loader__flash-bloom"
        aria-hidden="true"
      />

      {/* LOGO REVEAL */}

      <div className="loader__identity">
        <div className="loader__logo-frame">
          <div
            className="loader__logo-glow"
            aria-hidden="true"
          />

          <div
            className="loader__logo-scan"
            aria-hidden="true"
          />

          <img
            className="loader__logo"
            src={dannoLogo}
            alt="Danno 777"
          />
        </div>

        <div className="loader__identity-meta">
          <span />

          <div>
            <strong>DANNO</strong>

            <small>
              PHOTOGRAPHY / VIDEO
            </small>
          </div>

          <span />
        </div>
      </div>

      {/* FINAL FRAME */}

      <div
        className="loader__capture-frame"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* EXIT CURTAINS */}

      <div
        className="loader__curtain loader__curtain--top"
        aria-hidden="true"
      />

      <div
        className="loader__curtain loader__curtain--bottom"
        aria-hidden="true"
      />

      {/* BOTTOM SIGNATURE */}

      <div
        className="loader__bottom"
        aria-hidden="true"
      >
        <span>
          SAN FELIPE · GUANAJUATO
        </span>

        <div className="loader__progress">
          <span />
        </div>

        <span>
          VISUAL STORIES
        </span>
      </div>
    </div>
  )
}

export default Loader
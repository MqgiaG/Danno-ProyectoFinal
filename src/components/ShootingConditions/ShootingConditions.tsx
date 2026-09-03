import { useEffect, useState } from 'react'
import { INITIAL_FORECAST_DAYS, WEATHER_CACHE_KEY } from '../../config/constants'
import type { WeatherDay } from '../../types/weather'
import { getWeatherForecast } from '../../utils/weatherApi'
import './ShootingConditions.css'

const ERROR_MESSAGE = 'Algo salió mal con la solicitud. Puede ser un problema de conexión o del servidor. Inténtalo de nuevo más tarde.'
const weatherLabel = (code: number) => code === 0 ? 'Cielo despejado' : code < 4 ? 'Parcialmente nublado' : code < 60 ? 'Niebla' : code < 80 ? 'Lluvia' : 'Tormenta'

export default function ShootingConditions() {
  const [forecast, setForecast] = useState<WeatherDay[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [visibleDays, setVisibleDays] = useState(INITIAL_FORECAST_DAYS)

  useEffect(() => {
    const cached = localStorage.getItem(WEATHER_CACHE_KEY)
    if (cached) {
      try { setForecast(JSON.parse(cached) as WeatherDay[]) } catch { localStorage.removeItem(WEATHER_CACHE_KEY) }
    }
    getWeatherForecast()
      .then((days) => { setForecast(days); localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(days)) })
      .catch(() => setError(ERROR_MESSAGE))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section className="conditions" id="condiciones" aria-labelledby="conditions-title">
      <div className="conditions__container">
        <p className="conditions__eyebrow">PLANEA TU SESIÓN · DATOS REALES</p>
        <h2 id="conditions-title">Condiciones para fotografiar</h2>
        <p className="conditions__intro">Pronóstico de siete días para San Felipe, Guanajuato, proporcionado por Open-Meteo.</p>
        {isLoading && <p className="conditions__status" role="status">Cargando...</p>}
        {!isLoading && error && <p className="conditions__status conditions__status--error" role="alert">{error}</p>}
        {!isLoading && !error && forecast.length === 0 && <p className="conditions__status">No se encontró nada</p>}
        {!error && forecast.length > 0 && (
          <>
            <ul className="conditions__grid">
              {forecast.slice(0, visibleDays).map((day) => (
                <li className="conditions__card" key={day.date}>
                  <time dateTime={day.date}>{new Intl.DateTimeFormat('es-MX', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date(`${day.date}T12:00:00`))}</time>
                  <strong>{Math.round(day.temperatureMax)}° / {Math.round(day.temperatureMin)}°</strong>
                  <span>{weatherLabel(day.weatherCode)}</span>
                  <small>Lluvia: {day.precipitationProbability}%</small>
                </li>
              ))}
            </ul>
            {visibleDays < forecast.length && <button className="conditions__more" type="button" onClick={() => setVisibleDays(forecast.length)}>Mostrar más</button>}
          </>
        )}
      </div>
    </section>
  )
}

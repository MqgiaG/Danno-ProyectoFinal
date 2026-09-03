import { WEATHER_LATITUDE, WEATHER_LONGITUDE } from '../config/constants'
import type { WeatherApiResponse, WeatherDay } from '../types/weather'

const WEATHER_API_URL = 'https://api.open-meteo.com/v1/forecast'

export async function getWeatherForecast(): Promise<WeatherDay[]> {
  const params = new URLSearchParams({
    latitude: String(WEATHER_LATITUDE),
    longitude: String(WEATHER_LONGITUDE),
    daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max',
    timezone: 'America/Mexico_City',
    forecast_days: '7',
  })
  const response = await fetch(`${WEATHER_API_URL}?${params}`)
  if (!response.ok) throw new Error(`Weather API: ${response.status}`)
  const data: WeatherApiResponse = await response.json()
  if (!data.daily) return []
  return data.daily.time.map((date, index) => ({
    date,
    temperatureMax: data.daily!.temperature_2m_max[index],
    temperatureMin: data.daily!.temperature_2m_min[index],
    precipitationProbability: data.daily!.precipitation_probability_max[index],
    weatherCode: data.daily!.weather_code[index],
  }))
}

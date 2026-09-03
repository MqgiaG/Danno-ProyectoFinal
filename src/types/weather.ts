export interface WeatherDay {
  date: string
  temperatureMax: number
  temperatureMin: number
  precipitationProbability: number
  weatherCode: number
}

export interface WeatherApiResponse {
  daily?: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    precipitation_probability_max: number[]
    weather_code: number[]
  }
}

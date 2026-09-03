/// <reference types="vite/client" />

import 'react'

interface ImportMetaEnv {
  readonly VITE_WEATHER_LATITUDE?: string
  readonly VITE_WEATHER_LONGITUDE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number | undefined
  }
}

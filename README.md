# DANNO — Photography & Video

Portafolio front-end para **DANNO**, fotógrafo y videógrafo de San Felipe, Guanajuato. La aplicación conserva su identidad oscura, editorial y cinematográfica, y permite explorar el archivo fotográfico, conocer los servicios, consultar condiciones meteorológicas reales y solicitar una sesión por WhatsApp.

## Enlace del proyecto

- Aplicación desplegada: **se añadirá al publicar la versión final**
- Repositorio: [MqgiaG/Danno-ProyectoFinal](https://github.com/MqgiaG/Danno-ProyectoFinal)

## Funcionalidad

- Portafolio interactivo con más de 100 fotografías, navegación por botones y teclado.
- Servicios presentados en un acordeón reutilizable.
- Formulario con campos obligatorios que prepara una solicitud de disponibilidad por WhatsApp.
- Pronóstico real de siete días para planear una sesión fotográfica.
- Estado de carga, mensaje de error, estado sin resultados y paginación mediante **Mostrar más**.
- Rutas `/` y `/sobre-el-autor` con navegación mediante React Router.
- Diseño adaptable desde 320 px y soporte para `prefers-reduced-motion`.

## API de terceros

La sección **Condiciones para fotografiar** obtiene datos de [Open-Meteo](https://open-meteo.com/). La petición `fetch` está aislada en `src/utils/weatherApi.ts`, los datos están tipados y la respuesta se guarda temporalmente en `localStorage`.

Open-Meteo no requiere una clave. Las coordenadas pueden personalizarse con variables de Vite; copia `.env.example` como `.env` y modifica:

```env
VITE_WEATHER_LATITUDE=21.48
VITE_WEATHER_LONGITUDE=-101.22
```

El archivo `.env` está excluido de Git.

## Tecnologías

- React 19
- TypeScript
- React Router
- Vite
- HTML semántico y CSS responsive
- Fetch API y Open-Meteo
- ESLint
- Vercel

## Estructura

```text
src/
├── assets/images/       # fotografías y recursos visuales
├── components/          # componentes reutilizables y sus estilos
├── config/              # constantes de configuración
├── pages/               # páginas asociadas a rutas
├── types/               # tipos compartidos
├── utils/               # solicitudes a servicios externos
├── App.tsx
└── main.tsx
```

## Instalación y comandos

```bash
git clone https://github.com/MqgiaG/Danno-ProyectoFinal.git
cd Danno-ProyectoFinal
npm install
npm run dev
```

Comprobaciones disponibles:

```bash
npm run lint
npm run build
npm run preview
```

El build de producción se genera en `dist/`, carpeta que no se guarda en el repositorio.

## Diseño y accesibilidad

La interfaz usa encabezados jerárquicos, regiones semánticas, textos alternativos, botones con nombre accesible, estados de foco visibles y transiciones de `hover`/`focus`. Los listados utilizan claves estables y los listeners se eliminan durante la limpieza de cada efecto.

## Autor

Adaptación front-end realizada por **Gerardo Rangel** para la Etapa 1 del proyecto final.

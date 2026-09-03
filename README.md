# 📸 DANNO — Photography & Video Portfolio

Portafolio web profesional desarrollado para **DANNO**, fotógrafo y videógrafo con base en **San Felipe, Guanajuato, México**.

El sitio fue diseñado para presentar su trabajo de una forma visual, cinematográfica y moderna, permitiendo explorar su portafolio, conocer sus servicios y solicitar sesiones directamente por WhatsApp.

---

## ✨ Vista general

DANNO es una experiencia web enfocada principalmente en la fotografía.

El diseño utiliza una estética:

- Oscura
- Cinematográfica
- Minimalista
- Editorial
- Premium

La fotografía se mantiene como el elemento principal de cada sección, acompañada de animaciones, profundidad visual, efectos de cámara y elementos inspirados en interfaces fotográficas.

---

## 🚀 Tecnologías utilizadas

El proyecto fue desarrollado utilizando:

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Hooks
- CSS Animations
- Responsive Design
- `import.meta.glob`
- WhatsApp API mediante enlaces `wa.me`

---

## 🎨 Características principales

### 📷 Hero cinematográfico

La página inicia con una fotografía a pantalla completa acompañada de:

- Animaciones de profundidad
- Movimiento cinematográfico
- Iluminación dinámica
- Efectos de exposición
- Film grain
- Tipografía animada
- Navegación integrada

---

### 🎞 Loader inspirado en una cámara

Antes de mostrar el sitio se presenta una introducción animada basada en el proceso de tomar una fotografía.

Incluye:

- Viewfinder
- Focus lock
- Apertura de lente
- Obturador
- Flash
- Revelado del logotipo
- Transición cinematográfica hacia el sitio

---

### 👤 Sobre DANNO

Sección editorial donde se presenta la historia detrás del fotógrafo.

Incluye información sobre:

- Sus inicios en la fotografía
- Su proceso de aprendizaje
- Su estilo visual
- Su experiencia
- Su filosofía creativa

> “Lo hago por gusto, lo hago por pasión, lo hago por amor al arte.”

---

### 🖼 Portafolio fotográfico

Galería interactiva desarrollada para mostrar el archivo fotográfico de DANNO.

El portafolio incluye:

- Más de 100 fotografías
- Carrusel 3D
- Fotografías anteriores y siguientes visibles
- Navegación mediante flechas
- Navegación con teclado
- Indicador de fotografía actual
- Precarga de imágenes cercanas
- Carga optimizada mediante `import.meta.glob`
- Adaptación automática para fotografías verticales y horizontales

---

### 🎥 Servicios

Los servicios se presentan mediante una interfaz interactiva tipo acordeón.

Actualmente incluye:

#### Individual o pareja

**$1,300 MXN**

- 2 vestuarios
- 1 h 30 min de sesión
- 20 fotografías

#### Video

**$1,500 MXN**

- 3 spots
- Video final
- Duración máxima de 5 minutos

#### Eventos

**$1,500 MXN**

- Fiestas de cumpleaños
- Reuniones
- Eventos promocionales

---

### 📲 Reservaciones por WhatsApp

El sitio cuenta con un formulario personalizado para solicitar disponibilidad.

El usuario puede seleccionar:

- Nombre
- Tipo de servicio
- Fecha
- Hora
- Lugar
- Descripción de la idea

Al enviar el formulario se genera automáticamente un mensaje organizado y se abre una conversación directa con DANNO mediante WhatsApp.

No es necesario registrarse ni crear una cuenta.

---

## 📱 Responsive Design

El sitio fue desarrollado para adaptarse a diferentes tamaños de pantalla.

Se realizaron ajustes específicos para:

- Desktop
- Laptop
- iPad Pro
- iPad Air
- Tablets
- iPhone
- Smartphones Android
- Pantallas pequeñas

En dispositivos táctiles se reducen o modifican algunos efectos 3D dependientes del movimiento del mouse para mantener una experiencia fluida.

---

## 🗂 Estructura del proyecto

```text
src/
│
├── assets/
│   └── images/
│       ├── portafolio/
│       ├── danno-hero.png
│       ├── danno-about.jpg
│       └── danno777-logo.png
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── Loader/
│   │   ├── Loader.jsx
│   │   └── Loader.css
│   │
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.css
│   │
│   ├── Portfolio/
│   │   ├── Portfolio.jsx
│   │   └── Portfolio.css
│   │
│   ├── Services/
│   │   ├── Services.jsx
│   │   └── Services.css
│   │
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   │
│   └── Footer/
│       ├── Footer.jsx
│       └── Footer.css
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

⚙️ Instalación

Clona el repositorio:

git clone https://github.com/MqgiaG/Danno.git

Entra al proyecto:

cd Danno

Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

npm run dev

Vite mostrará una dirección local similar a:

http://localhost:5173
📦 Build de producción

Para generar la versión optimizada del proyecto:

npm run build

Para visualizar el build localmente:

npm run preview
🎯 Objetivo del proyecto

El objetivo de DANNO es construir una presencia digital que permita al fotógrafo:

Mostrar profesionalmente su trabajo
Centralizar su portafolio
Presentar sus servicios
Mostrar precios y características
Recibir solicitudes de sesiones
Facilitar el contacto con clientes
Fortalecer su identidad visual
Crear una experiencia memorable alrededor de su fotografía
📍 Ubicación

San Felipe, Guanajuato · México

Servicios disponibles en San Felipe y alrededores.

🖤 Identidad

DANNO

Photography / Video

Fotografía urbana, dark y cinematográfica.

👨‍💻 Desarrollo

Diseño y desarrollo web realizado con React + Vite.

Proyecto desarrollado como una experiencia personalizada, evitando plantillas genéricas y priorizando la identidad visual del fotógrafo.

📄 Estado del proyecto

🚧 Proyecto en desarrollo.

Actualmente se continúa trabajando en:

Optimización responsive
Experiencia móvil
Mejoras de rendimiento
Integración de contenido audiovisual
Optimización final para producción

© 2026 DANNO. Todos los derechos reservados.
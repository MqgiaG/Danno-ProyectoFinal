import { Link } from 'react-router-dom'
import './AuthorPage.css'

export default function AuthorPage() {
  return <main className="author-page"><div className="author-page__content"><p>PROYECTO FINAL · FRONT END</p><h1>Sobre el autor</h1><p>Gerardo Rangel desarrolló esta experiencia digital para presentar el trabajo fotográfico de DANNO con React, TypeScript, diseño responsive y datos reales de una API externa.</p><Link to="/">← Volver al portafolio</Link></div></main>
}

import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import { PROFILE } from "../constants/profile"
import elvisPhoto from "../assets/img/elvis.jpg"
import "./Home.css"

const projects = [
  {
    title: "Modelo de IA y Deep Learning",
    desc: "Análisis de sentimientos con redes neuronales recurrentes (LSTM y GRU)",
    tags: ["Python", "LSTM", "GRU", "NLP", "Streamlit"],
    url: "https://github.com/elviisch26/Redes-Neuronales-Recurrentes",
    gradient: "linear-gradient(135deg, #1a1a2e, #16213e)"
  },
  {
    title: "Sistema de Gestión de Tareas Académicas",
    desc: "Sistema web con Laravel 12, pruebas automatizadas y componentes Alpine.js",
    tags: ["Laravel 12", "PHPUnit", "Tailwind CSS", "Alpine.js"],
    url: "https://github.com/elviisch26/edu-uleam",
    gradient: "linear-gradient(135deg, #1e2420, #18241c)"
  },
  {
    title: "Bcados Rappys Delivery",
    desc: "App móvil de delivery multi-plataforma con Flutter y Firebase",
    tags: ["Flutter", "Dart", "Firebase"],
    url: "https://github.com/elviisch26/Moviles-Proyectoo",
    gradient: "linear-gradient(135deg, #2d1f1a, #3d2418)"
  },
  {
    title: "ODSIE - Historias Clínicas Digitales",
    desc: "Gestión digital de historias clínicas con QR, roles multinivel y pagos",
    tags: ["NestJS 10", "React 18", "TypeScript", "Supabase", "TailwindCSS"],
    url: "https://github.com/elviisch26/ODSIE",
    gradient: "linear-gradient(135deg, #1a1a2e, #0f3460)"
  },
  {
    title: "Gps-sd - Rastreo GPS para Ganado",
    desc: "Aplicación web de rastreo GPS para ganado en tiempo real",
    tags: ["JavaScript"],
    url: "https://gps-sd.vercel.app",
    gradient: "linear-gradient(135deg, #1a2e1a, #0f3d0f)"
  },
  {
    title: "SD-Replicaset - Sistema Bancario Distribuido",
    desc: "Sistema bancario distribuido con replicación MongoDB entre 3 nodos",
    tags: ["Python", "MongoDB ReplicaSet", "CustomTkinter"],
    url: "https://github.com/elviisch26/SD-Replicaset",
    gradient: "linear-gradient(135deg, #2e1a2e, #3d0f3d)"
  }
]

const skills = [
  "Angular", "Vue.js", "NestJS", "Laravel", "Flutter",
  "Python", "Docker", "TypeScript", "JavaScript", "SQL",
  "MongoDB", "PostgreSQL", "React", "Node.js", "Git",
  "TailwindCSS", "Bootstrap"
]

export const Home = () => {
  return (
    <div className="page-layout">
      <Navbar />

      {/* Window Bar */}
      <div className="window-bar">
        <div className="window-dot window-dot--red" />
        <div className="window-dot window-dot--yellow" />
        <div className="window-dot window-dot--green" />
        <span className="window-title">~ / elvis-terminal</span>
      </div>

      {/* Hero / Terminal */}
      <section className="terminal-section">
        <div className="terminal-line">
          <span className="terminal-prompt">❯</span>{" "}
          <span className="terminal-command">npx about-elvis</span>
        </div>
        <div className="terminal-output">
          {PROFILE.name} · <span className="highlight">{PROFILE.role}</span>
        </div>
        <div className="terminal-sub">
          1+ años · React · NestJS · Laravel · Flutter
        </div>
        <div className="terminal-line" style={{ marginTop: 12 }}>
          <span className="terminal-prompt">❯</span>{" "}
          <span className="terminal-command">status</span>{" "}
          <span>→ </span>
          <span style={{ color: "var(--accent)" }}>open for work</span>
          <span className="cursor-block" />
        </div>

        <div className="hero-actions">
          <a href="#proyectos" className="btn-primary">
            Ver proyectos 🚀
          </a>
          <a href={`mailto:${PROFILE.email}`} className="btn-secondary">
            Contacto →
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-block">
        <div className="section-label">{'// sobre mí'}</div>
        <div className="about-grid">
          <img
            src={elvisPhoto}
            alt={PROFILE.name}
            className="about-photo"
          />
          <div className="about-text">
            <h2>{PROFILE.name}</h2>
            <p>
              Desarrollador web y móvil ecuatoriano, nacido en Manta, Manabí.
              Ingeniero en Tecnologías de la Información graduado de la ULEAM.
              Apasionado por la tecnología, la resolución de problemas y el aprendizaje continuo.
              Transformando ideas en código limpio y escalable.
            </p>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="section-block">
        <div className="section-label">{'// proyectos destacados'}</div>
        <div className="proyectos-grid">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="proyecto-card"
            >
              <div className="card-preview" style={{ background: p.gradient }}>

              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-block">
        <div className="section-label">{'// herramientas'}</div>
        <div className="skills-badges">
          {skills.map((s, i) => (
            <span key={i} className="skill-badge">{s}</span>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

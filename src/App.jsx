import { profile, projects, skills } from './data'

function Nav() {
  return (
    <nav className="nav">
      <span className="logo">{profile.name}</span>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <p className="eyebrow">{profile.university}</p>
      <h1>Hi, I'm {profile.name}</h1>
      <p className="subtitle">{profile.title}</p>
      <div className="actions">
        <a className="btn primary" href="#projects">View projects</a>
        <a className="btn" href={profile.cv} target="_blank" rel="noreferrer">Download CV</a>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about">
      <h2>About me</h2>
      <p>{profile.summary}</p>
      <p className="note">{profile.graduation}</p>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">
              {p.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer">View on GitHub →</a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="grid">
        {Object.entries(skills).map(([group, items]) => (
          <div className="card" key={group}>
            <h3>{group}</h3>
            <ul className="tags">
              {items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="actions">
        <a className="btn" href={`mailto:${profile.email}`}>Email</a>
        <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>© {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
import { useMemo, useState, type CSSProperties, type MouseEvent } from "react";

const projects = [
  {
    title: "CodeNeuton Platform",
    description: "A collaborative 3D workspace bridging backend logic and frontend delivery.",
    meta: "3D workspace",
    accent: "cobalt",
    model: "workspace"
  },
  {
    title: "Spotify Clone",
    description: "Immersive player with synchronized 3D audio visualizer geometry.",
    meta: "Audio visualizer",
    accent: "neon",
    model: "visualizer"
  },
  {
    title: "Weather App",
    description: "Glass-textured climate globe with layered atmospheric data.",
    meta: "Weather globe",
    accent: "silver",
    model: "globe"
  },
  {
    title: "E-Commerce Solution",
    description: "Precision engineered storefront with a sleek 3D cart system.",
    meta: "Cart icon",
    accent: "neon",
    model: "cart"
  }
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Magic Software",
    summary:
      "Built scalable services and delivered performant frontends to connect data-intensive systems with elegant UX.",
    detail: "Java, React.js, Microservices"
  },
  {
    role: "Software Engineer",
    company: "Shop4deal",
    summary:
      "Engineered commerce workflows and automated testing pipelines to improve reliability.",
    detail: "React.js, Selenium, MongoDB"
  }
];

const techStack = ["Java", "Python", "React.js", "Selenium", "MongoDB"];

const cliLines = [
  "$ initialize --profile abhishek",
  "$ link --backend Java --frontend React",
  "$ deploy --region global",
  "$ status: ready"
];

const heroIntro =
  "Software Engineer specializing in Java and React.js, crafting high-performance systems with cinematic frontends.";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

export default function App() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const heroStyle = useMemo<CSSProperties>(
    () =>
      ({
        "--hero-tilt-x": `${tilt.x}deg`,
        "--hero-tilt-y": `${tilt.y}deg`
      }),
    [tilt]
  );

  const handleTilt = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientY - target.top) / target.height - 0.5) * -14;
    const y = ((event.clientX - target.left) / target.width - 0.5) * 16;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="app">
      <header className="nav">
        <div className="logo">AKT</div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-social">
          <a
            href="https://github.com/abhishekth0203"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-thakur-5a4966244/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-content">
           {/* <p className="eyebrow">3D Portfolio</p> */}
            <h1>
              Abhishek Kumar Thakur
              <span>Software Engineer · Java · React.js</span>
            </h1>
            <p className="hero-intro">{heroIntro}</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn ghost" href="#contact">
                Let’s Collaborate
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <span>5+</span>
                <small>Production systems</small>
              </div>
              <div>
                <span>Java · React</span>
                <small>Full-stack bridge</small>
              </div>
              <div>
                <span>3D UX</span>
                <small>Interactive UI systems</small>
              </div>
            </div>
          </div>

          <div
            className="hero-visual"
            style={heroStyle}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="glass-panel">
              <div className="glass-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="label">/bridge/terminal</span>
              </div>
              <div className="cli">
                {cliLines.map((line) => (
                  <div key={line} className="cli-line">
                    {line}
                  </div>
                ))}
                <div className="cli-cursor">
                  <span className="cursor"></span>
                </div>
              </div>
              <div className="orb"></div>
              <div className="orb orb-small"></div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-head">
            <h2>Project Gallery</h2>
            {/* <p>Isometric 3D scenes with a precision-engineered software aesthetic.</p> */}
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className={`iso-card ${project.accent}`}>
                <div className={`iso-scene ${project.model}`}>
                  <div className="iso-base"></div>
                  <div className="iso-object"></div>
                  <div className="iso-object secondary"></div>
                  <div className="iso-object tertiary"></div>
                </div>
                <div className="iso-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span>{project.meta}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience" id="experience">
          <div className="section-head">
            <h2>Experience</h2>
            {/* <p>Vertical 3D timeline highlighting real-world impact.</p> */}
          </div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <div key={item.company} className="timeline-item">
                <div className="timeline-node">
                  <span>{index + 1}</span>
                </div>
                <div className="timeline-card">
                  <h3>
                    {item.role} · <span>{item.company}</span>
                  </h3>
                  <p>{item.summary}</p>
                  <div className="timeline-meta">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="stack" id="stack">
          <div className="section-head">
            <h2>Tech Stack Cloud</h2>
            <p>A floating constellation of the tools powering my builds.</p>
          </div>
          <div className="stack-cloud">
            {techStack.map((tech) => (
              <div key={tech} className="stack-node">
                <div className="stack-icon">{tech}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card">
            <div>
              <h2>Let’s Build Something Spectacular</h2>
              <p>
                Open to collaborations on backend architecture, frontend performance, or
                immersive 3D UI experiences.
              </p>
            </div>
            <a className="btn primary" href="mailto:abhishek@example.com">
              Start a Project
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 Abhishek Kumar Thakur · Crafted with Java + React</footer>
    </div>
  );
}




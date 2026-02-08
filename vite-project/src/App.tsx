import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type MouseEvent,
  type FormEvent
} from "react";

const projects = [
  {
    title: "CodeNeuton Platform",
    description: "Plane and developed the official CodeNeuton website using HTML, CSS, JavaScript, and React.js. Worked on responsive UI design, component-based architecture, and performance optimization. Contributed to improving user engagement and overall website usability.",
    meta: "3D workspace",
    accent: "cobalt",
    model: "workspace",
    link: "https://codeneuton.in/"
  },
  {
    title: "Spotify Clone",
    description: "Create a Spotify-like music player using React.js with interactive UI, audio controls, and responsive design. Strengthened frontend development and state management skills.",
    meta: "Audio visualizer",
    accent: "neon",
    model: "visualizer",
    link: "https://spotifyab.netlify.app/"
  },
  {
    title: "Weather App",
    description: "Built a real-time weather application using HTML, CSS, JavaScript, and React.js. Implemented API integration, responsive UI design, and performance optimization. Enhanced skills in React Hooks, API handling, and UI/UX design.",
    meta: "Weather globe",
    accent: "silver",
    model: "globe",
    link: "https://weatherapplication-a.netlify.app/"
  },
  {
    title: "E-Commerce Solution",
    description: "Designed and built an e-commerce platform with product listings and cart functionality using HTML, CSS, and JavaScript. Focused on responsive layouts and user-centric design.",
    meta: "Cart icon",
    accent: "neon",
    model: "cart",
    link: "https://medcollection.netlify.app/"
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const mailSubject = subject || "Portfolio Contact";
    const mailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:at3519856@gmail.com?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailto;
    event.currentTarget.reset();
  };

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".section-head");
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header className={`nav ${menuOpen ? "open" : ""}`}>
        <div className="logo">AKT</div>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-menu">
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-social">
            <a
              href="https://github.com/abhishekth0203"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M12 2a10 10 0 0 0-3.16 19.48c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.36-1.18-3.36-1.18-.45-1.16-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .08 1.52 1.04 1.52 1.04.9 1.52 2.36 1.08 2.94.82.1-.66.36-1.08.64-1.32-2.22-.25-4.56-1.12-4.56-4.96 0-1.1.4-2 1.04-2.7-.1-.25-.45-1.28.1-2.66 0 0 .86-.28 2.82 1.02A9.7 9.7 0 0 1 12 6.8c.85 0 1.72.12 2.52.34 1.96-1.3 2.82-1.02 2.82-1.02.55 1.38.2 2.4.1 2.66.64.7 1.04 1.6 1.04 2.7 0 3.86-2.34 4.7-4.58 4.95.36.3.68.92.68 1.86v2.76c0 .26.18.58.68.48A10 10 0 0 0 12 2z" />
                </svg>
              </span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-thakur-5a4966244/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <span className="nav-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm7.5 0h3.8v1.64h.06c.53-1 1.84-2.06 3.8-2.06 4.06 0 4.81 2.67 4.81 6.15V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21h-4V9z" />
                </svg>
              </span>
              LinkedIn
            </a>
          </div>
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
                  <a
                    className="project-link"
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : undefined}
                    rel={project.link.startsWith("http") ? "noreferrer" : undefined}
                  >
                    View Project
                  </a>
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
            {/* <p>A floating constellation of the tools powering my builds.</p> */}
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
          <div className="section-head">
            <h2>Contact</h2>
            <p>Send a message directly to my inbox.</p>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-grid">
              <label>
                <span>Name</span>
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input name="email" type="email" placeholder="you@email.com" required />
              </label>
              <label className="full">
                <span>Subject</span>
                <input name="subject" type="text" placeholder="Project inquiry" />
              </label>
              <label className="full">
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                ></textarea>
              </label>
            </div>
            <button className="btn primary" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">© 2026 Abhishek Kumar Thakur · Crafted with Java + React</footer>
    </div>
  );
}











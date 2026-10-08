import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Sanika<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>
            Sanika <span>Admuthe</span>
          </h1>

          <h2>Aspiring AI / Generative AI Engineer</h2>

          <p className="hero-description">
            Building practical AI applications with{" "}
            <strong>LLMs, RAG, AI Agents</strong> and modern Generative AI
            technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a
              href="/sanika resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Download Resume ↓
            </a>

            <a
              href="https://github.com/kittu171"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/sanikaadmuthe18"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <span>•</span>

            <a
              href="https://github.com/kittu171"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* AI VISUAL */}
        <div className="hero-visual">
          <div className="ai-orbit orbit-one"></div>
          <div className="ai-orbit orbit-two"></div>
          <div className="ai-orbit orbit-three"></div>

          <div className="ai-core">
            <span>AI</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>

          <div className="about-content">
            <div className="about-photo">
              <img src="/images/sanika-profile.png" alt="Sanika Admuthe" />
            </div>

            <div className="about-text">
              <h2>Building AI that solves real problems.</h2>

              <p>
                I’m a Computer Science & Engineering undergraduate focused on{" "}
                <strong>Artificial Intelligence and Generative AI</strong>. I
                build practical AI applications using{" "}
                <strong>
                  Python, LLMs, RAG, AI Agents, LangChain, LangGraph, and
                  FastAPI
                </strong>
                .
              </p>

              <p>
                I enjoy turning AI concepts into real-world solutions—from{" "}
                <strong>
                  document-based RAG chatbots and tool-calling AI agents to
                  prompt evaluation and optimization platforms
                </strong>
                .
              </p>

              <p>
                Currently, I’m focused on strengthening my{" "}
                <strong>AI engineering skills</strong> and building reliable,
                production-oriented Generative AI applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills" id="skills">
        <div className="section-container">
          <p className="section-label">TECHNICAL SKILLS</p>

          <h2>My AI & Development Stack</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>Generative AI</h3>
              <p>RAG · LLMs · Prompt Engineering · AI Agents · Fine-tuning</p>
            </div>

            <div className="skill-card">
              <h3>Frameworks</h3>
              <p>LangChain · LangGraph · FastAPI</p>
            </div>

            <div className="skill-card">
              <h3>AI Tools</h3>
              <p>Ollama · Hugging Face · ChromaDB · Vector Databases</p>
            </div>

            <div className="skill-card">
              <h3>Development</h3>
              <p>Python · SQL · REST API · Swagger/OpenAPI</p>
            </div>

            <div className="skill-card">
              <h3>Deployment</h3>
              <p>Docker · Git · GitHub</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="section-container">
          <p className="section-label">MY PROJECTS</p>

          <h2>AI Projects I've Built</h2>

          <div className="projects-grid">
            {/* PROJECT 1 */}
            <div className="project-card">
              <div className="project-number">01</div>

              <h3>Production RAG Chatbot</h3>

              <p>
                A document-based RAG chatbot that retrieves relevant information
                and generates context-grounded answers using local LLMs.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>FastAPI</span>
                <span>LangChain</span>
                <span>ChromaDB</span>
                <span>Ollama</span>
                <span>Docker</span>
              </div>

              <a
                href="https://github.com/kittu171/genai-chatbot"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗
              </a>
            </div>

            {/* PROJECT 2 */}
            <div className="project-card">
              <div className="project-number">02</div>

              <h3>AI Agent Workflow Application</h3>

              <p>
                A tool-calling AI agent with calculator, knowledge search,
                memory, retry handling and Human-in-the-Loop approval workflow.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>LangGraph</span>
                <span>LangChain</span>
                <span>Ollama</span>
                <span>FastAPI</span>
                <span>Docker</span>
              </div>

              <a
                href="https://github.com/kittu171/ai-agent-app"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗
              </a>
            </div>

            {/* PROJECT 3 */}
            <div className="project-card">
              <div className="project-number">03</div>

              <h3>Prompt Evaluation & Optimization Platform</h3>

              <p>
                A platform that generates, evaluates and compares multiple
                prompt variants using LLM-based scoring and automatically
                selects an improved prompt.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>FastAPI</span>
                <span>LangChain</span>
                <span>Ollama</span>
                <span>Docker</span>
              </div>

              <a
                href="https://github.com/kittu171/prompt-evaluation-platform"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience" id="experience">
        <div className="section-container">
          <p className="section-label">EXPERIENCE</p>

          <h2>My Professional Journey</h2>

          <div className="experience-card">
            <div className="experience-top">
              <div>
                <h3>Data Analyst Intern</h3>
                <p className="company">Unified Mentor Pvt. Ltd.</p>
              </div>

              <span className="date">Jan 2026 – Mar 2026</span>
            </div>

            <ul>
              <li>
                Analyzed and cleaned datasets using Python, SQL, and Excel.
              </li>

              <li>
                Performed exploratory data analysis to identify trends and
                meaningful insights.
              </li>

              <li>
                Developed interactive Power BI dashboards to visualize key
                metrics.
              </li>

              <li>
                Presented analytical findings in a clear and structured manner.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="education" id="education">
        <div className="section-container">
          <p className="section-label">EDUCATION</p>

          <h2>Academic Background</h2>

          <div className="education-card">
            <h3>
              Bachelor of Technology in Computer Science & Engineering
              (Artificial Intelligence)
            </h3>

            <p className="college">Parul University, Vadodara</p>

            <p className="education-info">CGPA: 6.90 · Coursework: AI & ML</p>
          </div>

          <div className="education-card">
            <h3>Intermediate (12th)</h3>

            <p className="college">L.G.R. Purohit Kanya Prashala, Sangli</p>

            <p className="education-info">Percentage: 80.67%</p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications" id="certifications">
        <div className="section-container">
          <p className="section-label">CERTIFICATIONS</p>

          <h2>Learning & Certifications</h2>

          <div className="certifications-grid">
            <a
              href="/certificates/huggingface-agents.jpg"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>01</span>
              <h3>Fundamentals of Agents</h3>
              <p>Hugging Face Agents Course</p>
              <div className="certification-meta">
                <span>Hugging Face</span>
                <span>AI Agents</span>
              </div>
            </a>

            <a
              href="/certificates/intro-to-machine-learning.png"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>02</span>
              <h3>Intro to Machine Learning</h3>
              <p>Kaggle Certificate</p>
              <div className="certification-meta">
                <span>Kaggle</span>
                <span>Course</span>
              </div>
            </a>

            <a
              href="/certificates/python.png"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>03</span>
              <h3>Python</h3>
              <p>Kaggle Certificate</p>
              <div className="certification-meta">
                <span>Kaggle</span>
                <span>Course</span>
              </div>
            </a>

            <a
              href="/certificates/deloitte.png"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>04</span>
              <h3>Deloitte Data Analytics</h3>
              <p>Data Analytics Job Simulation</p>
              <div className="certification-meta">
                <span>Deloitte</span>
                <span>Job Simulation</span>
              </div>
            </a>

            <a
              href="/certificates/iot.pdf"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>05</span>
              <h3>Introduction to Internet of Things</h3>
              <p>NPTEL Certification</p>
              <div className="certification-meta">
                <span>NPTEL</span>
                <span>Course</span>
              </div>
            </a>

            <a
              href="/certificates/computer-networks.pdf"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>06</span>
              <h3>Computer Networks</h3>
              <p>NPTEL Certification</p>
              <div className="certification-meta">
                <span>NPTEL</span>
                <span>Course</span>
              </div>
            </a>

            <a
              href="/certificates/web-development.pdf"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>07</span>
              <h3>Web Development Internship</h3>
              <p>Internship Completion Certificate</p>
              <div className="certification-meta">
                <span>Plasmid</span>
                <span>Internship</span>
              </div>
            </a>

            <a
              href="/certificates/data-analyst-internship.png"
              target="_blank"
              rel="noreferrer"
              className="certification-card"
            >
              <span>08</span>
              <h3>Data Analyst Internship</h3>
              <p>Internship Completion Certificate</p>
              <div className="certification-meta">
                <span>Unified Mentor</span>
                <span>Internship</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-container">
          <p className="section-label">CONTACT</p>

          <h2>Let's Build Something Together.</h2>

          <p className="contact-text">
            I'm open to entry-level AI / Generative AI opportunities,
            internships, and projects where I can build and learn.
          </p>

          <div className="contact-links">
            <a href="mailto:sanikaadmuthe18@gmail.com" className="contact-card">
              <span className="contact-icon">✉</span>
              <div>
                <span className="contact-label">EMAIL</span>
                <strong>sanikaadmuthe18@gmail.com</strong>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sanikaadmuthe18"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>
              <div>
                <span className="contact-label">LINKEDIN</span>
                <strong>Connect with me</strong>
              </div>
            </a>

            <a
              href="https://github.com/kittu171"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">⌘</span>
              <div>
                <span className="contact-label">GITHUB</span>
                <strong>View my projects</strong>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

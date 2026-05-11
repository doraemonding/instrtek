import { useState } from "react";
import {
  architectureLayers,
  demoRows,
  painPoints,
  resources,
  roadmap,
  scenarios,
  servicePackages,
  solutions,
  valueProps,
} from "./content";

const navItems = [
  ["home", "Home"],
  ["solutions", "Solutions"],
  ["scenarios", "Use Cases"],
  ["demo", "Demo Case"],
  ["architecture", "Architecture"],
  ["service", "Services"],
  ["resources", "Resources"],
  ["contact", "Contact"],
];

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="site-header">
      <button className="brand" onClick={() => handleNav("home")} aria-label="Manufacturing AI Copilot home">
        <span className="brand-mark">AI</span>
        <span>
          <strong>Manufacturing Copilot</strong>
          <small>Quality & Test Engineering</small>
        </span>
      </button>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-nav">
        <span />
        <span />
        <span />
      </button>

      <nav id="site-nav" className={`site-nav ${open ? "open" : ""}`}>
        {navItems.map(([id, label]) => (
          <button key={id} onClick={() => handleNav(id)}>
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-copy">
        <p className="eyebrow">Industrial Intelligence for Quality Teams</p>
        <h1>
          Manufacturing AI Quality & Test Copilot
          <span>AI assistant for manufacturing quality, validation, and test engineering teams</span>
        </h1>
        <p className="lead">
          Help manufacturing teams extract test documents, compare engineering specifications, generate quality reports,
          and build a private engineering knowledge base.
        </p>
        <div className="hero-actions">
          <button className="button primary" onClick={() => scrollToSection("contact")}>Book a Demo</button>
          <button className="button secondary" onClick={() => scrollToSection("service")}>Get a PoC Plan</button>
        </div>
        <div className="trust-row">
          <span>PDF / Word / Excel / Image</span>
          <span>Private Cloud</span>
          <span>Local Deployment</span>
        </div>
      </div>

      <div className="dashboard-card" aria-label="Demo dashboard preview">
        <div className="dashboard-top">
          <span>Document Comparison</span>
          <strong>Risk report generated</strong>
        </div>
        <div className="upload-grid">
          <div>
            <small>Document A uploaded</small>
            <strong>Engineering Spec v2.1</strong>
          </div>
          <div>
            <small>Document B uploaded</small>
            <strong>Manufacturing Test Flow</strong>
          </div>
        </div>
        <div className="metric-grid">
          <div><strong>58</strong><span>test items extracted</span></div>
          <div><strong>7</strong><span>parameter differences found</span></div>
          <div><strong>3</strong><span>missing test items</span></div>
        </div>
        <div className="risk-strip">
          <span>Medium Risk</span>
          <span>High Risk</span>
          <span>Action Required</span>
        </div>
      </div>
    </section>
  );
}

function PainPoints() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Pain Points"
        title="Quality and test document workflows are consuming too much engineering time"
      />
      <div className="card-grid four">
        {painPoints.map((item, index) => (
          <article className="info-card" key={item}>
            <span className="index">0{index + 1}</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValueProps() {
  return (
    <section className="section split-section">
      <SectionHeader
        eyebrow="Core Value"
        title="Use AI to improve engineering documentation, test validation, and quality analysis"
      />
      <div className="value-list">
        {valueProps.map((item) => (
          <article className="value-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Solutions() {
  return (
    <section id="solutions" className="section band">
      <SectionHeader
        eyebrow="Solutions"
        title="Three practical AI solutions for manufacturing engineering teams"
        subtitle="The first version focuses on test document comparison, quality report generation, and manufacturing knowledge base workflows, with room to expand into live AI demos and PoC delivery."
      />
      <div className="solution-stack">
        {solutions.map((solution) => (
          <article className="solution-card" key={solution.titleEn}>
            <div>
              <span className="tag">{solution.tag}</span>
              <h3>{solution.titleEn}<span>{solution.titleZh}</span></h3>
              <p>{solution.desc}</p>
            </div>
            <div className="list-columns">
              <div>
                <strong>Capabilities</strong>
                <ul>{solution.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              </div>
              <div>
                <strong>Best-fit scenarios</strong>
                <ul>{solution.scenes.map((scene) => <li key={scene}>{scene}</li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Scenarios() {
  return (
    <section id="scenarios" className="section">
      <SectionHeader eyebrow="Use Cases" title="Typical manufacturing use cases" />
      <div className="card-grid three">
        {scenarios.map((scenario) => (
          <article className="scenario-card" key={scenario.title}>
            <h3>{scenario.title}</h3>
            <p><strong>Problem: </strong>{scenario.problem}</p>
            <p><strong>Solution: </strong>{scenario.solution}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DemoCase() {
  return (
    <section id="demo" className="section demo-layout">
      <div>
        <SectionHeader
          eyebrow="Demo Case"
          title="Demo Case: Automated Test Document Comparison"
          subtitle="An electronics manufacturer needs to compare an engineering test specification with a manufacturing test flow. Manual review typically takes 2-3 hours and can miss parameter changes or missing test items."
        />
        <div className="result-list">
          {[
            "58 test items extracted",
            "7 parameter differences found",
            "3 missing test items found",
            "Risk levels generated",
            "Excel difference table exported",
            "English summary report generated",
          ].map((item) => <span key={item}>{item}</span>)}
        </div>
        <p className="callout">
          Document review time can drop from 2-3 hours to 10-15 minutes, with engineers reviewing AI-generated differences instead of manually searching for them.
        </p>
      </div>
      <div className="report-card">
        <div className="report-head">
          <strong>Comparison Report Preview</strong>
          <span>Generated by AI Agent</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Document A</th>
              <th>Document B</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {demoRows.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.a}</td>
                <td>{row.b}</td>
                <td><span className={`risk ${row.risk.toLowerCase()}`}>{row.risk}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="section band">
      <SectionHeader eyebrow="Architecture" title="Technical architecture" />
      <div className="architecture-flow">
        {architectureLayers.map((layer, index) => (
          <article className="architecture-step" key={layer.title}>
            <span>{index + 1}</span>
            <h3>{layer.title}</h3>
            <p>{layer.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicePackages() {
  return (
    <section id="service" className="section">
      <SectionHeader eyebrow="Service Model" title="Service packages" />
      <div className="card-grid three">
        {servicePackages.map((item) => (
          <article className="package-card" key={item.name}>
            <span className="tag">{item.fit}</span>
            <h3>{item.name}</h3>
            <strong className="price">{item.price}</strong>
            <ul>{item.items.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section id="resources" className="section">
      <SectionHeader eyebrow="Resources" title="Resource center" subtitle="The first version uses static content cards. Later versions can expand into industry guides, white papers, and technical articles." />
      <div className="card-grid three">
        {resources.map((item) => (
          <article className="resource-card" key={item.title}>
            <span>{item.type}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductRoadmap() {
  return (
    <section className="section roadmap">
      <SectionHeader eyebrow="Product Roadmap" title="Future AI demo expansion paths" />
      <div className="roadmap-line">
        {roadmap.map((item) => (
          <article key={item.phase}>
            <span>{item.phase}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="section contact-section">
      <div>
        <SectionHeader
          eyebrow="Contact"
          title="Book an AI document workflow diagnosis"
          subtitle="If your team works with test specifications, quality reports, supplier test files, or manufacturing engineering documents, submit your request and we will assess suitable AI use cases and PoC options."
        />
        <div className="contact-note">
          <strong>Good topics for the first discussion</strong>
          <p>Test document comparison, supplier report review, 8D / CAPA reports, engineering knowledge bases, local deployment, and private cloud deployment.</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" required /></label>
        <label>Company<input name="company" required /></label>
        <label>Industry<input name="industry" /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Phone / WeChat<input name="phone" /></label>
        <label>Document type
          <select name="docType" defaultValue="PDF / Word / Excel">
            <option>PDF / Word / Excel</option>
            <option>Images / Scanned files</option>
            <option>Mixed documents</option>
          </select>
        </label>
        <label>Need local deployment?
          <select name="deployment" defaultValue="Not sure">
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>
        <label>Can provide sanitized sample files?
          <select name="sample" defaultValue="Not sure">
            <option>Yes</option>
            <option>No</option>
            <option>Not sure</option>
          </select>
        </label>
        <label className="wide">Current pain point<textarea name="pain" rows="4" required /></label>
        <button className="button primary wide" type="submit">Submit request</button>
        {submitted && <p className="success wide">Thanks for submitting. We will contact you soon.</p>}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Manufacturing AI Quality & Test Copilot</strong>
        <p>AI assistant for quality, validation, and test engineering teams.</p>
      </div>
      <button onClick={() => scrollToSection("contact")}>Book a Demo</button>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <ValueProps />
        <Solutions />
        <Scenarios />
        <DemoCase />
        <Architecture />
        <ServicePackages />
        <Resources />
        <ProductRoadmap />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

import { useEffect, useMemo, useState } from "react";

const TOOLS = [
  {
    id: "idea-validator",
    name: "AI Idea Validator",
    category: "Strategy",
    desc: "Stress-test a startup idea, identify risks, and get concrete next experiments.",
    icon: "IV",
    color: "#f3c969",
    prompt:
      "You are a pragmatic startup advisor. Evaluate this AI startup idea for target customer, pain intensity, wedge, competition, monetization, risks, and the next 3 validation experiments. Be direct and specific. Use clear headings.",
    placeholder: "Describe the AI startup idea, customer, problem, and any early signals...",
    buttonText: "Validate idea",
  },
  {
    id: "landing-copy",
    name: "Landing Page Copy",
    category: "Marketing",
    desc: "Turn a rough product concept into a crisp hero, benefits, proof points, and CTA.",
    icon: "LC",
    color: "#8ed7c6",
    prompt:
      "Write landing page copy for this AI product. Include: headline, subheadline, primary CTA, 3 benefit bullets, 3 feature sections, objection handling, and a short FAQ. Keep it conversion-focused and specific.",
    placeholder: "Paste product notes, audience, benefits, and tone...",
    buttonText: "Generate copy",
  },
  {
    id: "persona",
    name: "Customer Persona",
    category: "Research",
    desc: "Map who buys, why they care, where to reach them, and what triggers adoption.",
    icon: "CP",
    color: "#9fb7ff",
    prompt:
      "Create a customer persona for this AI product. Include job-to-be-done, pain points, buying triggers, objections, channels, willingness to pay, and discovery interview questions.",
    placeholder: "Describe the product, likely users, and market...",
    buttonText: "Build persona",
  },
  {
    id: "seo-brief",
    name: "SEO Brief",
    category: "Growth",
    desc: "Create search-led content briefs for AI tools, SaaS pages, and founder blogs.",
    icon: "SB",
    color: "#f09a8a",
    prompt:
      "Create an SEO content brief. Include search intent, title options, meta description, outline, related keywords, internal links to create, differentiation angle, and conversion CTA. Avoid generic advice.",
    placeholder: "Topic, target audience, product, region, and any competitors...",
    buttonText: "Create brief",
  },
  {
    id: "pitch",
    name: "Pitch Refiner",
    category: "Fundraising",
    desc: "Convert rough founder notes into a tighter investor or partner pitch.",
    icon: "PR",
    color: "#d7a5f7",
    prompt:
      "Refine this startup pitch. Return a 30-second version, a 2-minute version, strongest proof points, weak assumptions, and questions investors will ask. Keep it concise and credible.",
    placeholder: "Paste your pitch, traction, market, and team notes...",
    buttonText: "Refine pitch",
  },
  {
    id: "paraphrase",
    name: "AI Paraphraser",
    category: "Writing",
    desc: "Rewrite any text in a fresh, natural way while preserving the original meaning.",
    icon: "AP",
    color: "#e8b4b8",
    prompt:
      "Rewrite the following text in a completely different way while preserving the original meaning. Make it natural and fluent. Only output the rewritten text, nothing else.",
    placeholder: "Paste your text here to rewrite it...",
    buttonText: "Paraphrase",
  },
  {
    id: "summarize",
    name: "AI Summarizer",
    category: "Writing",
    desc: "Condense long articles, papers, or documents into clear, concise summaries.",
    icon: "AS",
    color: "#b4d4e8",
    prompt:
      "Summarize the following text concisely. Capture all key points in a clear, well-structured summary. Only output the summary, nothing else.",
    placeholder: "Paste your article or document here to summarize...",
    buttonText: "Summarize",
  },
  {
    id: "grammar",
    name: "Grammar Checker",
    category: "Writing",
    desc: "Fix grammar, spelling, and punctuation while explaining meaningful corrections.",
    icon: "GC",
    color: "#b8e8b4",
    prompt:
      "Check the following text for grammar, spelling, and punctuation errors. Output the corrected text first, then on a new line write '---CORRECTIONS---', then list each correction you made in the format: '- [original] -> [corrected] (reason)'. If no errors found, just output the original text and say 'No errors found.'",
    placeholder: "Paste your text here to check for errors...",
    buttonText: "Check grammar",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(TOOLS.map((tool) => tool.category)))];
const PAGE_IDS = new Set(["home", "tools", "pricing", ...TOOLS.map((tool) => tool.id)]);

const PLANS = [
  {
    name: "Launch",
    price: "$0",
    period: "forever",
    features: ["5 generations per day", "Core writing tools", "No account required", "Community roadmap"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Founder",
    price: "$12",
    period: "/mo",
    features: ["Unlimited generations", "Startup strategy tools", "Saved workspaces", "Priority model access", "Export-ready outputs"],
    cta: "Join waitlist",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$39",
    period: "/mo",
    features: ["Everything in Founder", "Team seats", "Brand voice library", "Client-ready reports", "Workflow integrations"],
    cta: "Talk to us",
    highlighted: false,
  },
];

const METRICS = [
  ["8", "AI workflows"],
  ["3 min", "from idea to next action"],
  ["0", "setup required"],
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; }
  * { margin: 0; }

  :root {
    --bg: #f6f2ea;
    --surface: #fffaf1;
    --surface-strong: #ffffff;
    --ink: #171411;
    --muted: #6c6258;
    --faint: #948a7e;
    --line: rgba(23, 20, 17, 0.12);
    --line-strong: rgba(23, 20, 17, 0.22);
    --charcoal: #171411;
    --green: #1f6f5f;
    --orange: #c65d31;
    --blue: #295d7c;
    --shadow: 0 24px 70px rgba(42, 32, 22, 0.12);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  html { scroll-behavior: smooth; }
  body { min-width: 320px; background: var(--bg); color: var(--ink); overflow-x: hidden; }
  body::before {
    content: "";
    position: fixed;
    inset: 0;
    pointer-events: none;
    background:
      linear-gradient(rgba(23, 20, 17, 0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(23, 20, 17, 0.035) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: linear-gradient(to bottom, black, transparent 72%);
  }

  button, textarea { font: inherit; }
  button { border: 0; }
  textarea::placeholder { color: var(--faint); }
  ::selection { background: #f3c969; color: var(--ink); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .shell { min-height: 100vh; position: relative; overflow-x: hidden; }
  .nav {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    min-height: 72px;
    padding: 0 clamp(18px, 4vw, 56px);
    background: rgba(246, 242, 234, 0.88);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--line);
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    color: var(--ink);
  }
  .brand-mark {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    background: var(--charcoal);
    color: var(--surface);
    border-radius: 8px;
    font-weight: 800;
    letter-spacing: 0;
  }
  .brand span:last-child { font-weight: 800; font-size: 18px; }
  .nav-actions { display: flex; gap: 4px; align-items: center; flex-wrap: wrap; justify-content: flex-end; }
  .nav-link {
    padding: 9px 13px;
    border-radius: 8px;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
  }
  .nav-link[aria-current="page"], .nav-link:hover { color: var(--ink); background: rgba(23, 20, 17, 0.06); }

  .page { padding: 54px clamp(18px, 4vw, 56px) 72px; }
  .section { max-width: 1120px; margin: 0 auto; }
  .hero {
    min-height: calc(100vh - 72px);
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(320px, 440px);
    gap: clamp(30px, 6vw, 76px);
    align-items: center;
    padding-top: 20px;
  }
  .eyebrow {
    color: var(--orange);
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .hero h1 {
    font-size: clamp(44px, 8vw, 86px);
    line-height: 0.96;
    max-width: 780px;
    font-weight: 800;
    letter-spacing: 0;
  }
  .hero-copy {
    max-width: 620px;
    margin-top: 24px;
    color: var(--muted);
    font-size: clamp(17px, 2vw, 20px);
    line-height: 1.65;
  }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 34px; }
  .button {
    min-height: 46px;
    border-radius: 8px;
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    cursor: pointer;
    font-weight: 800;
    color: var(--ink);
    background: var(--surface-strong);
    border: 1px solid var(--line);
    box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset;
  }
  .button.primary { background: var(--charcoal); color: var(--surface); border-color: var(--charcoal); }
  .button.secondary { background: transparent; }
  .button:disabled { opacity: 0.45; cursor: not-allowed; }
  .button:hover:not(:disabled) { transform: translateY(-1px); box-shadow: var(--shadow); }

  .product-shot {
    background: var(--surface-strong);
    border: 1px solid var(--line-strong);
    border-radius: 8px;
    box-shadow: var(--shadow);
    overflow: hidden;
    animation: fadeUp 0.55s ease both;
  }
  .shot-bar {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
    border-bottom: 1px solid var(--line);
    background: #fdf7ea;
    color: var(--muted);
    font-size: 12px;
    font-weight: 800;
  }
  .status-dot { width: 9px; height: 9px; border-radius: 999px; background: var(--green); display: inline-block; margin-right: 7px; }
  .shot-body { padding: 18px; }
  .insight-row {
    display: grid;
    grid-template-columns: 78px 1fr;
    gap: 12px;
    padding: 14px 0;
    border-bottom: 1px solid var(--line);
  }
  .insight-row:last-child { border-bottom: 0; }
  .insight-label { font-size: 12px; color: var(--faint); font-weight: 800; text-transform: uppercase; }
  .insight-text { color: var(--ink); line-height: 1.45; font-size: 14px; }
  .metrics {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid var(--line);
    background: rgba(255,255,255,0.48);
    margin-top: 46px;
  }
  .metric { padding: 18px; border-right: 1px solid var(--line); }
  .metric:last-child { border-right: 0; }
  .metric strong { display: block; font-size: 24px; }
  .metric span { display: block; color: var(--muted); margin-top: 4px; font-size: 13px; }

  .section-head { display: flex; justify-content: space-between; align-items: end; gap: 28px; margin-bottom: 28px; }
  .section-head h1, .section-head h2 { font-size: clamp(34px, 5vw, 56px); line-height: 1; letter-spacing: 0; }
  .section-head p { max-width: 500px; color: var(--muted); line-height: 1.6; }
  .filters { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
  .filter {
    padding: 8px 12px;
    background: rgba(255,255,255,0.56);
    border: 1px solid var(--line);
    color: var(--muted);
    border-radius: 8px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 800;
  }
  .filter.active { background: var(--ink); color: var(--surface); border-color: var(--ink); }
  .tool-grid, .plan-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 14px;
  }
  .tool-card, .plan-card {
    background: var(--surface-strong);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 22px;
    cursor: pointer;
    min-height: 214px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset;
  }
  .tool-card:hover, .plan-card:hover { transform: translateY(-3px); box-shadow: var(--shadow); border-color: var(--line-strong); }
  .tool-top { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; }
  .tool-icon {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: var(--ink);
    font-weight: 800;
    font-size: 13px;
  }
  .pill {
    padding: 6px 9px;
    border-radius: 8px;
    background: rgba(23, 20, 17, 0.06);
    color: var(--muted);
    font-size: 12px;
    font-weight: 800;
  }
  .tool-card h3 { margin-top: 18px; font-size: 20px; line-height: 1.2; }
  .tool-card p { margin-top: 10px; color: var(--muted); line-height: 1.55; font-size: 14px; }
  .card-action { margin-top: 18px; color: var(--blue); font-size: 14px; font-weight: 800; }

  .tool-workspace {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 18px;
    align-items: start;
  }
  .tool-workspace > * { min-width: 0; }
  .panel {
    background: var(--surface-strong);
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 0 rgba(255,255,255,0.7) inset;
  }
  .panel-head {
    min-height: 56px;
    padding: 14px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-bottom: 1px solid var(--line);
    background: #fdf7ea;
  }
  .panel-head strong { font-size: 14px; }
  .textarea {
    width: 100%;
    min-height: 260px;
    resize: vertical;
    border: 0;
    outline: none;
    padding: 18px;
    background: transparent;
    color: var(--ink);
    line-height: 1.7;
  }
  .panel-foot {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    padding: 14px 18px;
    border-top: 1px solid var(--line);
  }
  .small { color: var(--muted); font-size: 13px; font-weight: 700; }
  .output {
    padding: 18px;
    white-space: pre-wrap;
    line-height: 1.75;
    color: var(--ink);
    min-height: 180px;
  }
  .sidebar { display: grid; gap: 14px; }
  .note-card {
    background: rgba(255,255,255,0.62);
    border: 1px solid var(--line);
    border-radius: 8px;
    padding: 18px;
  }
  .note-card h3 { font-size: 15px; margin-bottom: 10px; }
  .note-card p, .note-card li { color: var(--muted); line-height: 1.55; font-size: 14px; }
  .history-item {
    width: 100%;
    text-align: left;
    background: transparent;
    border-top: 1px solid var(--line);
    padding: 12px 0 0;
    margin-top: 12px;
    cursor: pointer;
    color: var(--muted);
    line-height: 1.4;
  }

  .plan-card { cursor: default; min-height: 330px; }
  .plan-card.featured { background: var(--charcoal); color: var(--surface); border-color: var(--charcoal); }
  .plan-card h3 { font-size: 18px; }
  .price { display: flex; align-items: baseline; gap: 5px; margin: 20px 0; }
  .price strong { font-size: 46px; letter-spacing: 0; }
  .plan-card ul { display: grid; gap: 12px; padding-left: 18px; color: var(--muted); line-height: 1.45; }
  .plan-card.featured ul, .plan-card.featured .small { color: rgba(255,255,255,0.72); }
  .roadmap {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--line);
    border: 1px solid var(--line);
  }
  .roadmap-item { background: var(--surface-strong); padding: 22px; }
  .roadmap-item strong { display: block; margin-bottom: 8px; }
  .roadmap-item p { color: var(--muted); line-height: 1.55; font-size: 14px; }
  .footer {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
    padding: 34px clamp(18px, 4vw, 56px);
    border-top: 1px solid var(--line);
    color: var(--muted);
    font-size: 13px;
  }

  @media (max-width: 860px) {
    .hero, .tool-workspace { grid-template-columns: 1fr; }
    .hero { min-height: auto; }
    .metrics, .roadmap { grid-template-columns: 1fr; }
    .metric { border-right: 0; border-bottom: 1px solid var(--line); }
    .metric:last-child { border-bottom: 0; }
    .section-head { display: block; }
    .section-head p { margin-top: 14px; }
  }

  @media (max-width: 560px) {
    .nav { align-items: flex-start; flex-direction: column; padding-top: 14px; padding-bottom: 14px; }
    .nav-actions { justify-content: flex-start; }
    .page { width: 100vw; max-width: 100vw; padding: 34px 20px 72px; overflow: hidden; }
    .section {
      width: 100%;
      max-width: 330px;
      overflow: hidden;
      margin: 0;
    }
    .section-head,
    .hero,
    .filters,
    .tool-grid,
      .plan-grid,
      .tool-workspace,
      .roadmap {
      width: 100%;
      max-width: 330px;
    }
    .section-head h1, .section-head h2 { font-size: 30px; line-height: 1.12; max-width: 330px; overflow-wrap: break-word; }
    .section-head p { font-size: 15px; max-width: 330px; overflow-wrap: break-word; }
    .hero h1 { font-size: 32px; line-height: 1.12; max-width: 330px; }
    .hero-copy { font-size: 16px; max-width: 330px; }
    .hero-actions { display: grid; max-width: 330px; }
    .metrics { max-width: 330px; }
    .product-shot { display: none; }
    .tool-grid, .plan-grid { grid-template-columns: minmax(0, 1fr); }
    .tool-card, .plan-card, .panel, .note-card { width: 100%; min-width: 0; }
    .tool-card p, .note-card p, .note-card li, .output, .textarea { overflow-wrap: break-word; }
    .tool-card { min-height: 190px; }
    .textarea { min-height: 210px; }
    .panel-head { align-items: flex-start; flex-direction: column; }
    .panel-head > div { display: grid !important; grid-template-columns: 1fr 1fr; width: 100%; }
    .panel-foot { align-items: stretch; flex-direction: column; }
    .button { width: 100%; }
  }
`;

function pageFromHash() {
  const page = window.location.hash.replace(/^#\/?/, "");
  return PAGE_IDS.has(page) ? page : "home";
}

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function Navbar({ currentPage, setCurrentPage }) {
  const active = TOOLS.some((tool) => tool.id === currentPage) ? "tools" : currentPage;
  return (
    <nav className="nav">
      <button className="brand" onClick={() => setCurrentPage("home")} aria-label="Go home">
        <span className="brand-mark">IT</span>
        <span>InstrTek</span>
      </button>
      <div className="nav-actions">
        {[
          ["home", "Home"],
          ["tools", "Tools"],
          ["pricing", "Pricing"],
        ].map(([id, label]) => (
          <button
            key={id}
            className="nav-link"
            aria-current={active === id ? "page" : undefined}
            onClick={() => setCurrentPage(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection({ setCurrentPage }) {
  return (
    <main className="page">
      <section className="section hero">
        <div>
          <p className="eyebrow">AI founder operating system</p>
          <h1>Validate, write, and launch AI ideas faster.</h1>
          <p className="hero-copy">
            InstrTek is a practical toolkit for internet AI entrepreneurs: test product ideas,
            create acquisition assets, sharpen pitches, and turn messy notes into launch-ready output.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => setCurrentPage("idea-validator")}>
              Validate an idea
            </button>
            <button className="button secondary" onClick={() => setCurrentPage("tools")}>
              Browse tools
            </button>
          </div>
          <div className="metrics">
            {METRICS.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="product-shot" aria-label="Product preview">
          <div className="shot-bar">
            <span><span className="status-dot" />Live workflow</span>
            <span>Founder mode</span>
          </div>
          <div className="shot-body">
            {[
              ["Input", "A browser-based AI assistant for small clinics that turns equipment notes into service reports."],
              ["Wedge", "Start with one painful document workflow before selling a broader maintenance platform."],
              ["Risk", "Distribution is harder than generation quality. Validate buyer access before building more AI features."],
              ["Next", "Interview 10 biomedical engineers, sell 3 paid pilots, and measure report time saved."],
            ].map(([label, text]) => (
              <div className="insight-row" key={label}>
                <div className="insight-label">{label}</div>
                <div className="insight-text">{text}</div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

function ToolsPage({ setCurrentPage }) {
  const [category, setCategory] = useState("All");
  const filteredTools = category === "All" ? TOOLS : TOOLS.filter((tool) => tool.category === category);

  return (
    <main className="page">
      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Toolkit</p>
            <h1>Workflows for AI entrepreneurship</h1>
          </div>
          <p>
            Each tool is scoped to a concrete startup job: research, positioning, growth,
            fundraising, and the writing work around launch.
          </p>
        </div>

        <div className="filters" aria-label="Tool categories">
          {CATEGORIES.map((item) => (
            <button
              className={`filter ${category === item ? "active" : ""}`}
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="tool-grid">
          {filteredTools.map((tool) => (
            <button className="tool-card" key={tool.id} onClick={() => setCurrentPage(tool.id)}>
              <div>
                <div className="tool-top">
                  <span className="tool-icon" style={{ background: tool.color }}>{tool.icon}</span>
                  <span className="pill">{tool.category}</span>
                </div>
                <h3>{tool.name}</h3>
                <p>{tool.desc}</p>
              </div>
              <span className="card-action">Open workflow</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

function ToolPage({ tool, setCurrentPage }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = window.localStorage.getItem("instrtek-history");
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {
        setHistory([]);
      }
    }
  }, []);

  const examples = useMemo(
    () => [
      "AI tool for solo consultants to turn client calls into proposals.",
      "Chrome extension that summarizes competitor ads for ecommerce founders.",
      "B2B SaaS that helps hospital equipment teams write maintenance reports.",
    ],
    [],
  );

  const saveHistory = (entry) => {
    const next = [entry, ...history].slice(0, 6);
    setHistory(next);
    window.localStorage.setItem("instrtek-history", JSON.stringify(next));
  };

  const handleSubmit = async () => {
    if (!input.trim() || loading) return;
    setLoading(true);
    setOutput("");
    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: tool.prompt, text: input }),
      });
      const data = await response.json();
      const result = data.error ? `Error: ${data.error}` : data.result || "Something went wrong.";
      setOutput(result);
      if (!data.error) {
        saveHistory({
          id: `${Date.now()}-${tool.id}`,
          tool: tool.name,
          input: input.slice(0, 160),
          output: result,
        });
      }
    } catch {
      setOutput("Error: Unable to process your request. Please check the API setup and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${tool.id}-output.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="page">
      <section className="section">
        <div className="section-head">
          <div>
            <button className="filter" onClick={() => setCurrentPage("tools")}>Back to tools</button>
            <p className="eyebrow" style={{ marginTop: 24 }}>{tool.category}</p>
            <h1>{tool.name}</h1>
          </div>
          <p>{tool.desc}</p>
        </div>

        <div className="tool-workspace">
          <div>
            <div className="panel">
              <div className="panel-head">
                <strong>Your input</strong>
                <span className="small">{wordCount(input)} words</span>
              </div>
              <textarea
                className="textarea"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={tool.placeholder}
              />
              <div className="panel-foot">
                <span className="small">Be specific: audience, problem, constraints, and desired tone improve output.</span>
                <button className="button primary" onClick={handleSubmit} disabled={!input.trim() || loading}>
                  {loading ? "Generating..." : tool.buttonText}
                </button>
              </div>
            </div>

            <div className="panel" style={{ marginTop: 16 }}>
              <div className="panel-head">
                <strong>Output</strong>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="filter" onClick={handleCopy} disabled={!output}>{copied ? "Copied" : "Copy"}</button>
                  <button className="filter" onClick={handleDownload} disabled={!output}>Export</button>
                </div>
              </div>
              <div className="output">
                {output || "Your generated result will appear here."}
              </div>
            </div>
          </div>

          <aside className="sidebar">
            <div className="note-card">
              <h3>Fast start</h3>
              {examples.map((example) => (
                <button className="history-item" key={example} onClick={() => setInput(example)}>
                  {example}
                </button>
              ))}
            </div>
            <div className="note-card">
              <h3>Recent outputs</h3>
              {history.length === 0 ? (
                <p>No saved local outputs yet.</p>
              ) : (
                history.map((item) => (
                  <button
                    className="history-item"
                    key={item.id}
                    onClick={() => {
                      setInput(item.input);
                      setOutput(item.output);
                    }}
                  >
                    <strong>{item.tool}</strong>
                    <br />
                    {item.input}
                  </button>
                ))
              )}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

function PricingPage() {
  return (
    <main className="page">
      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Pricing</p>
            <h1>Start with validation, pay when it becomes a workflow.</h1>
          </div>
          <p>
            The first product bet is a free toolkit that captures founder intent. Paid plans
            should unlock repeatable workspaces, saved brand context, and export formats.
          </p>
        </div>

        <div className="plan-grid">
          {PLANS.map((plan) => (
            <article className={`plan-card ${plan.highlighted ? "featured" : ""}`} key={plan.name}>
              <div>
                <span className="pill">{plan.highlighted ? "Recommended" : "Plan"}</span>
                <h3 style={{ marginTop: 18 }}>{plan.name}</h3>
                <div className="price">
                  <strong>{plan.price}</strong>
                  <span className="small">{plan.period}</span>
                </div>
                <ul>
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </div>
              <button className={`button ${plan.highlighted ? "" : "secondary"}`}>{plan.cta}</button>
            </article>
          ))}
        </div>

        <div className="roadmap">
          {[
            ["Phase 1", "Ship public tools, collect usage data, and learn which workflows founders repeat."],
            ["Phase 2", "Add accounts, saved projects, prompt memory, and founder workspace templates."],
            ["Phase 3", "Package high-performing workflows as paid playbooks for niche AI businesses."],
          ].map(([phase, text]) => (
            <div className="roadmap-item" key={phase}>
              <strong>{phase}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <strong>InstrTek</strong>
      <span>Built for practical AI founders. © 2026 InstrTek.</span>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => pageFromHash());
  const tool = TOOLS.find((item) => item.id === currentPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const nextHash = currentPage === "home" ? "" : `#${currentPage}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, "", nextHash || window.location.pathname);
    }
  }, [currentPage]);

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(pageFromHash());
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  return (
    <div className="shell">
      <style>{css}</style>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <HeroSection setCurrentPage={setCurrentPage} />}
      {currentPage === "tools" && <ToolsPage setCurrentPage={setCurrentPage} />}
      {currentPage === "pricing" && <PricingPage />}
      {tool && <ToolPage tool={tool} setCurrentPage={setCurrentPage} />}
      <Footer />
    </div>
  );
}

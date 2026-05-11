import { useState, useEffect } from "react";

const TOOLS = [
  {
    id: "paraphrase",
    name: "AI Paraphraser",
    desc: "Rewrite any text in a fresh, unique way while preserving the original meaning.",
    icon: "P",
    color: "#e8b4b8",
    accent: "#2d1f2f",
    prompt: "Rewrite the following text in a completely different way while preserving the original meaning. Make it natural and fluent. Only output the rewritten text, nothing else.",
    placeholder: "Paste your text here to rewrite it...",
    buttonText: "Paraphrase",
  },
  {
    id: "summarize",
    name: "AI Summarizer",
    desc: "Condense long articles, papers, or documents into clear, concise summaries.",
    icon: "S",
    color: "#b4d4e8",
    accent: "#1f2a2d",
    prompt: "Summarize the following text concisely. Capture all key points in a clear, well-structured summary. Only output the summary, nothing else.",
    placeholder: "Paste your article or document here to summarize...",
    buttonText: "Summarize",
  },
  {
    id: "grammar",
    name: "Grammar Checker",
    desc: "Fix grammar, spelling, and punctuation errors instantly with AI-powered precision.",
    icon: "G",
    color: "#b8e8b4",
    accent: "#1f2d1f",
    prompt: "Check the following text for grammar, spelling, and punctuation errors. Output the corrected text first, then on a new line write '---CORRECTIONS---', then list each correction you made in the format: '- [original] -> [corrected] (reason)'. If no errors found, just output the original text and say 'No errors found.'",
    placeholder: "Paste your text here to check for errors...",
    buttonText: "Check Grammar",
  },
];

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["5 uses per day", "All tools included", "Standard speed", "No sign-up required"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/mo",
    features: ["Unlimited uses", "All tools included", "Priority speed", "API access", "No ads", "Early access to new tools"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/mo",
    features: ["Everything in Pro", "Up to 10 members", "Team dashboard", "Usage analytics", "Priority support", "Custom integrations"],
    cta: "Contact Us",
    highlighted: false,
  },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0c0a09;
    --bg2: #1c1917;
    --bg3: #292524;
    --text: #fafaf9;
    --text2: #a8a29e;
    --text3: #78716c;
    --accent: #e8b4b8;
    --accent2: #b4d4e8;
    --border: rgba(255,255,255,0.06);
    --serif: 'Playfair Display', Georgia, serif;
    --sans: 'Source Sans 3', system-ui, sans-serif;
  }

  html { scroll-behavior: smooth; }
  body { background: var(--bg); color: var(--text); font-family: var(--sans); }
  textarea::placeholder { color: var(--text3); }
  ::selection { background: var(--accent); color: var(--bg); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes grain {
    0%, 100% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -10%); }
    30% { transform: translate(3%, -15%); }
    50% { transform: translate(-15%, 5%); }
    70% { transform: translate(12%, -8%); }
    90% { transform: translate(-8%, 13%); }
  }

  .grain::before {
    content: '';
    position: fixed;
    top: -50%; left: -50%;
    width: 200%; height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 9999;
    animation: grain 8s steps(10) infinite;
  }

  .tool-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255,255,255,0.12);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4);
  }
  .nav-link:hover { color: var(--text) !important; }
  .btn-primary:hover { opacity: 0.88; transform: translateY(-1px); }
  .btn-secondary:hover { background: var(--bg3); }
  .plan-card:hover { transform: translateY(-4px); }
`;

function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 clamp(20px, 4vw, 48px)", height: 72,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(12,10,9,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(24px) saturate(1.2)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
    }}>
      <div onClick={() => setCurrentPage("home")}
        style={{ cursor: "pointer", display: "flex", alignItems: "baseline", gap: 2 }}>
        <span style={{
          fontFamily: "var(--serif)", fontSize: 26, fontWeight: 900,
          fontStyle: "italic", color: "var(--accent)", letterSpacing: "-0.02em",
        }}>Instr</span>
        <span style={{
          fontFamily: "var(--serif)", fontSize: 26, fontWeight: 400,
          color: "var(--text)", letterSpacing: "-0.02em",
        }}>Tek</span>
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        {[
          { id: "home", label: "Home" },
          { id: "tools", label: "Tools" },
          { id: "pricing", label: "Pricing" },
        ].map(item => (
          <button key={item.id} className="nav-link" onClick={() => setCurrentPage(item.id)}
            style={{
              background: "none", border: "none", padding: "8px 18px",
              fontSize: 15, fontWeight: 400, cursor: "pointer",
              color: currentPage === item.id ? "var(--text)" : "var(--text3)",
              fontFamily: "var(--sans)", transition: "color 0.2s",
              letterSpacing: "0.01em",
            }}>{item.label}</button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection({ setCurrentPage }) {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "140px clamp(20px, 4vw, 48px) 100px",
      position: "relative", overflow: "hidden",
    }}>
      {/* Soft orbs */}
      <div style={{
        position: "absolute", top: "15%", left: "55%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,180,184,0.08) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "55%", left: "25%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(180,212,232,0.06) 0%, transparent 70%)",
        filter: "blur(70px)", pointerEvents: "none",
      }} />

      <p style={{
        fontSize: 13, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
        color: "var(--accent)", marginBottom: 40, fontFamily: "var(--sans)",
        animation: "fadeUp 0.8s ease both",
      }}>Free AI-Powered Tools</p>

      <h1 style={{
        fontFamily: "var(--serif)", fontSize: "clamp(48px, 8vw, 88px)",
        fontWeight: 400, lineHeight: 1.08, margin: "0 0 28px",
        letterSpacing: "-0.03em", maxWidth: 800,
        animation: "fadeUp 0.8s ease 0.1s both",
      }}>
        <span style={{ color: "var(--text)" }}>AI Tools That</span>
        <br />
        <em style={{ fontWeight: 700, color: "var(--accent)" }}>Actually Work</em>
      </h1>

      <p style={{
        fontSize: 18, lineHeight: 1.75, color: "var(--text2)",
        maxWidth: 480, margin: "0 0 48px", fontWeight: 300,
        animation: "fadeUp 0.8s ease 0.2s both",
      }}>
        Paraphrase, summarize, and check grammar with precision. Professional-grade, free, and instant.
      </p>

      <div style={{
        display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center",
        animation: "fadeUp 0.8s ease 0.3s both",
      }}>
        <button className="btn-primary" onClick={() => setCurrentPage("tools")} style={{
          background: "var(--text)", color: "var(--bg)",
          border: "none", borderRadius: 100, padding: "15px 36px",
          fontSize: 15, fontWeight: 600, cursor: "pointer",
          fontFamily: "var(--sans)", transition: "all 0.25s",
          letterSpacing: "0.01em",
        }}>Try Free Tools</button>
        <button className="btn-secondary" onClick={() => setCurrentPage("pricing")} style={{
          background: "var(--bg2)", color: "var(--text2)",
          border: "1px solid var(--border)", borderRadius: 100,
          padding: "15px 36px", fontSize: 15, fontWeight: 500,
          cursor: "pointer", fontFamily: "var(--sans)", transition: "all 0.25s",
        }}>View Pricing</button>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1,
        marginTop: 100, maxWidth: 660, width: "100%",
        background: "var(--border)", borderRadius: 16, overflow: "hidden",
        animation: "fadeIn 0.8s ease 0.5s both",
      }}>
        {TOOLS.map(t => (
          <div key={t.id} onClick={() => setCurrentPage(t.id)} style={{
            background: "var(--bg2)", padding: "32px 20px", cursor: "pointer",
            textAlign: "center", transition: "background 0.3s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--bg3)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--bg2)"}
          >
            <div style={{
              width: 40, height: 40, borderRadius: "50%", margin: "0 auto 14px",
              background: t.color, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, fontWeight: 700, color: "var(--bg)",
              fontFamily: "var(--serif)",
            }}>{t.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{t.name}</div>
            <div style={{ fontSize: 12, color: "var(--text3)" }}>Try now</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolPage({ tool, setCurrentPage }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

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
      setOutput(data.error ? "Error: " + data.error : data.result || "Something went wrong.");
    } catch {
      setOutput("Error: Unable to process your request. Please try again later.");
    }
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section style={{
      minHeight: "100vh", padding: "120px clamp(20px, 4vw, 48px) 80px",
      maxWidth: 720, margin: "0 auto",
    }}>
      <button onClick={() => setCurrentPage("tools")} style={{
        background: "none", border: "none", color: "var(--text3)",
        fontSize: 14, cursor: "pointer", marginBottom: 40, padding: 0,
        fontFamily: "var(--sans)", transition: "color 0.2s",
      }}
        onMouseEnter={e => e.target.style.color = "var(--text)"}
        onMouseLeave={e => e.target.style.color = "var(--text3)"}
      >Back to Tools</button>

      <div style={{ marginBottom: 40 }}>
        <div style={{
          width: 52, height: 52, borderRadius: "50%", marginBottom: 20,
          background: tool.color, display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20, fontWeight: 700, color: "var(--bg)", fontFamily: "var(--serif)",
        }}>{tool.icon}</div>
        <h1 style={{
          fontFamily: "var(--serif)", fontSize: 36, fontWeight: 700,
          color: "var(--text)", margin: "0 0 10px", letterSpacing: "-0.02em",
        }}>{tool.name}</h1>
        <p style={{ color: "var(--text2)", fontSize: 16, margin: 0, lineHeight: 1.6, fontWeight: 300 }}>{tool.desc}</p>
      </div>

      <div style={{
        background: "var(--bg2)", borderRadius: 16,
        border: "1px solid var(--border)", overflow: "hidden",
      }}>
        <textarea
          value={input} onChange={e => setInput(e.target.value)}
          placeholder={tool.placeholder}
          style={{
            width: "100%", minHeight: 200, background: "transparent",
            border: "none", outline: "none", color: "var(--text)", fontSize: 15,
            lineHeight: 1.75, resize: "vertical", fontFamily: "var(--sans)",
            padding: "24px", fontWeight: 300, boxSizing: "border-box",
          }}
        />
        <div style={{
          padding: "14px 24px", borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: 12, color: "var(--text3)", fontWeight: 500 }}>
            {input.trim() ? `${input.split(/\s+/).filter(Boolean).length} words` : ""}
          </span>
          <button onClick={handleSubmit} disabled={!input.trim() || loading}
            style={{
              background: loading ? "var(--bg3)" : tool.color,
              color: "var(--bg)", border: "none", borderRadius: 100,
              padding: "10px 28px", fontSize: 14, fontWeight: 600,
              cursor: loading ? "wait" : "pointer", fontFamily: "var(--sans)",
              opacity: !input.trim() ? 0.3 : 1, transition: "all 0.2s",
            }}>{loading ? "Processing..." : tool.buttonText}</button>
        </div>
      </div>

      {output && (
        <div style={{
          marginTop: 20, background: "var(--bg2)", borderRadius: 16,
          border: "1px solid var(--border)", overflow: "hidden",
          animation: "fadeUp 0.4s ease both",
        }}>
          <div style={{
            padding: "14px 24px", borderBottom: "1px solid var(--border)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: tool.color, letterSpacing: "0.08em", textTransform: "uppercase" }}>Result</span>
            <button onClick={handleCopy} style={{
              background: "var(--bg3)", border: "none", borderRadius: 100,
              padding: "5px 16px", fontSize: 12, color: "var(--text2)",
              cursor: "pointer", fontFamily: "var(--sans)", fontWeight: 500,
            }}>{copied ? "Copied!" : "Copy"}</button>
          </div>
          <div style={{
            padding: 24, color: "var(--text)", fontSize: 15,
            lineHeight: 1.8, whiteSpace: "pre-wrap", fontWeight: 300,
          }}>{output}</div>
        </div>
      )}
    </section>
  );
}

function ToolsPage({ setCurrentPage }) {
  return (
    <section style={{
      minHeight: "100vh", padding: "140px clamp(20px, 4vw, 48px) 80px",
      maxWidth: 900, margin: "0 auto",
    }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{
          fontSize: 13, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--accent)", marginBottom: 16,
        }}>Toolkit</p>
        <h1 style={{
          fontFamily: "var(--serif)", fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 400, color: "var(--text)", margin: "0 0 12px",
          letterSpacing: "-0.02em",
        }}>AI Tools</h1>
        <p style={{ color: "var(--text3)", fontSize: 16, fontWeight: 300 }}>
          Professional-grade, free, and instant.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16 }}>
        {TOOLS.map((t, i) => (
          <div key={t.id} className="tool-card" onClick={() => setCurrentPage(t.id)}
            style={{
              background: "var(--bg2)", borderRadius: 20,
              border: "1px solid var(--border)", padding: "36px 28px",
              cursor: "pointer", transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              animation: `fadeUp 0.6s ease ${i * 0.1}s both`,
            }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%", marginBottom: 20,
              background: t.color, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 700, color: "var(--bg)", fontFamily: "var(--serif)",
            }}>{t.icon}</div>
            <h3 style={{
              fontFamily: "var(--serif)", fontSize: 20, fontWeight: 700,
              color: "var(--text)", margin: "0 0 10px",
            }}>{t.name}</h3>
            <p style={{
              fontSize: 14, color: "var(--text3)", margin: "0 0 20px",
              lineHeight: 1.65, fontWeight: 300,
            }}>{t.desc}</p>
            <span style={{
              fontSize: 13, fontWeight: 600, color: t.color,
              letterSpacing: "0.02em",
            }}>Use tool &rarr;</span>
          </div>
        ))}

        <div style={{
          background: "transparent", borderRadius: 20,
          border: "1px dashed rgba(255,255,255,0.08)", padding: "36px 28px",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: "var(--serif)", fontSize: 32, color: "var(--text3)",
            marginBottom: 8, opacity: 0.4,
          }}>+</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "var(--text3)" }}>More coming soon</div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <section style={{
      minHeight: "100vh", padding: "140px clamp(20px, 4vw, 48px) 80px",
      maxWidth: 960, margin: "0 auto",
    }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <p style={{
          fontSize: 13, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--accent)", marginBottom: 16,
        }}>Pricing</p>
        <h1 style={{
          fontFamily: "var(--serif)", fontSize: "clamp(36px, 5vw, 52px)",
          fontWeight: 400, color: "var(--text)", margin: "0 0 12px",
          letterSpacing: "-0.02em",
        }}>Simple, Transparent</h1>
        <p style={{ color: "var(--text3)", fontSize: 16, fontWeight: 300 }}>
          Start free. Upgrade when you need more.
        </p>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
        gap: 16, alignItems: "start",
      }}>
        {PLANS.map((plan, i) => (
          <div key={plan.name} className="plan-card" style={{
            background: plan.highlighted ? "var(--bg3)" : "var(--bg2)",
            borderRadius: 20, padding: "36px 28px",
            border: plan.highlighted ? "1px solid rgba(232,180,184,0.2)" : "1px solid var(--border)",
            position: "relative", transition: "all 0.3s",
            animation: `fadeUp 0.6s ease ${i * 0.1}s both`,
          }}>
            {plan.highlighted && (
              <div style={{
                position: "absolute", top: -11, left: 28,
                background: "var(--accent)", color: "var(--bg)",
                fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100,
                letterSpacing: "0.06em", textTransform: "uppercase",
              }}>Popular</div>
            )}
            <h3 style={{
              fontFamily: "var(--sans)", fontSize: 14, fontWeight: 600,
              color: "var(--text2)", margin: "0 0 16px",
              letterSpacing: "0.08em", textTransform: "uppercase",
            }}>{plan.name}</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "0 0 28px" }}>
              <span style={{
                fontFamily: "var(--serif)", fontSize: 48, fontWeight: 700,
                color: "var(--text)", letterSpacing: "-0.03em",
              }}>{plan.price}</span>
              <span style={{ fontSize: 14, color: "var(--text3)", fontWeight: 400 }}>{plan.period}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {plan.features.map((f, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: plan.highlighted ? "var(--accent)" : "var(--text3)",
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 14, color: "var(--text2)", fontWeight: 300 }}>{f}</span>
                </div>
              ))}
            </div>
            <button style={{
              width: "100%", padding: "13px 0", borderRadius: 100, fontSize: 14, fontWeight: 600,
              cursor: "pointer", fontFamily: "var(--sans)", transition: "all 0.2s",
              background: plan.highlighted ? "var(--text)" : "transparent",
              color: plan.highlighted ? "var(--bg)" : "var(--text2)",
              border: plan.highlighted ? "none" : "1px solid var(--border)",
              letterSpacing: "0.01em",
            }}>{plan.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: "48px clamp(20px, 4vw, 48px)",
      borderTop: "1px solid var(--border)",
      display: "flex", justifyContent: "space-between", alignItems: "center",
      flexWrap: "wrap", gap: 16,
    }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
        <span style={{
          fontFamily: "var(--serif)", fontSize: 18, fontWeight: 900,
          fontStyle: "italic", color: "var(--accent)", letterSpacing: "-0.02em",
        }}>Instr</span>
        <span style={{
          fontFamily: "var(--serif)", fontSize: 18, fontWeight: 400,
          color: "var(--text3)", letterSpacing: "-0.02em",
        }}>Tek</span>
      </div>
      <p style={{ fontSize: 13, color: "var(--text3)", fontWeight: 300 }}>
        &copy; 2026 InstrTek. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentPage]);
  const tool = TOOLS.find(t => t.id === currentPage);

  return (
    <div className="grain" style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
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

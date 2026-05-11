import { useState, useEffect } from "react";

const TOOLS = [
  {
    id: "paraphrase",
    name: "AI Paraphraser",
    desc: "Rewrite any text in a fresh, unique way while preserving the original meaning.",
    icon: "\u2726",
    color: "#6366f1",
    prompt: "Rewrite the following text in a completely different way while preserving the original meaning. Make it natural and fluent. Only output the rewritten text, nothing else.",
    placeholder: "Paste your text here to rewrite it...",
    buttonText: "Paraphrase",
  },
  {
    id: "summarize",
    name: "AI Summarizer",
    desc: "Condense long articles, papers, or documents into clear, concise summaries.",
    icon: "\u25C8",
    color: "#0ea5e9",
    prompt: "Summarize the following text concisely. Capture all key points in a clear, well-structured summary. Only output the summary, nothing else.",
    placeholder: "Paste your article or document here to summarize...",
    buttonText: "Summarize",
  },
  {
    id: "grammar",
    name: "Grammar Checker",
    desc: "Fix grammar, spelling, and punctuation errors instantly with AI-powered precision.",
    icon: "\u25C9",
    color: "#10b981",
    prompt: "Check the following text for grammar, spelling, and punctuation errors. Output the corrected text first, then on a new line write '---CORRECTIONS---', then list each correction you made in the format: '\u2022 [original] \u2192 [corrected] (reason)'. If no errors found, just output the original text and say 'No errors found.'",
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
    period: "/month",
    features: ["Unlimited uses", "All tools included", "Priority speed", "API access", "No ads", "Early access to new tools"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    features: ["Everything in Pro", "Up to 10 members", "Team dashboard", "Usage analytics", "Priority support", "Custom integrations"],
    cta: "Contact Us",
    highlighted: false,
  },
];

function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(8,8,16,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      transition: "all 0.3s ease",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <div onClick={() => setCurrentPage("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: "linear-gradient(135deg, #6366f1, #0ea5e9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, fontWeight: 800, color: "#fff",
        }}>I</div>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>InstrTek</span>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {[
          { id: "home", label: "Home" },
          { id: "tools", label: "Tools" },
          { id: "pricing", label: "Pricing" },
        ].map(item => (
          <button key={item.id} onClick={() => setCurrentPage(item.id)}
            style={{
              background: currentPage === item.id ? "rgba(99,102,241,0.15)" : "transparent",
              color: currentPage === item.id ? "#a5b4fc" : "rgba(255,255,255,0.6)",
              border: "none", borderRadius: 8, padding: "8px 16px",
              fontSize: 14, fontWeight: 500, cursor: "pointer",
              transition: "all 0.2s", fontFamily: "inherit",
            }}
          >{item.label}</button>
        ))}
      </div>
    </nav>
  );
}

function HeroSection({ setCurrentPage }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "120px 24px 80px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "60%", left: "30%", transform: "translate(-50%,-50%)",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>
        <div style={{
          display: "inline-block", padding: "6px 16px", borderRadius: 100,
          background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)",
          fontSize: 13, color: "#a5b4fc", marginBottom: 32, fontWeight: 500,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          \u26A1 Free AI-Powered Tools \u2014 No Sign-up Required
        </div>
      </div>

      <h1 style={{
        fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 800,
        lineHeight: 1.05, margin: "0 0 24px",
        fontFamily: "'Instrument Serif', Georgia, serif",
        letterSpacing: "-0.03em", maxWidth: 800,
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
      }}>
        <span style={{ color: "#fff" }}>AI Tools That </span>
        <span style={{
          background: "linear-gradient(135deg, #6366f1, #0ea5e9, #10b981)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Actually Work</span>
      </h1>

      <p style={{
        fontSize: 18, lineHeight: 1.7, color: "rgba(255,255,255,0.5)",
        maxWidth: 540, margin: "0 0 48px", fontFamily: "'DM Sans', sans-serif",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
      }}>
        Paraphrase, summarize, check grammar, and more. Professional-grade AI tools, free and instant. No account needed.
      </p>

      <div style={{
        display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
      }}>
        <button onClick={() => setCurrentPage("tools")} style={{
          background: "linear-gradient(135deg, #6366f1, #4f46e5)",
          color: "#fff", border: "none", borderRadius: 12, padding: "14px 32px",
          fontSize: 16, fontWeight: 600, cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 4px 24px rgba(99,102,241,0.3)",
          transition: "all 0.2s",
        }}>Try Free Tools \u2192</button>
        <button onClick={() => setCurrentPage("pricing")} style={{
          background: "rgba(255,255,255,0.05)", color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
          padding: "14px 32px", fontSize: 16, fontWeight: 600,
          cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          transition: "all 0.2s",
        }}>View Pricing</button>
      </div>

      <div style={{
        display: "flex", gap: 48, marginTop: 80, flexWrap: "wrap", justifyContent: "center",
        opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 0.5s",
      }}>
        {TOOLS.map(t => (
          <div key={t.id} onClick={() => setCurrentPage(t.id)} style={{
            textAlign: "center", cursor: "pointer", padding: 20, borderRadius: 16,
            transition: "all 0.3s", border: "1px solid transparent",
          }}>
            <div style={{ fontSize: 28, marginBottom: 8, color: t.color }}>{t.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>{t.name}</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>Try now \u2192</div>
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
      if (data.error) {
        setOutput("Error: " + data.error);
      } else {
        setOutput(data.result || "Something went wrong. Please try again.");
      }
    } catch (err) {
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
      minHeight: "100vh", padding: "96px 24px 60px",
      maxWidth: 800, margin: "0 auto", fontFamily: "'DM Sans', sans-serif",
    }}>
      <button onClick={() => setCurrentPage("tools")} style={{
        background: "none", border: "none", color: "rgba(255,255,255,0.4)",
        fontSize: 14, cursor: "pointer", marginBottom: 24, padding: 0,
        fontFamily: "inherit", display: "flex", alignItems: "center", gap: 6,
      }}>\u2190 Back to Tools</button>

      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <span style={{ fontSize: 32, color: tool.color }}>{tool.icon}</span>
        <h1 style={{
          fontSize: 32, fontWeight: 800, color: "#fff", margin: 0,
          fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "-0.02em",
        }}>{tool.name}</h1>
      </div>
      <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, margin: "0 0 32px", lineHeight: 1.6 }}>{tool.desc}</p>

      <div style={{
        background: "rgba(255,255,255,0.02)", borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden",
      }}>
        <div style={{ padding: 20 }}>
          <textarea
            value={input} onChange={e => setInput(e.target.value)}
            placeholder={tool.placeholder}
            style={{
              width: "100%", minHeight: 180, background: "transparent",
              border: "none", outline: "none", color: "#fff", fontSize: 15,
              lineHeight: 1.7, resize: "vertical", fontFamily: "'DM Sans', sans-serif",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{
          padding: "12px 20px", borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            {input.length > 0 ? `${input.split(/\s+/).filter(Boolean).length} words` : ""}
          </span>
          <button onClick={handleSubmit} disabled={!input.trim() || loading}
            style={{
              background: loading ? "rgba(255,255,255,0.1)" : `linear-gradient(135deg, ${tool.color}, ${tool.color}dd)`,
              color: "#fff", border: "none", borderRadius: 10, padding: "10px 24px",
              fontSize: 14, fontWeight: 600, cursor: loading ? "wait" : "pointer",
              fontFamily: "inherit", opacity: !input.trim() ? 0.4 : 1,
              transition: "all 0.2s",
            }}
          >{loading ? "Processing..." : tool.buttonText}</button>
        </div>
      </div>

      {output && (
        <div style={{
          marginTop: 24, background: "rgba(255,255,255,0.02)", borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden",
        }}>
          <div style={{
            padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: tool.color }}>Result</span>
            <button onClick={handleCopy} style={{
              background: "rgba(255,255,255,0.06)", border: "none", borderRadius: 6,
              padding: "6px 14px", fontSize: 12, color: "rgba(255,255,255,0.6)",
              cursor: "pointer", fontFamily: "inherit",
            }}>{copied ? "\u2713 Copied" : "Copy"}</button>
          </div>
          <div style={{
            padding: 20, color: "rgba(255,255,255,0.85)", fontSize: 15,
            lineHeight: 1.8, whiteSpace: "pre-wrap",
          }}>{output}</div>
        </div>
      )}
    </section>
  );
}

function ToolsPage({ setCurrentPage }) {
  return (
    <section style={{
      minHeight: "100vh", padding: "112px 24px 60px",
      maxWidth: 900, margin: "0 auto", fontFamily: "'DM Sans', sans-serif",
    }}>
      <h1 style={{
        fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 8, textAlign: "center",
        fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "-0.02em",
      }}>AI Tools</h1>
      <p style={{
        color: "rgba(255,255,255,0.4)", fontSize: 16, textAlign: "center",
        marginBottom: 48, lineHeight: 1.6,
      }}>Professional-grade AI tools, free and instant.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {TOOLS.map(t => (
          <div key={t.id} onClick={() => setCurrentPage(t.id)}
            style={{
              background: "rgba(255,255,255,0.02)", borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.06)", padding: 28,
              cursor: "pointer", transition: "all 0.3s",
            }}
          >
            <div style={{
              width: 48, height: 48, borderRadius: 12, marginBottom: 16,
              background: t.color + "15", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, color: t.color,
            }}>{t.icon}</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 8px" }}>{t.name}</h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>{t.desc}</p>
            <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: t.color }}>Use tool \u2192</div>
          </div>
        ))}

        <div style={{
          background: "rgba(255,255,255,0.01)", borderRadius: 16,
          border: "1px dashed rgba(255,255,255,0.08)", padding: 28,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", minHeight: 200,
        }}>
          <div style={{ fontSize: 28, marginBottom: 12, opacity: 0.3 }}>+</div>
          <div style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.3)" }}>More tools coming soon</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", marginTop: 4 }}>Stay tuned</div>
        </div>
      </div>
    </section>
  );
}

function PricingPage() {
  return (
    <section style={{
      minHeight: "100vh", padding: "112px 24px 60px",
      maxWidth: 1000, margin: "0 auto", fontFamily: "'DM Sans', sans-serif",
    }}>
      <h1 style={{
        fontSize: 40, fontWeight: 800, color: "#fff", marginBottom: 8, textAlign: "center",
        fontFamily: "'Instrument Serif', Georgia, serif", letterSpacing: "-0.02em",
      }}>Simple Pricing</h1>
      <p style={{
        color: "rgba(255,255,255,0.4)", fontSize: 16, textAlign: "center",
        marginBottom: 48, lineHeight: 1.6,
      }}>Start free. Upgrade when you need more.</p>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 16, alignItems: "start",
      }}>
        {PLANS.map(plan => (
          <div key={plan.name} style={{
            background: plan.highlighted ? "rgba(99,102,241,0.06)" : "rgba(255,255,255,0.02)",
            borderRadius: 20, padding: 32,
            border: plan.highlighted ? "1px solid rgba(99,102,241,0.25)" : "1px solid rgba(255,255,255,0.06)",
            position: "relative",
          }}>
            {plan.highlighted && (
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #6366f1, #4f46e5)", color: "#fff",
                fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: 100,
                textTransform: "uppercase", letterSpacing: "0.05em",
              }}>Most Popular</div>
            )}
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", margin: "0 0 4px" }}>{plan.name}</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, margin: "16px 0 24px" }}>
              <span style={{ fontSize: 44, fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>{plan.price}</span>
              <span style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>{plan.period}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {plan.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ color: "#6366f1", fontSize: 14 }}>\u2713</span>
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{f}</span>
                </div>
              ))}
            </div>
            <button style={{
              width: "100%", padding: "12px 0", borderRadius: 10, fontSize: 14, fontWeight: 600,
              cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s",
              background: plan.highlighted ? "linear-gradient(135deg, #6366f1, #4f46e5)" : "rgba(255,255,255,0.06)",
              color: "#fff", border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.08)",
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
      padding: "48px 24px", borderTop: "1px solid rgba(255,255,255,0.04)",
      textAlign: "center", fontFamily: "'DM Sans', sans-serif",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 16 }}>
        <div style={{
          width: 24, height: 24, borderRadius: 6,
          background: "linear-gradient(135deg, #6366f1, #0ea5e9)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, color: "#fff",
        }}>I</div>
        <span style={{ fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>InstrTek</span>
      </div>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", margin: 0 }}>
        \u00A9 2026 InstrTek. All rights reserved.
      </p>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [currentPage]);

  const tool = TOOLS.find(t => t.id === currentPage);

  return (
    <div style={{ minHeight: "100vh", background: "#08080f", color: "#fff" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #08080f; }
        textarea::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <HeroSection setCurrentPage={setCurrentPage} />}
      {currentPage === "tools" && <ToolsPage setCurrentPage={setCurrentPage} />}
      {currentPage === "pricing" && <PricingPage />}
      {tool && <ToolPage tool={tool} setCurrentPage={setCurrentPage} />}
      <Footer />
    </div>
  );
}

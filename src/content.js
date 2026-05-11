export const painPoints = [
  "Multiple test specification versions make manual comparison error-prone",
  "Supplier test reports use inconsistent formats and slow down review",
  "8D and quality reports take too long to write and are hard to reuse",
  "Engineering documents are scattered, making onboarding and search inefficient",
];

export const valueProps = [
  {
    title: "Reduce manual document checking time",
    text: "Automatically identify Test Items, parameters, standards, Acceptance Criteria, and version differences.",
  },
  {
    title: "Lower quality and validation omission risk",
    text: "Detect missing tests, parameter inconsistencies, acceptance criteria changes, and potential quality risks.",
  },
  {
    title: "Support local and private deployment",
    text: "Protect core process, test, and quality data with Local Deployment and Private Cloud options.",
  },
];

export const solutions = [
  {
    tag: "Comparison",
    titleEn: "AI Test Document Comparison",
    titleZh: "Specification and test-flow difference analysis",
    desc: "Automatically read PDF, Word, Excel, image, and scanned documents; extract test items, test conditions, parameter ranges, and acceptance criteria; then compare differences between two document versions or document types.",
    features: ["Extract test items automatically", "Identify test conditions and parameters", "Compare new and old document versions", "Detect missing, modified, and newly added items", "Generate Excel difference tables", "Generate risk levels and recommended actions"],
    scenes: ["Engineering specification vs manufacturing test file", "New specification version vs old specification version", "Supplier test report vs customer requirement", "FAT / SAT document checks", "Validation / Qualification document review"],
  },
  {
    tag: "Quality",
    titleEn: "AI Quality Report & 8D Assistant",
    titleZh: "Quality issue analysis and report drafting",
    desc: "Input defect descriptions, test data, images, field notes, and operator remarks. The AI generates issue summaries, preliminary Root Cause analysis, containment actions, corrective actions, and 8D report drafts.",
    features: ["Generate quality issue summaries", "Draft preliminary Root Cause analysis", "Generate 8D report drafts", "Suggest CAPA actions", "Create customer-facing English emails", "Structure historical issue knowledge"],
    scenes: ["Customer complaint analysis", "Supplier quality issues", "Manufacturing process abnormalities", "Test failure analysis", "Quality weekly and monthly reports"],
  },
  {
    tag: "Knowledge Base",
    titleEn: "Manufacturing Knowledge Base Agent",
    titleZh: "Engineering knowledge search and traceability",
    desc: "Import SOPs, test specifications, equipment manuals, maintenance records, historical issues, and quality reports into an enterprise knowledge base. Engineers can query in natural language and trace answers back to source files.",
    features: ["Internal engineering document knowledge base", "Natural language Q&A", "Source document traceability", "Engineering terminology library", "New employee onboarding support", "Local server and Private Cloud deployment"],
    scenes: ["SOP search", "Equipment maintenance knowledge search", "Test specification search", "Historical quality issue reuse", "Engineering experience capture"],
  },
];

export const scenarios = [
  { title: "Test specification change management", problem: "Differences between new and old versions are hard to find, and manual checks can miss details.", solution: "AI extracts differences automatically and generates a change summary." },
  { title: "Supplier test report review", problem: "Supplier reports use inconsistent formats, making it hard to judge compliance.", solution: "AI compares customer requirements with supplier reports automatically." },
  { title: "FAT / SAT document preparation", problem: "Acceptance document preparation for automation equipment is time-consuming.", solution: "AI generates checklists, risk points, and acceptance report drafts." },
  { title: "Quality issue analysis", problem: "8D reports, CAPA actions, and issue summaries take too long to write.", solution: "AI drafts quality reports from test data and field notes." },
  { title: "SOP and equipment manual search", problem: "Engineering files are scattered, and new team members struggle to find answers.", solution: "An AI engineering knowledge base supports natural language search." },
  { title: "Engineering experience capture", problem: "Senior engineers' experience is scattered across emails, Excel files, and reports.", solution: "AI structures historical issues, test logic, and troubleshooting experience." },
];

export const demoRows = [
  { item: "Voltage Test", a: "5V +/- 0.2V", b: "5V +/- 0.5V", risk: "Medium" },
  { item: "Leakage Test", a: "Required", b: "Missing", risk: "High" },
  { item: "Temperature Test", a: "60°C", b: "70°C", risk: "Medium" },
];

export const architectureLayers = [
  { title: "PDF / Word / Excel / Image", text: "Support PDF, Word, Excel, image, and scanned document inputs." },
  { title: "Document Parser & OCR", text: "Parse document structure, tables, image text, and scanned file content." },
  { title: "Structured Test Item Extraction", text: "Extract test items, parameters, standards, test conditions, and risk points." },
  { title: "Manufacturing Rule Layer", text: "Apply test logic, quality rules, engineering terminology, and industry templates." },
  { title: "AI Agent Comparison & Reasoning", text: "Compare differences, assess risk, summarize results, and generate reports." },
  { title: "Excel / Word / PDF / Dashboard Output", text: "Export to Excel, Word, PDF, dashboard views, and email-ready summaries." },
  { title: "Cloud / Private Cloud / Local Deployment", text: "Support cloud, private cloud, and local server deployment." },
];

export const servicePackages = [
  {
    name: "AI Workflow Diagnosis",
    fit: "For early AI exploration",
    price: "Scoped after discovery",
    items: ["Business workflow interviews", "Document sample analysis", "AI opportunity mapping", "PoC proposal", "Initial ROI assessment"],
  },
  {
    name: "PoC Validation Package",
    fit: "For small-scale pilots",
    price: "Built for pilot projects",
    items: ["1-2 document types connected", "AI extraction template setup", "Difference report template", "Demo system", "Result review meeting"],
  },
  {
    name: "Private Deployment System",
    fit: "For ongoing enterprise use",
    price: "Scoped by deployment range",
    items: ["Local server / Private Cloud deployment", "User permissions", "Document management", "AI knowledge base", "Report templates", "Training and maintenance"],
  },
];

export const resources = [
  { type: "Guide", title: "How manufacturing teams can start with AI document automation", desc: "Start from frequent, low-risk, sanitizable document workflows to build the first measurable AI ROI." },
  { type: "Analysis", title: "Why test specification comparison is a strong AI Agent use case", desc: "Test item extraction, parameter comparison, and risk summaries fit naturally into structured Agent workflows." },
  { type: "Checklist", title: "What factories should consider before local LLM deployment", desc: "Evaluate data security, permissions, audit requirements, model integration, and maintenance costs." },
];

export const roadmap = [
  { phase: "Phase 1", title: "Document Comparison Demo", text: "Upload Document A and Document B, extract test items, and generate a difference report." },
  { phase: "Phase 2", title: "Quality Report Generation", text: "Enter issue descriptions, test data, and images to generate an 8D report draft." },
  { phase: "Phase 3", title: "Engineering Knowledge Base", text: "Upload SOPs, manuals, and specifications to build a knowledge base with natural language Q&A." },
  { phase: "Phase 4", title: "Local Deployment Version", text: "Add enterprise users, permissions, local model integration, private storage, and audit logs." },
];

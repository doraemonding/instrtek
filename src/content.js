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
    title: "Lower review omission exposure",
    text: "Assist engineers in finding missing tests, parameter inconsistencies, acceptance criteria changes, and items requiring further review.",
  },
  {
    title: "Support controlled deployment options",
    text: "Support on-premise and private cloud options for teams with internal data management requirements.",
  },
];

export const platformSignals = [
  {
    kicker: "Enterprise workflow",
    title: "From documents to review drafts",
    text: "A focused workflow for parsing test files, comparing requirements, and preparing review-ready engineering drafts.",
  },
  {
    kicker: "Manufacturing context",
    title: "Built around quality language",
    text: "Designed for Test Items, Acceptance Criteria, FAT / SAT, Validation, Qualification, CAPA, and 8D workflows.",
  },
  {
    kicker: "Deployment options",
    title: "Controlled deployment options",
    text: "Positioned for private cloud and on-premise options when teams have internal process, test, and quality data requirements.",
  },
  {
    kicker: "PoC ready",
    title: "Clear path to a demo",
    text: "Start with a narrow document comparison pilot before expanding into quality reports and knowledge-base agents.",
  },
];

export const solutions = [
  {
    tag: "Comparison",
    titleEn: "AI Test Document Comparison",
    titleZh: "Specification and test-flow difference analysis",
    desc: "Assist with reading PDF, Word, Excel, image, and scanned documents; extract test items, test conditions, parameter ranges, and acceptance criteria; then compare differences between two document versions or document types.",
    features: ["Assist with test item extraction", "Identify test conditions and parameters", "Compare new and old document versions", "Find missing, modified, and newly added items", "Prepare Excel difference tables", "Prepare review priority labels and suggested actions"],
    scenes: ["Engineering specification vs manufacturing test file", "New specification version vs old specification version", "Supplier test report vs customer requirement", "FAT / SAT document checks", "Validation / Qualification document review"],
  },
  {
    tag: "Quality",
    titleEn: "AI Quality Report & 8D Assistant",
    titleZh: "Quality issue analysis and report drafting",
    desc: "Input issue descriptions, test data, images, field notes, and operator remarks. The workflow prepares issue summaries, preliminary Root Cause analysis, containment actions, corrective actions, and 8D report drafts for engineer review.",
    features: ["Prepare quality issue summaries", "Draft preliminary Root Cause analysis", "Prepare 8D report drafts", "Suggest CAPA draft actions", "Create English communication drafts", "Structure historical issue knowledge"],
    scenes: ["Customer issue analysis", "Supplier quality issues", "Manufacturing process deviations", "Test result review", "Quality weekly and monthly reports"],
  },
  {
    tag: "Knowledge Base",
    titleEn: "Manufacturing Knowledge Base Assistant",
    titleZh: "Engineering knowledge search and traceability",
    desc: "Import SOPs, test specifications, equipment manuals, maintenance records, historical issues, and quality reports into an enterprise knowledge base. Engineers can query in natural language and trace answers back to source files.",
    features: ["Internal engineering document knowledge base", "Natural language Q&A", "Source document traceability", "Engineering terminology library", "New employee onboarding support", "On-premise and private cloud options"],
    scenes: ["SOP search", "Equipment maintenance knowledge search", "Test specification search", "Historical quality issue reuse", "Engineering experience capture"],
  },
];

export const scenarios = [
  { title: "Test specification change management", problem: "Differences between new and old versions are hard to find, and manual checks can miss details.", solution: "AI-assisted workflows extract differences and prepare a change summary draft." },
  { title: "Supplier test report review", problem: "Supplier reports use inconsistent formats, making requirement review time-consuming.", solution: "AI-assisted workflows compare customer requirements with supplier reports for engineer review." },
  { title: "FAT / SAT document preparation", problem: "Acceptance document preparation for automation equipment is time-consuming.", solution: "AI-assisted workflows prepare checklists, attention points, and acceptance report drafts." },
  { title: "Quality issue analysis", problem: "8D reports, CAPA actions, and issue summaries take too long to write.", solution: "AI-assisted workflows draft quality reports from test data and field notes." },
  { title: "SOP and equipment manual search", problem: "Engineering files are scattered, and new team members struggle to find answers.", solution: "An AI engineering knowledge base supports natural language search." },
  { title: "Engineering experience capture", problem: "Senior engineers' experience is scattered across emails, Excel files, and reports.", solution: "AI-assisted workflows structure historical issues, test logic, and troubleshooting experience." },
];

export const demoRows = [
  { item: "Voltage Test", a: "5V +/- 0.2V", b: "5V +/- 0.5V", priority: "Medium" },
  { item: "Leakage Test", a: "Required", b: "Missing", priority: "High" },
  { item: "Temperature Test", a: "60°C", b: "70°C", priority: "Medium" },
];

export const architectureLayers = [
  { title: "PDF / Word / Excel / Image", text: "Support PDF, Word, Excel, image, and scanned document inputs." },
  { title: "Document Parser & OCR", text: "Parse document structure, tables, image text, and scanned file content." },
  { title: "Structured Test Item Extraction", text: "Extract test items, parameters, standards, test conditions, and attention points." },
  { title: "Manufacturing Rule Layer", text: "Apply test logic, quality rules, engineering terminology, and industry templates." },
  { title: "AI-assisted Comparison & Review", text: "Compare differences, prepare review labels, summarize results, and draft reports." },
  { title: "Excel / Word / PDF / Dashboard Output", text: "Export to Excel, Word, PDF, dashboard views, and communication-ready summaries." },
  { title: "Cloud / Private Cloud / On-premise Option", text: "Support cloud, private cloud, and on-premise deployment options after assessment." },
];

export const servicePackages = [
  {
    name: "AI-assisted Workflow Assessment",
    fit: "For early AI exploration",
    price: "Scoped after discovery",
    items: ["Business workflow interviews", "Document sample analysis", "Workflow opportunity mapping", "PoC proposal", "Initial ROI estimate"],
  },
  {
    name: "PoC Validation Package",
    fit: "For small-scale pilots",
    price: "Built for pilot projects",
    items: ["1-2 document types connected", "AI extraction template setup", "Difference report template", "Demo system", "Result review meeting"],
  },
  {
    name: "Controlled Deployment System",
    fit: "For ongoing enterprise use",
    price: "Scoped by deployment range",
    items: ["On-premise / private cloud option", "User permissions", "Document management", "Engineering knowledge base", "Report templates", "Training and maintenance"],
  },
];

export const resources = [
  { type: "Guide", title: "How manufacturing teams can start with AI-assisted document workflows", desc: "Start from frequent, low-sensitivity, sanitizable document workflows to build the first measurable pilot." },
  { type: "Analysis", title: "Why test specification comparison fits AI-assisted review", desc: "Test item extraction, parameter comparison, and review summaries fit naturally into structured workflow support." },
  { type: "Checklist", title: "What factories should consider before on-premise model deployment", desc: "Evaluate data management, permissions, operation records, model integration, and maintenance costs." },
];

export const roadmap = [
  { phase: "Phase 1", title: "Document Comparison Demo", text: "Upload Document A and Document B, extract test items, and prepare a difference report draft." },
  { phase: "Phase 2", title: "Quality Report Drafting", text: "Enter issue descriptions, test data, and images to prepare an 8D report draft." },
  { phase: "Phase 3", title: "Engineering Knowledge Base", text: "Upload SOPs, manuals, and specifications to build a knowledge base with natural language Q&A." },
  { phase: "Phase 4", title: "On-premise Deployment Option", text: "Add enterprise users, permissions, approved model integration, internal storage, and operation records." },
];

import SectionHeader from "./SectionHeader";

const metrics = [
  { value: "1", label: "System of record", sub: "Replacing fragmented spreadsheets" },
  { value: "100%", label: "Lifecycle visibility", sub: "Across every intake stage" },
  { value: "8", label: "Workflow modules", sub: "Unified into one platform" },
  { value: "24/7", label: "Auditability", sub: "Activity logged, role-aware" },
];

const outcomes = [
  "Replaced fragmented spreadsheet workflows with a single system of record",
  "Centralized intake operations across multiple clinics and roles",
  "Improved referral visibility across every lifecycle stage",
  "Reduced operational ambiguity with standardized status controls",
  "Improved handoff between intake and clinical workflows",
  "Created auditability and accountability through activity logging",
  "Built infrastructure designed to scale with the organization",
  "Transformed intake from a manual process into a structured system",
];

const Impact = () => (
  <section id="impact" className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="06 · Business Impact"
        title="Operational outcomes, measured strategically."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="card-elevated rounded-2xl border border-border/60 p-7 relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/15 transition-colors" />
            <div className="relative">
              <div className="text-4xl font-semibold tracking-tight text-gradient-accent">{m.value}</div>
              <div className="mt-3 text-sm font-medium">{m.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 card-elevated rounded-2xl border border-border/60 p-8 md:p-10">
        <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-6">Outcomes</div>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          {outcomes.map((o, i) => (
            <div key={o} className="flex items-start gap-4 text-sm">
              <span className="font-mono text-[10px] text-primary mt-1 w-6">{String(i + 1).padStart(2, "0")}</span>
              <span className="leading-relaxed">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Impact;

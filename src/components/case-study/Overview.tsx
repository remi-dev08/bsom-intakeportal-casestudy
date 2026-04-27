import SectionHeader from "./SectionHeader";

const roles = [
  "Product Architect", "UX/UI Designer", "Frontend Engineer", "Systems Strategist", "Operations Consultant",
];

const lifecycle = [
  "Workflow analysis", "Process mapping", "Product strategy", "UI/UX design",
  "Frontend development", "Backend architecture", "Data modeling", "Deployment", "Stakeholder iteration",
];

const Overview = () => (
  <section className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="01 · Overview"
        title="A system of record for intake operations."
        description="What started as a simple referral tracker evolved into a full operational platform supporting intake, assessments, referral lifecycle management, analytics, and team coordination — built as a real business-critical internal tool for a growing ABA healthcare organization."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        <div className="card-elevated rounded-2xl p-8 border border-border/60">
          <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">My Role</div>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <span key={r} className="px-3 py-1.5 rounded-full text-xs font-medium bg-secondary border border-border/60">
                {r}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            I owned the full product lifecycle — from operational discovery and process mapping to product strategy,
            interface design, frontend implementation, and stakeholder iteration in production.
          </p>
        </div>

        <div className="card-elevated rounded-2xl p-8 border border-border/60">
          <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">Lifecycle Owned</div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {lifecycle.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-sm">
                <span className="font-mono text-[10px] text-muted-foreground w-5">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Overview;

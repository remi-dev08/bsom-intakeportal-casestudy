import SectionHeader from "./SectionHeader";

const layers = [
  {
    label: "Client",
    color: "primary",
    items: ["React + Vite SPA", "Responsive UI architecture", "Role-aware routing"],
  },
  {
    label: "Auth & Access",
    color: "accent",
    items: ["Supabase Auth", "Role-based access control", "Activity logging"],
  },
  {
    label: "Application Layer",
    color: "primary",
    items: ["AWS App Runner", "API services", "Workflow orchestration"],
  },
  {
    label: "Data Layer",
    color: "accent",
    items: ["PostgreSQL on AWS RDS", "Audit-friendly schema", "Document storage"],
  },
];

const Architecture = () => (
  <section id="architecture" className="py-28 border-t border-border/60 relative">
    <div className="absolute inset-0 bg-dots opacity-30 mask-fade-b pointer-events-none" />
    <div className="container relative">
      <SectionHeader
        eyebrow="04 · Product Architecture"
        title="Designed for trust, scale, and accountability."
        description="A four-layer architecture optimized for healthcare-grade reliability and operational auditability."
      />

      <div className="mt-16 max-w-4xl mx-auto space-y-3">
        {layers.map((layer, i) => (
          <div key={layer.label} className="card-elevated rounded-2xl border border-border/60 p-6 relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-${layer.color}`} />
            <div className="flex items-start gap-6">
              <div className="font-mono text-xs text-muted-foreground shrink-0 w-10">L{i + 1}</div>
              <div className="flex-1 grid sm:grid-cols-3 gap-4 items-center">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Layer</div>
                  <div className="font-semibold mt-1">{layer.label}</div>
                </div>
                <div className="sm:col-span-2 flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span key={item} className="px-2.5 py-1 text-xs rounded-md bg-secondary border border-border/60 text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground text-center mb-8">
          Tech Stack
        </div>
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {[
            "React", "Vite", "TypeScript", "Supabase Auth", "PostgreSQL",
            "AWS App Runner", "AWS RDS", "Vercel", "RBAC", "Responsive UI",
          ].map((tech) => (
            <div key={tech} className="px-4 py-2 rounded-lg border border-border/60 bg-card/60 backdrop-blur text-sm font-medium hover:border-primary/40 hover:text-primary transition-colors">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Architecture;

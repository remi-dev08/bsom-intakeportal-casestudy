import SectionHeader from "./SectionHeader";

const layers = [
  { label: "Client", accent: "bg-primary", items: ["Role-aware routing"] },
  { label: "Auth & Access", accent: "bg-accent", items: ["Role-based access control", "Activity logging"] },
  { label: "Application Layer", accent: "bg-primary", items: ["API services", "Workflow orchestration"] },
  { label: "Data Layer", accent: "bg-accent", items: ["Audit-friendly schema", "Document storage"] },
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
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${layer.accent}`} />
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
    </div>
  </section>
);

export default Architecture;
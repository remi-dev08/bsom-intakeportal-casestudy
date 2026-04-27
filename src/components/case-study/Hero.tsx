import DashboardMockup from "./DashboardMockup";

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-grid mask-fade-b opacity-40 pointer-events-none" />
    <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

    <div className="container relative">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/40 text-xs font-mono text-muted-foreground mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          Case Study · Internal Operations Platform · 2024
        </div>
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
          BSOM Intake Portal
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Transforming behavioral healthcare intake operations through custom internal software —
          replacing fragmented spreadsheets with a centralized system of record.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
          {[
            { k: "Role", v: "Product Architect" },
            { k: "Industry", v: "ABA Healthcare" },
            { k: "Surface", v: "Internal Web App" },
            { k: "Status", v: "In Production" },
          ].map((m) => (
            <div key={m.k}>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{m.k}</div>
              <div className="mt-1 text-sm font-medium">{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 relative animate-float">
        <div className="absolute -inset-4 rounded-3xl opacity-60 blur-2xl pointer-events-none" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative">
          <DashboardMockup />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

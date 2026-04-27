import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import DemoPreviewModal from "./DemoPreviewModal";

const Reflection = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section id="contact" className="py-28 border-t border-border/60 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-primary mb-6">
            <span className="h-px w-6 bg-primary/60" />
            07 · Final Reflection
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient leading-[1.05]">
            What began as a referral tracker became an internal system of record.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            BSOM Intake Portal demonstrates how thoughtful product architecture can transform a manual,
            fragmented operation into a scalable, auditable platform. One that serves operators, clinicians,
            and the families they care for.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://www.zanteriawells.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors">
              Discuss a project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/60 backdrop-blur font-medium hover:border-primary/40 hover:text-primary transition-colors"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>

      <footer className="container relative mt-28 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-md bg-gradient-to-br from-primary to-accent" />
          <span>BSOM Intake Portal · Case Study</span>
        </div>
        <div className="font-mono">© 2026 — Built for Behavioral Solutions of Mississippi</div>
      </footer>

      <DemoPreviewModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
};

export default Reflection;

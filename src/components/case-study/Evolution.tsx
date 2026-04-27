import { ArrowRight, FileSpreadsheet, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";

const Evolution = () => (
  <section className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="05 · Evolution"
        title="From spreadsheet to system."
        description="Internal tools rarely start as products. This one earned its way there — driven by real operational pain and iterative validation."
      />

      <div className="mt-16 grid lg:grid-cols-[1fr_auto_1fr] items-stretch gap-6">
        <div className="card-elevated rounded-2xl border border-border/60 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <FileSpreadsheet className="h-7 w-7 text-muted-foreground mb-4" />
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Before</div>
            <h3 className="text-2xl font-semibold mt-1 mb-4">Manual Operations</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>· Multiple disconnected spreadsheets</li>
              <li>· Email-based status updates</li>
              <li>· Manual handoff coordination</li>
              <li>· No reporting layer</li>
              <li>· Tribal knowledge dependencies</li>
            </ul>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center px-2">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent relative">
            <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
          </div>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative">
            <Layers className="h-7 w-7 text-primary mb-4" />
            <div className="text-[10px] font-mono uppercase tracking-wider text-primary">After</div>
            <h3 className="text-2xl font-semibold mt-1 mb-4">Operational Platform</h3>
            <ul className="space-y-2 text-sm">
              <li>· Centralized system of record</li>
              <li>· Live referral lifecycle tracking</li>
              <li>· Standardized clinical handoff</li>
              <li>· Operational reporting dashboards</li>
              <li>· Auditable, role-based, scalable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Evolution;

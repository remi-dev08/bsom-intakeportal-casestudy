import {
  LayoutDashboard, GitBranch, UserCheck, BarChart3,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: LayoutDashboard, title: "Intake Dashboard", desc: "A single view for active referrals, pending paperwork, and follow-ups." },
  { icon: GitBranch, title: "Referral Lifecycle", desc: "Move referrals through each stage with clear status controls and history." },
  { icon: UserCheck, title: "BCBA Assignment", desc: "Standardized handoffs that reduce manual errors in clinical assignment." },
  { icon: BarChart3, title: "Operations Dashboard", desc: "Visibility into referral aging, clinic volume, and conversion trends." },
];

const Features = () => (
  <section id="features" className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="03 · Core Features"
        title="Four pillars. One operational backbone."
        description="A snapshot of the modules that remove the most friction from day-to-day intake operations."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden border border-border/60">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <div key={title} className="group relative p-7 bg-card hover:bg-secondary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">/ {String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-base font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;

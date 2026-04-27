import {
  LayoutDashboard, GitBranch, ClipboardList, UserCheck,
  BarChart3, Lock, ScrollText, FileLock2,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  { icon: LayoutDashboard, title: "Intake Dashboard", desc: "Track active referrals, pending paperwork, insurance verification, and non-responsive clients in one place." },
  { icon: GitBranch, title: "Referral Lifecycle", desc: "Move referrals through each intake stage with clear status controls, audit history, and centralized records." },
  { icon: ClipboardList, title: "Assessment Workflow", desc: "Track parent interviews, assessments, treatment plans, and readiness across the clinical handoff pipeline." },
  { icon: UserCheck, title: "BCBA Assignment", desc: "Standardized assignment workflows that reduced manual errors in clinical handoff coordination." },
  { icon: BarChart3, title: "Operations Dashboard", desc: "Visibility into referral aging, clinic volume, intake performance, and conversion trends." },
  { icon: Lock, title: "Role-Based Access", desc: "Secure internal access with role-aware permissions for intake and admin users." },
  { icon: ScrollText, title: "Activity Logging", desc: "Audit-friendly action logging for accountability and operational traceability." },
  { icon: FileLock2, title: "Document Management", desc: "Secure upload and retrieval for client intake documents tied directly to records." },
];

const Features = () => (
  <section id="features" className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="03 · Core Features"
        title="Eight modules. One operational backbone."
        description="Each surface was designed to remove a specific operational friction point and together they form a coherent internal system."
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

import { AlertTriangle, CheckCircle2 } from "lucide-react";
import SectionHeader from "./SectionHeader";

const problems = [
  "Duplicate work across intake spreadsheets",
  "Poor visibility across referral stages",
  "Inconsistent status tracking",
  "Bottlenecks between intake and assessments",
  "No centralized source of truth",
  "No operational reporting",
  "Difficult handoff between team members",
];

const solutions = [
  "Centralized referral lifecycle tracking",
  "End-to-end intake workflow management",
  "Structured parent interview workflow",
  "Standardized BCBA assignment workflows",
  "Live operational reporting dashboards",
  "Role-based access & activity logging",
  "Secure document upload tied to records",
];

const ProblemSolution = () => (
  <section id="problem" className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="02 · Problem & Solution"
        title="From manual coordination to structured operations."
        description="The intake team was managing referrals, assessments, insurance verification, parent interviews, and scheduling across disconnected spreadsheets and manual follow-ups. The organization needed a centralized internal system."
      />

      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl p-8 border border-destructive/20 bg-destructive/[0.04]">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-9 w-9 rounded-lg bg-destructive/15 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Before</div>
              <h3 className="text-lg font-semibold">The Operational Reality</h3>
            </div>
          </div>
          <ul className="space-y-3">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-2 h-1 w-1 rounded-full bg-destructive/70 shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div id="solution" className="rounded-2xl p-8 border border-primary/30 bg-primary/[0.04] relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-lg bg-primary/15 flex items-center justify-center">
                <CheckCircle2 className="h-4 w-4 text-primary" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary">After</div>
                <h3 className="text-lg font-semibold">The Platform</h3>
              </div>
            </div>
            <ul className="space-y-3">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemSolution;

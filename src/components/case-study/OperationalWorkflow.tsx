import { Inbox, ClipboardCheck, Users, CalendarClock, LineChart } from "lucide-react";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    icon: Inbox,
    phase: "Step 01",
    title: "Referral Intake",
    description:
      "Inbound referrals are captured through a structured form, normalizing payer, diagnosis, and contact data into a single record.",
    actors: "Intake Coordinator",
  },
  {
    icon: ClipboardCheck,
    phase: "Step 02",
    title: "Eligibility & Triage",
    description:
      "Coordinators verify insurance, attach intake documents, and route the case based on region, acuity, and clinical fit.",
    actors: "Intake Coordinator · Supervisor",
  },
  {
    icon: Users,
    phase: "Step 03",
    title: "Clinical Assignment",
    description:
      "Supervisors match families to clinicians by capacity and credentials, with automated handoff notifications.",
    actors: "Supervisor",
  },
  {
    icon: CalendarClock,
    phase: "Step 04",
    title: "Scheduling & Onboarding",
    description:
      "Sessions are scheduled, intake packets are signed, and the family is moved into an active treatment status.",
    actors: "Clinician · Family",
  },
  {
    icon: LineChart,
    phase: "Step 05",
    title: "Reporting & Audit",
    description:
      "Every state change is timestamped and rolled up into operational dashboards for leadership review and compliance.",
    actors: "Leadership",
  },
];

const OperationalWorkflow = () => (
  <section className="py-28 border-t border-border/60">
    <div className="container">
      <SectionHeader
        eyebrow="06 · Operational Workflow"
        title="One referral, one lifecycle."
        description="The portal models the full intake journey as a single, auditable workflow — replacing a tangle of spreadsheets and email threads with a clear sequence of states."
      />

      <div className="mt-16 relative">
        <div className="hidden lg:block absolute left-0 right-0 top-[34px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <ol className="grid gap-6 lg:grid-cols-5">
          {steps.map(({ icon: Icon, phase, title, description, actors }, i) => (
            <li
              key={phase}
              className="relative card-elevated rounded-2xl border border-border/60 p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  {phase}
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>

              <div className="mt-5 pt-4 border-t border-border/60">
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                  Owner
                </div>
                <div className="text-xs text-foreground/80">{actors}</div>
              </div>

              <div className="absolute top-4 right-4 text-[10px] font-mono text-muted-foreground/60">
                0{i + 1}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default OperationalWorkflow;

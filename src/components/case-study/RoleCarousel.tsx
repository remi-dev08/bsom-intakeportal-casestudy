import { useState } from "react";
import { ChevronLeft, ChevronRight, Headphones, LineChart, Stethoscope } from "lucide-react";
import SectionHeader from "./SectionHeader";
import coordinatorImg from "@/assets/role-coordinator.jpg";
import supervisorImg from "@/assets/role-supervisor.jpg";
import clinicianImg from "@/assets/role-clinician.jpg";

const slides = [
  {
    id: "coordinator",
    role: "Intake Coordinator",
    icon: Headphones,
    image: coordinatorImg,
    summary:
      "The day-to-day operator's view. Built for speed, clarity, and zero context loss between referrals.",
    capabilities: [
      "Active referral pipeline by stage",
      "Insurance verification queue",
      "Parent interview scheduling",
      "Document upload tied to records",
      "Status updates with audit history",
    ],
    accent: "primary",
  },
  {
    id: "supervisor",
    role: "Operations Supervisor",
    icon: LineChart,
    image: supervisorImg,
    summary:
      "Operational visibility across clinics, teams, and conversion stages — the system of record made legible.",
    capabilities: [
      "Referral aging & cycle-time KPIs",
      "Clinic-level performance reporting",
      "Conversion funnel analytics",
      "Team workload distribution",
      "Activity & accountability logs",
    ],
    accent: "accent",
  },
  {
    id: "clinician",
    role: "BCBA Clinician",
    icon: Stethoscope,
    image: clinicianImg,
    summary:
      "A focused clinical surface for assigned caseload, assessments, and the handoff from intake to active care.",
    capabilities: [
      "Assigned client caseload",
      "Assessment progress tracking",
      "Treatment plan status",
      "Parent interview notes",
      "Secure document access",
    ],
    accent: "primary",
  },
];

const RoleCarousel = () => {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  const go = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const Icon = slide.icon;

  return (
    <section id="roles" className="py-28 border-t border-border/60 relative">
      <div className="container">
        <SectionHeader
          eyebrow="06 · Role-Based Surfaces"
          title="One platform. Three perspectives."
          description="Role-aware permissions tailor the interface to what each team member needs to see and act on — from frontline coordinators to clinical leads."
        />

        {/* Role tabs */}
        <div className="mt-12 flex flex-wrap gap-2 justify-center">
          {slides.map((s, i) => {
            const TabIcon = s.icon;
            const active = i === index;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all ${
                  active
                    ? "bg-primary/15 border-primary/40 text-foreground"
                    : "bg-card/60 border-border/60 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <TabIcon className={`h-3.5 w-3.5 ${active ? "text-primary" : ""}`} />
                {s.role}
              </button>
            );
          })}
        </div>

        {/* Slide */}
        <div className="mt-10 grid lg:grid-cols-[1.5fr_1fr] gap-6 items-stretch">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden card-elevated border border-border/80 shadow-2xl group">
            <div className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl pointer-events-none" style={{ background: "var(--gradient-glow)" }} />

            <div className="relative">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 h-9 border-b border-border/80 bg-secondary/40">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                </div>
                <div className="flex-1 mx-auto max-w-md">
                  <div className="h-5 rounded-md bg-background/60 border border-border/80 text-[10px] font-mono text-muted-foreground flex items-center justify-center">
                    portal.bsom.health/{slide.id}
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={`${slide.role} dashboard view`}
                  width={1600}
                  height={1024}
                  loading="lazy"
                  className="w-full h-auto block animate-fade-up"
                />
                {/* Role badge overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-border/80 text-xs font-medium">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {slide.role}
                </div>
              </div>
            </div>
          </div>

          {/* Detail panel */}
          <div key={slide.id} className="card-elevated rounded-2xl border border-border/60 p-8 flex flex-col animate-fade-up">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                  Role · {String(index + 1).padStart(2, "0")} of {String(slides.length).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold">{slide.role}</h3>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {slide.summary}
            </p>

            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Surface Capabilities
            </div>
            <ul className="space-y-2.5 flex-1">
              {slide.capabilities.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between pt-5 border-t border-border/60">
              <div className="flex items-center gap-1.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous role"
                  className="h-9 w-9 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next role"
                  className="h-9 w-9 rounded-lg border border-border bg-card hover:border-primary/40 hover:text-primary transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleCarousel;

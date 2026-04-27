import { Activity, BarChart3, FileText, Home, Inbox, Settings, Users } from "lucide-react";

const rows = [
  { name: "Avery Thompson", clinic: "Jackson, MS", stage: "Insurance Verified", age: "2d", status: "active" },
  { name: "Marcus Holloway", clinic: "Tupelo, MS", stage: "Awaiting Parent Interview", age: "4d", status: "pending" },
  { name: "Sienna Park", clinic: "Hattiesburg, MS", stage: "Assessment Scheduled", age: "1d", status: "active" },
  { name: "Jordan Reyes", clinic: "Gulfport, MS", stage: "BCBA Assigned", age: "3d", status: "active" },
  { name: "Elena Brooks", clinic: "Jackson, MS", stage: "Non-Responsive", age: "11d", status: "stale" },
  { name: "Kai Nakamura", clinic: "Oxford, MS", stage: "Treatment Plan Draft", age: "5d", status: "active" },
];

const statusStyles: Record<string, string> = {
  active: "bg-primary/15 text-primary border-primary/30",
  pending: "bg-accent/15 text-accent border-accent/30",
  stale: "bg-destructive/15 text-destructive border-destructive/30",
};

const DashboardMockup = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden card-elevated border border-border/80 shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 h-9 border-b border-border/80 bg-secondary/40">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
        </div>
        <div className="flex-1 mx-auto max-w-md">
          <div className="h-5 rounded-md bg-background/60 border border-border/80 text-[10px] font-mono text-muted-foreground flex items-center justify-center">
            portal.bsom.health/intake
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 min-h-[460px]">
        {/* Sidebar */}
        <aside className="col-span-2 hidden md:flex flex-col gap-1 p-3 border-r border-border/60 bg-background/40">
          <div className="flex items-center gap-2 px-2 py-2 mb-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent" />
            <span className="text-xs font-semibold">BSOM</span>
          </div>
          {[
            { icon: Home, label: "Overview" },
            { icon: Inbox, label: "Intake", active: true },
            { icon: Users, label: "Clients" },
            { icon: FileText, label: "Assessments" },
            { icon: BarChart3, label: "Reports" },
            { icon: Activity, label: "Activity" },
            { icon: Settings, label: "Settings" },
          ].map(({ icon: Icon, label, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] ${
                active ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="col-span-12 md:col-span-10 p-5 space-y-5">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Intake Dashboard</div>
              <h3 className="text-base font-semibold mt-1">Active Referrals</h3>
            </div>
            <div className="flex gap-2">
              <div className="h-7 px-3 rounded-md bg-secondary text-[11px] flex items-center text-muted-foreground border border-border/60">Filter</div>
              <div className="h-7 px-3 rounded-md bg-primary text-[11px] flex items-center text-primary-foreground font-medium">+ New Referral</div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Active Intakes", value: "147", delta: "+12%" },
              { label: "Pending Verification", value: "23", delta: "−8%" },
              { label: "Awaiting BCBA", value: "18", delta: "+3%" },
              { label: "Avg. Cycle Time", value: "6.4d", delta: "−1.2d" },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border border-border/60 bg-secondary/40 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.label}</div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-lg font-semibold">{k.value}</span>
                  <span className="text-[10px] font-mono text-primary">{k.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-lg border border-border/60 overflow-hidden">
            <div className="grid grid-cols-12 gap-2 px-3 py-2 text-[10px] uppercase tracking-wider text-muted-foreground bg-secondary/30 border-b border-border/60">
              <div className="col-span-4">Client</div>
              <div className="col-span-3">Clinic</div>
              <div className="col-span-3">Stage</div>
              <div className="col-span-1">Age</div>
              <div className="col-span-1 text-right">Status</div>
            </div>
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-12 gap-2 px-3 py-2.5 text-[11px] items-center border-b border-border/40 last:border-0 hover:bg-secondary/20 transition-colors">
                <div className="col-span-4 flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 text-[9px] flex items-center justify-center font-medium text-primary-foreground">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="font-medium">{r.name}</span>
                </div>
                <div className="col-span-3 text-muted-foreground">{r.clinic}</div>
                <div className="col-span-3 text-muted-foreground">{r.stage}</div>
                <div className="col-span-1 font-mono text-muted-foreground">{r.age}</div>
                <div className="col-span-1 flex justify-end">
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider border ${statusStyles[r.status]}`}>
                    {r.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardMockup;

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ eyebrow, title, description, align = "left" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
      <span className="h-px w-6 bg-primary/60" />
      {eyebrow}
    </div>
    <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-gradient">{title}</h2>
    {description && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeader;

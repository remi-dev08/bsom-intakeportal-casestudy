const Nav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center font-mono text-[11px] font-bold text-primary-foreground">
          B
        </div>
        <span className="font-semibold tracking-tight">BSOM Intake Portal</span>
        <span className="hidden sm:inline-flex ml-3 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border border-border text-muted-foreground">
          Case Study
        </span>
      </div>
      <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
        <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
        <a href="#solution" className="hover:text-foreground transition-colors">Solution</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#architecture" className="hover:text-foreground transition-colors">Architecture</a>
        <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
      </nav>
      <a href="https://www.zanteriawells.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium px-4 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors">
        Get in touch
      </a>
    </div>
  </header>
);

export default Nav;

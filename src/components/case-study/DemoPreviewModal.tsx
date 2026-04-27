import { ArrowUpRight, X } from "lucide-react";
import { useEffect } from "react";
import demoPreview from "@/assets/demo-preview.png";

interface Props {
  open: boolean;
  onClose: () => void;
}

const DEMO_URL = "https://new-demo-portal.vercel.app/";

const DemoPreviewModal = ({ open, onClose }: Props) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 animate-fade-up"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-preview-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-default"
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl card-elevated rounded-2xl border border-border/80 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60 bg-secondary/30">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <div className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <div className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </div>
            <div className="min-w-0">
              <div id="demo-preview-title" className="text-sm font-semibold truncate">
                BSOM Intake Portal — Live Demo
              </div>
              <div className="text-[10px] font-mono text-muted-foreground truncate">
                new-demo-portal.vercel.app
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Preview image */}
        <div className="relative bg-background">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative"
            aria-label="Open live demo in new tab"
          >
            <img
              src={demoPreview}
              alt="Preview of the BSOM Intake Portal demo"
              width={1366}
              height={768}
              className="w-full h-auto block"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium flex items-center gap-2">
                Open demo
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-5 py-4 border-t border-border/60 bg-secondary/20">
          <p className="text-xs text-muted-foreground">
            Interactive demo with sample data — no real client information.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-border bg-card hover:bg-secondary transition-colors"
            >
              Cancel
            </button>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View Live Demo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPreviewModal;

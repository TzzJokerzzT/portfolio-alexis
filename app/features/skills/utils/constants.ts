export const CATEGORY_STYLE: Record<
  string,
  { accent: string; shadow: string }
> = {
  Frontend: {
    accent: "bg-p5-red",
    shadow: "shadow-[6px_6px_0_0_#ff0000]",
  },
  Styling: {
    accent: "bg-fuchsia-500",
    shadow: "shadow-[6px_6px_0_0_#d946ef]",
  },
  Backend: {
    accent: "bg-emerald-500",
    shadow: "shadow-[6px_6px_0_0_#10b981]",
  },
  Testing: {
    accent: "bg-amber-500",
    shadow: "shadow-[6px_6px_0_0_#f59e0b]",
  },
  Tools: {
    accent: "bg-blue-500",
    shadow: "shadow-[6px_6px_0_0_#3b82f6]",
  },
  "Package Manager": {
    accent: "bg-orange-500",
    shadow: "shadow-[6px_6px_0_0_#f97316]",
  },
  Mobile: {
    accent: "bg-violet-500",
    shadow: "shadow-[6px_6px_0_0_#8b5cf6]",
  },
  IDE: {
    accent: "bg-cyan-500",
    shadow: "shadow-[6px_6px_0_0_#06b6d4]",
  },
};

export const FALLBACK_STYLE = {
  accent: "bg-p5-red",
  shadow: "shadow-[6px_6px_0_0_#ff0000]",
};

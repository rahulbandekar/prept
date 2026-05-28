import { cn } from "@/lib/utils";

export function Sk({ className }) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white/5 animate-pulse",
        className
      )}
    />
  );
}
"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center max-w-md">
        <span className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-3xl">
          ⚠️
        </span>
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-2xl tracking-tight text-stone-200">
            Something went wrong
          </h1>
          <p className="text-sm text-stone-500 font-light leading-relaxed">
            An unexpected error occurred. This has been logged and we&apos;ll
            look into it.
          </p>
          {error?.message && (
            <p className="text-xs text-stone-700 font-mono mt-1 px-4 py-2 rounded-lg bg-white/5 border border-white/8">
              {error.message}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={reset}>
            Try again
          </Button>
          <Button variant="gold" asChild>
            <a href="/">Go home</a>
          </Button>
        </div>
      </div>
    </main>
  );
}

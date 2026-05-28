import { Sk } from "@/components/ui/skeleton-shimmer";

export default function OnboardingLoading() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="w-full max-w-lg flex flex-col gap-8">
        <div className="flex flex-col gap-3 text-center items-center">
          <Sk className="h-3 w-16" />
          <Sk className="h-10 w-72" />
          <Sk className="h-4 w-56" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Sk className="h-40 rounded-2xl" />
          <Sk className="h-40 rounded-2xl" />
        </div>
        <Sk className="h-10 w-full rounded-lg" />
      </div>
    </main>
  );
}
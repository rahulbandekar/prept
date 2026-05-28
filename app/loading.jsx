import { Sk } from "@/components/ui/skeleton-shimmer";

export default function RootLoading() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center gap-6 px-6">
      <Sk className="h-3 w-20" />
      <Sk className="h-14 w-96 max-w-full" />
      <Sk className="h-5 w-72 max-w-full" />
      <div className="flex gap-3 mt-2">
        <Sk className="h-10 w-32 rounded-lg" />
        <Sk className="h-10 w-32 rounded-lg" />
      </div>
    </main>
  );
}

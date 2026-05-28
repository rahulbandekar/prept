import { Sk } from "@/components/ui/skeleton-shimmer";

export default function ExploreLoading() {
  return (
    <main className="min-h-screen bg-black">
      {/* Page header skeleton */}
      <div className="border-b border-white/8 px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-3">
          <Sk className="h-3 w-16" />
          <Sk className="h-10 w-72" />
          <Sk className="h-4 w-48 mt-1" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 xl:px-0 py-10 flex flex-col gap-8">
        {/* Search + filter bar */}
        <div className="flex flex-col gap-4">
          <Sk className="h-9 w-64 rounded-lg" />
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 8 }).map((_, i) => (
              <Sk key={i} className="h-8 w-20 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Count */}
        <Sk className="h-3 w-24" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#0f0f11] border border-white/10 rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <Sk className="w-12 h-12 rounded-xl shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                  <Sk className="h-4 w-32" />
                  <Sk className="h-3 w-24" />
                </div>
              </div>
              <Sk className="h-3 w-full" />
              <Sk className="h-3 w-3/4" />
              <div className="flex gap-2 flex-wrap">
                <Sk className="h-6 w-16 rounded-lg" />
                <Sk className="h-6 w-20 rounded-lg" />
              </div>
              <Sk className="h-9 w-full rounded-lg mt-1" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

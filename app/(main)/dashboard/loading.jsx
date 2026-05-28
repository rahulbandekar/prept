import { Sk } from "@/components/ui/skeleton-shimmer";

export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-black">
      {/* Page header */}
      <div className="border-b border-white/8 px-8 py-16">
        <div className="max-w-6xl mx-auto flex items-end justify-between">
          <div className="flex flex-col gap-3">
            <Sk className="h-3 w-32" />
            <Sk className="h-10 w-64" />
            <Sk className="h-4 w-40 mt-1" />
          </div>
          <div className="flex flex-col gap-2 items-end">
            <Sk className="h-3 w-20" />
            <Sk className="h-9 w-12" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-10">
        {/* Tabs bar */}
        <div className="flex gap-2 mb-8 bg-[#0f0f11] border border-white/10 rounded-xl p-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Sk key={i} className="h-9 flex-1 rounded-lg" />
          ))}
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#0f0f11] border border-white/10 rounded-2xl p-6 flex flex-col gap-3"
            >
              <Sk className="h-5 w-5 rounded-md" />
              <Sk className="h-10 w-16" />
              <Sk className="h-3 w-12" />
              <Sk className="h-3 w-24" />
            </div>
          ))}
        </div>

        {/* Withdrawal card */}
        <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-8 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Sk className="h-5 w-40" />
            <Sk className="h-3 w-56" />
          </div>
          <Sk className="h-9 w-36 rounded-lg" />
        </div>
      </div>
    </main>
  );
}

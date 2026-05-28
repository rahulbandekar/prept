import { Sk } from "@/components/ui/skeleton-shimmer";

export default function AppointmentsLoading() {
  return (
    <main className="min-h-screen bg-black">
      {/* Page header */}
      <div className="border-b border-white/8 px-8 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-3">
          <Sk className="h-3 w-24" />
          <Sk className="h-10 w-80" />
          <Sk className="h-4 w-56 mt-1" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 lg:px-0 py-8 flex flex-col gap-14">
        {/* Upcoming section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <Sk className="h-3 w-28" />
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <AppointmentCardSkeleton key={i} />
            ))}
          </div>
        </div>

        {/* Past section */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <Sk className="h-3 w-20" />
            <div className="flex-1 h-px bg-white/5" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <AppointmentCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

function AppointmentCardSkeleton() {
  return (
    <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sk className="w-10 h-10 rounded-xl shrink-0" />
          <div className="flex flex-col gap-2">
            <Sk className="h-4 w-28" />
            <Sk className="h-3 w-20" />
          </div>
        </div>
        <Sk className="h-6 w-20 rounded-full" />
      </div>
      <Sk className="h-px w-full" />
      <div className="flex flex-col gap-2">
        <Sk className="h-3 w-40" />
        <Sk className="h-3 w-32" />
      </div>
      <div className="flex gap-2 mt-1">
        <Sk className="h-8 w-24 rounded-lg" />
        <Sk className="h-8 w-24 rounded-lg" />
      </div>
    </div>
  );
}
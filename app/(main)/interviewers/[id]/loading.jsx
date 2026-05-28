import { Sk } from "@/components/ui/skeleton-shimmer";

export default function InterviewerProfileLoading() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero banner */}
      <section className="border-b border-white/8 px-8 pt-20 pb-14">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <Sk className="h-4 w-28 rounded-lg" />
          <div className="flex items-start gap-8">
            <Sk className="w-24 h-24 rounded-2xl shrink-0" />
            <div className="flex flex-col gap-3 pt-1 flex-1">
              <Sk className="h-10 w-64" />
              <Sk className="h-4 w-48" />
              <div className="flex gap-2 mt-1">
                <Sk className="h-6 w-28 rounded-full" />
                <Sk className="h-6 w-24 rounded-full" />
                <Sk className="h-6 w-20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        {/* Left */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* About */}
          <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
            <Sk className="h-3 w-12" />
            <Sk className="h-4 w-full" />
            <Sk className="h-4 w-5/6" />
            <Sk className="h-4 w-4/6" />
          </div>

          {/* Specialties */}
          <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-8 flex flex-col gap-4">
            <Sk className="h-3 w-20" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <Sk key={i} className="h-8 w-24 rounded-xl" />
              ))}
            </div>
          </div>

          {/* What to expect */}
          <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
            <Sk className="h-3 w-28" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <Sk className="w-10 h-10 rounded-xl shrink-0" />
                <div className="flex flex-col gap-2 flex-1 pt-1">
                  <Sk className="h-3 w-32" />
                  <Sk className="h-3 w-48" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — slot picker */}
        <div className="lg:col-span-2">
          <div className="bg-[#0f0f11] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
            <Sk className="h-5 w-32" />
            <Sk className="h-px w-full" />
            <Sk className="h-9 w-full rounded-lg" />
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <Sk key={i} className="h-10 rounded-xl" />
              ))}
            </div>
            <Sk className="h-10 w-full rounded-lg mt-2" />
          </div>
        </div>
      </div>
    </main>
  );
}

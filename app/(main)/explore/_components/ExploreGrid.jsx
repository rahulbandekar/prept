"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { CATEGORIES } from "@/lib/data";
import InterviewerCard from "./InterviewerCard";

export default function ExploreGrid({ interviewers }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return interviewers.filter((i) => {
      const matchesCategory =
        activeCategory === null || i.categories?.includes(activeCategory);

      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        i.name?.toLowerCase().includes(q) ||
        i.title?.toLowerCase().includes(q) ||
        i.company?.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [interviewers, activeCategory, search]);

  return (
    <div className="flex flex-col gap-8">
      {/* Filters bar */}
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative max-w-sm">
          <Search
            size={14}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-600 pointer-events-none"
          />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, title or company…"
            className="pl-9 bg-[#0f0f11] border-white/10 text-stone-100 placeholder:text-stone-600 text-sm"
          />
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.value;
            return (
              <button
                key={String(cat.value)}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`cursor-pointer text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
                  active
                    ? "border-amber-400/40 bg-amber-400/10 text-amber-400"
                    : "border-white/10 text-stone-500 hover:border-white/20 hover:text-stone-400"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Result count */}
      <p className="text-xs text-stone-600">
        {filtered.length === 0
          ? "No interviewers found"
          : `${filtered.length} interviewer${
              filtered.length === 1 ? "" : "s"
            } found`}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-28 flex flex-col items-center gap-5 text-center">
          <span className="w-16 h-16 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-2xl">
            🔍
          </span>
          <div>
            {interviewers.length === 0 ? (
              <>
                <p className="text-base text-stone-400 font-light">
                  No interviewers yet.
                </p>
                <p className="text-sm text-stone-600 mt-1">
                  Check back soon — new experts are joining every week.
                </p>
              </>
            ) : (
              <>
                <p className="text-base text-stone-400 font-light">
                  No interviewers match your filters.
                </p>
                <p className="text-sm text-stone-600 mt-1">
                  Try a different category or clear your search.
                </p>
              </>
            )}
          </div>
          {interviewers.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setActiveCategory(null);
                setSearch("");
              }}
              className="text-xs text-amber-400 hover:text-amber-300 transition-colors underline underline-offset-4"
            >
              Clear all filters
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((interviewer) => (
            <InterviewerCard key={interviewer.id} interviewer={interviewer} />
          ))}
        </div>
      )}
    </div>
  );
}

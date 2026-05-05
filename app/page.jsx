import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { CodeDemo } from "@/components/demo-components-animate-code";
import { GoldTitle, GrayTitle } from "@/components/reusables";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AVATARS } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black overflow-x-hidden">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 relative min-h-screen grid grid-cols-1 lg:grid-cols-5 px-4 sm:px-8 pb-20 overflow-hidden">
        <GravityStarsBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
        <div className="col-span-full lg:col-span-3 flex flex-col items-center justify-center text-center lg:-rotate-2">
          <Badge variant="gold"> Powered by AI - Now in Beta</Badge>
          <h1 className="font-serif relative text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-4xl">
            <GrayTitle>Ace your next interview</GrayTitle>
            <br />
            <GoldTitle>with real experts</GoldTitle>
          </h1>
          <p className="mt-6 text-sm sm:text-base md:text-lg text-stone-400 max-w-xl leading-relaxed">
            Get personalized interview coaching and feedback from industry
            experts to help you land your dream job.
          </p>
          <div className="relative flex justify-center gap-2 sm:gap-4 mt-10 sm:w-auto">
            <Link href="/onboarding">
              <Button variant="gold" size="hero">
                Get Started
              </Button>
            </Link>
            <Link href="/explore">
              <Button variant="outline" size="hero">
                Browse Interviewers →
              </Button>
            </Link>
          </div>
          <div className="relative flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-16">
            <div className="flex">
              {AVATARS.map((av, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[#0a0a0b] overflow-hidden ${
                    i > 0 ? "-ml-2" : ""
                  }`}
                >
                  <Image
                    src={av.src}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover rounded-full border-2 border-white/20"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-stone-500 text-center sm:text-left">
              <strong className="text-stone-400 font-medium">
                2,400+ engineers
              </strong>{" "}
              cracked their FAANG interviews via Prept
            </p>
          </div>
        </div>
        <div className="col-span-full lg:col-span-2 flex items-center justify-center lg:justify-start mt-12 lg:mt-0 lg:rotate-3">
          {/* <Image
            src="/hero.png"
            alt="Hero Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-xl drop-shadow-lg"
          /> */}
          <CodeDemo duration={30000} writing />
        </div>
      </section>
    </div>
  );
}

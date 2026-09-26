import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[#202329] bg-[#090a0c]">
      <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-12">
        
        {/* Left Content */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="mt-5 max-w-xl text-5xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-7xl">
            Train with intent. Log
            <br />
            <span className="text-[#ccff00]">
               every set.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-[#8d929c] sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s
            work add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase tracking-wide text-[#090a0c] transition hover:bg-[#ddff4d]"
          >
            Browse workouts

            <span className="text-base"></span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[520px] overflow-hidden rounded-xl border border-[#252932] bg-[#111318]">
            <Image
              src="/assets/banner.png"
              alt="Workout training"
              width={800}
              height={650}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
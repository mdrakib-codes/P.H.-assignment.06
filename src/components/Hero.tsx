import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#090a0c]">
      <div className="mx-auto max-w-[1200px] px-4 py-8 sm:px-6 md:py-9">
        
        <div className="relative overflow-hidden rounded-xl border border-[#25282f] bg-[#15171d]">
          
          <div className="grid min-h-[318px] items-center md:grid-cols-[1.15fr_0.85fr]">
            
            {/* Left Content */}
            <div className="px-7 py-12 sm:px-10 md:px-12 md:py-14">
              
              <p className="text-[9px] font-black uppercase tracking-[0.22em] text-[#ccff00]">
                Workout Library
              </p>

              <h1 className="mt-5 max-w-[560px] font-[Impact,'Arial Narrow',sans-serif] text-[42px] uppercase leading-[0.94] tracking-[0.01em] text-white sm:text-[48px] md:text-[50px] lg:text-[52px]">
                Train with intent.
                <br />
                Log every set.
              </h1>

              <p className="mt-5 max-w-[470px] text-[11px] leading-[1.65] text-[#9297a1] sm:text-xs">
                FitLog is a dark, no-nonsense gym companion: pick a lift,
                lock it into today&apos;s plan, and watch the week&apos;s
                work add up.
              </p>

              <Link
                href="#library"
                className="mt-6 inline-flex items-center rounded-md bg-[#ccff00] px-4 py-2.5 text-[9px] font-black uppercase tracking-wide text-[#090a0c] transition hover:bg-[#d9ff3d]"
              >
                Browse workouts
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative flex h-full min-h-[270px] items-center justify-center px-6 pb-8 md:min-h-[318px] md:px-5 md:pb-0">
              <div className="relative h-[260px] w-full max-w-[350px] md:h-[290px]">
                <Image
                  src="/assets/banner.png"
                  alt="Workout training"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
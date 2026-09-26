import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#202329] bg-[#090a0c]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row md:px-10 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/assets/logo.png"
            alt="FitLog logo"
            width={26}
            height={26}
          />

          <span className="text-sm font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-[9px] font-medium tracking-wide text-[#777d87] sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
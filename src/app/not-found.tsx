import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0c] px-6 text-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            404
          </p>

          <h1 className="mt-3 text-4xl font-extrabold uppercase text-white">
            Page Not Found
          </h1>

          <p className="mt-3 text-xs text-[#777d87]">
            The page you are looking for does not exist.
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-md bg-[#ccff00] px-5 py-3 text-xs font-bold uppercase text-[#090a0c]"
          >
            Back to workouts
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
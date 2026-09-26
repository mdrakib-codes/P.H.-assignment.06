export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#090a0c]">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-zinc-800 border-t-lime-400" />

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}
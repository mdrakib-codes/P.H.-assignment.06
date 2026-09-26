"use client";

import { useFitLog } from "@/context/FitLogContext";

export default function Toast() {
  const { toast } = useFitLog();

  if (!toast) {
    return null;
  }

  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[#333740] bg-[#17191e] px-5 py-3 text-xs font-medium text-white shadow-xl">
      {toast}
    </div>
  );
}
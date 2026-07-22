"use client";

import { useState } from "react";
import { Gift } from "lucide-react";
import { useFanClub } from "@/context/FanClubContext";
import RouletteWheel from "@/components/RouletteWheel";

export default function SpinWheelCard() {
  const { spinsRemaining } = useFanClub();
  const [isWheelOpen, setIsWheelOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsWheelOpen(true)}
        className="flex flex-col justify-between rounded-2xl bg-surface-dark p-4 text-left text-white shadow-sm"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-wide text-accent">
            GIRE E GANHE
          </p>
          <Gift size={18} className="text-white" />
        </div>
        <p className="mt-6 text-sm font-semibold text-white">
          {spinsRemaining} GIROS HOJE
        </p>
      </button>

      {isWheelOpen && (
        <RouletteWheel onClose={() => setIsWheelOpen(false)} />
      )}
    </>
  );
}

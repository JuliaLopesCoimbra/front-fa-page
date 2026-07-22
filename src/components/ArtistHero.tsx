"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { artistSummary } from "@/mocks/artist";

const BASE_HEIGHT = 192;
const MAX_STRETCH = 110;
const DAMPING = 0.55;
const AT_TOP_THRESHOLD = 2;

export default function ArtistHero() {
  const [stretch, setStretch] = useState(0);
  const startYRef = useRef<number | null>(null);
  const isPullingRef = useRef(false);

  useEffect(() => {
    const getClientY = (e: TouchEvent | MouseEvent) =>
      "touches" in e ? e.touches[0]?.clientY : e.clientY;

    const handleStart = (e: TouchEvent | MouseEvent) => {
      if (window.scrollY <= AT_TOP_THRESHOLD) {
        startYRef.current = getClientY(e) ?? null;
        isPullingRef.current = true;
      }
    };

    const handleMove = (e: TouchEvent | MouseEvent) => {
      if (!isPullingRef.current || startYRef.current === null) return;
      const clientY = getClientY(e);
      if (clientY === undefined) return;
      const delta = clientY - startYRef.current;

      if (delta > 0 && window.scrollY <= AT_TOP_THRESHOLD) {
        setStretch(Math.min(delta * DAMPING, MAX_STRETCH));
      } else {
        isPullingRef.current = false;
        startYRef.current = null;
        setStretch(0);
      }
    };

    const handleEnd = () => {
      isPullingRef.current = false;
      startYRef.current = null;
      setStretch(0);
    };

    window.addEventListener("touchstart", handleStart, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleEnd, { passive: true });
    window.addEventListener("touchcancel", handleEnd, { passive: true });
    window.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);

    return () => {
      window.removeEventListener("touchstart", handleStart);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
      window.removeEventListener("touchcancel", handleEnd);
      window.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
    };
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: `${BASE_HEIGHT + stretch}px`,
        transition:
          stretch === 0 ? "height 280ms cubic-bezier(0.34, 1.56, 0.64, 1)" : "none",
      }}
    >
      <Image
        src="/hero/joaogomes.avif"
        alt={artistSummary.name}
        fill
        priority
        className="object-cover object-[center_15%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-accent/95 to-transparent" />

      <button
        type="button"
        aria-label="Mais opções"
        className="absolute right-4 top-4 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
      >
        <MoreVertical size={20} />
      </button>

      <div className="absolute bottom-4 left-5 right-5">
        <h1 className="text-2xl font-bold tracking-tight text-white drop-shadow-sm">
          {artistSummary.name}
        </h1>
        <p className="text-xs font-semibold text-white/90 drop-shadow-sm">
          {artistSummary.fanClubSizeLabel}
        </p>
      </div>
    </div>
  );
}

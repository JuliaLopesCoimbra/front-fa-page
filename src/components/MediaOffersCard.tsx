"use client";

import { useState } from "react";
import { PlayCircle } from "lucide-react";
import { mediaOffer } from "@/mocks/mediaOffers";
import MediaOfferVideoModal from "@/components/MediaOfferVideoModal";

export default function MediaOffersCard() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsVideoOpen(true)}
        className="mx-5 mt-4 mb-4 block w-[calc(100%-2.5rem)] rounded-2xl border border-border bg-surface p-5 text-left shadow-sm"
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-wide text-accent">
            {mediaOffer.label}
          </p>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
            <PlayCircle size={20} />
          </span>
        </div>
        <p className="mt-3 text-sm font-semibold leading-snug text-foreground">
          {mediaOffer.description}
        </p>
      </button>

      {isVideoOpen && (
        <MediaOfferVideoModal onClose={() => setIsVideoOpen(false)} />
      )}
    </>
  );
}

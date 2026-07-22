"use client";

import { useState } from "react";
import { useFanClub } from "@/context/FanClubContext";

interface MediaOfferVideoModalProps {
  onClose: () => void;
}

export default function MediaOfferVideoModal({
  onClose,
}: MediaOfferVideoModalProps) {
  const { awardMediaOfferPoints } = useFanClub();
  const [isFinished, setIsFinished] = useState(false);

  const handleEnded = () => {
    awardMediaOfferPoints();
    setIsFinished(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {!isFinished ? (
        <video
          src="/video/coca.mp4"
          autoPlay
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          onContextMenu={(e) => e.preventDefault()}
          onEnded={handleEnded}
          className="h-full w-full object-contain"
        />
      ) : (
        <div className="flex flex-col items-center gap-4 px-8 text-center">
          <p className="text-3xl font-bold text-accent">+20 PONTOS!</p>
          <p className="text-sm text-white/80">
            Vídeo concluído — pontos adicionados ao seu histórico.
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground"
          >
            FECHAR
          </button>
        </div>
      )}
    </div>
  );
}

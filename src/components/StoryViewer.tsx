"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const STORY_DURATION_MS = 4000;
const SWIPE_THRESHOLD_PX = 60;

interface StoryViewerProps {
  fanName: string;
  avatarUrl: string;
  images: string[];
  onClose: () => void;
  onFinishForward: () => void;
  onFinishBackward: () => void;
}

export default function StoryViewer({
  fanName,
  avatarUrl,
  images,
  onClose,
  onFinishForward,
  onFinishBackward,
}: StoryViewerProps) {
  const [index, setIndex] = useState(0);
  const startXRef = useRef<number | null>(null);
  const containerWidthRef = useRef(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (index < images.length - 1) {
        setIndex((i) => i + 1);
      } else {
        onFinishForward();
      }
    }, STORY_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [index, images.length, onFinishForward]);

  const goNext = () => {
    if (index < images.length - 1) setIndex((i) => i + 1);
    else onFinishForward();
  };

  const goPrev = () => {
    if (index > 0) setIndex((i) => i - 1);
    else onFinishBackward();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startXRef.current = e.clientX;
    containerWidthRef.current = e.currentTarget.getBoundingClientRect().width;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (startXRef.current === null) return;
    const deltaX = e.clientX - startXRef.current;
    startXRef.current = null;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
      return;
    }

    const tapX = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (tapX < containerWidthRef.current / 3) {
      goPrev();
    } else {
      goNext();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="absolute inset-x-0 top-0 z-20 flex gap-1 p-2">
        {images.map((image, i) => (
          <div
            key={image}
            className="h-0.5 flex-1 overflow-hidden rounded-full bg-white/30"
          >
            <div
              className={
                i < index
                  ? "h-full w-full bg-white"
                  : i === index
                    ? "h-full w-0 animate-story-progress bg-white"
                    : "h-full w-0 bg-white"
              }
              style={
                i === index
                  ? { animationDuration: `${STORY_DURATION_MS}ms` }
                  : undefined
              }
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 top-4 z-20 flex items-center gap-2 px-3 pt-3">
        <Image
          src={avatarUrl}
          alt={fanName}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-sm font-semibold text-white drop-shadow-sm">
          {fanName}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="ml-auto rounded-full p-2 text-white hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>

      <div className="relative h-full w-full">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`Story de ${fanName}`}
          fill
          className="object-contain"
        />
      </div>

      <div
        className="absolute inset-0 z-10 touch-pan-y select-none"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      />
    </div>
  );
}

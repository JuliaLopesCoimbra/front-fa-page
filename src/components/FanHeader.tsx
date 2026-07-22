"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { fans } from "@/mocks/fans";
import { fanStories } from "@/mocks/fanStories";
import StoryViewer from "@/components/StoryViewer";

export default function FanHeader() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeFan = activeIndex !== null ? fans[activeIndex] : null;
  const activeStory = activeFan
    ? fanStories.find((story) => story.fanId === activeFan.id)
    : null;

  const goToNextPerson = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current < fans.length - 1 ? current + 1 : null;
    });
  };

  const goToPrevPerson = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current > 0 ? current - 1 : current;
    });
  };

  return (
    <div className="sticky top-0 z-20 border-b border-border bg-background px-5 pt-3">
      <div className="flex gap-3 overflow-x-auto pb-2">
        <div className="flex flex-shrink-0 flex-col items-center gap-1">
          <button
            type="button"
            aria-label="Adicionar story"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dashed border-border text-muted-foreground hover:border-accent hover:text-accent"
          >
            <Plus size={20} />
          </button>
        </div>

        {fans.map((fan, index) => (
          <button
            key={fan.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="flex flex-shrink-0 flex-col items-center gap-1"
          >
            <div
              className={`rounded-full p-[2px] ${
                fan.isHighlighted
                  ? "bg-gradient-to-tr from-accent to-orange-400"
                  : "bg-transparent"
              }`}
            >
              <div className="rounded-full bg-background p-[2px]">
                <Image
                  src={fan.avatarUrl}
                  alt={fan.name}
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full object-cover"
                />
              </div>
            </div>
            <span className="max-w-[56px] truncate text-[10px] text-muted-foreground">
              {fan.name}
            </span>
          </button>
        ))}
      </div>

      {activeFan && activeStory && (
        <StoryViewer
          key={activeFan.id}
          fanName={activeFan.name}
          avatarUrl={activeFan.avatarUrl}
          images={activeStory.images}
          onClose={() => setActiveIndex(null)}
          onFinishForward={goToNextPerson}
          onFinishBackward={goToPrevPerson}
        />
      )}
    </div>
  );
}

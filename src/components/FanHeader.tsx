import Image from "next/image";
import { Plus } from "lucide-react";
import { fans } from "@/mocks/fans";

export default function FanHeader() {
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

        {fans.map((fan) => (
          <div key={fan.id} className="flex flex-shrink-0 flex-col items-center gap-1">
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
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { RankingEntry } from "@/mocks/ranking";

interface RankingRowProps {
  entry: RankingEntry;
}

export default function RankingRow({ entry }: RankingRowProps) {
  const initials = entry.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <li>
      <Link
        href={`/fa-clube/${entry.position}`}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-black/5 text-xs font-bold text-foreground">
            {entry.position}
          </span>
          {entry.avatarUrl ? (
            <Image
              src={entry.avatarUrl}
              alt={entry.name}
              width={32}
              height={32}
              className="h-8 w-8 flex-shrink-0 rounded-full object-cover"
            />
          ) : (
            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
              {initials}
            </span>
          )}
          <span className="text-sm font-medium text-foreground">
            {entry.name}
          </span>
        </div>
        <span className="text-sm font-bold text-foreground">
          {entry.points.toLocaleString("pt-BR")} PTS
        </span>
      </Link>
    </li>
  );
}

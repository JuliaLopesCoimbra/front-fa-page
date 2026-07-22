"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import RankingRow from "@/components/RankingRow";
import { useFanClub } from "@/context/FanClubContext";
import { currentUserRanking, rankingList } from "@/mocks/ranking";

export default function FanClubRanking() {
  const { totalPoints } = useFanClub();
  const topThree = rankingList.slice(0, 3);

  return (
    <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold tracking-wide text-accent">
          FÃ-CLUBE &amp; RANKING
        </p>
        <Star size={18} className="text-accent" fill="currentColor" />
      </div>

      <ul className="mt-4 flex flex-col gap-3">
        {topThree.map((entry) => (
          <RankingRow key={entry.position} entry={entry} />
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-xs font-semibold text-muted-foreground">
          SEU RANKING: #{currentUserRanking.position}
        </span>
        <span className="text-xs font-semibold text-muted-foreground">
          {totalPoints} PTS
        </span>
      </div>

      <Link
        href="/fa-clube"
        className="mt-3 block text-xs font-semibold text-muted-foreground hover:text-accent"
      >
        VER RANKING COMPLETO
      </Link>
    </div>
  );
}

"use client";

import PageHeader from "@/components/PageHeader";
import RankingRow from "@/components/RankingRow";
import { useFanClub } from "@/context/FanClubContext";
import { artistSummary } from "@/mocks/artist";
import { currentUserRanking, rankingList } from "@/mocks/ranking";

export default function FaClubePage() {
  const { totalPoints } = useFanClub();

  return (
    <>
      <PageHeader title="FÃ-CLUBE" subtitle={artistSummary.fanClubSizeLabel} />

      <div className="mx-5 mt-2 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-bold tracking-wide text-accent">
          RANKING COMPLETO
        </p>

        <ul className="mt-4 flex flex-col gap-3">
          {rankingList.map((entry) => (
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
      </div>
    </>
  );
}

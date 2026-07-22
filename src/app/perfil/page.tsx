"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { useFanClub } from "@/context/FanClubContext";
import { currentUserRanking } from "@/mocks/ranking";
import { currentUser } from "@/mocks/user";
import { purchaseHistory } from "@/mocks/purchaseHistory";
import { storyHistory } from "@/mocks/storyHistory";

export default function PerfilPage() {
  const { pointsHistory, totalPoints, prizeHistory } = useFanClub();

  return (
    <>
      <PageHeader title="PERFIL" />

      <div className="mx-5 mt-2 flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <Image
          src={currentUser.avatarUrl}
          alt={currentUser.name}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold text-foreground">
            {currentUser.name}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            SEU RANKING: #{currentUserRanking.position} · {totalPoints} PTS
          </p>
        </div>
      </div>

      <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-bold tracking-wide text-accent">
          HISTÓRICO DE PONTOS
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {pointsHistory.map((entry) => (
            <li key={entry.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {entry.description}
                </p>
                <p className="text-xs text-muted-foreground">{entry.date}</p>
              </div>
              <span className="text-sm font-bold text-accent">
                +{entry.points} PTS
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-bold tracking-wide text-accent">
          HISTÓRICO DE PRÊMIOS
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {prizeHistory.map((entry) => (
            <li key={entry.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {entry.discountLabel} em {entry.brand}
                </p>
                <p className="text-xs text-muted-foreground">{entry.date}</p>
              </div>
              <span className="rounded-lg bg-black/5 px-3 py-1 font-mono text-xs font-bold tracking-wide text-accent">
                {entry.couponCode}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-bold tracking-wide text-accent">
          HISTÓRICO DE COMPRAS
        </p>
        <ul className="mt-4 flex flex-col gap-3">
          {purchaseHistory.map((entry) => (
            <li key={entry.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  {entry.productName}
                </p>
                <p className="text-xs text-muted-foreground">{entry.date}</p>
              </div>
              <span className="text-sm font-bold text-foreground">
                R${" "}
                {entry.priceInBRL.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-bold tracking-wide text-accent">
          HISTÓRICO DE STORIES
        </p>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {storyHistory.map((entry) => (
            <div key={entry.id} className="flex flex-shrink-0 flex-col items-center gap-1">
              <Image
                src={entry.imageUrl}
                alt={`Story de ${entry.date}`}
                width={80}
                height={80}
                className="h-20 w-20 rounded-xl object-cover"
              />
              <span className="text-[10px] text-muted-foreground">
                {entry.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

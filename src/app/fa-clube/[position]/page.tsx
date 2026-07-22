import { notFound } from "next/navigation";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { rankingList } from "@/mocks/ranking";

interface FanProfilePageProps {
  params: Promise<{ position: string }>;
}

export default async function FanProfilePage({ params }: FanProfilePageProps) {
  const { position } = await params;
  const entry = rankingList.find((fan) => fan.position === Number(position));

  if (!entry) {
    notFound();
  }

  const initials = entry.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <PageHeader title="PERFIL DO FÃ" />

      <div className="mx-5 mt-2 flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
        {entry.avatarUrl ? (
          <Image
            src={entry.avatarUrl}
            alt={entry.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent">
            {initials}
          </span>
        )}

        <div>
          <p className="text-lg font-bold text-foreground">{entry.name}</p>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            #{entry.position} · {entry.points.toLocaleString("pt-BR")} PTS
          </p>
        </div>

        <p className="text-xs font-semibold tracking-wide text-accent">
          MEMBRO DESDE {entry.memberSince}
        </p>
      </div>
    </>
  );
}

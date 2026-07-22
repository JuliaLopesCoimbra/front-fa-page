import Link from "next/link";
import { Ticket } from "lucide-react";
import { nextShow } from "@/mocks/nextShow";

export default function NextShowCard() {
  return (
    <div className="mx-5 mt-5 rounded-2xl bg-surface-dark p-5 text-white shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-bold tracking-wide text-accent">
            PRÓXIMO SHOW
          </p>
          <p className="mt-2 text-xl font-bold tracking-tight">
            {nextShow.city}
          </p>
          <p className="mt-1 text-sm text-neutral-400">
            {nextShow.date} · {nextShow.venue}
          </p>
        </div>
        <div className="rounded-full bg-white/10 p-2">
          <Ticket size={20} className="text-white" />
        </div>
      </div>
      <Link
        href="/agenda"
        className="mt-4 inline-block text-xs font-semibold tracking-wide text-neutral-300 hover:text-white"
      >
        VER AGENDA
      </Link>
    </div>
  );
}

import { Ticket } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { agenda } from "@/mocks/agenda";

export default function AgendaPage() {
  return (
    <>
      <PageHeader title="AGENDA DE SHOWS" />

      <div className="mx-5 mt-2 flex flex-col gap-3">
        {agenda.map((show) => (
          <div
            key={show.id}
            className="flex items-center justify-between rounded-2xl border border-border bg-surface p-4 shadow-sm"
          >
            <div>
              <p className="text-sm font-bold text-foreground">
                {show.city}, {show.state}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {show.date} · {show.venue}
              </p>
            </div>
            <a
              href="https://turnedominguinho.ingresse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground"
            >
              <Ticket size={14} />
              INGRESSOS
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

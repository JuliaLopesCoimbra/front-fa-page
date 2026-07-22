"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

function SucessoContent() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get("total") ?? 0);

  return (
    <div className="mx-5 mt-2 flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
      <CheckCircle2 size={48} className="text-accent" />
      <p className="text-lg font-bold text-foreground">Compra confirmada!</p>
      <p className="text-sm text-muted-foreground">
        Pagamento de R${" "}
        {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}{" "}
        aprovado. Você vai receber os detalhes por e-mail.
      </p>
      <Link
        href="/loja"
        className="mt-2 rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-accent-foreground"
      >
        VOLTAR PARA A LOJA
      </Link>
    </div>
  );
}

export default function PagamentoSucessoPage() {
  return (
    <>
      <PageHeader title="PEDIDO CONFIRMADO" />
      <Suspense fallback={null}>
        <SucessoContent />
      </Suspense>
    </>
  );
}

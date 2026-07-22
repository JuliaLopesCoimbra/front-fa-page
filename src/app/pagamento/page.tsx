"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreditCard, QrCode } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useFanClub } from "@/context/FanClubContext";

type PaymentMethod = "pix" | "cartao";

export default function PagamentoPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useFanClub();
  const [method, setMethod] = useState<PaymentMethod>("pix");
  const [isProcessing, setIsProcessing] = useState(false);

  if (cart.length === 0) {
    return (
      <>
        <PageHeader title="PAGAMENTO" />
        <div className="mx-5 mt-2 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground">
            Não há nada para pagar.
          </p>
          <Link
            href="/loja"
            className="mt-3 inline-block text-xs font-semibold text-accent"
          >
            VOLTAR PARA A LOJA
          </Link>
        </div>
      </>
    );
  }

  const handleConfirm = () => {
    setIsProcessing(true);
    // TODO: integrar gateway de pagamento real — fluxo 100% mockado por ora
    window.setTimeout(() => {
      const total = cartTotal;
      clearCart();
      router.push(`/pagamento/sucesso?total=${total.toFixed(2)}`);
    }, 1200);
  };

  return (
    <>
      <PageHeader title="PAGAMENTO" subtitle="Ambiente de teste — sem cobrança real" />

      <div className="mx-5 mt-2 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-muted-foreground">
            TOTAL A PAGAR
          </span>
          <span className="text-lg font-bold text-foreground">
            R${" "}
            {cartTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-bold tracking-wide text-accent">
          FORMA DE PAGAMENTO
        </p>

        <div className="mt-3 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setMethod("pix")}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left ${
              method === "pix"
                ? "border-accent bg-accent/5"
                : "border-border"
            }`}
          >
            <QrCode size={20} className="text-foreground/70" />
            <span className="text-sm font-semibold text-foreground">Pix</span>
          </button>

          <button
            type="button"
            onClick={() => setMethod("cartao")}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left ${
              method === "cartao"
                ? "border-accent bg-accent/5"
                : "border-border"
            }`}
          >
            <CreditCard size={20} className="text-foreground/70" />
            <span className="text-sm font-semibold text-foreground">
              Cartão de crédito
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleConfirm}
          disabled={isProcessing}
          className="mt-5 w-full rounded-full bg-accent py-3 text-sm font-bold text-accent-foreground disabled:opacity-40"
        >
          {isProcessing ? "PROCESSANDO..." : "CONFIRMAR PAGAMENTO"}
        </button>
      </div>
    </>
  );
}

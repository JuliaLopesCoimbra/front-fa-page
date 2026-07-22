"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useFanClub } from "@/context/FanClubContext";

export default function CarrinhoPage() {
  const router = useRouter();
  const { cart, cartTotal, removeFromCart } = useFanClub();

  return (
    <>
      <PageHeader title="CARRINHO" />

      {cart.length === 0 ? (
        <div className="mx-5 mt-2 rounded-2xl border border-border bg-surface p-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground">
            Seu carrinho está vazio.
          </p>
        </div>
      ) : (
        <>
          <div className="mx-5 mt-2 flex flex-col gap-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface p-3 shadow-sm"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.productName}
                  width={64}
                  height={64}
                  className="h-16 w-16 flex-shrink-0 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground">
                    {item.productName}
                  </p>
                  {item.size && (
                    <p className="text-xs text-muted-foreground">
                      Tamanho: {item.size}
                    </p>
                  )}
                  <p className="mt-1 text-sm font-bold text-accent">
                    R${" "}
                    {item.priceInBRL.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remover item"
                  className="rounded-full p-2 text-muted-foreground hover:bg-black/5"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="mx-5 mt-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">
                TOTAL
              </span>
              <span className="text-lg font-bold text-foreground">
                R${" "}
                {cartTotal.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <button
              type="button"
              onClick={() => router.push("/pagamento")}
              className="mt-4 w-full rounded-full bg-accent py-3 text-sm font-bold text-accent-foreground"
            >
              FINALIZAR COMPRA
            </button>
          </div>
        </>
      )}
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { useFanClub } from "@/context/FanClubContext";
import type { Product } from "@/mocks/products";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const router = useRouter();
  const { addToCart } = useFanClub();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const requiresSize = Boolean(product.sizes?.length);
  const canAddToCart = !requiresSize || selectedSize !== null;

  const handleAddToCart = () => {
    if (!canAddToCart) return;
    addToCart({
      productId: product.id,
      productName: product.name,
      size: selectedSize ?? undefined,
      priceInBRL: product.priceInBRL,
      imageUrl: product.imageUrl,
    });
    router.push("/carrinho");
  };

  return (
    <>
      <PageHeader title="PRODUTO" />

      <div className="mx-5 mt-2 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="h-56 w-full object-cover"
        />
        <div className="p-5">
          <p className="text-base font-bold text-foreground">
            {product.name}
          </p>
          <p className="mt-1 text-lg font-bold text-accent">
            R${" "}
            {product.priceInBRL.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>

          {requiresSize && (
            <div className="mt-4">
              <p className="text-xs font-bold tracking-wide text-muted-foreground">
                ESCOLHA O TAMANHO
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes!.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-semibold ${
                      selectedSize === size
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-foreground hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!canAddToCart}
            className="mt-5 w-full rounded-full bg-accent py-3 text-sm font-bold text-accent-foreground disabled:opacity-40"
          >
            {requiresSize && !selectedSize
              ? "SELECIONE UM TAMANHO"
              : "ADICIONAR AO CARRINHO"}
          </button>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CartButton from "@/components/CartButton";
import { products } from "@/mocks/products";

export default function LojaPage() {
  return (
    <>
      <PageHeader
        title="LOJA"
        subtitle="Produtos oficiais do João Gomes"
        action={<CartButton />}
      />

      <div className="mx-5 mt-2 grid grid-cols-2 gap-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/loja/${product.id}`}
            className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={300}
              height={300}
              className="h-32 w-full object-cover"
            />
            <div className="p-3">
              <p className="text-xs font-semibold leading-snug text-foreground">
                {product.name}
              </p>
              <p className="mt-1 text-sm font-bold text-accent">
                R${" "}
                {product.priceInBRL.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

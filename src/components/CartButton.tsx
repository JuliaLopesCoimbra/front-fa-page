"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useFanClub } from "@/context/FanClubContext";

export default function CartButton() {
  const { cart } = useFanClub();

  return (
    <Link
      href="/carrinho"
      aria-label="Ver carrinho"
      className="relative rounded-full p-2 text-foreground/80 hover:bg-black/5"
    >
      <ShoppingCart size={20} />
      {cart.length > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
          {cart.length}
        </span>
      )}
    </Link>
  );
}

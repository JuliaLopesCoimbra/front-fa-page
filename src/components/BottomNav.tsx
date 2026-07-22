"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home, ShoppingBag, Star, User } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { href: "/", label: "Início", icon: Home },
  { href: "/fa-clube", label: "Fã-clube", icon: Star },
  { href: "/agenda", label: "Agenda", icon: Calendar },
  { href: "/loja", label: "Loja", icon: ShoppingBag },
  { href: "/perfil", label: "Perfil", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-1/2 flex w-full max-w-[430px] -translate-x-1/2 items-center justify-between border-t border-border bg-surface px-4 py-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-1 flex-col items-center gap-1 py-1"
          >
            <Icon
              size={22}
              className={isActive ? "text-accent" : "text-neutral-400"}
            />
            <span
              className={`text-[10px] font-medium ${
                isActive ? "text-accent" : "text-neutral-400"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

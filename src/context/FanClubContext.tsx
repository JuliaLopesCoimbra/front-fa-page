"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  pointsHistory as initialPointsHistory,
  type PointsHistoryEntry,
} from "@/mocks/pointsHistory";
import { spinWheelStatus } from "@/mocks/spinWheel";
import {
  prizeHistory as initialPrizeHistory,
  type PrizeHistoryEntry,
} from "@/mocks/prizeHistory";

const SPIN_COOLDOWN_MS = 2 * 60 * 60 * 1000;

interface WonPrize {
  brand: string;
  discountLabel: string;
  couponCode: string;
}

export interface CartItem {
  id: string;
  productId: string;
  productName: string;
  size?: string;
  priceInBRL: number;
  imageUrl: string;
}

interface FanClubContextValue {
  pointsHistory: PointsHistoryEntry[];
  totalPoints: number;
  hasWatchedMediaOffer: boolean;
  awardMediaOfferPoints: () => void;
  spinsRemaining: number;
  nextSpinAt: number | null;
  consumeSpin: () => boolean;
  prizeHistory: PrizeHistoryEntry[];
  recordPrizeWin: (prize: WonPrize) => void;
  cart: CartItem[];
  cartTotal: number;
  addToCart: (item: Omit<CartItem, "id">) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const FanClubContext = createContext<FanClubContextValue | null>(null);

export function FanClubProvider({ children }: { children: ReactNode }) {
  const [pointsHistory, setPointsHistory] = useState<PointsHistoryEntry[]>(
    initialPointsHistory,
  );
  const [hasWatchedMediaOffer, setHasWatchedMediaOffer] = useState(false);
  const [spinsRemaining, setSpinsRemaining] = useState(
    spinWheelStatus.spinsAvailableToday,
  );
  const [nextSpinAt, setNextSpinAt] = useState<number | null>(null);
  const [prizeHistory, setPrizeHistory] = useState<PrizeHistoryEntry[]>(
    initialPrizeHistory,
  );
  const [cart, setCart] = useState<CartItem[]>([]);

  const totalPoints = useMemo(
    () => pointsHistory.reduce((sum, entry) => sum + entry.points, 0),
    [pointsHistory],
  );

  const awardMediaOfferPoints = () => {
    if (hasWatchedMediaOffer) return;
    setHasWatchedMediaOffer(true);
    setPointsHistory((prev) => [
      {
        id: `ph-video-${prev.length + 1}`,
        description: "Assistiu vídeo patrocinado",
        points: 20,
        date: "Hoje",
      },
      ...prev,
    ]);
  };

  const consumeSpin = () => {
    if (spinsRemaining <= 0) return false;
    if (nextSpinAt !== null && Date.now() < nextSpinAt) return false;
    setSpinsRemaining((prev) => prev - 1);
    setNextSpinAt(Date.now() + SPIN_COOLDOWN_MS);
    return true;
  };

  const recordPrizeWin = (prize: WonPrize) => {
    setPrizeHistory((prev) => [
      {
        id: `pz-${prev.length + 1}`,
        brand: prize.brand,
        discountLabel: prize.discountLabel,
        couponCode: prize.couponCode,
        date: "Hoje",
      },
      ...prev,
    ]);
  };

  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.priceInBRL, 0),
    [cart],
  );

  const addToCart = (item: Omit<CartItem, "id">) => {
    setCart((prev) => [...prev, { ...item, id: `cart-${prev.length + 1}` }]);
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <FanClubContext.Provider
      value={{
        pointsHistory,
        totalPoints,
        hasWatchedMediaOffer,
        awardMediaOfferPoints,
        spinsRemaining,
        nextSpinAt,
        consumeSpin,
        prizeHistory,
        recordPrizeWin,
        cart,
        cartTotal,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </FanClubContext.Provider>
  );
}

export function useFanClub() {
  const context = useContext(FanClubContext);
  if (!context) {
    throw new Error("useFanClub deve ser usado dentro de FanClubProvider");
  }
  return context;
}

export type WheelPrizeType = "coupon" | "retry";

export interface WheelPrize {
  id: string;
  type: WheelPrizeType;
  brand?: string;
  discountLabel?: string;
  couponCode?: string;
  logoUrl?: string;
  color: string;
}

// TODO: integrar API real — prêmios sorteados na roleta diária (parceiros
// patrocinadores). 6 cupons + 2 "tente novamente", sorteio uniforme entre
// as 8 fatias.
export const wheelPrizes: WheelPrize[] = [
  { id: "prize-1", type: "coupon", brand: "Mercado Livre", discountLabel: "15% OFF", couponCode: "JG-MLIVRE15", logoUrl: "/logos/mercado-livre.png", color: "#161616" },
  { id: "prize-2", type: "retry", color: "#4B4B4B" },
  { id: "prize-3", type: "coupon", brand: "Heineken", discountLabel: "20% OFF", couponCode: "JG-HEINEKEN20", logoUrl: "/logos/heineken.png", color: "#2A2A2A" },
  { id: "prize-4", type: "coupon", brand: "Samsung", discountLabel: "10% OFF", couponCode: "JG-SAMSUNG10", logoUrl: "/logos/samsung.png", color: "#161616" },
  { id: "prize-5", type: "retry", color: "#4B4B4B" },
  { id: "prize-6", type: "coupon", brand: "Nike", discountLabel: "15% OFF", couponCode: "JG-NIKE15", logoUrl: "/logos/nike.png", color: "#2A2A2A" },
  { id: "prize-7", type: "coupon", brand: "iFood", discountLabel: "R$20 OFF", couponCode: "JG-IFOOD20", logoUrl: "/logos/ifood.jpg", color: "#161616" },
  { id: "prize-8", type: "coupon", brand: "Netflix", discountLabel: "1 mês grátis", couponCode: "JG-NETFLIX01", logoUrl: "/logos/netflix.png", color: "#2A2A2A" },
];

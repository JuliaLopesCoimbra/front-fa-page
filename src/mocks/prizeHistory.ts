export interface PrizeHistoryEntry {
  id: string;
  brand: string;
  discountLabel: string;
  couponCode: string;
  date: string;
}

// TODO: integrar API real — histórico de prêmios ganhos na roleta diária
export const prizeHistory: PrizeHistoryEntry[] = [
  { id: "pz-1", brand: "iFood", discountLabel: "R$20 OFF", couponCode: "JG-IFOOD20", date: "10/07" },
  { id: "pz-2", brand: "Netflix", discountLabel: "1 mês grátis", couponCode: "JG-NETFLIX01", date: "22/06" },
];

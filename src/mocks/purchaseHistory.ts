export interface PurchaseHistoryEntry {
  id: string;
  productName: string;
  priceInBRL: number;
  date: string;
}

// TODO: integrar API real — histórico de compras do usuário logado
export const purchaseHistory: PurchaseHistoryEntry[] = [
  { id: "pu-1", productName: "Camisa Oficial João Gomes", priceInBRL: 129.9, date: "15/07" },
  { id: "pu-2", productName: "Boné Chama", priceInBRL: 89.9, date: "02/06" },
];

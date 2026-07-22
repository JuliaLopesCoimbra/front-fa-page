export interface PointsHistoryEntry {
  id: string;
  description: string;
  points: number;
  date: string;
}

// TODO: integrar API real — histórico de pontos do usuário logado
export const pointsHistory: PointsHistoryEntry[] = [
  { id: "ph-1", description: "Assistiu vídeo patrocinado", points: 50, date: "18/07" },
  { id: "ph-2", description: "Girou a roleta diária", points: 20, date: "17/07" },
  { id: "ph-3", description: "Compra: Camisa Oficial João Gomes", points: 130, date: "15/07" },
  { id: "ph-4", description: "Check-in no show de Recife", points: 100, date: "20/04" },
  { id: "ph-5", description: "Cadastro no fã-clube", points: 40, date: "01/03" },
];

export interface ShowDate {
  id: string;
  city: string;
  state: string;
  date: string;
  venue: string;
}

// TODO: integrar API real — agenda completa de shows do artista
export const agenda: ShowDate[] = [
  { id: "show-1", city: "RECIFE", state: "PE", date: "20 DE ABRIL", venue: "CLASSIC HALL" },
  { id: "show-2", city: "FORTALEZA", state: "CE", date: "03 DE MAIO", venue: "MARINA PARK" },
  { id: "show-3", city: "SÃO LUÍS", state: "MA", date: "17 DE MAIO", venue: "ARENA SÃO LUÍS" },
  { id: "show-4", city: "SALVADOR", state: "BA", date: "07 DE JUNHO", venue: "ARENA FONTE NOVA" },
  { id: "show-5", city: "SÃO PAULO", state: "SP", date: "21 DE JUNHO", venue: "ALLIANZ PARK" },
  { id: "show-6", city: "RIO DE JANEIRO", state: "RJ", date: "05 DE JULHO", venue: "QUALISTAGE" },
];

export interface NextShow {
  city: string;
  state: string;
  date: string;
  venue: string;
}

// TODO: integrar API real — próximo show da agenda do artista
export const nextShow: NextShow = {
  city: "RECIFE, PE",
  state: "PE",
  date: "20 DE ABRIL",
  venue: "CLASSIC HALL",
};

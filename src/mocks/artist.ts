export interface ArtistSummary {
  name: string;
  fanClubSizeLabel: string;
}

// TODO: integrar API real — dados públicos do artista e tamanho do fã-clube
export const artistSummary: ArtistSummary = {
  name: "JOÃO GOMES",
  fanClubSizeLabel: "FÃ-CLUBE OFICIAL",
};

export interface RankingEntry {
  position: number;
  name: string;
  points: number;
  avatarUrl?: string;
  memberSince: string;
}

export interface CurrentUserRanking {
  position: number;
  points: number;
}

const MONTHS = [
  "JANEIRO",
  "FEVEREIRO",
  "MARÇO",
  "ABRIL",
  "MAIO",
  "JUNHO",
  "JULHO",
  "AGOSTO",
  "SETEMBRO",
  "OUTUBRO",
  "NOVEMBRO",
  "DEZEMBRO",
];

function memberSinceFor(position: number): string {
  const monthIndex = (position * 5) % 12;
  const year = 2021 + Math.floor(position / 10);
  return `${MONTHS[monthIndex]}/${year}`;
}

const topFans: RankingEntry[] = [
  { position: 1, name: "MARIA F.", points: 3720, avatarUrl: "/fans/fan-maria.jpg", memberSince: memberSinceFor(1) },
  { position: 2, name: "JOÃO P.", points: 3105, avatarUrl: "/fans/fan-joao.jpeg", memberSince: memberSinceFor(2) },
  { position: 3, name: "ANA L.", points: 2890, avatarUrl: "/fans/fan-ana.jpg", memberSince: memberSinceFor(3) },
  { position: 4, name: "PEDRO S.", points: 2540, avatarUrl: "/fans/fan-pedro.jpeg", memberSince: memberSinceFor(4) },
  { position: 5, name: "CARLA M.", points: 2310, avatarUrl: "/fans/fan-carla.jpg", memberSince: memberSinceFor(5) },
  { position: 6, name: "LUCAS T.", points: 2050, avatarUrl: "/fans/fan-lucas.jpeg", memberSince: memberSinceFor(6) },
];

const remainingFirstNames = [
  "Beatriz", "Rafael", "Larissa", "Gabriel", "Julia", "Matheus", "Camila",
  "Leonardo", "Fernanda", "Bruno", "Amanda", "Diego", "Patrícia", "Thiago",
  "Vanessa", "Rodrigo", "Aline", "Gustavo", "Bianca", "Felipe", "Renata",
  "Marcelo", "Priscila", "Eduardo", "Tatiane", "Vinícius", "Carolina",
  "Anderson", "Juliana", "Rafaela", "Igor", "Daniela", "Wesley", "Monique",
  "Alexandre", "Natália", "Vítor", "Cristina", "Everton", "Simone",
  "Douglas", "Aparecida", "Caio", "Débora",
];

const lastInitials = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const remainingFans: RankingEntry[] = remainingFirstNames.map((first, index) => {
  const position = 7 + index;
  const points = Math.max(2050 - (position - 6) * 32, 340);
  const initial = lastInitials[position % lastInitials.length];
  return {
    position,
    name: `${first.toUpperCase()} ${initial}.`,
    points,
    memberSince: memberSinceFor(position),
  };
});

// TODO: integrar API real — ranking completo do fã-clube (top 50)
// avatarUrl só está preenchido para fãs com foto autorizada; os demais caem
// no fallback de iniciais (ver RankingRow) em vez de foto real de alguém.
export const rankingList: RankingEntry[] = [...topFans, ...remainingFans];

// TODO: integrar API real — ranking do usuário logado
export const currentUserRanking: CurrentUserRanking = {
  position: 482,
  points: 340,
};

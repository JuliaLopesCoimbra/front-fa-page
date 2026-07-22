export interface Fan {
  id: string;
  name: string;
  avatarUrl: string;
  isHighlighted: boolean;
}

// TODO: integrar API real — lista de fãs em destaque (stories) do clube
export const fans: Fan[] = [
  { id: "fan-1", name: "Maria F.", avatarUrl: "/fans/fan-maria.jpg", isHighlighted: true },
  { id: "fan-2", name: "Joao P.", avatarUrl: "/fans/fan-joao.jpeg", isHighlighted: true },
  { id: "fan-3", name: "Ana L.", avatarUrl: "/fans/fan-ana.jpg", isHighlighted: true },
  { id: "fan-4", name: "Pedro S.", avatarUrl: "/fans/fan-pedro.jpeg", isHighlighted: false },
  { id: "fan-5", name: "Carla M.", avatarUrl: "/fans/fan-carla.jpg", isHighlighted: false },
  { id: "fan-6", name: "Lucas T.", avatarUrl: "/fans/fan-lucas.jpeg", isHighlighted: false },
];

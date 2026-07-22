export interface FanStory {
  fanId: string;
  images: string[];
}

// TODO: integrar API real — stories postados por cada fã em destaque.
// Reaproveita as fotos disponíveis em public/storys/ distribuídas entre os
// fãs; troque pelas fotos reais em public/fan-stories/<fanId>/ (pode ter
// mais de uma) quando disponíveis, atualizando o array `images`.
export const fanStories: FanStory[] = [
  { fanId: "fan-1", images: ["/storys/story-1.jpg"] },
  { fanId: "fan-2", images: ["/storys/story-2.jpg"] },
  { fanId: "fan-3", images: ["/storys/foto1.jpeg"] },
  { fanId: "fan-4", images: ["/storys/foto2.jpeg"] },
  { fanId: "fan-5", images: ["/storys/foto3.jpeg"] },
  { fanId: "fan-6", images: ["/storys/story-1.jpg", "/storys/story-2.jpg"] },
];

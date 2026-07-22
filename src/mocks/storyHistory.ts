export interface StoryHistoryEntry {
  id: string;
  imageUrl: string;
  date: string;
}

// TODO: integrar API real — stories postados pelo usuário logado
export const storyHistory: StoryHistoryEntry[] = [
  { id: "st-1", imageUrl: "/storys/story-1.jpg", date: "18/07" },
  { id: "st-2", imageUrl: "/storys/story-2.jpg", date: "20/04" },
];

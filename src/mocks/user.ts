export interface CurrentUser {
  name: string;
  avatarUrl: string;
}

// TODO: integrar API real — dados do usuário autenticado
export const currentUser: CurrentUser = {
  name: "Você",
  avatarUrl: "/profile/profile.jpeg",
};

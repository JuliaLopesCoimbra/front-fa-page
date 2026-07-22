export interface Product {
  id: string;
  name: string;
  priceInBRL: number;
  imageUrl: string;
  sizes?: string[];
}

// TODO: integrar API real — catálogo de produtos oficiais da loja
export const products: Product[] = [
  { id: "prod-1", name: "Camisa Oficial João Gomes", priceInBRL: 129.9, imageUrl: "/products/blusa.jpg", sizes: ["P", "M", "G", "GG"] },
  { id: "prod-2", name: "Boné Chama", priceInBRL: 89.9, imageUrl: "/products/bone.jpg" },
  { id: "prod-3", name: "CD Dominguinho", priceInBRL: 69.9, imageUrl: "/products/vinil.jpg" },
  { id: "prod-4", name: "Moletom João Gomes", priceInBRL: 199.9, imageUrl: "/products/moletom.jpg", sizes: ["P", "M", "G", "GG"] },
  { id: "prod-5", name: "Chinelo João Gomes", priceInBRL: 59.9, imageUrl: "/products/chinelo.jpg", sizes: ["37/38", "39/40", "41/42", "43/44"] },
  { id: "prod-6", name: "Caneca João Gomes", priceInBRL: 49.9, imageUrl: "/products/caneca.jpg" },
];

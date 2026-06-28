export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  available: boolean;
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    id: "bonnet-001",
    name: "Bonnet Ọkpụ Classic",
    price: 8500,
    description:
      "Le bonnet signature de la marque. Tricoté à la main, inspiré des motifs africains contemporains. Chaud, confortable et unique.",
    images: ["/products/bonnet-001-1.jpg"],
    category: "Bonnets",
    available: true,
    whatsappMessage:
      "Bonjour ! Je suis intéressé(e) par le *Bonnet Ọkpụ Classic* à 8 500 FCFA. Est-il disponible ?",
  },
  {
    id: "bonnet-002",
    name: "Bonnet Ọkpụ Urban",
    price: 9500,
    description:
      "Version urbaine et épurée du bonnet Ọkpụ. Coupe streetwear, matière premium, idéal pour toutes les saisons.",
    images: ["/products/bonnet-002-1.jpg"],
    category: "Bonnets",
    available: true,
    whatsappMessage:
      "Bonjour ! Je suis intéressé(e) par le *Bonnet Ọkpụ Urban* à 9 500 FCFA. Est-il disponible ?",
  },
  {
    id: "bonnet-003",
    name: "Bonnet Ọkpụ Heritage",
    price: 11000,
    description:
      "Édition limitée. Motifs hérités du patrimoine culturel africain, revisités avec une touche moderne. Pièce collector.",
    images: ["/products/bonnet-003-1.jpg"],
    category: "Bonnets",
    available: true,
    whatsappMessage:
      "Bonjour ! Je suis intéressé(e) par le *Bonnet Ọkpụ Heritage* à 11 000 FCFA. Est-il disponible ?",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const categories = [...new Set(products.map((p) => p.category))];

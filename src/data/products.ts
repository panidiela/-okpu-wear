export type Product = {
  id: string;
  name: string;
  collection: string;
  price: number;
  currency: string;
  description: string;
  shortStory: string;
  images: string[];
  sizes: string[];
  available: boolean;
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    id: "gardien-des-origines",
    name: "Le Gardien des Origines",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Un bonnet qui porte la mémoire. Inspiré des gardiens invisibles qui veillent sur les récits ancestraux.",
    shortStory:
      "Il garde ce que le temps essaie d'effacer. Porter ce bonnet, c'est choisir de ne pas oublier.",
    images: ["/products/gardien-des-origines.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Le Gardien des Origines* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "femme-soleil",
    name: "La Femme Soleil",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Hommage aux femmes qui illuminent sans chercher à briller. Une pièce douce et puissante à la fois.",
    shortStory:
      "Elle n'a pas besoin du ciel pour être lumière. Elle est soleil depuis le premier jour.",
    images: ["/products/femme-soleil.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *La Femme Soleil* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "enfant-du-baobab",
    name: "L'Enfant du Baobab",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Le baobab donne sans demander. Cette œuvre célèbre les racines qui nourrissent sans se montrer.",
    shortStory:
      "Né à l'ombre du plus grand des arbres, il a appris que la force ne crie jamais. Elle pousse en silence.",
    images: ["/products/enfant-du-baobab.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *L'Enfant du Baobab* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "masque-royal",
    name: "Masque Royal",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Les masques africains ne cachent pas — ils révèlent. Une pièce inspirée des rituels royaux d'Afrique de l'Ouest.",
    shortStory:
      "Derrière chaque masque, un visage plus vrai que nature. Derrière chaque visage, un masque que personne ne voit.",
    images: ["/products/masque-royal.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Masque Royal* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "mere-afrique",
    name: "Mère Afrique",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Pour celles qui portent tout le monde sans jamais poser leur charge. Une déclaration d'amour au continent.",
    shortStory:
      "Elle a tout donné et il lui reste encore tout à donner. C'est ça, la grandeur d'une mère.",
    images: ["/products/mere-afrique.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Mère Afrique* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "guerrier-calme",
    name: "Le Guerrier Calme",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "La vraie force ne s'agite pas. Inspirée du guerrier qui n'a plus rien à prouver.",
    shortStory:
      "Il n'élève jamais la voix parce que ses actes parlent depuis longtemps. Le calme est sa seule armure.",
    images: ["/products/guerrier-calme.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Le Guerrier Calme* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "danse-des-ancetres",
    name: "Danse des Ancêtres",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Certaines danses ne se voient pas — elles se ressentent dans les os. Une œuvre pour ceux qui entendent le tam-tam dans le silence.",
    shortStory:
      "Les ancêtres dansent encore. Il suffit de fermer les yeux et d'écouter ce que la terre a gardé.",
    images: ["/products/danse-des-ancetres.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Danse des Ancêtres* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "esprit-du-village",
    name: "Esprit du Village",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Le village ne se résume pas à ses cases — il vit dans ceux qui en sont partis. Une pièce pour la diaspora.",
    shortStory:
      "Tu peux traverser l'océan. L'esprit du village, lui, ne quitte jamais tes épaules.",
    images: ["/products/esprit-du-village.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Esprit du Village* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "reine-rouge",
    name: "La Reine Rouge",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Le rouge de la terre, le rouge du courage. Hommage aux reines africaines dont l'histoire a tu les noms.",
    shortStory:
      "On a oublié son nom mais pas son règne. Elle gouvernait avec la précision du vent — partout, invisible, essentielle.",
    images: ["/products/reine-rouge.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *La Reine Rouge* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
  {
    id: "memoire-noire",
    name: "Mémoire Noire",
    collection: "ORIGINES",
    price: 29,
    currency: "€",
    description:
      "Pour ne jamais oublier d'où l'on vient. Une pièce sobre, profonde, nécessaire.",
    shortStory:
      "La mémoire noire n'est pas un poids — c'est une boussole. Elle indique le nord même quand tout le reste ment.",
    images: ["/products/memoire-noire.jpg"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    available: true,
    whatsappMessage:
      "Bonjour ! Je souhaite commander *Mémoire Noire* (Collection ORIGINES) — 29 €. Quelle taille est disponible ?",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const collections = [...new Set(products.map((p) => p.collection))];

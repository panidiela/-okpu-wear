# Ọkpụ Wear

Site mobile-first pour la marque **Ọkpụ Wear** — art africain contemporain.

Construit avec Next.js 15, TypeScript, Tailwind CSS et App Router.

## Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## Commandes utiles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (hot reload) |
| `npm run build` | Build de production |
| `npm run start` | Démarre le build de production |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure du projet

```
src/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── collection/page.tsx   # Page collection
│   ├── produit/[id]/page.tsx # Page produit dynamique
│   ├── a-propos/page.tsx     # Page à propos
│   └── not-found.tsx         # Page 404
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
└── data/
    └── products.ts           # Données des produits

public/
├── products/                 # Photos des produits
└── logo/                     # Logo de la marque
```

## Ajouter un produit

Ouvre `src/data/products.ts` et ajoute un objet dans le tableau `products` :

```ts
{
  id: "bonnet-004",
  name: "Nom du produit",
  price: 10000,
  description: "Description...",
  images: ["/products/bonnet-004-1.jpg"],
  category: "Bonnets",
  available: true,
  whatsappMessage: "Bonjour ! Je suis intéressé(e) par...",
}
```

Puis place la photo dans `public/products/`.

## Numéro WhatsApp

Cherche `22901000000` dans le code et remplace par le vrai numéro (format international sans `+`).

## Déploiement

Le projet est connecté à Vercel. Chaque `git push` sur `main` déclenche un déploiement automatique.

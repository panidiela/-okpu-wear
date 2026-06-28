import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const WHATSAPP_NUMBER = "22901000000"; // ← remplace par ton vrai numéro

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white px-4 py-20 text-center">
        <p className="text-stone-400 text-sm uppercase tracking-widest mb-3">
          Art africain contemporain
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Ọkpụ</h1>
        <p className="text-stone-300 max-w-sm mx-auto text-base mb-8">
          Des bonnets uniques, tricotés à la main, inspirés du patrimoine africain.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/collection"
            className="bg-white text-stone-900 font-semibold px-6 py-3 rounded-full hover:bg-stone-100 transition-colors"
          >
            Voir la collection
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-stone-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-stone-800 transition-colors"
          >
            Commander via WhatsApp
          </a>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-stone-900 mb-8">Nos pièces</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/collection"
            className="inline-block bg-stone-900 text-white font-semibold px-8 py-3 rounded-full hover:bg-stone-700 transition-colors"
          >
            Toute la collection →
          </Link>
        </div>
      </section>

      {/* Brand story teaser */}
      <section className="bg-stone-100 px-4 py-16 text-center">
        <p className="text-stone-500 text-sm uppercase tracking-widest mb-2">Notre histoire</p>
        <h2 className="text-2xl font-bold text-stone-900 mb-4">
          Ọkpụ, c'est quoi ?
        </h2>
        <p className="max-w-md mx-auto text-stone-600 mb-6">
          Ọkpụ signifie <em>bonnet</em> en igbo. Une marque née de la fierté culturelle africaine
          et du désir de créer des pièces à la fois belles et ancrées dans une identité.
        </p>
        <Link
          href="/a-propos"
          className="text-stone-900 font-semibold underline underline-offset-4 hover:text-stone-600"
        >
          En savoir plus
        </Link>
      </section>
    </>
  );
}

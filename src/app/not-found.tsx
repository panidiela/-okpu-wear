import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-6xl font-bold text-stone-200 mb-4">404</p>
      <h1 className="text-xl font-semibold text-stone-900 mb-2">Page introuvable</h1>
      <p className="text-stone-500 mb-8">Cette page n'existe pas ou a été déplacée.</p>
      <Link
        href="/"
        className="bg-stone-900 text-white font-semibold px-6 py-3 rounded-full hover:bg-stone-700 transition-colors"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

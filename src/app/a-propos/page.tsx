export const metadata = {
  title: "À propos — Ọkpụ Wear",
  description: "L'histoire derrière la marque Ọkpụ Wear.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <p className="text-xs text-stone-400 uppercase tracking-widest mb-3">Notre histoire</p>
      <h1 className="text-3xl font-bold text-stone-900 mb-8">À propos de Ọkpụ</h1>

      <div className="prose prose-stone max-w-none space-y-6 text-stone-600 leading-relaxed">
        <p>
          <strong className="text-stone-900">Ọkpụ</strong> — prononcé <em>okpu</em> — signifie{" "}
          <em>bonnet</em> ou <em>chapeau</em> en igbo, une langue parlée principalement au Nigeria.
          Ce mot simple porte en lui une richesse culturelle immense.
        </p>

        <p>
          La marque est née d'un désir de créer des pièces qui honorent le patrimoine africain
          tout en s'inscrivant dans une esthétique contemporaine. Chaque bonnet est pensé comme
          une œuvre à part entière : une rencontre entre la tradition et le streetwear d'aujourd'hui.
        </p>

        <p>
          Ici, pas de production de masse. Chaque pièce est fabriquée avec soin, en quantités
          limitées, pour garantir une qualité irréprochable et préserver l'unicité de chaque
          création.
        </p>

        <p>
          Porter un bonnet Ọkpụ, c'est choisir de porter une histoire — et de la réécrire à ta
          façon.
        </p>
      </div>

      <div className="mt-12 bg-stone-100 rounded-2xl p-6 text-sm text-stone-600">
        <p className="font-semibold text-stone-900 mb-2">Une question ? Une commande ?</p>
        <p>
          Toutes les commandes se font directement via WhatsApp. Clique sur le bouton en bas de
          chaque produit, ou contacte-nous directement.
        </p>
        <a
          href="https://wa.me/22901000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-green-700 transition-colors text-sm"
        >
          Nous contacter sur WhatsApp
        </a>
      </div>
    </div>
  );
}

const WHATSAPP_NUMBER = "22901000000"; // ← remplace par ton vrai numéro

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-20">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 justify-between text-sm">
        <div>
          <p className="text-white font-bold text-lg mb-1">Ọkpụ</p>
          <p className="text-stone-400">Art africain contemporain.</p>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 font-medium"
          >
            Commander via WhatsApp →
          </a>
          <a href="/collection" className="hover:text-white transition-colors">
            Collection
          </a>
          <a href="/a-propos" className="hover:text-white transition-colors">
            À propos
          </a>
        </div>
      </div>
      <div className="border-t border-stone-800 text-center py-4 text-xs text-stone-500">
        © {new Date().getFullYear()} Ọkpụ Wear. Tous droits réservés.
      </div>
    </footer>
  );
}

const LOGO = "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=200,fit=crop/m6LPwXBwgQi45P2Q/neto.logo-YbNn4pnxMguaOOrw.png";

export function SiteFooter() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="bg-white/95 rounded-full p-2 inline-block">
            <img src={LOGO} alt="Neto Representações" className="h-16 w-16 object-contain" />
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            A maior variedade de produtos e presentes, você encontra aqui.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider mb-4">LINKS RÁPIDOS</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="#top" className="hover:text-green">Início</a></li>
            <li><a href="#sobre" className="hover:text-green">Sobre</a></li>
            <li><a href="#produtos" className="hover:text-green">Produtos</a></li>
            <li><a href="#representadas" className="hover:text-green">Representadas</a></li>
            <li><a href="#contato" className="hover:text-green">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider mb-4">CONTATO</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="text-green">📞</span>
              <a href="https://wa.me/5511993591102" className="hover:text-green">(11) 99359-1102</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green">✉</span>
              <a href="mailto:edserburatto@gmail.com" className="hover:text-green break-all">edserburatto@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green">📍</span>
              <span>São Paulo / Grande SP</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-wider mb-4">REDES SOCIAIS</h4>
          <div className="flex gap-3">
            <a href="https://wa.me/5511993591102" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-green hover:bg-green-dark flex items-center justify-center transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.7 11.7 0 0 0 3.2 19.3L2 22l2.8-1.2A11.7 11.7 0 1 0 20.5 3.5Zm-8.5 18a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-2.8.7.7-2.7-.2-.3A9.4 9.4 0 1 1 12 21.5Zm5.4-7c-.3-.2-1.7-.8-2-.9s-.5-.2-.7.2-.8.9-1 1.1-.4.2-.7 0a7.7 7.7 0 0 1-2.3-1.4 8.6 8.6 0 0 1-1.6-2c-.2-.3 0-.5.1-.7l.5-.6.3-.5a.5.5 0 0 0 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.3 5.4 5.4 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4.1c.6.3 1.1.5 1.5.6a3.7 3.7 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c-.1-.1-.3-.2-.6-.3Z"/></svg>
            </a>
            <a href="https://www.instagram.com/edser_neto_representacoes_" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-green hover:bg-green-dark flex items-center justify-center transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Neto Representações. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

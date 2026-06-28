import { Link } from "@tanstack/react-router";
import { useState } from "react";

const LOGO =
  "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=200,fit=crop/m6LPwXBwgQi45P2Q/neto.logo-YbNn4pnxMguaOOrw.png";

const navItems = [
  { to: "#top", label: "INÍCIO" },
  { to: "#sobre", label: "SOBRE" },
  { to: "#representadas", label: "REPRESENTADAS" },
  { to: "#contato", label: "CONTATO" },
] as const;

const compraLinks = [
  { href: "https://b2b.hipertextil.ind.br/b2b/b2b/view/index/index.php", label: "HiperTêxtil (B2B)" },
  { href: "https://brasfootpresentes.com.br/", label: "Brasfoot Presentes" },
  {
    href: "https://www.rischioto.ind.br/wp-content/uploads/2026/03/rischi-catalogo-online-JAN2026-2.pdf",
    label: "Rischioto (catálogo)",
  },
];

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className={`absolute top-0 left-0 right-0 z-30 ${transparent ? "" : "bg-navy"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="shrink-0 bg-white/95 rounded-full p-1.5">
          <img src={LOGO} alt="Neto Representações" className="h-14 w-14 object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wider text-white">
          {navItems.map((n) => (
            <a key={n.label} href={n.to} className="hover:text-green transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div
          className="hidden lg:block relative"
          onMouseEnter={() => setShopOpen(true)}
          onMouseLeave={() => setShopOpen(false)}
        >
          <button className="btn-green">
            COMPRAR ONLINE <span aria-hidden>→</span>
          </button>
          {shopOpen && (
            <div className="absolute right-0 top-full pt-2 w-60">
              <div className="bg-white shadow-xl border border-border py-2 rounded">
                {compraLinks.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 text-sm text-navy hover:bg-muted"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <button aria-label="Abrir menu" className="lg:hidden text-white text-3xl" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10">
          <div className="px-6 py-5 flex flex-col gap-4 text-white">
            {navItems.map((n) => (
              <a
                key={n.label}
                href={n.to}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold tracking-wider"
              >
                {n.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <div className="text-xs uppercase text-white/60 mb-2 tracking-wider">Compre online</div>
              {compraLinks.map((c) => (
                <a key={c.href} href={c.href} target="_blank" rel="noreferrer" className="block py-1.5 text-sm">
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

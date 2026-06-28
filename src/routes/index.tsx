import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import hipertextilLogoAsset from "@/assets/logos_png_bg.png";
import hipertextilCamaAsset from "@/assets/hipertextilCama.png";
import slide01Asset from "@/assets/slide01.jpg";
import slide02Asset from "@/assets/slide02.jpg";
import slide03Asset from "@/assets/slide03.jpg";
import slide04Asset from "@/assets/slide04.jpg";
const hipertextilSlides = [slide01Asset, slide02Asset, slide03Asset, slide04Asset];
import heroBg from "@/assets/hero-bedroom.jpg";
import catCoposAsset from "@/assets/baldespascoa.png";
const catCopos = catCoposAsset;
import catPalmeirasAsset from "@/assets/almofadassp.png";
import catPresentesAsset from "@/assets/MeuPet.png";
import catPersonalizadosAsset from "@/assets/galeria3.png";
const catPalmeiras = catPalmeirasAsset;
const catPresentes = catPresentesAsset;
const catPersonalizados = catPersonalizadosAsset;
import bannerPalmeiras from "@/assets/banner-futebol.jpg";
import rischiotoLogoAsset from "@/assets/logo_01.png";
import galeria1Asset from "@/assets/galeria1.png";
import galeria2Asset from "@/assets/galeria2.png";
import galeria3Asset from "@/assets/galeria3.png";
import galeria4Asset from "@/assets/galeria4.png";
import banner01Asset from "@/assets/BANNER_01.png";
import banner02Asset from "@/assets/BANNER_02.png";
import banner03Asset from "@/assets/BANNER_03.png";
const brasfootBanners = [banner01Asset, banner02Asset, banner03Asset];
import brasfootSlide01 from "@/assets/BANNER_G_01.09.png";
import brasfootSlide02 from "@/assets/banner_G_02.png";
import brasfootSlide03 from "@/assets/BANNER_G_03.png";
import brasfootSlide04 from "@/assets/banner_G03.09.png";
import galCachaca from "@/assets/cachaca01.png";
import galCanecaGel from "@/assets/canecagel01.png";
import galCanecas01 from "@/assets/canecas01.png";
import galCanecas02 from "@/assets/canecas02.png";
import galCopoCanudo from "@/assets/copocanudo01.png";
import galCopoStone from "@/assets/copostone01.png";
import galGarrafa02 from "@/assets/garrafa02.png";
import galGarrafas01 from "@/assets/garrafas01.png";
import galPortaCopos from "@/assets/portacoposcorint.png";
import galCaipirinha from "@/assets/caipirinhapalsp.png";
const brasfootGallery = [
  galCachaca,
  galCanecaGel,
  galCanecas01,
  galCanecas02,
  galCopoCanudo,
  galCopoStone,
  galGarrafa02,
  galGarrafas01,
  galPortaCopos,
  galCaipirinha,
];
const brasfootSlides = [brasfootSlide01, brasfootSlide02, brasfootSlide03, brasfootSlide04];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neto Representações — A maior variedade de produtos e presentes" },
      {
        name: "description",
        content: "Representação comercial na grande São Paulo. Brasfoot, HiperTêxtil e Rischioto.",
      },
      { property: "og:title", content: "Neto Representações" },
      { property: "og:description", content: "A maior variedade de produtos e presentes, você encontra aqui." },
    ],
  }),
  component: Home,
});

const categories = [
  { img: catCopos, title: "COPOS E GARRAFAS TÉRMICAS", href: "https://brasfootpresentes.com.br/" },
  { img: catPalmeiras, title: "PRESENTES", href: "https://brasfootpresentes.com.br/", external: true },
  { img: catPresentes, title: "LINHA PET", href: "https://b2b.hipertextil.ind.br/b2b/b2b/view/index/index.php" },
  {
    img: catPersonalizados,
    title: "PLÁSTICOS",
    href: "https://www.rischioto.ind.br/wp-content/uploads/2026/03/rischi-catalogo-online-JAN2026-2.pdf",
  },
];

const rischiotoGallery = [galeria1Asset, galeria2Asset, galeria3Asset, galeria4Asset];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-white text-navy scroll-smooth">
      <SiteHeader transparent />

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full pt-28 sm:pt-32 pb-16 sm:pb-20">
          <h1 className="font-display font-extrabold text-white text-[2.375rem] sm:text-7xl lg:text-[8.5rem] leading-[0.95] sm:leading-[0.9] tracking-tight break-words">
            <span className="text-green">NETO</span>
            <br />
            <span className="text-white">REPRESENTAÇÕES</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-white/90 text-base sm:text-xl max-w-lg font-light">
            A maior variedade de produtos e presentes,
            <br className="hidden sm:block" /> você encontra aqui.
          </p>
          <div className="mt-8 sm:mt-10">
            <a
              href="https://wa.me/5511993591102"
              className="btn-green text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 whitespace-pre-wrap text-center flex-col justify-center"
            >
              ENTRAR EM CONTATO
            </a>
          </div>
        </div>
      </section>

      {/* NOSSOS PRODUTOS */}
      <section id="produtos" className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-wider text-navy mb-12">NOSSOS PRODUTOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-bold text-base tracking-wide mb-3 leading-tight">{c.title}</h3>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    className="btn-green text-xs px-4 py-2"
                  >
                    VER PRODUTOS <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BANNER PROMOCIONAL — PALMEIRAS */}
      <section className="relative py-0">
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-green-dark to-green">
            <img
              src={bannerPalmeiras}
              alt="Linha Futebol"
              className="absolute inset-y-0 right-0 w-full md:w-2/3 h-full object-cover opacity-30 md:opacity-95"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-dark via-green-dark/90 md:to-transparent to-green-dark/70" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center px-6 sm:px-12 py-12 sm:py-20">
              <div className="text-white">
                <h3 className="font-display font-extrabold text-4xl sm:text-6xl leading-none">
                  LINHA
                  <br />
                  FUTEBOL
                </h3>
                <p className="mt-4 text-white/90 text-sm sm:text-base tracking-wide uppercase font-semibold">
                  Produtos oficiais
                  <br />
                  para verdadeiros fãs
                </p>
                <a
                  href="https://brasfootpresentes.com.br/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 bg-white text-green-dark font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-white/90 transition-colors"
                >
                  VER PRODUTOS <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-muted py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
              Sobre a Neto Representações
            </h2>
            <p className="text-navy/80 leading-relaxed mb-4">
              Empresa de representação comercial na grande São Paulo. Oferecemos uma variedade incrível de produtos para
              casa, cama, mesa, banho, tapetes e utilidades domésticas.
            </p>
            <p className="text-navy/80 leading-relaxed">
              Além disso, temos os melhores presentes criativos e licenciados de futebol das maiores marcas do Brasil.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green">500+</div>
                <div className="text-xs uppercase tracking-wider text-navy/60 mt-1">Clientes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green">10+</div>
                <div className="text-xs uppercase tracking-wider text-navy/60 mt-1">Marcas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green">10</div>
                <div className="text-xs uppercase tracking-wider text-navy/60 mt-1">Cidades</div>
              </div>
            </div>
          </div>
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=900,fit=crop/m6LPwXBwgQi45P2Q/mapasp-YKb18Byn0zuPponW.png"
            alt="Regiões de atuação"
            className="w-full max-w-md mx-auto"
            loading="lazy"
          />
        </div>
      </section>

      {/* REPRESENTADAS */}
      <section id="representadas" className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-center text-2xl sm:text-3xl font-bold tracking-wider text-navy mb-4">
            NOSSAS REPRESENTADAS
          </h2>
          <p className="text-center text-navy/70 mb-16 max-w-2xl mx-auto">
            Conheça as marcas que confiam em nosso trabalho.
          </p>

          {/* BRASFOOT */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-16 md:mb-20">
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-2">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=500,fit=crop,trim=33.559386973180075;54.62555066079295;0;40.52863436123348/m6LPwXBwgQi45P2Q/facebook_insta-AQE8x9kqwLh34P1n.jpg"
                  alt="Brasfoot Presentes"
                  className="w-32 sm:w-40 shrink-0"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-navy tracking-tight sm:text-right">
                  Brasfoot Presentes
                </h3>
              </div>
              <p className="text-navy/80 leading-relaxed mb-3">
                Atuamos no mercado há mais de 10 anos trazendo um mix incrível de produtos.
              </p>
              <p className="text-navy/80 leading-relaxed mb-3">
                Nossa equipe de criação está constantemente pesquisando os últimos lançamentos e ouvindo feedback dos
                clientes para garantir produtos de alta qualidade.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                Desde itens personalizados até produtos exclusivos, temos opções para todos os gostos.
              </p>
              <a
                href="https://brasfootpresentes.com.br/"
                target="_blank"
                rel="noreferrer"
                className="btn-green self-start inline-flex items-center gap-2"
              >
                VER PRODUTOS <span aria-hidden>→</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {brasfootBanners.map((src) => (
                <img key={src} src={src} alt="" className="w-full h-auto object-cover rounded-lg shadow" />
              ))}
            </div>
          </div>

          <div className="mt-4">
            <BrasfootSlider />
          </div>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3" style={{ marginBottom: "30px" }}>
            {brasfootGallery.map((src) => (
              <img key={src} src={src} alt="" className="w-full aspect-square object-cover rounded-lg shadow" />
            ))}
          </div>

          {/* HIPERTEXTIL */}
          <div className="mb-20">
            <div className="bg-muted rounded-lg p-6 sm:p-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <img src={hipertextilLogoAsset} alt="HiperTêxtil" className="max-w-xs mx-auto" />
              <div>
                <h3 className="text-3xl font-bold text-navy mb-4 tracking-tight">HiperTêxtil</h3>
                <p className="text-navy/80 leading-relaxed mb-3">
                  Um mundo de opções para sua revenda. Um diferencial à frente do mercado.
                </p>
                <p className="text-navy/80 leading-relaxed mb-4">
                  A HiperTêxtil está consolidada no mercado e atendendo todo o Brasil com diversas possibilidades para
                  seus clientes. Possui uma estrutura moderna com estoque 100% à pronta entrega.
                </p>
                <p className="text-navy/70 text-sm mb-6">
                  Marcas: <strong>Panosul</strong>, <strong>Benecasa</strong>, <strong>Tessi</strong>,{" "}
                  <strong>MeuPet</strong> e <strong>UseDue</strong>.
                </p>
                <a
                  href="https://b2b.hipertextil.ind.br/b2b/b2b/view/index/index.php"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-green"
                >
                  Acessar B2B <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Banner Cama */}
            <img
              src={hipertextilCamaAsset}
              alt="Linha de Cama Completa"
              className="w-full rounded-lg shadow mt-8"
            />

            {/* Slider */}
            <HipertextilSlider />
          </div>

          {/* RISCHIOTO */}
          <div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-navy mb-4 tracking-tight">Rischioto Plásticos</h3>
                <p className="text-navy/80 leading-relaxed mb-3">
                  Somos a Rischioto Plásticos, uma empresa estabelecida em 1965 com o objetivo de atender a pequena e
                  média indústria.
                </p>
                <p className="text-navy/80 leading-relaxed mb-6">
                  Mais de 50 anos de tradição somente em fabricação. Procuramos sempre oferecer aos nossos clientes
                  produtos com qualidade e preços competitivos com um design agradável, sem perder a função que se
                  propõe.
                </p>
                <a
                  href="https://www.rischioto.ind.br/wp-content/uploads/2026/03/rischi-catalogo-online-JAN2026-2.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-green"
                >
                  Confira nosso catálogo <span aria-hidden>→</span>
                </a>
              </div>
              <img src={rischiotoLogoAsset} alt="Rischioto" className="w-full rounded-lg shadow" />
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {rischiotoGallery.map((src) => (
                <img key={src} src={src} alt="" className="w-full aspect-square object-cover rounded-lg shadow" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-muted py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wider text-navy mb-4">FALE CONOSCO</h2>
          <p className="text-navy/70 mb-10 max-w-xl mx-auto">
            Tire dúvidas, peça um orçamento ou agende uma visita. Estamos prontos para atendê-lo!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/5511993591102"
              target="_blank"
              rel="noreferrer"
              className="btn-green inline-flex items-center gap-2 text-base px-8 py-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Conversar no WhatsApp
            </a>
          </div>

          <div className="border-t border-navy/10 pt-10">
            <p className="text-navy/70 mb-4">Acompanhe nossas novidades, lançamentos e promoções pelo Instagram.</p>
            <a
              href="https://www.instagram.com/edser_neto_representacoes_/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-tr from-fuchsia-600 via-rose-500 to-amber-500 text-white font-bold text-sm uppercase tracking-wider px-6 py-3 rounded hover:opacity-90 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Seguir no Instagram
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function HipertextilSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % hipertextilSlides.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative mt-8 overflow-hidden rounded-lg shadow">
      {hipertextilSlides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`w-full transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0 absolute inset-0"}`}
        />
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {hipertextilSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 w-2 rounded-full transition ${idx === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

function BrasfootSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % brasfootSlides.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative mt-8 overflow-hidden rounded-lg shadow">
      {brasfootSlides.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`w-full transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0 absolute inset-0"}`}
        />
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {brasfootSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-2 w-2 rounded-full transition ${idx === i ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}

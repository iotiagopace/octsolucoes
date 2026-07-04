import Head from "next/head";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

// TODO: domínio final do site ainda não foi definido — substituir antes de publicar.
const siteUrl = "[DOMÍNIO_PLACEHOLDER]";
// TODO: substituir pelo número de WhatsApp real da OCT Soluções (formato 55DDDNUMERO, só dígitos).
const whatsappNumber = "5511999999999";
// TODO: gerar uma imagem dedicada 1200x630 para Open Graph/Twitter em vez de reaproveitar a foto do produto.
const ogImage = `${siteUrl}/oct/3521906_1_1772029733699f07257f6c8074733609.png`;
// TODO: gerar um ícone quadrado dedicado (180x180) — a logo atual é retangular e fica cortada em telas de iOS.
const appleTouchIcon = "/oct/3521906_1_177324967229452339.png";

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OCT Soluções",
  url: siteUrl,
  logo: appleTouchIcon,
  image: ogImage,
  description:
    "Locação de impressoras profissionais com manutenção garantida e software próprio para criação de cartazes promocionais para supermercados.",
  sameAs: ["https://www.instagram.com/oct.solucoes/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true">
    <path d="M16.004 3C9.377 3 4 8.377 4 15.004c0 2.394.657 4.634 1.8 6.552L4 29l7.62-1.76a11.94 11.94 0 0 0 4.384.827h.005c6.627 0 12.004-5.377 12.004-12.004C28.013 8.437 22.636 3.06 16.004 3Zm0 21.86h-.004a9.9 9.9 0 0 1-5.05-1.384l-.362-.215-3.767.87.86-3.68-.236-.377a9.86 9.86 0 0 1-1.51-5.27c0-5.466 4.45-9.916 9.926-9.916 2.65 0 5.14 1.033 7.014 2.909a9.86 9.86 0 0 1 2.906 7.01c0 5.467-4.45 9.917-9.917 9.917Zm5.44-7.428c-.298-.15-1.764-.87-2.037-.97-.273-.1-.472-.15-.67.15-.198.298-.767.97-.94 1.168-.174.199-.348.224-.646.075-.298-.15-1.257-.463-2.394-1.476-.885-.789-1.483-1.764-1.657-2.062-.173-.298-.018-.46.132-.609.135-.135.298-.348.447-.522.15-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.15-.67-1.614-.918-2.211-.242-.582-.487-.503-.67-.512-.174-.008-.373-.01-.572-.01-.198 0-.522.075-.795.373-.273.298-1.043 1.02-1.043 2.488s1.068 2.887 1.217 3.086c.15.199 2.1 3.207 5.086 4.497.71.307 1.264.49 1.696.627.712.227 1.36.195 1.872.118.571-.085 1.764-.72 2.012-1.416.248-.696.248-1.293.174-1.417-.075-.124-.273-.199-.571-.348Z" />
  </svg>
);

const staggerGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const emptyForm = { nome: "", whatsapp: "", email: "", cidade: "", loja: "" };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [waLink, setWaLink] = useState(null);
  const prefersReducedMotion = useReducedMotion();

  const reveal = prefersReducedMotion
    ? { initial: "show", whileInView: "show", viewport: { once: true } }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.3 } };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const message =
      `Olá! Quero solicitar uma demonstração da OCT Soluções.\n\n` +
      `Nome: ${form.nome}\n` +
      `WhatsApp: ${form.whatsapp}\n` +
      `E-mail: ${form.email}\n` +
      `Cidade: ${form.cidade}\n` +
      `Loja/Supermercado: ${form.loja}`;
    const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    setWaLink(link);
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Head>
        <title>OCT Soluções | Cartazes Profissionais para Supermercados</title>
        <meta
          name="description"
          content="Impressoras profissionais em locação, manutenção garantida e software próprio para criar cartazes de ofertas em minutos. Solicite uma demonstração gratuita."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ed1c24" />
        <link rel="apple-touch-icon" href={appleTouchIcon} />
        {/* TODO: atualizar para o domínio final assim que estiver definido. */}
        <link rel="canonical" href={siteUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="OCT Soluções" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:title" content="OCT Soluções para supermercados" />
        <meta
          property="og:description"
          content="Sua oferta pronta para chamar atenção. Impressoras profissionais, software próprio e suporte completo para seu supermercado."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={siteUrl} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OCT Soluções para supermercados" />
        <meta
          name="twitter:description"
          content="Sua oferta pronta para chamar atenção. Impressoras profissionais, software próprio e suporte completo para seu supermercado."
        />
        <meta name="twitter:image" content={ogImage} />

        <link rel="icon" href="/oct/3521906_1_177324967229452339.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>

      <header className="oct-header">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <img src="/oct/3521906_1_177324967229452339.png" alt="OCT Soluções" />
        </a>
        <nav className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          <a href="#solucao" onClick={() => setMenuOpen(false)}>A solução</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a OCT</a>
          <a href="#prova-social" onClick={() => setMenuOpen(false)}>Clientes</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <a className="header-cta" href="#contato">Solicitar demonstração <Arrow /></a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span /><span />
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow"><i /> Comunicação promocional para o varejo</span>
            <h1>Sua oferta pronta para <em>chamar atenção.</em></h1>
            <p>Impressoras profissionais, software próprio e suporte completo para seu supermercado produzir cartazes melhores em minutos.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#contato">Quero uma demonstração <Arrow /></a>
              <a className="text-link" href="#solucao">Conhecer a solução <span>↓</span></a>
            </div>
          </motion.div>

          <motion.div
            className="hero-product"
            initial={{ opacity: 0, x: 70, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="red-disc" />
            <img src="/oct/3521906_1_1772029733699f07257f6c8074733609.png" alt="Impressora profissional imprimindo cartaz de oferta" />
            <span className="product-note">Locação + manutenção<br />sem complicação</span>
          </motion.div>

          <div className="hero-index">01</div>
        </section>

        <div className="ticker" aria-label="Benefícios OCT">
          <div>
            <span>AGILIDADE</span><b>✦</b><span>PADRÃO VISUAL</span><b>✦</b>
            <span>ALTO VOLUME</span><b>✦</b><span>SUPORTE ESPECIALIZADO</span><b>✦</b>
            <span>AGILIDADE</span><b>✦</b><span>PADRÃO VISUAL</span><b>✦</b>
          </div>
        </div>

        <section className="problem section-pad" id="solucao">
          <div className="section-number">02 / O desafio</div>
          <div className="problem-heading">
            <h2>Promoção muda rápido.<br /><span>Seu cartaz também precisa.</span></h2>
            <p>Chega de perder horas montando artes simples, depender de equipamentos inadequados ou espalhar uma comunicação sem padrão pela loja.</p>
          </div>
          <motion.div className="problem-list" {...reveal} variants={staggerGroup}>
            {[
              ["01", "Tempo recuperado", "Sua equipe cria materiais profissionais em poucos cliques."],
              ["02", "Volume sem gargalo", "Equipamentos preparados para a rotina intensa do supermercado."],
              ["03", "Uma marca consistente", "Ofertas padronizadas, legíveis e prontas para vender mais."],
            ].map(([n, title, text]) => (
              <motion.article key={n} variants={staggerItem}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i>↗</i>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="system section-pad" id="como-funciona">
          <div className="system-visual">
            <div className="orbit one" /><div className="orbit two" />
            <motion.img
              src="/oct/3521906_1_177331208181497214.png"
              alt="Software OCT Cartaz Pro no notebook e celular"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
            />
          </div>
          <div className="system-copy">
            <div className="section-number light">03 / A solução</div>
            <h2>Do preço à impressão. <em>Sem perder o ritmo.</em></h2>
            <p>O Cartaz Pro simplifica a criação. A impressora profissional garante a entrega. E a OCT mantém tudo funcionando.</p>
            <ol>
              <li><b>01</b><span><strong>Crie</strong>Escolha o formato e monte o cartaz.</span></li>
              <li><b>02</b><span><strong>Padronize</strong>Mantenha todas as lojas na mesma linguagem.</span></li>
              <li><b>03</b><span><strong>Imprima</strong>Produza em alto volume, direto na operação.</span></li>
            </ol>
          </div>
        </section>

        <section className="about section-pad" id="sobre">
          <div className="section-number">04 / Quem somos</div>
          <div className="about-copy">
            <span>TECNOLOGIA QUE<br />ENTENDE O VAREJO</span>
            <h2>A rotina é corrida.<br />A solução precisa ser <em>simples.</em></h2>
            <p>A OCT Soluções une tecnologia, equipamento e atendimento para dar mais produtividade à comunicação promocional de supermercados em todo o Brasil.</p>
          </div>
          <div className="about-proof">
            <img src="/oct/3521906_1_177325235311880116.png" alt="Solução OCT em uso no supermercado" />
            <p>Uma parceria completa, da implantação ao suporte diário.</p>
          </div>
        </section>

        <section className="proof section-pad" id="prova-social">
          <div className="section-number">05 / Prova social</div>
          <motion.div className="proof-heading" {...reveal} variants={staggerItem}>
            <h2>Supermercados de todo o Brasil <em>já confiam</em><br />na OCT Soluções.</h2>
            <p>Nossa tecnologia ajuda supermercados a produzir cartazes promocionais com mais agilidade, organização e padrão visual todos os dias.</p>
          </motion.div>
          <motion.div className="proof-videos" {...reveal} variants={staggerGroup}>
            <motion.div className="proof-video" variants={staggerItem}>
              <iframe
                src="https://www.youtube.com/embed/Vq5uFW4epAk?rel=0"
                title="Depoimento de cliente da OCT Soluções (supermercado 1)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
            <motion.div className="proof-video" variants={staggerItem}>
              <iframe
                src="https://www.youtube.com/embed/vW8DyR6gvAo?rel=0"
                title="Depoimento de cliente da OCT Soluções (supermercado 2)"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </section>

        <section className="lead section-pad" id="contato">
          <div className="section-number">06 / Fale com a gente</div>
          <div className="lead-grid">
            <motion.div className="lead-copy" {...reveal} variants={staggerItem}>
              <h2>Solicite uma <em>demonstração</em> agora.</h2>
              <p>Preencha os dados abaixo e nossa equipe entra em contato pelo WhatsApp para mostrar como sua loja pode produzir cartazes promocionais com mais agilidade e estrutura profissional.</p>
            </motion.div>
            <motion.form
              className="lead-form"
              onSubmit={handleSubmit}
              {...reveal}
              variants={staggerItem}
            >
              <label>
                <span>Nome*</span>
                <input type="text" name="nome" required autoComplete="name" value={form.nome} onChange={handleChange} />
              </label>
              <label>
                <span>WhatsApp*</span>
                <input type="tel" name="whatsapp" required autoComplete="tel" inputMode="tel" value={form.whatsapp} onChange={handleChange} />
              </label>
              <label>
                <span>E-mail*</span>
                <input type="email" name="email" required autoComplete="email" value={form.email} onChange={handleChange} />
              </label>
              <label>
                <span>Cidade*</span>
                <input type="text" name="cidade" required autoComplete="address-level2" value={form.cidade} onChange={handleChange} />
              </label>
              <label className="full">
                <span>Loja/Supermercado*</span>
                <input type="text" name="loja" required autoComplete="organization" value={form.loja} onChange={handleChange} />
              </label>
              <button type="submit" className="primary-button full">Solicitar orçamento <Arrow /></button>
              {waLink && (
                <p className="lead-fallback" role="status">
                  Se o WhatsApp não abriu automaticamente,{" "}
                  <a href={waLink} target="_blank" rel="noreferrer">toque aqui para continuar</a>.
                </p>
              )}
            </motion.form>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-mark">OCT</div>
          <div className="cta-content">
            <span>Pronto para virar a chave?</span>
            <h2>Cartazes melhores.<br />Operação mais rápida.</h2>
            <a className="primary-button dark-button" href="#contato">Solicitar uma demonstração <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <img src="/oct/3521906_1_177324967229452339.png" alt="OCT Soluções" />
        <p>Soluções para comunicação promocional no varejo.</p>
        <div>
          <a href="https://www.instagram.com/oct.solucoes/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="#contato">Contato ↗</a>
        </div>
        <small>© {new Date().getFullYear()} OCT Soluções. Todos os direitos reservados.</small>
        <small className="credits">
          Desenvolvido por{" "}
          <a href="https://metry.cc" target="_blank" rel="noreferrer">metry.cc</a>
          {" "}e{" "}
          <a href="https://bemseutipo.com.br/" target="_blank" rel="noreferrer">BST</a>
        </small>
      </footer>

      <a
        className="whatsapp-fab"
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Vim pelo site da OCT Soluções e quero saber mais.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </>
  );
}

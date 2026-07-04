import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";

const demoUrl = "https://lp.octsolucoes.com.br/#b_3521906_1_1772029733699f07257bad9";

const Arrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>OCT Soluções | Cartazes profissionais para supermercados</title>
        <meta
          name="description"
          content="Impressoras profissionais em locação, manutenção garantida e software próprio para criar cartazes de ofertas em poucos minutos."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="OCT Soluções para supermercados" />
        <meta property="og:description" content="Sua oferta pronta para chamar atenção." />
        <link rel="icon" href="/oct/3521906_1_177324967229452339.png" />
      </Head>

      <header className="oct-header">
        <a className="brand" href="#inicio" aria-label="OCT Soluções — início">
          <img src="/oct/3521906_1_177324967229452339.png" alt="OCT Soluções" />
        </a>
        <nav className={menuOpen ? "open" : ""} aria-label="Navegação principal">
          <a href="#solucao" onClick={() => setMenuOpen(false)}>A solução</a>
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>Como funciona</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a OCT</a>
        </nav>
        <a className="header-cta" href={demoUrl}>Solicitar demonstração <Arrow /></a>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
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
            transition={{ duration: .75, ease: [.22, 1, .36, 1] }}
          >
            <span className="eyebrow"><i /> Comunicação promocional para o varejo</span>
            <h1>Sua oferta pronta para <em>chamar atenção.</em></h1>
            <p>Impressoras profissionais, software próprio e suporte completo para seu supermercado produzir cartazes melhores — em minutos.</p>
            <div className="hero-actions">
              <a className="primary-button" href={demoUrl}>Quero uma demonstração <Arrow /></a>
              <a className="text-link" href="#solucao">Conhecer a solução <span>↓</span></a>
            </div>
          </motion.div>

          <motion.div
            className="hero-product"
            initial={{ opacity: 0, x: 70, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: .9, delay: .15, ease: [.22, 1, .36, 1] }}
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
          <div className="problem-list">
            {[
              ["01", "Tempo recuperado", "Sua equipe cria materiais profissionais em poucos cliques."],
              ["02", "Volume sem gargalo", "Equipamentos preparados para a rotina intensa do supermercado."],
              ["03", "Uma marca consistente", "Ofertas padronizadas, legíveis e prontas para vender mais."]
            ].map(([n, title, text]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <i>↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="system section-pad" id="como-funciona">
          <div className="system-visual">
            <div className="orbit one" /><div className="orbit two" />
            <motion.img
              src="/oct/3521906_1_177331208181497214.png"
              alt="Software OCT Cartaz Pro no notebook e celular"
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              viewport={{ once: true, amount: .4 }}
              transition={{ duration: .7 }}
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

        <section className="final-cta">
          <div className="cta-mark">OCT</div>
          <div className="cta-content">
            <span>Pronto para virar a chave?</span>
            <h2>Cartazes melhores.<br />Operação mais rápida.</h2>
            <a className="primary-button dark-button" href={demoUrl}>Solicitar uma demonstração <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <img src="/oct/3521906_1_177324967229452339.png" alt="OCT Soluções" />
        <p>Soluções para comunicação promocional no varejo.</p>
        <div>
          <a href="https://www.instagram.com/oct.solucoes/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href={demoUrl}>Contato ↗</a>
        </div>
        <small>© {new Date().getFullYear()} OCT Soluções. Todos os direitos reservados.</small>
      </footer>
    </>
  );
}

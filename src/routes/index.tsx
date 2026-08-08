import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import img00 from "@/assets/img00.jpg.asset.json";
import img01 from "@/assets/img01.jpg.asset.json";
import img02 from "@/assets/img02.jpg.asset.json";
import img03 from "@/assets/img03.jpg.asset.json";
import img04 from "@/assets/img04.jpg.asset.json";
import img05 from "@/assets/img05.jpg.asset.json";
import img06 from "@/assets/img06.jpg.asset.json";
import img07 from "@/assets/img07.jpg.asset.json";
import img08 from "@/assets/img08.jpg.asset.json";
import img09 from "@/assets/img09.jpg.asset.json";
import img10 from "@/assets/img10.jpg.asset.json";
import img11 from "@/assets/img11.jpg.asset.json";
import vid0 from "@/assets/vid0.mp4.asset.json";
import vid1 from "@/assets/vid1.mp4.asset.json";
import vid2 from "@/assets/vid2.mp4.asset.json";
import vid3 from "@/assets/vid3.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gabi Oliveira — Produtora Audiovisual & Videomaker" },
      {
        name: "description",
        content:
          "Portfólio de Gabi Oliveira: produção audiovisual, videomaking, fotografia, live editing e pós-produção em São Paulo.",
      },
      { property: "og:title", content: "Gabi Oliveira — Produtora Audiovisual & Videomaker" },
      {
        property: "og:description",
        content:
          "Produção audiovisual, captação, fotografia e pós-produção. Projetos, bastidores e workflow de Gabi Oliveira.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const bastidores: { src: string; cap: string }[][] = [
  [
    { src: img00.url, cap: "Filmagem ao vivo · Sala de concerto" },
    { src: img01.url, cap: "Monitoramento de imagem" },
    { src: img08.url, cap: "Luz cênica em cena" },
  ],
  [
    { src: img02.url, cap: "Captação de detalhe" },
    { src: img03.url, cap: "Captação · Instrumentos" },
    { src: img09.url, cap: "Cobertura de palco" },
  ],
  [
    { src: img04.url, cap: "No set, câmera em mãos" },
    { src: img05.url, cap: "Direção de fotografia" },
    { src: img10.url, cap: "Enquadramento de detalhe" },
  ],
  [
    { src: img07.url, cap: "Atrás das câmeras" },
    { src: img11.url, cap: "Setup e ajuste de câmera" },
    { src: img06.url, cap: "Preparação em sala escura" },
  ],
];

const videos = [
  { video: vid0.url, poster: img08.url, title: "Captação com luz cênica", tag: "Projeto" },
  { video: vid1.url, poster: img09.url, title: "Cobertura em sala de concerto", tag: "Projeto" },
  { video: vid2.url, poster: img10.url, title: "Captação de detalhe", tag: "Projeto" },
  { video: vid3.url, poster: img11.url, title: "Setup e ajuste de câmera", tag: "Projeto" },
];

const serie185 = [
  { src: img00.url, cap: "Quadro 01 · Sala de concerto" },
  { src: img05.url, cap: "Quadro 02 · Direção de fotografia" },
  { src: img06.url, cap: "Quadro 03 · Luz e cor" },
  { src: img04.url, cap: "Quadro 04 · No set" },
  { src: img02.url, cap: "Quadro 05 · Detalhe" },
  { src: img03.url, cap: "Quadro 06 · Instrumentos" },
  { src: img01.url, cap: "Quadro 07 · Monitor" },
  { src: img07.url, cap: "Quadro 08 · Atrás das câmeras" },
];

const areas = [
  {
    title: "Produção Audiovisual",
    text: "Planejamento, coordenação e execução de produções com foco em organização, eficiência e qualidade técnica.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="2" y="6" width="15" height="12" rx="1.5" />
        <path d="M17 10l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    title: "Videomaker",
    text: "Captação de imagens com linguagem cinematográfica, direção de fotografia e narrativa visual.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.4" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
      </svg>
    ),
  },
  {
    title: "Fotografia",
    text: "Produção de imagens para eventos, campanhas e projetos autorais.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="1.5" />
        <circle cx="12" cy="12" r="3.6" />
      </svg>
    ),
  },
  {
    title: "Assistência de Produção",
    text: "Apoio completo às equipes durante todas as fases da produção.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 8l3-3h4l2 3h9v10H3z" />
        <path d="M3 8h18" />
      </svg>
    ),
  },
  {
    title: "Live Editing",
    text: "Edição ao vivo / corte ao vivo em mesa de transmissão — cobertura dinâmica de eventos com transições em tempo real.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 18V9M9 18V5M14 18v-7M19 18v-4" />
      </svg>
    ),
  },
  {
    title: "Pós-produção",
    text: "Montagem, correção de cor, tratamento de imagem, organização e finalização.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 4l16 16M20 4L4 20" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
];

const workflow = [
  ["01", "Briefing & Imersão", "Entendimento profundo dos objetivos, público e contexto para construir uma estratégia alinhada às expectativas do projeto."],
  ["02", "Planejamento & Orçamento", "Definição do escopo, cronograma, recursos e investimento necessário para uma produção organizada e eficiente."],
  ["03", "Pré-produção", "Desenvolvimento do conceito criativo, roteiro, linguagem visual e planejamento operacional."],
  ["04", "Produção", "Captação de imagens e áudio com excelência técnica e narrativa visual."],
  ["05", "Pós-produção", "Edição, correção de cor, design de som e refinamento final do material audiovisual."],
  ["06", "Entrega", "Exportação e entrega dos arquivos nos formatos ideais, garantindo qualidade e alinhamento aos objetivos do cliente."],
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <a href="#top" className="logo">
          Gabi Oliveira
        </a>
        <nav className="site-nav">
          <a href="#sobre">Sobre</a>
          <a href="#atuacao">Atuação</a>
          <a href="#bastidores">Bastidores</a>
          <a href="#projetos">Projetos</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-bg" style={{ backgroundImage: `url('${img06.url}')` }} />
          <div className="hero-overlay" />
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="hero-name">
                Gabi
                <br />
                Oliveira
              </div>
              <div className="hero-tag">Produtora e Editora Audiovisual</div>
              <h1>Transformando ideias em experiências audiovisuais que conectam pessoas e marcas.</h1>
              <div className="hero-cta">
                <a href="#projetos" className="btn btn-primary">
                  Ver Projetos
                </a>
                <a href="#contato" className="btn btn-ghost">
                  Entrar em Contato
                </a>
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Role</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* SOBRE */}
        <section className="section" id="sobre">
          <div className="wrap about">
            <div className="about-media reveal">
              <div className="frame">
                <img src={img07.url} alt="Gabi Oliveira em produção audiovisual" loading="lazy" />
                <div className="tag">Atrás das câmeras</div>
              </div>
            </div>
            <div className="about-body reveal">
              <div className="eyebrow">Sobre mim</div>
              <h2 className="section-title" style={{ maxWidth: "14ch" }}>
                Gabi Oliveira
              </h2>
              <p>Sou Gabi Oliveira, Produtora Audiovisual, Videomaker e Assistente de Produção Audiovisual.</p>
              <p>
                Transformo momentos, ideias e projetos em narrativas visuais capazes de comunicar, emocionar e gerar
                impacto.
              </p>
              <p>
                Minha atuação combina criatividade, organização e excelência técnica em todas as etapas da produção
                audiovisual, do planejamento à entrega final.
              </p>
              <p>
                Acredito que grandes resultados surgem da colaboração, da atenção aos detalhes e da paixão por contar
                histórias através da imagem. Tenho experiência em produções audiovisuais, fotografia, captação, edição,
                pós-produção e apoio operacional.
              </p>
              <div className="trait-row">
                {["Trabalho em equipe", "Comunicação", "Organização", "Atenção aos detalhes", "Criatividade", "Comprometimento"].map(
                  (t) => (
                    <div className="trait" key={t}>
                      <i />
                      {t}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ATUAÇÃO */}
        <section className="section" id="atuacao">
          <div className="wrap">
            <div className="areas-head reveal">
              <div>
                <div className="eyebrow">O que eu faço</div>
                <h2 className="section-title">Áreas de atuação</h2>
              </div>
              <p className="lede">
                Do planejamento à entrega final — cada etapa conduzida com organização, sensibilidade visual e domínio
                técnico.
              </p>
            </div>
            <div className="areas-grid reveal">
              {areas.map((a) => (
                <div className="area-card" key={a.title}>
                  <div className="area-icon">{a.icon}</div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BASTIDORES */}
        <section className="section" id="bastidores">
          <div className="wrap">
            <div className="areas-head reveal">
              <div>
                <div className="eyebrow">Registros reais de produção</div>
                <h2 className="section-title">Bastidores</h2>
              </div>
              <p className="lede">
                Um recorte do dia a dia em campo — de salas de concerto a estúdios, sempre de olho no enquadramento
                certo.
              </p>
            </div>
          </div>
          <div className="parallax-gallery reveal">
            <div className="pg-track">
              {bastidores.map((col, i) => (
                <div className={`pg-col ${i % 2 === 0 ? "pg-col-up" : "pg-col-down"}`} key={i}>
                  {[...col, ...col].map((item, j) => (
                    <div
                      className="pg-item"
                      key={j}
                      style={{ backgroundImage: `url('${item.src}')` }}
                      onClick={() => setLightbox(item.src)}
                    >
                      <div className="g-cap">{item.cap}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="pg-fade pg-fade-top" />
            <div className="pg-fade pg-fade-bottom" />
          </div>
        </section>

        {/* PROJETOS */}
        <section className="section" id="projetos">
          <div className="wrap">
            <div className="areas-head reveal">
              <div>
                <div className="eyebrow">Portfólio</div>
                <h2 className="section-title">Projetos</h2>
              </div>
              <p className="lede">Trabalhos de captação, direção de imagem e pós-produção realizados em campo.</p>
            </div>

            <div className="work-grid reveal">
              {videos.map((v) => (
                <VideoCard key={v.title} {...v} />
              ))}
            </div>

            <div className="block-label reveal">
              <h3>Série 1.85</h3>
              <p>Quadros em proporção cinematográfica 1.85:1 — quatro por fileira.</p>
            </div>
            <div className="film-row reveal">
              {serie185.slice(0, 4).map((f) => (
                <div className="film-item" key={f.cap} onClick={() => setLightbox(f.src)}>
                  <img src={f.src} alt={f.cap} loading="lazy" />
                  <div className="g-cap">{f.cap}</div>
                </div>
              ))}
            </div>
            <div className="film-row reveal" style={{ marginTop: 16 }}>
              {serie185.slice(4, 8).map((f) => (
                <div className="film-item" key={f.cap} onClick={() => setLightbox(f.src)}>
                  <img src={f.src} alt={f.cap} loading="lazy" />
                  <div className="g-cap">{f.cap}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="section tight panel" id="processo">
          <div className="wrap">
            <div className="reveal" style={{ marginBottom: 50 }}>
              <div className="eyebrow">Como trabalho</div>
              <h2 className="section-title">Workflow</h2>
            </div>
            <div className="workflow-list reveal">
              {workflow.map(([n, t, d]) => (
                <div className="wf-row" key={n}>
                  <div className="wf-num">{n}</div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section">
          <div className="wrap split-2">
            <div className="reveal">
              <div className="eyebrow">Habilidades</div>
              <h2 className="section-title" style={{ maxWidth: "14ch" }}>
                Competências técnicas
              </h2>
              <div className="chip-wrap">
                {["Montagem de Equipamentos", "Captação de Vídeo", "Produção Audiovisual", "Fotografia", "Comunicação", "Organização", "Edição", "Correção de Cor", "Gestão de Arquivos"].map(
                  (c) => (
                    <div className="chip" key={c}>
                      <i />
                      {c}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="reveal">
              <div className="eyebrow">Ferramentas</div>
              <h2 className="section-title" style={{ maxWidth: "14ch" }}>
                Softwares
              </h2>
              <div className="soft-row">
                {["Photoshop", "DaVinci Resolve", "Canva", "Pollo.ai", "River"].map((s) => (
                  <div className="soft-card" key={s}>
                    <span className="dot" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FORMAÇÃO */}
        <section className="section tight panel">
          <div className="wrap split-2">
            <div className="reveal">
              <div className="eyebrow">Formação</div>
              <h2 className="section-title" style={{ maxWidth: "14ch" }}>
                Educação
              </h2>
              <div style={{ marginTop: 34 }}>
                <div className="edu-item">
                  <div className="yr">2013–2015</div>
                  <h3>Audiovisual</h3>
                  <p>Universidade Anhanguera · São Paulo</p>
                </div>
                <div className="edu-item">
                  <div className="yr">2019–2021</div>
                  <h3>Cinema e Multimeios</h3>
                  <p>Universidade Anhembi Morumbi · São Paulo</p>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="eyebrow">Idiomas & Interesses</div>
              <h2 className="section-title" style={{ maxWidth: "14ch" }}>
                Fora das câmeras
              </h2>
              <div className="lang-row">
                <div>
                  <span className="name">Português</span>
                  <span className="level">Nativo</span>
                </div>
                <div>
                  <span className="name">Inglês</span>
                  <span className="level">Intermediário</span>
                </div>
              </div>
              <div className="chip-wrap">
                {["Cinema", "Documentários", "Design", "Música", "Cultura", "Redes Sociais"].map((c) => (
                  <div className="chip" key={c}>
                    <i />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-final panel" id="contato">
          <div className="wrap">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              Vamos conversar
            </div>
            <h2 className="reveal">Vamos transformar sua próxima ideia em uma produção memorável.</h2>
            <p className="lede reveal">
              Se você busca uma profissional comprometida com criatividade, organização e excelência técnica em todas as
              etapas da produção audiovisual, será um prazer colaborar no seu próximo projeto.
            </p>
            <a
              href="https://wa.me/5511950224971?text=Ol%C3%A1%20Gabi%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%21"
              target="_blank"
              rel="noopener"
              className="btn btn-primary reveal"
            >
              Entrar em Contato
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-top">
            <div>
              <div className="foot-name">Gabi Oliveira</div>
              <div className="foot-role">
                Produtora Audiovisual · Videomaker · Assistente de Produção Audiovisual
              </div>
            </div>
            <div className="foot-links">
              <a
                href="https://www.instagram.com/oliveirgabis?igsh=MXNiN2UyaHNueTVmeg=="
                target="_blank"
                rel="noopener"
              >
                Instagram
              </a>
              <a href="https://wa.me/5511950224971" target="_blank" rel="noopener">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="foot-bottom">
            <span>contato@gabrielaoliveira.com · +55 (11) 95022-4971 · Brasil</span>
            <span>© 2026 Gabi Oliveira. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-close">Fechar ✕</div>
          <img src={lightbox} alt="Imagem ampliada" />
        </div>
      )}
    </>
  );
}

function VideoCard({
  video,
  poster,
  title,
  tag,
}: {
  video: string;
  poster: string;
  title: string;
  tag: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      if (!el.src) el.src = video;
      void el.play();
      setPlaying(true);
    }
  };

  return (
    <div className={`work-card${playing ? " playing" : ""}`} onClick={toggle}>
      <div className="work-media">
        <img src={poster} alt={title} loading="lazy" />
        <video ref={ref} muted loop playsInline preload="none" />
        <div className="play-badge">
          <svg viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="work-info">
        <h3>{title}</h3>
        <span>{tag}</span>
      </div>
    </div>
  );
}

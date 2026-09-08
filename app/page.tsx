/* eslint-disable @next/next/no-img-element -- Static site assets are pre-optimised and served directly by the deployment. */
import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBlock, Footer, Header, ProductCard } from "./components";
import { getFeaturedProducts } from "./product-data";

export const metadata: Metadata = {
  alternates: { languages: { en: "/", "zh-CN": "/zh" } },
};

const steps = [
  ["01", "Project brief", "Drawings, quantities, performance needs and target market."],
  ["02", "System development", "Profile selection, finish sampling and technical coordination."],
  ["03", "Manufacturing", "Production planning, quality checks and export-ready packing."],
  ["04", "Project support", "Installation documents and clear communication through delivery."],
];

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  return (
    <>
      <Header counterpartHref="/zh" />
      <main id="main-content" tabIndex={-1}>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img src="/arkline-hero.webp" alt="ARKLINE slim aluminium sliding glass walls connecting a contemporary living space and garden" fetchPriority="high" decoding="async" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow eyebrow--light">Aluminium systems for considered living</p>
          <h1 id="hero-title">Frames that disappear.<br />Spaces that connect.</h1>
          <p className="hero-copy">Doors, partitions and interior systems developed in Foshan for global residential, retail and hospitality projects.</p>
          <div className="hero-actions">
            <Link className="button button--light" href="/products">View the collection <Arrow /></Link>
            <a className="text-link text-link--light" href="#contact">Discuss a project <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-index" aria-label="Product categories"><span>Sliding</span><span>Folding</span><span>Pivot</span><span>Interior systems</span></div>
        <a className="scroll-cue" href="#intro" aria-label="Scroll to introduction">↓</a>
      </section>

      <section className="intro shell" id="intro">
        <p className="eyebrow">ARKLINE / Architectural Door & Interior Systems</p>
        <div className="intro-grid">
          <h2>Door systems.<br />Interior architecture.</h2>
          <div>
            <p className="lead">ARKLINE develops suspended doors, pivot and folding systems, invisible doors, wardrobes and modular cabinetry for spaces that value proportion, material and light.</p>
            <p>We work with overseas distributors, designers and project partners on configurable systems, custom dimensions and market-ready collections.</p>
            <Link className="text-link" href="/products">Explore all products <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="featured-products shell" id="systems">
        <div className="section-heading">
          <div><p className="eyebrow">Product collection</p><h2>Made to divide,<br />store and display.</h2></div>
          <div><p>Start with the architectural idea, compare the essential specifications, and open detailed installation information only when it becomes useful.</p><Link className="text-link" href="/products">View the full collection <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="featured-grid">
          {featuredProducts.map((product, index) => <ProductCard key={product.slug} product={product} className={index === 0 ? "product-tile--feature" : ""} />)}
        </div>
      </section>

      <section className="engineering-band">
        <div className="shell engineering-grid"><div><p className="eyebrow eyebrow--light">Engineering in detail</p><h2>Less visible.<br />More considered.</h2></div><div className="engineering-facts"><article><strong>150 kg</strong><span>Maximum rated load per panel on top-hung door systems</span></article><article><strong>8 mm</strong><span>Tempered glass across the principal door families</span></article><article><strong>≤3 mm</strong><span>Side and head clearance on selected bathroom doors</span></article></div></div>
      </section>

      <section className="material-section" id="materials">
        <div className="shell material-grid">
          <div className="material-copy">
            <p className="eyebrow eyebrow--light">Material palette</p>
            <h2>Quiet finishes.<br />Precise details.</h2>
            <p>Aluminium gives each system strength, accuracy and a refined edge. A considered palette of anodised and powder-coated finishes lets the architecture—not the frame—take the lead.</p>
            <a className="button button--outline" href="https://wa.me/8613902832183?text=Hello%20Ryan%2C%20I%20would%20like%20to%20request%20ARKLINE%20finish%20samples." target="_blank" rel="noreferrer">Request finish samples <Arrow /></a>
          </div>
          <div className="finish-panel" aria-label="Indicative aluminium finish palette">
            <div className="finish finish--graphite"><span>Graphite</span><small>01</small></div>
            <div className="finish finish--bronze"><span>Dark Bronze</span><small>02</small></div>
            <div className="finish finish--champagne"><span>Champagne</span><small>03</small></div>
            <div className="finish finish--silver"><span>Natural Silver</span><small>04</small></div>
          </div>
        </div>
      </section>

      <section className="trade shell" id="trade">
        <div className="trade-image"><img src="/products/vetro-wardrobe.jpg" alt="ARKLINE smoked glass wardrobe system" loading="lazy" decoding="async" /><div className="trade-badge"><strong>Foshan</strong><span>Global project support</span></div></div>
        <div className="trade-copy">
          <p className="eyebrow">For international partners</p>
          <h2>Built for your market,<br />backed by our factory.</h2>
          <p>Whether you are building a collection or specifying a single project, ARKLINE brings product development and manufacturing into one responsive workflow.</p>
          <ul><li><span>01</span> Custom dimensions and configurations</li><li><span>02</span> Private label and OEM collaboration</li><li><span>03</span> Finish, glass and hardware coordination</li><li><span>04</span> Export documentation and packing support</li></ul>
          <a className="button button--dark" href="#contact">Become a partner <Arrow /></a>
        </div>
      </section>

      <section className="process shell" id="about">
        <div className="section-heading section-heading--compact"><div><p className="eyebrow">How we work</p><h2>From idea to installation.</h2></div><p>A clear four-stage process helps international projects move from concept to production with fewer surprises.</p></div>
        <div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <ContactBlock />
      </main>
      <Footer />
    </>
  );
}

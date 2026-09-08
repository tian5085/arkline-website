/* eslint-disable @next/next/no-img-element -- Static site assets are pre-optimised and served directly by the deployment. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, ContactBlock, Footer, Header, ProductCard, ProductVisual } from "../../components";
import { getProduct, getRelatedProducts, products } from "../../product-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.category} | ARKLINE`,
    description: product.description,
    alternates: { languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}` } },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product);

  return (
    <>
      <Header counterpartHref={`/zh/products/${slug}`} />
      <main className="product-page" id="main-content" tabIndex={-1}>
      <section className="product-hero">
        <div className="product-hero-copy">
          <div className="product-breadcrumb"><Link href="/products">Products</Link><span>/</span><span>{product.category}</span></div>
          <p className="eyebrow">ARKLINE system {product.index}</p>
          <h1>{product.name}</h1>
          <p>{product.tagline}</p>
          {product.quickSpecs && <div className="hero-facts">{product.quickSpecs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>}
          <a className="text-link" href="#overview">Discover the system <span aria-hidden="true">↓</span></a>
        </div>
        <div className={`product-hero-image ${!product.hero ? "product-hero-image--schematic" : ""}`}>{product.hero ? <img src={product.hero} alt={`${product.name} ${product.category}`} fetchPriority="high" decoding="async" /> : <ProductVisual variant={product.visual} label={product.name} className="schematic-visual--hero" />}</div>
      </section>

      <section className="product-overview shell" id="overview">
        <div><p className="eyebrow">Overview</p><h2>{product.tagline}</h2></div>
        <div><p>{product.description}</p><a className="button button--dark" href={`https://wa.me/8613902832183?text=${encodeURIComponent(`Hello Ryan, I would like more information about the ARKLINE ${product.name} system.`)}`} target="_blank" rel="noreferrer">Request information <Arrow /></a></div>
      </section>

      <section className="feature-strip shell" aria-label="System features">
        {product.features.map((feature, index) => (
          <article key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>
        ))}
      </section>

      {product.gallery.length > 0 && <section className="gallery-showcase">
        <div className="product-gallery-heading shell"><div><p className="eyebrow">Applications & details</p><h2>Designed for<br />real spaces.</h2></div><p>Product visualisations, showroom studies and completed installations, grouped with the system they illustrate.</p></div>
        <div className={`product-gallery product-gallery--${product.gallery.length}`}>
          {product.gallery.map((image, index) => (
            <figure key={image.src} className={product.gallery.length > 2 && index === 0 ? "gallery-feature" : ""}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>}

      <section className="product-specs shell">
        <div className="spec-intro">
          <p className="eyebrow">System planning</p>
          <h2>Configured for<br />the project.</h2>
          <p>ARKLINE systems are developed around the room and commercial brief. Final dimensions, materials and technical details are confirmed during project coordination.</p>
        </div>
        <div className="spec-lists">
          <div><h3>Typical applications</h3><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><h3>Configuration options</h3><ul>{product.configuration.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <p className="spec-disclaimer">Images include product visualisations, showroom prototypes and completed installations. Availability and performance depend on the final project specification.</p>
        </div>
      </section>

      {product.technical && <section className="technical-details shell">
        <div className="technical-heading"><p className="eyebrow">Specifications & installation</p><h2>Only what you need,<br />when you need it.</h2><p>Open a section for dimensions, installation conditions and hardware notes. Final engineering is confirmed against project drawings.</p></div>
        <div className="technical-accordions">
          {product.technical.map((section, index) => <details key={section.title} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{section.title}</strong><i aria-hidden="true">+</i></summary>
            <div>{section.intro && <p>{section.intro}</p>}<ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </details>)}
        </div>
      </section>}

      <section className="related shell">
        <div className="related-heading"><p className="eyebrow">Continue exploring</p><h2>Related systems</h2><Link className="text-link" href="/products">View all products <span aria-hidden="true">→</span></Link></div>
        <div className="related-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
      </section>
      <ContactBlock productName={product.name} />
      </main>
      <Footer />
    </>
  );
}

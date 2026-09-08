import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock, Footer, Header, ProductCard } from "../components";
import { families, getFamilyProducts } from "../product-data";

export const metadata: Metadata = {
  title: "Products | ARKLINE Architectural Door & Interior Systems",
  description: "Explore ARKLINE sliding, folding and pivot doors, bathroom and invisible doors, wardrobes, wall systems and display cabinetry.",
  alternates: { languages: { en: "/products", "zh-CN": "/zh/products" } },
};

export default function ProductsPage() {
  return (
    <>
      <Header counterpartHref="/zh/products" />
      <main id="main-content" tabIndex={-1}>
      <section className="catalog-intro shell">
        <p className="eyebrow">ARKLINE collection / 2026</p>
        <div className="catalog-title">
          <h1>Products</h1>
          <p>From concealed-track doors to open wardrobes and display cabinetry, the collection is organised into six clear product families. Specifications and installation guidance remain available without overwhelming the first impression.</p>
        </div>
      </section>
      <nav className="family-nav shell" aria-label="Product families">{families.map((family) => <a key={family.id} href={`#${family.id}`}>{family.title}</a>)}</nav>
      {families.map((family) => {
        const familyProducts = getFamilyProducts(family.id);
        return <section className="family-section shell" id={family.id} key={family.id}>
          <div className="family-heading"><div><p className="eyebrow">Product family</p><h2>{family.title}</h2></div><p>{family.text}</p></div>
          <div className="family-grid">{familyProducts.map((product, index) => <ProductCard key={product.slug} product={product} className={familyProducts.length === 1 || (familyProducts.length > 2 && index === 0) ? "product-tile--family-lead" : ""} />)}</div>
        </section>;
      })}
      <section className="profile-library-promo shell">
        <div><p className="eyebrow eyebrow--light">Profiles & hardware</p><h2>A-Series aluminium-frame<br />glass doors</h2><p>Compare fourteen frame profiles by maximum size, finish, handle and hinge type—without opening fourteen separate pages.</p></div>
        <Link className="button button--light" href="/products/profiles">View profiles & hardware <span aria-hidden="true">↗</span></Link>
      </section>
      <section className="catalog-note shell">
        <span>Made to project</span>
        <p>Dimensions, hardware, glass, metal finishes and lighting are confirmed through technical coordination before production.</p>
      </section>
      <ContactBlock />
      </main>
      <Footer />
    </>
  );
}

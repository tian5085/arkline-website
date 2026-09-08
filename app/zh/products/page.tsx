import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock, Footer, Header, ProductCard } from "../../components";
import { familiesZh, zhProducts } from "../../product-data-zh";
import { getFamilyProducts } from "../../product-data";

export const metadata: Metadata = {
  title: "产品系列｜ARKLINE",
  description: "浏览 ARKLINE 吊趟门、折叠门、中轴门、卫浴门、隐形门、衣帽间、门墙柜与展示柜系统。",
  alternates: { languages: { en: "/products", "zh-CN": "/zh/products" } },
};

export default function ChineseProductsPage() {
  return (
    <>
      <Header locale="zh" counterpartHref="/products" />
      <main id="main-content" tabIndex={-1}>
      <section className="catalog-intro shell"><p className="eyebrow">ARKLINE 产品系列 / 2026</p><div className="catalog-title"><h1>产品</h1><p>从暗装轨道门到开放式衣帽间与展示柜，完整产品被整理为六个清晰系列。核心信息一目了然，详细技术参数则按需展开。</p></div></section>
      <nav className="family-nav shell" aria-label="产品系列">{familiesZh.map((family) => <a key={family.id} href={`#${family.id}`}>{family.title}</a>)}</nav>
      {familiesZh.map((family) => { const familyProducts = getFamilyProducts(family.id, zhProducts); return <section className="family-section shell" id={family.id} key={family.id}><div className="family-heading"><div><p className="eyebrow">产品家族</p><h2>{family.title}</h2></div><p>{family.text}</p></div><div className="family-grid">{familyProducts.map((product, index) => <ProductCard key={product.slug} product={product} locale="zh" className={familyProducts.length === 1 || (familyProducts.length > 2 && index === 0) ? "product-tile--family-lead" : ""} />)}</div></section>; })}
      <section className="profile-library-promo shell"><div><p className="eyebrow eyebrow--light">型材与五金</p><h2>A 系列铝框<br />玻璃门</h2><p>在同一个页面比较 14 个框型的最大尺寸、颜色、拉手和铰链，无需逐个打开型号页。</p></div><Link className="button button--light" href="/zh/products/profiles">查看型材与五金 <span aria-hidden="true">↗</span></Link></section>
      <section className="catalog-note shell"><span>按项目定制</span><p>尺寸、五金、玻璃、金属饰面与灯光均在生产前通过项目技术协调确认。</p></section>
      <ContactBlock locale="zh" />
      </main>
      <Footer locale="zh" />
    </>
  );
}

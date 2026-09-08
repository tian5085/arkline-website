/* eslint-disable @next/next/no-img-element -- Static site assets are pre-optimised and served directly by the deployment. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, ContactBlock, Footer, Header, ProductCard, ProductVisual } from "../../../components";
import { getZhProduct, zhProducts } from "../../../product-data-zh";
import { getRelatedProducts } from "../../../product-data";
import { assetPath } from "../../../paths";

export function generateStaticParams() {
  return zhProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getZhProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name}｜${product.category}｜ARKLINE`,
    description: product.description,
    alternates: { languages: { en: `/products/${slug}`, "zh-CN": `/zh/products/${slug}` } },
  };
}

export default async function ChineseProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getZhProduct(slug);
  if (!product) notFound();
  const related = getRelatedProducts(product, zhProducts);
  const enquiry = encodeURIComponent(`Ryan 您好，我想进一步了解 ARKLINE ${product.name}。`);

  return (
    <>
      <Header locale="zh" counterpartHref={`/products/${slug}`} />
      <main className="product-page" id="main-content" tabIndex={-1}>
      <section className="product-hero"><div className="product-hero-copy"><div className="product-breadcrumb"><Link href="/zh/products">产品</Link><span>/</span><span>{product.category}</span></div><p className="eyebrow">ARKLINE 系统 {product.index}</p><h1>{product.name}</h1><p>{product.tagline}</p>{product.quickSpecs && <div className="hero-facts">{product.quickSpecs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}</div>}<a className="text-link" href="#overview">了解系统 <span aria-hidden="true">↓</span></a></div><div className={`product-hero-image ${!product.hero ? "product-hero-image--schematic" : ""}`}>{product.hero ? <img src={assetPath(product.hero)} alt={`${product.name} ${product.category}`} fetchPriority="high" decoding="async" /> : <ProductVisual variant={product.visual} label={product.name} locale="zh" className="schematic-visual--hero" />}</div></section>

      <section className="product-overview shell" id="overview"><div><p className="eyebrow">产品概述</p><h2>{product.tagline}</h2></div><div><p>{product.description}</p><a className="button button--dark" href={`https://wa.me/8613902832183?text=${enquiry}`} target="_blank" rel="noreferrer">索取产品资料 <Arrow /></a></div></section>

      <section className="feature-strip shell" aria-label="系统特点">{product.features.map((feature, index) => <article key={feature.title}><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></article>)}</section>

      {product.gallery.length > 0 && <section className="gallery-showcase"><div className="product-gallery-heading shell"><div><p className="eyebrow">应用与细节</p><h2>为真实空间<br />而设计。</h2></div><p>产品效果图、展厅样品与已完成项目，按照所对应的系统集中展示。</p></div><div className={`product-gallery product-gallery--${product.gallery.length}`}>{product.gallery.map((image, index) => <figure key={image.src} className={product.gallery.length > 2 && index === 0 ? "gallery-feature" : ""}><img src={assetPath(image.src)} alt={image.alt} loading="lazy" decoding="async" /><figcaption><span>{String(index + 1).padStart(2, "0")}</span>{image.caption}</figcaption></figure>)}</div></section>}

      <section className="product-specs shell"><div className="spec-intro"><p className="eyebrow">系统规划</p><h2>为项目而<br />灵活配置。</h2><p>ARKLINE 根据空间与商业需求深化每一套系统，最终尺寸、材料与技术细节会在项目协调阶段确认。</p></div><div className="spec-lists"><div><h3>典型应用</h3><ul>{product.applications.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>配置选项</h3><ul>{product.configuration.map((item) => <li key={item}>{item}</li>)}</ul></div><p className="spec-disclaimer">图片包括产品效果图、展厅样品和已完成安装。实际供应与性能以最终项目规格确认为准。</p></div></section>

      {product.technical && <section className="technical-details shell"><div className="technical-heading"><p className="eyebrow">规格与安装</p><h2>需要时展开，<br />其余时候保持简洁。</h2><p>打开对应部分可查看尺寸、安装条件和五金说明，最终工程规格以项目图纸确认为准。</p></div><div className="technical-accordions">{product.technical.map((section, index) => <details key={section.title} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{section.title}</strong><i aria-hidden="true">+</i></summary><div>{section.intro && <p>{section.intro}</p>}<ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul></div></details>)}</div></section>}

      <section className="related shell"><div className="related-heading"><p className="eyebrow">继续浏览</p><h2>相关系统</h2><Link className="text-link" href="/zh/products">查看全部产品 <span aria-hidden="true">→</span></Link></div><div className="related-grid">{related.map((item) => <ProductCard key={item.slug} product={item} locale="zh" />)}</div></section>
      <ContactBlock productName={product.name} locale="zh" />
      </main>
      <Footer locale="zh" />
    </>
  );
}

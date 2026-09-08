/* eslint-disable @next/next/no-img-element -- Static site assets are pre-optimised and served directly by the deployment. */
import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ContactBlock, Footer, Header, ProductCard } from "../components";
import { zhProducts } from "../product-data-zh";
import { getFeaturedProducts } from "../product-data";

export const metadata: Metadata = {
  title: "ARKLINE｜建筑门与室内系统",
  description: "ARKLINE 提供吊趟门、折叠门、中轴门、隐形门、衣帽间与铝框玻璃柜系统。",
  alternates: { languages: { en: "/", "zh-CN": "/zh" } },
};

const steps = [
  ["01", "项目需求", "确认图纸、数量、性能要求、目标市场与时间计划。"],
  ["02", "系统深化", "选择型材、确认颜色样板并完成技术协调。"],
  ["03", "生产制造", "安排生产、品质检查与出口包装。"],
  ["04", "项目支持", "提供安装资料，并在交付过程中保持清晰沟通。"],
];

export default function ChineseHome() {
  const featuredProducts = getFeaturedProducts(zhProducts);
  return (
    <>
      <Header locale="zh" counterpartHref="/" />
      <main id="main-content" tabIndex={-1}>
      <section className="hero" id="top" aria-labelledby="zh-hero-title">
        <img src="/arkline-hero.webp" alt="ARKLINE 极窄铝框玻璃移门连接当代室内空间与花园" fetchPriority="high" decoding="async" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow eyebrow--light">为当代生活而设计的铝合金系统</p>
          <h1 id="zh-hero-title">让边框隐去，<br />让空间相连。</h1>
          <p className="hero-copy">源自佛山的门、隔断与室内家居系统，服务全球住宅、商业与酒店项目。</p>
          <div className="hero-actions"><Link className="button button--light" href="/zh/products">浏览产品 <Arrow /></Link><a className="text-link text-link--light" href="#contact">洽谈项目 <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-index" aria-label="产品类别"><span>吊趟</span><span>折叠</span><span>中轴</span><span>室内系统</span></div>
        <a className="scroll-cue" href="#intro" aria-label="浏览品牌介绍">↓</a>
      </section>

      <section className="intro shell" id="intro">
        <p className="eyebrow">ARKLINE / 建筑门与室内系统</p>
        <div className="intro-grid"><h2>门系统，<br />也是室内建筑。</h2><div><p className="lead">ARKLINE 专注吊趟、折叠、中轴、隐形门、衣帽间和模块化柜体，为重视比例、材质与光线的空间提供系统解决方案。</p><p>我们与海外经销商、设计师和项目伙伴合作，提供可配置系统、定制尺寸和适应不同市场的产品组合。</p><Link className="text-link" href="/zh/products">浏览全部产品 <span aria-hidden="true">→</span></Link></div></div>
      </section>

      <section className="featured-products shell" id="systems">
        <div className="section-heading"><div><p className="eyebrow">产品系列</p><h2>用来分隔，<br />也用来收纳与展示。</h2></div><div><p>先理解产品的空间价值，再比较核心参数；安装与五金细节只在需要时展开，阅读始终清晰简洁。</p><Link className="text-link" href="/zh/products">查看完整系列 <span aria-hidden="true">→</span></Link></div></div>
        <div className="featured-grid">{featuredProducts.map((product, index) => <ProductCard key={product.slug} product={product} locale="zh" className={index === 0 ? "product-tile--feature" : ""} />)}</div>
      </section>

      <section className="engineering-band"><div className="shell engineering-grid"><div><p className="eyebrow eyebrow--light">细节中的工程</p><h2>少一些可见，<br />多一些考量。</h2></div><div className="engineering-facts"><article><strong>150 kg</strong><span>吊趟门系统单扇最高额定承重</span></article><article><strong>8 mm</strong><span>核心玻璃门系列采用钢化玻璃</span></article><article><strong>≤3 mm</strong><span>部分卫浴门左右及顶部控制缝隙</span></article></div></div></section>

      <section className="material-section" id="materials"><div className="shell material-grid"><div className="material-copy"><p className="eyebrow eyebrow--light">材质与颜色</p><h2>安静的饰面，<br />精确的细节。</h2><p>铝合金赋予系统强度、精度与克制边界。阳极氧化和喷涂颜色经过协调，让建筑空间成为主角，而不是框架。</p><a className="button button--outline" href={`https://wa.me/8613902832183?text=${encodeURIComponent("Ryan 您好，我想申请 ARKLINE 的颜色样板。")}`} target="_blank" rel="noreferrer">索取颜色样板 <Arrow /></a></div><div className="finish-panel" aria-label="铝材参考颜色"><div className="finish finish--graphite"><span>石墨灰</span><small>01</small></div><div className="finish finish--bronze"><span>深铜色</span><small>02</small></div><div className="finish finish--champagne"><span>香槟金</span><small>03</small></div><div className="finish finish--silver"><span>自然银</span><small>04</small></div></div></div></section>

      <section className="trade shell" id="trade"><div className="trade-image"><img src="/products/vetro-wardrobe.jpg" alt="ARKLINE 烟熏玻璃衣柜系统" loading="lazy" decoding="async" /><div className="trade-badge"><strong>佛山</strong><span>全球项目支持</span></div></div><div className="trade-copy"><p className="eyebrow">面向全球合作伙伴</p><h2>为您的市场开发，<br />由我们的工厂支持。</h2><p>无论是建立完整产品系列，还是落实单个项目，ARKLINE 都将产品深化与制造整合在同一个高效流程中。</p><ul><li><span>01</span> 尺寸与系统配置定制</li><li><span>02</span> 私有品牌与 OEM 合作</li><li><span>03</span> 颜色、玻璃与五金协调</li><li><span>04</span> 出口文件与包装支持</li></ul><a className="button button--dark" href="#contact">成为合作伙伴 <Arrow /></a></div></section>

      <section className="process shell" id="about"><div className="section-heading section-heading--compact"><div><p className="eyebrow">合作流程</p><h2>从想法到安装。</h2></div><p>清晰的四阶段流程，让海外项目从概念到生产更加可控，减少不必要的意外。</p></div><div className="steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <ContactBlock locale="zh" />
      </main>
      <Footer locale="zh" />
    </>
  );
}

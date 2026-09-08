/* eslint-disable @next/next/no-img-element -- Static site assets are pre-optimised and served directly by the deployment. */
import type { Product } from "./product-data";
import Link from "next/link";
import { assetPath } from "./paths";

export const Arrow = () => <span aria-hidden="true">↗</span>;

export function ProductVisual({ variant = "slim", label, className = "", locale = "en" }: { variant?: Product["visual"]; label: string; className?: string; locale?: "en" | "zh" }) {
  const caption = locale === "zh" ? "结构示意" : "Configuration study";
  return (
    <div className={`schematic-visual schematic-${variant} ${className}`} role="img" aria-label={`${label} ${caption}`}>
      <div className="schematic-track"><i /><i /><i /></div>
      <div className="schematic-panels"><i /><i /><i /><i /><i /></div>
      <div className="schematic-floor" />
      <div className="schematic-caption"><span>{caption}</span><strong>{label}</strong></div>
    </div>
  );
}

export function Header({ dark = false, locale = "en", counterpartHref }: { dark?: boolean; locale?: "en" | "zh"; counterpartHref?: string }) {
  const zh = locale === "zh";
  const prefix = zh ? "/zh" : "";
  return (
    <header className={`site-header ${dark ? "site-header--dark" : ""}`}>
      <a className="skip-link" href="#main-content">{zh ? "跳到主要内容" : "Skip to main content"}</a>
      <Link className="wordmark" href={zh ? "/zh" : "/"} aria-label={zh ? "ARKLINE 中文首页" : "ARKLINE home"}>
        <span>ARKLINE</span><small>{zh ? "建筑门与室内系统" : "Architectural Door & Interior Systems"}</small>
      </Link>
      <nav className="desktop-nav" aria-label={zh ? "主导航" : "Main navigation"}>
        <Link href={`${prefix}/products`}>{zh ? "产品" : "Products"}</Link>
        <Link href={`${prefix}/products#doors`}>{zh ? "门系统" : "Door systems"}</Link>
        <Link href={`${prefix}/products#wall`}>{zh ? "室内系统" : "Interior systems"}</Link>
        <Link href={`${prefix}/products/profiles`}>{zh ? "型材与五金" : "Profiles & Hardware"}</Link>
      </nav>
      <div className="nav-actions">
        <Link className="language-switch" href={counterpartHref ?? (zh ? "/" : "/zh")} hrefLang={zh ? "en" : "zh-CN"} aria-label={zh ? "Switch to English" : "切换到中文"}>{zh ? "EN" : "中文"}</Link>
        <a className="nav-cta" href={`https://wa.me/8613902832183?text=${encodeURIComponent(zh ? "Ryan 您好，我想了解 ARKLINE 的产品。" : "Hello Ryan, I am interested in ARKLINE products.")}`} target="_blank" rel="noreferrer">{zh ? "联系 Ryan" : "WhatsApp Ryan"} <Arrow /></a>
        <details className="mobile-menu">
          <summary aria-label={zh ? "打开导航" : "Open navigation"}>{zh ? "菜单" : "Menu"}</summary>
          <nav aria-label={zh ? "移动端导航" : "Mobile navigation"}>
            <Link href={`${prefix}/products`}>{zh ? "产品" : "Products"}</Link>
            <Link href={`${prefix}/products#doors`}>{zh ? "门系统" : "Door systems"}</Link>
            <Link href={`${prefix}/products#wall`}>{zh ? "室内系统" : "Interior systems"}</Link>
            <Link href={`${prefix}/products/profiles`}>{zh ? "型材与五金" : "Profiles & Hardware"}</Link>
            <Link href={`${prefix}/#contact`}>{zh ? "联系我们" : "Contact"}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function ProductCard({ product, className = "", locale = "en" }: { product: Product; className?: string; locale?: "en" | "zh" }) {
  return (
    <Link className={`product-tile ${className} ${!product.hero ? "product-tile--schematic" : ""}`} href={`${locale === "zh" ? "/zh" : ""}/products/${product.slug}`}>
      {product.hero ? <img src={assetPath(product.hero)} alt={`${product.name} — ${product.category}`} loading="lazy" decoding="async" /> : <ProductVisual variant={product.visual} label={product.name} locale={locale} />}
      <div className="card-overlay" />
      <div className="card-top"><span>{product.index}</span><Arrow /></div>
      <div className="card-copy">
        <div><small>{product.category}</small><h3>{product.name}</h3></div>
        <p>{product.tagline}</p>
      </div>
    </Link>
  );
}

export function ContactBlock({ productName, locale = "en" }: { productName?: string; locale?: "en" | "zh" }) {
  const zh = locale === "zh";
  const message = encodeURIComponent(zh ? `Ryan 您好，我想了解${productName ? ` ARKLINE ${productName}` : " ARKLINE 的产品"}。` : `Hello Ryan, I am interested in ${productName ? `the ARKLINE ${productName} system` : "ARKLINE products"}.`);
  return (
    <section className="contact" id="contact">
      <div className="shell contact-grid contact-grid--details">
        <div>
          <p className="eyebrow eyebrow--light">{zh ? "项目咨询" : "International enquiries"}</p>
          <h2>{zh ? <>一起定义<br />您的项目。</> : <>Let&apos;s define<br />your project.</>}</h2>
          <p>{zh ? "请告诉我们洞口尺寸、数量、目标市场和项目计划，Ryan Lei 将与 ARKLINE 团队为您协调下一步。" : "Share your opening sizes, quantities, target market and project schedule. Ryan Lei will coordinate the next step with the ARKLINE team."}</p>
          <a className="button button--light" href={`https://wa.me/8613902832183?text=${message}`} target="_blank" rel="noreferrer">{zh ? "WhatsApp 咨询" : "Message on WhatsApp"} <Arrow /></a>
        </div>
        <div className="contact-details">
          <div><span>{zh ? "联系人" : "Contact"}</span><strong>Ryan Lei</strong></div>
          <div><span>{zh ? "中国 / WhatsApp" : "China / WhatsApp"}</span><a href="tel:+8613902832183">+86 139 0283 2183</a></div>
          <div><span>{zh ? "美国电话" : "United States"}</span><a href="tel:+12057647011">+1 205 764 7011</a></div>
          <div className="contact-address"><span>{zh ? "公司与工厂" : "Company & factory"}</span>{zh ? <address>ARKLINE 建筑门与室内系统<br />广东省佛山市南海区狮山镇官窑办事处</address> : <address>ARKLINE Architectural Door & Interior Systems<br />Guanyao Office, Shishan Town, Nanhai District,<br />Foshan, Guangdong, China</address>}<small>{zh ? <>ARKLINE Architectural Door & Interior Systems<br />Foshan, Guangdong, China</> : <>ARKLINE 建筑门与室内系统<br />中国 · 广东佛山</>}</small></div>
        </div>
      </div>
    </section>
  );
}

export function Footer({ locale = "en" }: { locale?: "en" | "zh" }) {
  const zh = locale === "zh";
  return (
    <footer>
      <div className="shell footer-top">
        <Link className="wordmark wordmark--footer" href={zh ? "/zh" : "/"}><span>ARKLINE</span><small>{zh ? "建筑门与室内系统" : "Architectural Door & Interior Systems"}</small></Link>
        <p>{zh ? "吊趟 · 折叠 · 中轴 · 隐形门 · 衣帽间 · 展示柜" : "Sliding · Folding · Pivot · Invisible Doors · Wardrobes · Display Cabinetry"}</p>
        <a href="https://wa.me/8613902832183" target="_blank" rel="noreferrer">{zh ? "WhatsApp 联系 Ryan" : "WhatsApp Ryan"} <Arrow /></a>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} ARKLINE</span><span>{zh ? "中国 · 广东佛山" : "Foshan, Guangdong · China"}</span></div>
    </footer>
  );
}

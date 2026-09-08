import type { Metadata } from "next";
import { ContactBlock, Footer, Header } from "../../../components";

export const metadata: Metadata = {
  title: "型材与五金系统｜ARKLINE",
  description: "按最大尺寸、颜色、拉手、铰链与承重五金比较 14 个 ARKLINE A 系列铝框玻璃门型号。",
  alternates: { languages: { en: "/products/profiles", "zh-CN": "/zh/products/profiles" } },
};

const profiles = [
  { model: "A-126", group: "20 mm 边框铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "哑黑 · 黄铜拉丝 · 绅士灰 · 定制喷涂", handle: "200 mm 标准拉手 / 定制铣型" },
  { model: "A-310", group: "20 mm 边框铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "定制喷涂", handle: "通高拉手" },
  { model: "A-363", group: "20 mm 边框铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "钛狼灰 · 定制喷涂", handle: "通高拉手" },
  { model: "A-413", group: "20 mm 边框铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "定制喷涂", handle: "200 mm 外装拉手" },
  { model: "A-434", group: "20 mm 边框铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "定制喷涂", handle: "通高拉手" },
  { model: "A-313", group: "20 mm 边框铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "定制喷涂", handle: "150 mm 分体 / 一体铣型拉手" },
  { model: "A-326", group: "35 mm 杯铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "钛狼灰 · 定制喷涂", handle: "通高拉手" },
  { model: "A-352", group: "35 mm 杯铰链", size: "W ≤ 600 · H ≤ 3000 mm", finish: "定制喷涂", handle: "皮革拉手" },
  { model: "A-529", group: "轻型天地铰链", size: "W ≤ 500 · H ≤ 2600 mm", finish: "定制喷涂", handle: "铣型拉手" },
  { model: "A-124", group: "轻型天地铰链", size: "W ≤ 500 · H ≤ 2600 mm", finish: "哑黑 · 黄铜拉丝 · 绅士灰 · 定制喷涂", handle: "A-146 拉手 · 160 mm" },
  { model: "A-217", group: "轻型天地铰链", size: "W ≤ 500 · H ≤ 2600 mm", finish: "哑黑 · 黄铜拉丝 · 绅士灰 · 定制喷涂", handle: "内嵌拉手 · 128 mm" },
  { model: "A-055", group: "轻型天地铰链", size: "W ≤ 500 · H ≤ 2600 mm", finish: "哑黑 · 黄铜拉丝 · 绅士灰 · 定制喷涂", handle: "220 mm 标准拉手 / 定制铣型" },
  { model: "A-366", group: "轻型天地铰链", size: "W ≤ 500 · H ≤ 2600 mm", finish: "定制喷涂", handle: "150 mm 外装拉手" },
  { model: "A-316", group: "轻型天地铰链", size: "W ≤ 500 · H ≤ 2600 mm", finish: "定制喷涂", handle: "150 mm 外装 / 定制铣型" },
];

const groups = ["20 mm 边框铰链", "35 mm 杯铰链", "轻型天地铰链"];

export default function ChineseProfileLibraryPage() {
  return (
    <>
      <Header locale="zh" counterpartHref="/products/profiles" />
      <main id="main-content" tabIndex={-1}>
      <section className="profiles-hero"><div className="shell profiles-hero-grid"><div><p className="eyebrow eyebrow--light">ARKLINE A 系列</p><h1>型材与五金<br />系统</h1></div><div><p>将 14 个铝框玻璃门型号、铰链与承重五金浓缩到一个实用比较页。先确定开启五金与尺寸，再选择颜色和拉手语言。</p><a className="text-link text-link--light" href="#library">比较型材与五金 <span aria-hidden="true">↓</span></a></div></div><div className="profile-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div></section>
      <section className="profile-guide shell"><div><span>01</span><h2>铰链与承重五金</h2><p>20 mm 边框铰链适配通高极窄柜门；杯铰链与天地铰链则对应不同开启方式与承重条件。</p></div><div><span>02</span><h2>确认尺寸</h2><p>型号主要分为最大 600 × 3000 mm 或 500 × 2600 mm 两类门扇范围。</p></div><div><span>03</span><h2>选择细节</h2><p>颜色与拉手共同决定玻璃门最终的视觉性格。</p></div></section>
      <section className="profile-groups shell" id="library">{groups.map((group) => { const items = profiles.filter((profile) => profile.group === group); return <div className="profile-group" key={group}><div className="profile-group-title"><p className="eyebrow">铰链与型材系列</p><h2>{group}</h2><span>{items.length} 个型号</span></div><div className="profile-cards">{items.map((profile) => <article key={profile.model}><div className="mini-profile" aria-hidden="true"><i /><i /></div><h3>{profile.model}</h3><dl><div><dt>最大尺寸</dt><dd>{profile.size}</dd></div><div><dt>颜色</dt><dd>{profile.finish}</dd></div><div><dt>拉手</dt><dd>{profile.handle}</dd></div><div><dt>铰链</dt><dd>{profile.group}</dd></div></dl><a href={`https://wa.me/8613902832183?text=${encodeURIComponent(`Ryan 您好，我想了解 ARKLINE ${profile.model} 铝框玻璃门。`)}`} target="_blank" rel="noreferrer">咨询 {profile.model}<span>↗</span></a></article>)}</div></div>; })}</section>
      <section className="profile-note shell"><span>规格说明</span><p>最大尺寸为选型限制，并不代表自动满足所有性能要求。最终尺寸、玻璃重量、铰链数量与安装条件将在技术审核阶段确认。</p></section>
      <ContactBlock productName="A 系列铝框玻璃门" locale="zh" />
      </main>
      <Footer locale="zh" />
    </>
  );
}

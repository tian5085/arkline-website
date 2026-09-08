import type { Metadata } from "next";
import { ContactBlock, Footer, Header } from "../../components";

export const metadata: Metadata = {
  title: "Profiles & Hardware | ARKLINE",
  description: "Compare fourteen ARKLINE A-Series aluminium-frame glass door profiles, hinges and load-bearing hardware by size, finish and handle type.",
  alternates: { languages: { en: "/products/profiles", "zh-CN": "/zh/products/profiles" } },
};

const profiles = [
  { model: "A-126", group: "20 mm frame hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Matt Black · Brushed Brass · Gentleman Grey · Custom colour", handle: "200 mm standard handle / custom-milled" },
  { model: "A-310", group: "20 mm frame hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Custom colour", handle: "Full-height handle" },
  { model: "A-363", group: "20 mm frame hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Titanium Grey · Custom colour", handle: "Full-height handle" },
  { model: "A-413", group: "20 mm frame hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Custom colour", handle: "200 mm applied handle" },
  { model: "A-434", group: "20 mm frame hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Custom colour", handle: "Full-height handle" },
  { model: "A-313", group: "20 mm frame hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Custom colour", handle: "150 mm split / integrated milled handle" },
  { model: "A-326", group: "35 mm cup hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Titanium Grey · Custom colour", handle: "Full-height handle" },
  { model: "A-352", group: "35 mm cup hinge", size: "W ≤ 600 · H ≤ 3000 mm", finish: "Custom colour", handle: "Leather pull" },
  { model: "A-529", group: "Light-duty pivot hinge", size: "W ≤ 500 · H ≤ 2600 mm", finish: "Custom colour", handle: "Milled handle" },
  { model: "A-124", group: "Light-duty pivot hinge", size: "W ≤ 500 · H ≤ 2600 mm", finish: "Matt Black · Brushed Brass · Gentleman Grey · Custom colour", handle: "A-146 handle · 160 mm" },
  { model: "A-217", group: "Light-duty pivot hinge", size: "W ≤ 500 · H ≤ 2600 mm", finish: "Matt Black · Brushed Brass · Gentleman Grey · Custom colour", handle: "Inset handle · 128 mm" },
  { model: "A-055", group: "Light-duty pivot hinge", size: "W ≤ 500 · H ≤ 2600 mm", finish: "Matt Black · Brushed Brass · Gentleman Grey · Custom colour", handle: "220 mm standard / custom-milled" },
  { model: "A-366", group: "Light-duty pivot hinge", size: "W ≤ 500 · H ≤ 2600 mm", finish: "Custom colour", handle: "150 mm applied handle" },
  { model: "A-316", group: "Light-duty pivot hinge", size: "W ≤ 500 · H ≤ 2600 mm", finish: "Custom colour", handle: "150 mm applied / custom-milled" },
];

const groups = ["20 mm frame hinge", "35 mm cup hinge", "Light-duty pivot hinge"];

export default function ProfileLibraryPage() {
  return (
    <>
      <Header counterpartHref="/zh/products/profiles" />
      <main id="main-content" tabIndex={-1}>
      <section className="profiles-hero">
        <div className="shell profiles-hero-grid">
          <div><p className="eyebrow eyebrow--light">ARKLINE A-Series</p><h1>Profiles &<br />Hardware</h1></div>
          <div><p>Fourteen aluminium-frame glass door profiles, hinges and load-bearing hardware, condensed into one practical comparison. Start with the opening hardware and size, then refine the finish and handle language.</p><a className="text-link text-link--light" href="#library">Compare profiles & hardware <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="profile-lines" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </section>

      <section className="profile-guide shell"><div><span>01</span><h2>Hinges & load-bearing hardware</h2><p>20 mm frame hinges suit tall slim-framed cabinet doors; cup and pivot hinges support alternative opening and load conditions.</p></div><div><span>02</span><h2>Confirm the size</h2><p>Models are grouped around maximum 600 × 3000 mm or 500 × 2600 mm panel envelopes.</p></div><div><span>03</span><h2>Select the detail</h2><p>Finish and handle options determine the final visual character of the door.</p></div></section>

      <section className="profile-groups shell" id="library">
        {groups.map((group) => {
          const items = profiles.filter((profile) => profile.group === group);
          return <div className="profile-group" key={group}><div className="profile-group-title"><p className="eyebrow">Hinge & profile family</p><h2>{group}</h2><span>{items.length} models</span></div><div className="profile-cards">{items.map((profile) => <article key={profile.model}><div className="mini-profile" aria-hidden="true"><i /><i /></div><h3>{profile.model}</h3><dl><div><dt>Maximum size</dt><dd>{profile.size}</dd></div><div><dt>Finish</dt><dd>{profile.finish}</dd></div><div><dt>Handle</dt><dd>{profile.handle}</dd></div><div><dt>Hinge</dt><dd>{profile.group}</dd></div></dl><a href={`https://wa.me/8613902832183?text=${encodeURIComponent(`Hello Ryan, I would like information about the ARKLINE ${profile.model} glass door profile.`)}`} target="_blank" rel="noreferrer">Ask about {profile.model}<span>↗</span></a></article>)}</div></div>;
        })}
      </section>

      <section className="profile-note shell"><span>Specification note</span><p>Maximum sizes are selection limits, not automatic performance guarantees. Final dimensions, glass weight, hinge quantity and installation condition are confirmed during technical review.</p></section>
      <ContactBlock productName="A-Series glass door profiles" />
      </main>
      <Footer />
    </>
  );
}

export type Product = {
  slug: string;
  name: string;
  category: string;
  index: string;
  tagline: string;
  description: string;
  family: string;
  hero?: string;
  visual?: "concealed" | "multi" | "slim" | "fold" | "pivot" | "bath" | "flush";
  quickSpecs?: { label: string; value: string }[];
  gallery: { src: string; alt: string; caption: string }[];
  features: { title: string; text: string }[];
  applications: string[];
  configuration: string[];
  technical?: { title: string; intro?: string; items: string[] }[];
};

export const families = [
  { id: "doors", title: "Doors & Partitions", text: "Suspended sliding, folding, pivot and screen systems for flexible architectural openings." },
  { id: "bathroom", title: "Bathroom Doors", text: "Slim framed, flush and inward-opening solutions developed around precise site conditions." },
  { id: "invisible", title: "Aluminium-Wood & Invisible Doors", text: "Panel-ready and plaster-ready doors that align the opening with the surrounding wall." },
  { id: "wall", title: "Wall & Cabinet Systems", text: "Integrated aluminium structures that connect storage, display, wall panels and lighting." },
  { id: "wardrobe", title: "Wardrobe Systems", text: "Open and glazed wardrobe architectures with modular shelving and coordinated illumination." },
  { id: "display", title: "Display & Cabinetry", text: "Glass cabinets, wine storage and illuminated display systems for residential and retail spaces." },
];

export const products: Product[] = [
  {
    slug: "4510-concealed-sliding",
    name: "4510 Sliding",
    category: "Concealed-track sliding door",
    family: "doors",
    index: "01",
    tagline: "Concealed above. Effortless in motion.",
    description: "The 4510 is a suspended sliding system designed around a plaster-in concealed track. Its damped hanging rollers can be adjusted to suit site conditions, preserving a clean ceiling line while delivering quiet, controlled movement.",
    visual: "concealed",
    quickSpecs: [
      { label: "Glass", value: "8 mm tempered" },
      { label: "Panel load", value: "Up to 150 kg" },
      { label: "Tracks", value: "1 / 2 / 3" },
      { label: "Door weight", value: "24 kg/m²" },
    ],
    hero: "/products/real/1790(1).JPG",
    gallery: [
      { src: "/products/real/1790(1).JPG", alt: "Floor-to-ceiling concealed-track sliding glass partition", caption: "A concealed ceiling track keeps the full-height sliding boundary visually quiet." },
    ],
    features: [
      { title: "Concealed architecture", text: "The plaster-in track keeps the ceiling line visually uninterrupted." },
      { title: "Quiet suspension", text: "Damped rollers guide the panel with a smooth, controlled movement." },
      { title: "Site adjustment", text: "The hanging system allows levelling and angular adjustment after installation." },
      { title: "Serviceable design", text: "The track is prepared first; panels can be fitted, removed and adjusted later." },
    ],
    applications: ["Living and dining partitions", "Residential suites", "Meeting rooms", "Hospitality interiors"],
    configuration: ["Single, double or triple track", "Single or linked panel opening", "Plaster-in concealed track", "210 mm handle at 1050 mm by default"],
    technical: [
      { title: "Track preparation", intro: "A concealed installation coordinated before the ceiling is finished.", items: ["Plaster-in pre-embedded track", "Compatible with 9 mm plasterboard plus plaster finish", "Single, double and triple track layouts", "Panel installation follows the track and ceiling preparation"] },
      { title: "Minimum panel widths", items: ["Single/double-track panel with double soft close: minimum 530 mm", "Linked panel with double soft close: minimum 580 mm", "Final panel size is checked against glass weight and hardware selection"] },
      { title: "Hardware", items: ["Damped suspended roller", "Single roller with threaded hanger plate", "Soft-close limit block", "Maximum rated load per panel: 150 kg"] },
    ],
  },
  {
    slug: "4010-linked-sliding",
    name: "4010 Sliding",
    category: "Multi-panel linked sliding door",
    family: "doors",
    index: "02",
    tagline: "Multiple panels. One coordinated movement.",
    description: "The 4010 brings synchronised opening to wide architectural spans. Multiple suspended panels stack and move in sequence, while a project-specific anti-sway solution keeps each leaf stable and aligned.",
    visual: "multi",
    quickSpecs: [
      { label: "Glass", value: "8 mm tempered" },
      { label: "Panel load", value: "Up to 150 kg" },
      { label: "Tracks", value: "1 to 5" },
      { label: "Min. width", value: "400 mm" },
    ],
    hero: "/products/real/1788.JPG",
    gallery: [
      { src: "/products/real/1788.JPG", alt: "Wide multi-panel linked sliding partition in a residential interior", caption: "A wide linked-panel composition opens the living space while retaining a slender frame." },
      { src: "/products/real/1787.JPG", alt: "Multi-panel translucent sliding partition across a dining room", caption: "Translucent infill filters the view across a large multi-panel opening." },
      { src: "/products/new-2026/1887.webp", alt: "Three-panel timber linked sliding door on a top-mounted multi-track system", caption: "Timber-finished panels move across a top-mounted multi-track system, leaving the floor visually clear." },
      { src: "/products/new-2026/1888.webp", alt: "Four contrasting solid panels in a multi-track sliding door display", caption: "A four-panel showroom composition demonstrates colour, finish and multi-track planning options." },
    ],
    features: [
      { title: "Linked movement", text: "Panels open and close in sequence for an intuitive single-action experience." },
      { title: "Wide openings", text: "One- to five-track layouts release large spans for residential and commercial spaces." },
      { title: "Expandable track", text: "Track sections can be coordinated for long, multi-panel compositions." },
      { title: "Stable panels", text: "Custom anti-sway guidance reduces unwanted panel movement." },
    ],
    applications: ["Large living spaces", "Ballrooms and hospitality", "Meeting suites", "Flexible retail interiors"],
    configuration: ["Single through five-track layouts", "Multi-panel linked operation", "Custom anti-sway guidance", "170 mm handle at 1050 mm by default"],
    technical: [
      { title: "Panel and track planning", items: ["Single, double, triple, four- or five-track configurations", "Multi-panel linked opening and closing", "Tracks can be coordinated for extended openings", "Final panel count depends on clear opening and stacking area"] },
      { title: "Technical essentials", items: ["Door weight: 24 kg/m²", "Maximum rated load per panel: 150 kg", "Double soft-close panel minimum width: 400 mm", "8 mm tempered glass"] },
    ],
  },
  {
    slug: "4516-slim-sliding",
    name: "4516 Sliding",
    category: "Ultra-slim sliding door",
    family: "doors",
    index: "03",
    tagline: "Reduced to the essential.",
    description: "4516 Sliding is shaped by narrow sightlines and carefully controlled proportions. The suspended system combines an ultra-slim aluminium frame with tempered glass and soft-close movement for a precise, enduring architectural presence.",
    visual: "slim",
    quickSpecs: [
      { label: "Glass", value: "8 mm tempered" },
      { label: "Panel load", value: "Up to 150 kg" },
      { label: "Tracks", value: "1 / 2 / 3" },
      { label: "Door weight", value: "24 kg/m²" },
    ],
    hero: "/products/real/1791(1).JPG",
    gallery: [
      { src: "/products/real/1791(1).JPG", alt: "Slim black framed glazed doors with arched sidelights", caption: "Slim framing and custom arched glazing create a light architectural threshold." },
      { src: "/products/real/1785.JPG", alt: "Ultra-slim sliding doors with patterned translucent glass", caption: "Patterned glass brings privacy to a restrained, full-height sliding composition." },
    ],
    features: [
      { title: "Ultra-slim frame", text: "Fine aluminium lines reduce the visual boundary between adjacent spaces." },
      { title: "Balanced proportion", text: "Panel geometry is developed around scale, opening width and glass weight." },
      { title: "Soft-close motion", text: "Damped movement brings control and quietness to everyday use." },
      { title: "Flexible planning", text: "Available as single, multi-track or linked panel compositions." },
    ],
    applications: ["Residential partitions", "Wardrobe enclosures", "Study rooms", "Boutique interiors"],
    configuration: ["Single, double or triple track", "Single or linked panel", "210 mm handle at 1050 mm by default", "Tempered glass and project finish selection"],
    technical: [
      { title: "Minimum widths", items: ["Single panel with double soft close: minimum 580 mm", "Linked panel with double soft close: minimum 520 mm", "Final proportions are reviewed against panel weight"] },
      { title: "Load and glazing", items: ["Door weight: 24 kg/m²", "Maximum rated load per panel: 150 kg", "8 mm tempered glass", "Single, double and triple track options"] },
    ],
  },
  {
    slug: "4512-folding",
    name: "4512 Folding",
    category: "Multi-leaf folding door",
    family: "doors",
    index: "04",
    tagline: "Open the space completely.",
    description: "The 4512 Folding system turns a full-height glazed boundary into a compact stack of leaves. Two- to four-panel configurations can fold inward or outward, left, right or from the centre—releasing the opening while maintaining a light architectural rhythm when closed.",
    visual: "fold",
    quickSpecs: [
      { label: "Leaves", value: "2 to 4" },
      { label: "Height", value: "600–2900 mm" },
      { label: "Panel width", value: "350–600 mm" },
      { label: "Opening", value: "6 directions" },
    ],
    hero: "/products/real/1820(1).JPG",
    gallery: [
      { src: "/products/real/1820(1).JPG", alt: "Symmetrical folding glass doors stacked to both sides", caption: "Paired folding leaves gather at both sides to release the central opening." },
      { src: "/products/real/1821(1).JPG", alt: "Folding glass partition with textured translucent panels", caption: "Textured glazing maintains privacy while the folding leaves compact neatly at the wall." },
    ],
    features: [
      { title: "Maximum release", text: "Folding leaves gather to the side and free more of the clear opening." },
      { title: "Six opening modes", text: "Choose left, right or centre opening, folding inward or outward." },
      { title: "Compact leaves", text: "Narrow panels create a controlled stack for small and transitional spaces." },
      { title: "Project flexibility", text: "Two-, three- and four-leaf layouts adapt to different room plans." },
    ],
    applications: ["Compact apartments", "Kitchen and living divisions", "Walk-in wardrobes", "Hospitality suites"],
    configuration: ["2–3 or 2–4 leaves", "Left, right or centre opening", "Inward or outward folding", "Top hanger box and floor/ceiling pivot"],
    technical: [
      { title: "Leaf size range", items: ["Panel height: 600–2900 mm", "Typical panel width: 350–600 mm", "Some four-leaf configurations use a 350–500 mm panel range", "Final leaf width depends on folding direction and hardware"] },
      { title: "Opening directions", items: ["Left, inward fold", "Left, outward fold", "Right, inward fold", "Right, outward fold", "Centre opening, inward or outward fold"] },
    ],
  },
  {
    slug: "4516-pivot",
    name: "4516 Pivot",
    category: "Centre- and offset-pivot door",
    family: "doors",
    index: "05",
    tagline: "A different point of balance.",
    description: "4516 Pivot creates generous movement around a centre or offset axis. Slim top and bottom lines, a 90-degree hold-open function and a choice of hardware capacities make it a versatile solution for statement openings.",
    visual: "pivot",
    quickSpecs: [
      { label: "Glass", value: "8 mm tempered" },
      { label: "Max. height", value: "2950 mm" },
      { label: "Hold open", value: "90°" },
      { label: "Axis", value: "Centre / offset" },
    ],
    hero: "/products/manual/pivot-door-interior.jpg",
    gallery: [
      {
        src: "/products/manual/pivot-door-interior.jpg",
        alt: "Centre- and offset-pivot glass doors opened within a contemporary office interior",
        caption: "Centre- and offset-pivot leaves rotate around selected axes to create generous, sculptural openings.",
      },
    ],
    features: [
      { title: "Balanced movement", text: "The pivot position is selected to suit passage, scale and visual intent." },
      { title: "90° hold", text: "The panel can remain open at a right angle for clear, predictable circulation." },
      { title: "Slim boundaries", text: "Narrow perimeter lines keep large panels visually controlled." },
      { title: "Hardware choice", text: "Domestic and imported hardware options support different panel capacities." },
    ],
    applications: ["Entrance halls", "Living spaces", "Executive offices", "Hospitality interiors"],
    configuration: ["Centre or offset pivot", "Indoor or sheltered outdoor application", "Light- or heavy-duty hardware", "Multiple axis offsets by hardware selection"],
    technical: [
      { title: "Hardware planning", items: ["Domestic hardware: indicated maximum panel width of 1300 mm", "Imported hardware: indicated maximum panel width of 1800 mm", "85, 130 and 150 mm pivot offsets are subject to hardware selection", "Final capacity requires project engineering confirmation"] },
      { title: "Panel essentials", items: ["Maximum indicated height: 2950 mm", "8 mm tempered glass", "90-degree hold-open", "Centre- and offset-axis configurations"] },
    ],
  },
  {
    slug: "bathroom-door-collection",
    name: "Bathroom Door Collection",
    category: "Framed and flush bathroom doors",
    family: "bathroom",
    index: "06",
    tagline: "Precision at the threshold of privacy.",
    description: "The ARKLINE bathroom collection brings together 4516 and 4010 framed swing doors, flush inward-opening doors and external-frame inward-opening solutions. Each system is coordinated around the wall build-up, opening direction, glass orientation and required clearances.",
    visual: "bath",
    hero: "/products/manual/bathroom-door-interior.jpg",
    quickSpecs: [
      { label: "Perimeter gap", value: "≤ 3 mm" },
      { label: "Lock height", value: "1050 mm" },
      { label: "Hinge load", value: "70–80 kg" },
      { label: "Glass face", value: "Frosted outward" },
    ],
    gallery: [
      { src: "/products/manual/bathroom-door-interior.jpg", alt: "Slim black-framed frosted glass bathroom door in a contemporary living interior", caption: "A slim dark frame defines the frosted glass door while maintaining a restrained architectural threshold." },
      { src: "/products/manual/bathroom-door-threshold.jpg", alt: "Flush bathroom doorway with a translucent full-height door", caption: "A flush wall condition allows the bathroom entrance to sit quietly within the surrounding interior." },
      { src: "/products/manual/bathroom-door-frosted.jpg", alt: "Full-height frosted glass bathroom door in a dark interior", caption: "Frosted glazing protects privacy while preserving a light, full-height composition." },
    ],
    features: [
      { title: "4516 framed", text: "A refined pivot-hinge door with integrated lock and an 80–90 mm minimum wall condition." },
      { title: "4010 framed", text: "A compact 26 mm integrated frame for wall conditions starting from 57–64 mm." },
      { title: "Flush inward", text: "The glass and surrounding wall align on the outer face for a seamless elevation." },
      { title: "External-frame inward", text: "The frame sits outward while the leaf opens inward, releasing internal space." },
    ],
    applications: ["Residential bathrooms", "Hotel suites", "Wellness rooms", "Private dressing areas"],
    configuration: ["Left- or right-hand lock", "Inward or outward opening by model", "Single- or double-wrap frame", "Frosted or project-specified glass orientation"],
    technical: [
      { title: "4516 bathroom door", items: ["Frame-to-leaf gaps at sides and top: ≤3 mm", "Floor gap: ≤13 mm", "Default lock height: 1050 mm", "Precision pivot hinge maximum load: 70 kg", "Typical minimum wall: 80 or 90 mm by frame type"] },
      { title: "4010 bathroom door", items: ["26 mm integrated slim frame", "Frame-to-leaf gaps at sides and top: ≤3 mm", "Floor gap: ≤13 mm", "Typical minimum wall: 57 or 64 mm by frame type"] },
      { title: "Flush and inward-opening models", items: ["Floor gap: ≤10 mm", "Adjustable concealed hinge maximum load: 80 kg", "3 hinges for 1800–2800 mm height; 4 hinges for 2800–3000 mm", "Wall preparation varies by flush or external-frame condition"] },
      { title: "Site measurement", intro: "Measure before final engineering and production.", items: ["Measure opening width and height at three points; use the smallest dimension", "Measure wall thickness at top, middle and bottom; use the largest dimension", "Correct opening deviations greater than 5 mm before installation", "Check beams, steps and T-junction walls for required pack-out", "Confirm lock side and inward/outward opening while standing outside"] },
    ],
  },
  {
    slug: "invisible-aluminium-wood-doors",
    name: "Invisible Door Collection",
    category: "Aluminium-wood flush doors",
    family: "invisible",
    index: "07",
    tagline: "The door becomes part of the wall.",
    description: "A family of slim aluminium-and-wood doors for panelled or plastered walls. The concealed frame allows the leaf, wall panel and surrounding cabinetry to read as one continuous architectural surface.",
    visual: "flush",
    hero: "/products/new-2026/1891.webp",
    quickSpecs: [
      { label: "Slim frame", value: "25 mm option" },
      { label: "Panel", value: "9 mm wood" },
      { label: "Hinge load", value: "Up to 80 kg" },
      { label: "Min. wall", value: "80 mm" },
    ],
    gallery: [
      { src: "/products/new-2026/1891.webp", alt: "White plaster-ready invisible door integrated into a curved wall", caption: "A plaster-ready door follows the curved wall, leaving only a precise perimeter line." },
      { src: "/products/new-2026/1893.webp", alt: "White invisible door open within a flush wall composition", caption: "The open view reveals the concealed frame behind a leaf designed to align with the wall when closed." },
      { src: "/products/new-2026/1894.webp", alt: "Full-height white invisible door set into a curved plaster wall", caption: "A full-height leaf sits quietly within the curved plaster surface and restrained dark reveal." },
      { src: "/products/new-2026/1889.webp", alt: "Dark panel-ready invisible door shown open in an integrated wall", caption: "The open leaf reveals concealed hinges while the frame remains coordinated with the panelled wall." },
      { src: "/products/new-2026/1890.webp", alt: "Dark panel-ready invisible door closed flush with the wall", caption: "Matching dark finishes allow the closed door to read as part of one continuous wall elevation." },
      { src: "/products/manual/invisible-door-panelled-wall.jpg", alt: "Aluminium-wood invisible doors aligned with a continuous panelled wall", caption: "Door leaves, concealed frames and wall panels align as one continuous architectural surface." },
      { src: "/products/manual/invisible-door-dark-suite.jpg", alt: "Dark aluminium-wood invisible door integrated into a hotel suite wall", caption: "A concealed frame lets the dark panelled door recede into the suite wall." },
      { src: "/products/manual/invisible-door-plaster-wall.jpg", alt: "White plaster-ready invisible door flush with a curved wall", caption: "A plaster-ready frame allows the opening to disappear into a clean, continuous wall finish." },
    ],
    features: [
      { title: "25 slim-frame door", text: "A precise external-frame inward-opening solution with restrained aluminium lines." },
      { title: "Panel-ready invisible", text: "Designed to coordinate with 9 or 18 mm wall panelling for visual continuity." },
      { title: "Plaster-ready invisible", text: "The frame is prepared for plaster and putty so the opening recedes into the wall." },
      { title: "Unified interior", text: "Door, wall and cabinetry can share one material and alignment strategy." },
    ],
    applications: ["Bedrooms and private rooms", "Integrated wall panelling", "Hotel suites", "High-end residential corridors"],
    configuration: ["Single- or double-wrap frame", "Flush inward or outward opening", "9 mm wall panel or plaster preparation", "Left- or right-hand lock"],
    technical: [
      { title: "25 slim-frame door", items: ["Side and top gaps: ≤3 mm", "Floor gap: ≤10 mm", "9 mm wood-finish panel", "Default lock height: 1050 mm", "Minimum wall: 80 mm"] },
      { title: "Panel-ready invisible door", items: ["Compatible with 9 or 18 mm wall panel assemblies", "Frame sits flush to the finished panel plane", "Adjustable concealed hinge maximum load: 80 kg", "3 or 4 hinges according to door height"] },
      { title: "Plaster-ready invisible door", items: ["Frame prepared for flush plaster finishing", "Typical build-up includes 3 mm putty/plaster and 6 mm magnesium-oxide board", "Minimum wall: 80 mm", "Inward or outward opening formats available"] },
    ],
  },
  {
    slug: "open-wardrobe-collection",
    name: "Open Wardrobe Collection",
    category: "Upright and wall-mounted wardrobes",
    family: "wardrobe",
    index: "08",
    tagline: "Structure, light and storage in open composition.",
    description: "Five modular wardrobe languages—from single and round uprights to illuminated open bays and wall-mounted floating shelves—allow storage to be planned as an architectural display rather than a closed cabinet.",
    hero: "/products/real/1842.JPG",
    quickSpecs: [
      { label: "Systems", value: "5 families" },
      { label: "Structure", value: "Aluminium" },
      { label: "Shelves", value: "Glass / wood" },
      { label: "Lighting", value: "Integrated" },
    ],
    gallery: [
      { src: "/products/real/1842.JPG", alt: "Floor-to-ceiling open wardrobe with illuminated aluminium uprights", caption: "A complete dressing wall combining hanging rails, drawers and open shelving." },
      { src: "/products/real/1841(1).JPG", alt: "Single-post open wardrobe system with bronze finish", caption: "Single-post architecture supports hanging rails, shelves and accessory trays." },
      { src: "/products/real/1843.JPG", alt: "Close view of wardrobe rail and upper storage tray", caption: "A coordinated rail, tray and upright detail in a warm metallic finish." },
      { src: "/products/real/1801(1).JPG", alt: "Illuminated open wardrobe arranged around a dressing room", caption: "Integrated lighting gives shelves and hanging zones a clear visual rhythm." },
      { src: "/products/real/1808(1).JPG", alt: "Transparent wardrobe and display grid with leather storage boxes", caption: "A transparent modular grid connects display, storage and dressing functions." },
      { src: "/products/real/1809(1).JPG", alt: "Open aluminium wardrobe with shelves, rails and drawers", caption: "Dark aluminium bays create a continuous open wardrobe around the room." },
      { src: "/products/real/1831.JPG", alt: "Wall-mounted post shelving with cabinets and integrated lighting", caption: "Round uprights organise long timber shelves and suspended base cabinets." },
      { src: "/products/real/1832.JPG", alt: "Modular upright shelving configured as a media wall", caption: "Shelves, floating cabinets and media equipment share one structural grid." },
      { src: "/products/real/1833.JPG", alt: "Front view of full-height illuminated post shelving", caption: "A balanced floor-to-ceiling composition with continuous shelf lighting." },
      { src: "/products/real/1834.JPG", alt: "Close view of illuminated timber shelves on round uprights", caption: "Linear LED light is integrated discreetly beneath each timber shelf." },
      { src: "/products/real/1835.JPG", alt: "Close-up of hidden wall rail supporting a timber shelf", caption: "A slim wall rail carries the shelf while keeping the fixing visually minimal." },
      { src: "/products/real/1836.JPG", alt: "Close-up of shelf connector on a round aluminium upright", caption: "The compact connector locks the shelf cleanly to the upright." },
      { src: "/products/real/1837.JPG", alt: "Integrated LED line and adjustable upright foot detail", caption: "Lighting and fine adjustment are coordinated within the structural language." },
      { src: "/products/real/1838.JPG", alt: "Wall brace detail for a floor-to-ceiling shelving system", caption: "Wall bracing stabilises the open system while preserving its light appearance." },
      { src: "/products/real/1839.JPG", alt: "Angled view across long illuminated shelves and uprights", caption: "The repeated upright rhythm remains precise across a wide installation." },
    ],
    features: [
      { title: "Leike", text: "Single-upright composition combining metal, glass, lighting and leather details." },
      { title: "Boen & Beisi", text: "Rectangular or round uprights create distinct structural expressions." },
      { title: "Lange", text: "Integrated upright lighting turns open storage into a luminous display." },
      { title: "Youku", text: "Hidden wall rails support floating shelves, drawers and angled shoe storage." },
    ],
    applications: ["Walk-in wardrobes", "Open dressing rooms", "Fashion retail", "Residential storage walls"],
    configuration: ["Single, wall or floor-to-ceiling uprights", "Round or rectangular post language", "Glass or timber shelving", "Hanging rails, shoe shelves and drawers"],
    technical: [
      { title: "System families", items: ["Leike single-upright wardrobe", "Boen wall or floor-to-ceiling upright system", "Beisi round-upright wardrobe", "Lange illuminated open wardrobe", "Youku wall-mounted floating wardrobe"] },
      { title: "Services and adjustment", items: ["Cable routes can be coordinated through wall or ceiling", "Selected feet allow up to 12 mm vertical adjustment", "Lighting can be integrated into uprights or shelf lines", "Accessories are arranged around the final storage brief"] },
    ],
  },
  {
    slug: "louver",
    name: "Screen Collection",
    category: "Sliding and fixed screens",
    family: "doors",
    index: "09",
    tagline: "Privacy, light and movement in one architectural layer.",
    description:
      "The Screen Collection brings full-height sliding and fixed lattice panels into a slender aluminium framework. Vertical slats and geometric grids filter views while preserving light and airflow, giving meeting rooms, wardrobes and residential interiors a precise, adaptable boundary.",
    hero: "/products/real/1789.JPG",
    quickSpecs: [
      { label: "Format", value: "Full height" },
      { label: "Privacy", value: "Filtered" },
      { label: "Frame", value: "Slim aluminium" },
      { label: "Planning", value: "Made to project" },
    ],
    gallery: [
      { src: "/products/real/1789.JPG", alt: "Sliding vertical louvre panels enclosing a dressing room", caption: "Sliding louvre panels screen the wardrobe while retaining airflow and depth." },
      { src: "/products/real/1786.JPG", alt: "Full-height square-grid sliding screen across an interior opening", caption: "A dense geometric screen creates privacy without closing the space completely." },
    ],
    features: [
      { title: "Layered privacy", text: "Slats and geometric grids soften sightlines without making the space feel enclosed." },
      { title: "Slim framework", text: "Narrow aluminium stiles create a disciplined, architectural grid." },
      { title: "Project sizing", text: "Panel quantity and overall dimensions are developed around each opening." },
      { title: "Coordinated finish", text: "Frame, infill and screen tone can be aligned with the surrounding interior." },
    ],
    applications: ["Residential partitions", "Wardrobe fronts", "Meeting rooms", "Hospitality interiors"],
    configuration: ["Sliding or fixed panel composition", "Single or multi-panel layout", "Vertical-slat or geometric-grid infill", "Anodised or powder-coated aluminium finish"],
  },
  {
    slug: "vetro",
    name: "Vetro",
    category: "Glass wardrobes",
    family: "wardrobe",
    index: "10",
    tagline: "A wardrobe expressed through transparency and proportion.",
    description:
      "Vetro is a floor-to-ceiling wardrobe system defined by slender aluminium frames and smoked glass doors. The transparent architecture keeps the composition visually light while integrated illumination reveals shelves, hanging rails and personal objects with quiet clarity.",
    hero: "/products/real/1810(1).JPG",
    quickSpecs: [
      { label: "Doors", value: "Smoked glass" },
      { label: "Frame", value: "Aluminium" },
      { label: "Lighting", value: "Integrated" },
      { label: "Planning", value: "Made to project" },
    ],
    gallery: [
      { src: "/products/real/1810(1).JPG", alt: "Full-height glazed wardrobe room with slim dark framing", caption: "A transparent wardrobe enclosure turns storage into part of the room architecture." },
      { src: "/products/real/1800(1).JPG", alt: "Bronze framed glass wardrobe and display wall", caption: "Glass shelves and warm metal framing form a continuous dressing and display grid." },
    ],
    features: [
      { title: "Full-height rhythm", text: "Repeated vertical modules create a calm continuous elevation." },
      { title: "Smoked glazing", text: "Contents remain visible as softened silhouettes behind reflective glass." },
      { title: "Integrated light", text: "Internal LED lighting improves visibility and gives the wardrobe depth." },
      { title: "Flexible interior", text: "Shelves, hanging rails and storage elements are arranged to suit the project." },
    ],
    applications: ["Bedrooms", "Walk-in wardrobes", "Boutique retail", "Residential dressing rooms"],
    configuration: ["Custom bay widths and heights", "Clear, smoked or reflective glass", "Shelf and hanging combinations", "Warm integrated LED lighting"],
  },
  {
    slug: "linea",
    name: "Linea",
    category: "Equipped wall systems",
    family: "wall",
    index: "11",
    tagline: "A modular framework for storage, display and dressing.",
    description:
      "Linea brings open shelving, closed storage, hanging rails and linear lighting into one modular wall system. Slim vertical uprights organise the elevation, while cantilevered shelves and suspended cabinets keep the composition light and easy to adapt.",
    hero: "/products/new-2026/1898.webp",
    quickSpecs: [
      { label: "Format", value: "Modular wall" },
      { label: "Storage", value: "Open / closed" },
      { label: "Shelves", value: "Glass / wood" },
      { label: "Lighting", value: "Integrated" },
    ],
    gallery: [
      { src: "/products/new-2026/1898.webp", alt: "Integrated media wall with suspended glass cabinets and open metal shelves", caption: "Suspended display cabinets, open shelves and a low storage console are aligned within one wall composition." },
      { src: "/products/new-2026/1899.webp", alt: "Detail view of open shelves and low cabinetry in an integrated media wall", caption: "Thin metal shelves and a continuous low cabinet create a precise, layered display surface." },
      { src: "/products/new-2026/1895.webp", alt: "Panelled media wall with floating shelves, low cabinetry and integrated lighting", caption: "Floating shelves and low cabinets are coordinated with the panel grid and concealed lighting." },
      { src: "/products/new-2026/1896.webp", alt: "Timber panel wall with full-height glazed display cabinets", caption: "Full-height glazed display bays are set flush within a warm timber-panelled wall." },
      { src: "/products/new-2026/1897.webp", alt: "Illuminated modular wall panels with inset display shelves and low storage", caption: "Inset illuminated shelves interrupt a disciplined panel grid above continuous low storage." },
      { src: "/products/new-2026/1911.webp", alt: "Full-height equipped wall with illuminated floating shelves and cabinets", caption: "Illuminated shelves, display niches and suspended storage form a complete full-height wall system." },
      { src: "/products/new-2026/1912.webp", alt: "Media wall with staggered illuminated shelves and glass display towers", caption: "Staggered shelf lines, glass towers and a floating base cabinet frame the media zone." },
      { src: "/products/new-2026/1914.webp", alt: "Wall-mounted metal display shelves with integrated backlighting", caption: "Slim folded-metal shelves integrate linear light while keeping wall fixings visually minimal." },
      { src: "/products/new-2026/1915.webp", alt: "Side detail of wall-mounted shelves and concealed linear lighting", caption: "A side view shows the thin shelf profile, raised edge and concealed light line." },
      { src: "/products/new-2026/1920.webp", alt: "Full-height cabinet wall with a continuous illuminated glass display bay", caption: "Closed storage surrounds a continuous glass display bay for barware and tableware." },
      { src: "/products/real/1854.JPG", alt: "Illuminated modular display wall for a residential collection", caption: "Slim posts and illuminated shelves create a tailored wall for art and collectibles." },
      { src: "/products/real/1816(1).JPG", alt: "Floating wall shelves and drawers with integrated lighting", caption: "Cantilevered shelves and suspended drawers keep the storage wall visually light." },
      { src: "/products/real/1817(1).JPG", alt: "Wall-integrated dressing system with shelves, rails and drawers", caption: "Hanging, display and drawer storage are coordinated within one wall elevation." },
      { src: "/products/real/1840.JPG", alt: "Floor-to-ceiling retail wall system with rails and drawers", caption: "An adaptable retail composition combining shelves, hanging rails and drawer units." },
      { src: "/products/real/1848.JPG", alt: "Integrated living-room bar and illuminated display wall", caption: "Closed cabinetry, bar storage and transparent display are aligned as one surface." },
      { src: "/products/real/1851.JPG", alt: "Dark inset display shelves with integrated perimeter lighting", caption: "Recessed shelves bring depth and controlled light to a full-height cabinet wall." },
      { src: "/products/real/1855.JPG", alt: "Curved cabinet fronts framing illuminated display niches", caption: "Curved fronts soften the modular grid around a sequence of illuminated niches." },
      { src: "/products/real/1856.JPG", alt: "Integrated curved wall cabinet with open display shelves", caption: "Rounded cabinet corners and linear light form a continuous architectural composition." },
      { src: "/products/real/1857.JPG", alt: "Wall-to-wall shelving with illuminated bays and suspended cabinets", caption: "A dense storage wall combines open lit bays with floating closed modules." },
      { src: "/products/real/1858.JPG", alt: "Backlit open shelving across a full-height window", caption: "Minimal posts and thin shelves create a luminous library screen." },
    ],
    features: [
      { title: "Modular planning", text: "The same upright grid supports display, wardrobe and storage functions." },
      { title: "Open or closed", text: "Shelves, drawer units and full fronts can be mixed within one composition." },
      { title: "Linear lighting", text: "Integrated vertical and shelf lighting is coordinated with the modules." },
      { title: "Architectural fit", text: "Linear, corner and return configurations can follow the room geometry." },
    ],
    applications: ["Living rooms", "Dressing areas", "Retail displays", "Hospitality suites"],
    configuration: ["Wall-to-wall or partial compositions", "Open shelves and closed cabinets", "Hanging rail and drawer accessories", "Warm-white LED lighting options"],
  },
  {
    slug: "cellar",
    name: "Cellar",
    category: "Wine display systems",
    family: "display",
    index: "12",
    tagline: "An illuminated aluminium architecture for wine collections.",
    description:
      "Cellar is a modular wine display system built from slender aluminium uprights, glass shelves and angled bottle racks. The open grid makes large collections easy to read, while integrated shelf lighting creates a composed backdrop for private cellars, restaurants and hospitality spaces.",
    hero: "/products/new-2026/1921.webp",
    quickSpecs: [
      { label: "Structure", value: "Aluminium" },
      { label: "Display", value: "Angled bottle" },
      { label: "Layout", value: "Expandable" },
      { label: "Lighting", value: "Integrated" },
    ],
    gallery: [
      { src: "/products/new-2026/1921.webp", alt: "Full-height illuminated wine wall with bottle racks and stemware storage", caption: "A full-height illuminated grid brings bottles, glassware and display objects into one ordered elevation." },
      { src: "/products/new-2026/1922.webp", alt: "Backlit wine and glassware display integrated into cabinetry", caption: "A luminous open bay combines bottle storage, suspended stemware and everyday serving space." },
      { src: "/products/real/1829.JPG", alt: "Modular metal wine rack with integrated stemware holders", caption: "A dense bottle grid and suspended glassware holders maximise capacity within a slim bay." },
      { src: "/products/real/1852.JPG", alt: "Full-height illuminated wine display behind glass doors", caption: "Individual illuminated supports turn the wine wall into a precise display feature." },
    ],
    features: [
      { title: "High capacity", text: "Repeated bays organise a collection without creating visual heaviness." },
      { title: "Angled display", text: "Sloped bottle supports present labels clearly and keep each row ordered." },
      { title: "Integrated light", text: "Top lighting gives each bay an even, gallery-like illumination." },
      { title: "Expandable grid", text: "The modular structure can grow in width to suit the available wall." },
    ],
    applications: ["Private wine rooms", "Restaurants", "Hospitality lounges", "Wine retail"],
    configuration: ["Multiple bay widths", "Bottle rack and glass shelf mix", "Wall, corner or room layouts", "Metal finish and lighting coordination"],
  },
  {
    slug: "lume",
    name: "Display Cabinet Collection",
    category: "Glass display and decorative cabinets",
    family: "display",
    index: "13",
    tagline: "Objects framed by glass, material and light.",
    description:
      "The Display Cabinet Collection brings together freestanding, wall-mounted and full-height glass cabinets. Slim metal frames, crafted drawers, screened fronts and integrated illumination support objects, barware and retail display across a range of architectural settings.",
    hero: "/products/real/1802(1).JPG",
    quickSpecs: [
      { label: "Formats", value: "Floor / wall" },
      { label: "Fronts", value: "Glass / screen" },
      { label: "Lighting", value: "Integrated" },
      { label: "Planning", value: "Made to project" },
    ],
    gallery: [
      { src: "/products/real/1802(1).JPG", alt: "Freestanding glass display cabinet with horizontal louvre fronts", caption: "A freestanding display cabinet balances transparency with a layered louvre front." },
      { src: "/products/real/1803(1).JPG", alt: "Tall illuminated glass cabinet behind vertical louvres", caption: "Warm interior light reveals objects through a finely spaced vertical screen." },
      { src: "/products/real/1804(1).JPG", alt: "Long glass sideboard with black horizontal louvre fronts", caption: "A low display cabinet combines glass sides, slender legs and continuous louvres." },
      { src: "/products/real/1806(1).JPG", alt: "Wall-mounted three-door illuminated glass display cabinet", caption: "A suspended glass cabinet provides protected display without visual heaviness." },
      { src: "/products/real/1807(1).JPG", alt: "Pair of wall-mounted illuminated glass cabinets", caption: "Twin wall cabinets turn a compact display zone into a luminous focal point." },
      { src: "/products/real/1824(1).JPG", alt: "Tall illuminated glass cabinet with walnut drawers", caption: "Glass, dark metal and timber drawers are combined in a freestanding display tower." },
      { src: "/products/real/1825(1).JPG", alt: "Tall timber drawer tower with glass side doors", caption: "A central stack of crafted timber drawers is protected by hinged glass wings." },
      { src: "/products/real/1826.JPG", alt: "Freestanding drawer tower with glass doors open", caption: "The open view shows the compact footprint and accessible full-height storage." },
      { src: "/products/real/1827(1).JPG", alt: "Illuminated timber drawer tower inside a glass cabinet", caption: "Warm lighting highlights the dovetailed drawers within a transparent enclosure." },
      { src: "/products/real/1849.JPG", alt: "Illuminated compact storage cabinet with outlets and shelves", caption: "Integrated power, shelves and a luminous art panel support flexible everyday storage." },
      { src: "/products/real/1850.JPG", alt: "Illuminated display cabinet with translucent landscape panel", caption: "A backlit landscape panel transforms a compact cabinet into an atmospheric object." },
    ],
    features: [
      { title: "Transparent volume", text: "Fine framing and glass shelves preserve views through the cabinet." },
      { title: "Multiple formats", text: "Freestanding, wall-mounted and full-height formats respond to different rooms and collections." },
      { title: "Integrated light", text: "Shelf, perimeter or rear lighting can be coordinated with the display composition." },
      { title: "Display flexibility", text: "Shelf spacing supports glassware, decorative objects and product display." },
    ],
    applications: ["Home bars", "Living rooms", "Boutique displays", "Hospitality interiors"],
    configuration: ["Freestanding, wall-mounted or full-height formats", "Glass, screened and timber-front combinations", "Shelf, perimeter or rear lighting", "Project-specific height, finish and interior layout"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

const relatedFamilyOrder: Record<string, string[]> = {
  doors: ["doors", "bathroom", "invisible"],
  bathroom: ["bathroom", "invisible", "doors"],
  invisible: ["invisible", "bathroom", "wall"],
  wall: ["wall", "wardrobe", "display"],
  wardrobe: ["wardrobe", "wall", "display"],
  display: ["display", "wall", "wardrobe"],
};

export function getRelatedProducts(current: Product, pool: Product[] = products) {
  const familyOrder = relatedFamilyOrder[current.family] ?? [current.family];
  return pool
    .filter((product) => product.slug !== current.slug)
    .sort((a, b) => {
      const aRank = familyOrder.indexOf(a.family);
      const bRank = familyOrder.indexOf(b.family);
      return (aRank < 0 ? familyOrder.length : aRank) - (bRank < 0 ? familyOrder.length : bRank);
    })
    .slice(0, 2);
}

export function getFamilyProducts(family: string, pool: Product[] = products) {
  const familyProducts = pool.filter((product) => product.family === family);
  if (family !== "doors") return familyProducts;
  return [...familyProducts].sort((a, b) => {
    if (a.slug === "4010-linked-sliding") return -1;
    if (b.slug === "4010-linked-sliding") return 1;
    return 0;
  });
}

const featuredProductSlugs = [
  "4510-concealed-sliding",
  "4516-pivot",
  "open-wardrobe-collection",
  "lume",
];

export function getFeaturedProducts(pool: Product[] = products) {
  return featuredProductSlugs
    .map((slug) => pool.find((product) => product.slug === slug))
    .filter((product): product is Product => Boolean(product));
}

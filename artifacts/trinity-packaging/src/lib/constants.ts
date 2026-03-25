export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Infrastructure", href: "#infrastructure" },
  { label: "Machines", href: "#machines" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const FEATURES = [
  {
    title: "Consistent Quality",
    description: "Strict supervision at every production stage",
    icon: "ShieldCheck"
  },
  {
    title: "Custom Solutions",
    description: "Packaging tailored to your exact specifications",
    icon: "PackageSearch"
  },
  {
    title: "Competitive Pricing",
    description: "Cost-effective with reliable delivery timelines",
    icon: "TrendingDown"
  },
  {
    title: "Expert Management",
    description: "Professional team with dedicated customer support",
    icon: "Users"
  },
  {
    title: "Scalable Capacity",
    description: "Ready for bulk and repeat orders of all sizes",
    icon: "Maximize"
  }
];

export const PRODUCTS = [
  {
    name: "Tab Lock Roll End",
    slug: "tab-lock-roll-end",
    image: "/images/products/tab-lock-roll-end.png",
    tagline: "Secure. Tamper-Evident. No Glue Required.",
    description: "The Tab Lock Roll End is a premium retail packaging solution featuring a secure tab-and-slot locking mechanism. A tab on one flap inserts into a matching slot on the adjacent flap, creating a tamper-resistant closure that holds firmly without adhesive or tape. The result is a clean, professional finish that protects contents while maintaining an attractive shelf presence.",
    useCases: [
      "Cosmetics and beauty products",
      "Gift and luxury packaging",
      "E-commerce retail boxes",
      "Food and confectionery",
      "Pharmaceutical packaging",
    ],
    features: [
      { label: "Closure Type", value: "Tab-and-slot self-locking" },
      { label: "Assembly", value: "No glue or tape required" },
      { label: "Tamper Evidence", value: "Visible if opened" },
      { label: "Material", value: "Corrugated / Duplex board" },
      { label: "Customisation", value: "Custom size, print, and finish" },
    ],
  },
  {
    name: "Roll End 3 Flaps Tuck",
    slug: "roll-end-3-flaps-tuck",
    image: "/images/products/roll-end-3-flaps-tuck.png",
    tagline: "Triple-Tuck Security for Demanding Applications.",
    description: "The Roll End 3 Flaps Tuck carton features roll ends on both sides and three interlocking tuck flaps that distribute closure stress evenly across the box. This triple-tuck design offers superior security compared to standard two-flap closures, making it ideal for products that require a more robust packaging solution without sacrificing speed of assembly on the packing line.",
    useCases: [
      "Food and beverage packaging",
      "Cosmetics and personal care",
      "Electronics accessories",
      "Pharmaceutical products",
      "Retail-ready packaging",
    ],
    features: [
      { label: "Closure Type", value: "Three interlocking tuck flaps" },
      { label: "Assembly", value: "Quick manual or machine assembly" },
      { label: "Security", value: "Enhanced multi-point closure" },
      { label: "Material", value: "Corrugated / Duplex board" },
      { label: "Customisation", value: "Custom size, print, and finish" },
    ],
  },
  {
    name: "Roll End Tuck Front",
    slug: "roll-end-tuck-front",
    image: "/images/products/roll-end-tuck-front.png",
    tagline: "Clean Front Profile. Quick Access. Retail Ready.",
    description: "The Roll End Tuck Front combines roll ends on the left and right sides with a single front tuck flap that closes the box cleanly. Its minimal front panel creates a smooth, printable surface ideal for branding, while the simple closure allows for fast packing and easy opening by the end consumer. A go-to style for products displayed on retail shelves.",
    useCases: [
      "Point-of-sale display packaging",
      "Retail shelf products",
      "Hardware and tools",
      "Stationery and office supplies",
      "Consumer electronics accessories",
    ],
    features: [
      { label: "Closure Type", value: "Single front tuck flap" },
      { label: "Assembly", value: "Fast single-flap closure" },
      { label: "Display", value: "Large printable front panel" },
      { label: "Material", value: "Corrugated / Duplex board" },
      { label: "Customisation", value: "Custom size, print, and finish" },
    ],
  },
  {
    name: "One Piece Folder Box",
    slug: "one-piece-folder-box",
    image: "/images/products/one-piece-folder-box.png",
    tagline: "One Sheet. Zero Waste. Instant Assembly.",
    description: "The One Piece Folder Box is die-cut and scored from a single flat sheet of corrugated board that folds into a fully-formed box — no separate pieces, no glue required. This design minimises material usage and simplifies logistics: boxes can be shipped flat and erected on-site in seconds. It is especially well-suited for flat or sheet-like items that need reliable edge protection.",
    useCases: [
      "Books, documents, and artwork",
      "Glass sheets and mirrors",
      "Flat automotive parts",
      "Printed materials",
      "Architectural drawings",
    ],
    features: [
      { label: "Construction", value: "Single-piece die-cut and scored" },
      { label: "Assembly", value: "Fold-up, no glue" },
      { label: "Storage", value: "Ships and stores flat" },
      { label: "Material", value: "Corrugated board (3-ply / 5-ply)" },
      { label: "Customisation", value: "Custom size and print" },
    ],
  },
  {
    name: "Tuck Top Auto Bottom",
    slug: "tuck-top-auto-bottom",
    image: "/images/products/tuck-top-auto-bottom.png",
    tagline: "Auto-Lock Base. Tuck Top. Built for Speed.",
    description: "The Tuck Top Auto Bottom carton erects itself: the pre-glued base snaps into a locked position the moment the box is opened flat, while the top closes with a simple tuck flap. This combination dramatically speeds up packing operations by eliminating manual base-folding. The auto-lock bottom also provides a stronger, more consistent base than hand-folded alternatives.",
    useCases: [
      "Retail consumer products",
      "Food and beverage cartons",
      "Heavy goods requiring a strong base",
      "High-volume packing lines",
      "Subscription and e-commerce boxes",
    ],
    features: [
      { label: "Bottom Type", value: "Auto-lock (crash-lock)" },
      { label: "Top Closure", value: "Tuck flap" },
      { label: "Assembly Speed", value: "Instant base — no manual folding" },
      { label: "Material", value: "Corrugated / Duplex board" },
      { label: "Customisation", value: "Custom size, print, and finish" },
    ],
  },
  {
    name: "Regular Slotted Box",
    slug: "regular-slotted-box",
    image: "/images/products/regular-slotted-box.png",
    tagline: "The Industry Standard. Proven Across Every Sector.",
    description: "The Regular Slotted Box (RSC) is the most widely used corrugated packaging style in the world. All four flaps share the same length, and when closed the outer flaps meet at the centre of the box. Its straightforward design makes it the most cost-effective corrugated box to manufacture, and its compatibility with automated packing equipment makes it the first choice for high-volume shipping operations.",
    useCases: [
      "General shipping and logistics",
      "Warehousing and storage",
      "E-commerce fulfillment",
      "Agricultural and produce",
      "Industrial and bulk goods",
    ],
    features: [
      { label: "Flap Style", value: "All flaps equal length, meet at centre" },
      { label: "Ply Options", value: "3-ply and 5-ply available" },
      { label: "Compatibility", value: "Machine and hand-packed" },
      { label: "Material", value: "Corrugated board" },
      { label: "Customisation", value: "Custom size and print" },
    ],
  },
  {
    name: "Full Slotted Box",
    slug: "full-slotted-box",
    image: "/images/products/full-slotted-box.png",
    tagline: "Double-Wall Coverage. Maximum Protection.",
    description: "The Full Slotted Box (FSC) extends all four flaps the full width of the box, so top and bottom panels overlap completely when closed. This overlap creates a double layer of corrugated board at the top and bottom, delivering significantly greater compression strength and puncture resistance compared to a standard RSC. It is the preferred choice for heavy, fragile, or high-value shipments.",
    useCases: [
      "Heavy industrial parts",
      "Fragile and breakable goods",
      "Glass and ceramics",
      "Automotive components",
      "Bulk export packaging",
    ],
    features: [
      { label: "Flap Style", value: "All flaps extend full width, fully overlapping" },
      { label: "Protection", value: "Double corrugated layer on top and bottom" },
      { label: "Ply Options", value: "5-ply recommended" },
      { label: "Material", value: "Heavy-duty corrugated board" },
      { label: "Customisation", value: "Custom size and print" },
    ],
  },
  {
    name: "Half Slotted Container",
    slug: "half-slotted-container",
    image: "/images/products/half-slotted-container.png",
    tagline: "Open-Top Convenience. Display and Storage Ready.",
    description: "The Half Slotted Container (HSC) is an open-top box: only the bottom has flaps, which close and lock to form a sturdy base, while the top remains fully open. This design makes it ideal for situations where easy, unobstructed access to the contents from above is required — whether that is on a retail floor, a storage shelf, or a production line.",
    useCases: [
      "Fresh produce and food items",
      "Retail floor and shelf display",
      "Storage and warehouse organisation",
      "Production line component trays",
      "Promotional point-of-sale displays",
    ],
    features: [
      { label: "Top", value: "Open (no top flaps)" },
      { label: "Bottom", value: "Standard slotted closure" },
      { label: "Stackability", value: "High — consistent top plane" },
      { label: "Material", value: "Corrugated board (3-ply / 5-ply)" },
      { label: "Customisation", value: "Custom size and print" },
    ],
  },
  {
    name: "Gusset Folder",
    slug: "gusset-folder",
    image: "/images/products/gusset-folder.png",
    tagline: "Flat Storage. Expandable Capacity. Flexible Fit.",
    description: "The Gusset Folder is a flat-folding packaging style with expandable gusset panels on the sides that allow the box to accommodate products of varying thickness. When not in use it lies completely flat for efficient storage and transport; when filled, the gussets expand to accommodate the contents without distorting the face panels. The clean, flat surfaces provide excellent print coverage for branding.",
    useCases: [
      "Clothing and garments",
      "Fabric and textiles",
      "Irregular-shaped products",
      "Stationery and printed material",
      "Gift and premium packaging",
    ],
    features: [
      { label: "Side Panels", value: "Expandable gussets" },
      { label: "Storage", value: "Ships and stores completely flat" },
      { label: "Flexibility", value: "Accommodates variable product thickness" },
      { label: "Material", value: "Corrugated / Duplex board" },
      { label: "Customisation", value: "Custom size, print, and finish" },
    ],
  },
  {
    name: "Corrugated Box 200-lb Kraft 7×7×10",
    slug: "corrugated-box-200lb-kraft-7x7x10",
    image: "/images/products/corrugated-box-200lb-kraft-7x7x10.png",
    tagline: "Heavy-Duty Kraft. Precision Dimensions. Reliable Protection.",
    description: "The Corrugated Box 200-lb Kraft in 7\" × 7\" × 10\" is a high-strength shipping box manufactured from 200-lb test kraft corrugated board. The natural brown kraft finish provides a classic, no-frills exterior while the 200-lb burst strength rating ensures the box withstands the rigours of transit, stacking, and warehousing. The precise 7×7×10 inch dimensions make it ideal for a wide range of standard-sized products.",
    useCases: [
      "E-commerce and direct shipping",
      "Retail product packaging",
      "Food and beverage goods",
      "Hardware and tools",
      "General-purpose shipping",
    ],
    features: [
      { label: "Burst Strength", value: "200-lb test" },
      { label: "Material", value: "Natural kraft corrugated board" },
      { label: "Dimensions", value: '7" × 7" × 10" (L × W × H)' },
      { label: "Finish", value: "Brown kraft exterior" },
      { label: "Customisation", value: "Custom print available" },
    ],
  },
  {
    name: "SECUREMENT® Corrugated Brown Boxes",
    slug: "securement-corrugated-brown-boxes",
    image: "/images/products/securement-corrugated-brown-boxes.png",
    tagline: "Engineered for Securement. Built to Protect.",
    description: "SECUREMENT® Corrugated Brown Boxes are purpose-built for applications where contents must stay firmly in place during transit. The robust corrugated construction combined with the SECUREMENT® design principles provides enhanced internal stability, reducing product movement and damage. These brown kraft boxes are suitable for industries where reliable load securement is a non-negotiable requirement.",
    useCases: [
      "Industrial and mechanical parts",
      "Automotive components",
      "Fragile and vibration-sensitive goods",
      "Logistics and freight packaging",
      "Warehouse bulk storage",
    ],
    features: [
      { label: "Design Standard", value: "SECUREMENT® engineered" },
      { label: "Material", value: "Heavy-duty brown kraft corrugated" },
      { label: "Internal Stability", value: "Reduced product movement in transit" },
      { label: "Ply Options", value: "3-ply and 5-ply available" },
      { label: "Customisation", value: "Custom size and print" },
    ],
  },
  {
    name: "Corrugated Box 7×5×5",
    slug: "corrugated-box-7x5x5",
    image: "/images/products/corrugated-box-7x5x5.png",
    tagline: "Compact. Sturdy. Perfect for Smaller Shipments.",
    description: "The Corrugated Box 7×5×5 is a compact, all-purpose shipping and packaging box ideal for smaller products that still require reliable protection. Its balanced 7\"×5\"×5\" dimensions offer excellent volume efficiency, fitting neatly into standard mailer bags and courier packaging. The corrugated construction provides good stacking strength while keeping overall package weight low.",
    useCases: [
      "Small consumer goods",
      "Cosmetics and personal care",
      "Books and media",
      "Electronics accessories",
      "E-commerce and subscription boxes",
    ],
    features: [
      { label: "Dimensions", value: '7" × 5" × 5" (L × W × H)' },
      { label: "Material", value: "Standard corrugated board" },
      { label: "Weight", value: "Lightweight for low shipping cost" },
      { label: "Ply Options", value: "3-ply standard" },
      { label: "Customisation", value: "Custom print available" },
    ],
  },
];

export const SERVICES = [
  {
    title: "Corrugated Packaging Services",
    icon: "Box",
    items: [
      "3-Ply and 5-Ply Corrugated Box Manufacturing",
      "Plain and Printed Corrugated Boxes",
      "Regular Slotted Containers (RSC)",
      "Customized Corrugated Packaging Solutions"
    ]
  },
  {
    title: "Duplex Carton Services",
    icon: "Layers",
    items: [
      "Duplex Cartons (Grey Back / White Back)",
      "Printed Duplex Cartons",
      "Die-Cut and Folding Cartons",
      "Retail and Shelf-Display Packaging"
    ]
  },
  {
    title: "Value-Added Services",
    icon: "Sparkles",
    items: [
      "Custom size and strength optimization",
      "Branding and logo printing",
      "Bulk order and repeat supply support",
      "Packaging consultation based on product requirement"
    ]
  }
];

export const MACHINES = [
  { name: "Corrugation Machine", image: `${import.meta.env.BASE_URL}images/corrugation-machine.png` },
  { name: "Sheet Cutting Machine", image: `${import.meta.env.BASE_URL}images/sheet-cutting-machine.png` },
  { name: "Sheet Pasting Machine", image: `${import.meta.env.BASE_URL}images/sheet-pasting-machine.png` },
  { name: "Slitting and Creasing Machine", image: `${import.meta.env.BASE_URL}images/slitting-creasing-machine.png` },
  { name: "RS4 Machine", image: `${import.meta.env.BASE_URL}images/rs4-machine.png` },
  { name: "Box Stitching Machine", image: `${import.meta.env.BASE_URL}images/box-stitching-machine.png` },
  { name: "Paper Die Cutting Machine", image: `${import.meta.env.BASE_URL}images/paper-die-cutting-machine.png` },
];

export const TEAM_ROLES = [
  { title: "Management Personnel", icon: "Briefcase" },
  { title: "Quality Management", icon: "CheckCircle" },
  { title: "Skill Labour", icon: "Wrench" },
  { title: "Technical Operator", icon: "Cpu" },
  { title: "Designer", icon: "PenTool" },
  { title: "Unskilled Labour", icon: "Users" },
];

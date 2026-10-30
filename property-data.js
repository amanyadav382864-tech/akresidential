// Starter listings. The admin page imports these to seed Firestore once.
export const defaultProperties = [
  {
    id: "bandra-view",
    title: "A quiet corner in Bandra",
    area: "Bandra West",
    city: "Mumbai",
    type: "Apartment",
    mode: "sale",
    price: 42500000,
    beds: 3,
    baths: 3,
    areaSqft: 1680,
    tag: "Featured",
    images: [
      "https://images.pexels.com/photos/35271111/pexels-photo-35271111.jpeg?w=1000",
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000",
      "https://images.pexels.com/photos/34643921/pexels-photo-34643921.jpeg?w=1000",
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000",
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000",
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A light-filled residence with generous living spaces, thoughtful finishes, and the best of Bandra just around the corner.",
    specifications: [
      { label: "Furnishing", value: "Semi-furnished" },
      { label: "Parking", value: "2 covered spaces" },
      { label: "Possession", value: "Ready to move" }
    ],
    features: ["Large windows", "24-hour security", "Lift", "Close to shops and cafes"]
  },
  {
    id: "powai-residence",
    title: "The Lakeside Residence",
    area: "Powai",
    city: "Mumbai",
    type: "Apartment",
    mode: "sale",
    price: 26800000,
    beds: 2,
    baths: 2,
    areaSqft: 1120,
    tag: "New listing",
    images: [
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000",
      "https://images.pexels.com/photos/34643921/pexels-photo-34643921.jpeg?w=1000",
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000",
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000",
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000",
      "https://images.pexels.com/photos/35271111/pexels-photo-35271111.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A calm, contemporary home close to the lake, everyday conveniences, and green open spaces.",
    specifications: [
      { label: "Furnishing", value: "Unfurnished" },
      { label: "Parking", value: "1 covered space" },
      { label: "View", value: "Garden and lake" }
    ],
    features: ["Balcony", "Swimming pool", "Fitness center", "Children's play area"]
  },
  {
    id: "juhu-house",
    title: "A home by the shore",
    area: "Juhu",
    city: "Mumbai",
    type: "Villa",
    mode: "sale",
    price: 89000000,
    beds: 4,
    baths: 4,
    areaSqft: 2850,
    tag: "Open house",
    images: [
      "https://images.pexels.com/photos/34643921/pexels-photo-34643921.jpeg?w=1000",
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000",
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000",
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000",
      "https://images.pexels.com/photos/35271111/pexels-photo-35271111.jpeg?w=1000",
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A private family home with room to gather, unwind, and enjoy the relaxed pace of Juhu.",
    specifications: [
      { label: "Furnishing", value: "Fully furnished" },
      { label: "Parking", value: "2 spaces" },
      { label: "Outdoor space", value: "Private garden" }
    ],
    features: ["Private terrace", "Separate family room", "Staff quarters", "Near Juhu Beach"]
  },
  {
    id: "worli-skyline",
    title: "Worli, with a view",
    area: "Worli",
    city: "Mumbai",
    type: "Penthouse",
    mode: "sale",
    price: 112000000,
    beds: 4,
    baths: 5,
    areaSqft: 3100,
    tag: "Premium",
    images: [
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000",
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000",
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000",
      "https://images.pexels.com/photos/35271111/pexels-photo-35271111.jpeg?w=1000",
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000",
      "https://images.pexels.com/photos/34643921/pexels-photo-34643921.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "An elevated city home with expansive interiors, a considered layout, and far-reaching skyline views.",
    specifications: [
      { label: "Floor", value: "High floor" },
      { label: "Parking", value: "3 covered spaces" },
      { label: "View", value: "City skyline" }
    ],
    features: ["Private lift lobby", "Wraparound terrace", "Concierge", "Residents' lounge"]
  },
  {
    id: "matunga-garden",
    title: "The Matunga Garden Home",
    area: "Matunga",
    city: "Mumbai",
    type: "Apartment",
    mode: "sale",
    price: 31500000,
    beds: 3,
    baths: 3,
    areaSqft: 1460,
    tag: "Garden views",
    images: [
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000",
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000",
      "https://images.pexels.com/photos/35271111/pexels-photo-35271111.jpeg?w=1000",
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000",
      "https://images.pexels.com/photos/34643921/pexels-photo-34643921.jpeg?w=1000",
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A generous, well-proportioned home in a close-knit neighborhood, with leafy outlooks and everyday conveniences nearby.",
    specifications: [
      { label: "Furnishing", value: "Semi-furnished" },
      { label: "Parking", value: "1 covered space" },
      { label: "View", value: "Landscaped garden" }
    ],
    features: ["Balcony", "Store room", "Intercom", "Near local markets"]
  },
  {
    id: "bkc-terrace",
    title: "The BKC Terrace Residence",
    area: "Bandra Kurla Complex",
    city: "Mumbai",
    type: "Apartment",
    mode: "sale",
    price: 67500000,
    beds: 3,
    baths: 3,
    areaSqft: 2050,
    tag: "City address",
    images: [
      "https://images.pexels.com/photos/35271111/pexels-photo-35271111.jpeg?w=1000",
      "https://images.pexels.com/photos/34643921/pexels-photo-34643921.jpeg?w=1000",
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000",
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000",
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000",
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A polished city residence with spacious interiors and an easy connection to Mumbai's leading business district.",
    specifications: [
      { label: "Furnishing", value: "Fully furnished" },
      { label: "Parking", value: "2 covered spaces" },
      { label: "Possession", value: "Ready to move" }
    ],
    features: ["Private terrace", "Access-controlled entry", "Gym", "Near BKC offices"]
  },
  {
    id: "andheri-nest",
    title: "The Andheri Nest",
    area: "Andheri West",
    city: "Mumbai",
    type: "Apartment",
    mode: "rent",
    price: 95000,
    beds: 2,
    baths: 2,
    areaSqft: 980,
    tag: "Available now",
    images: [
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A well-planned, move-in-ready apartment close to transit, cafes, and daily essentials.",
    specifications: [
      { label: "Furnishing", value: "Fully furnished" },
      { label: "Security deposit", value: "3 months" },
      { label: "Availability", value: "Immediate" }
    ],
    features: ["Balcony", "Modular kitchen", "Building security", "Near metro station"]
  },
  {
    id: "bandra-rental",
    title: "A bright Bandra apartment",
    area: "Bandra East",
    city: "Mumbai",
    type: "Apartment",
    mode: "rent",
    price: 145000,
    beds: 3,
    baths: 2,
    areaSqft: 1370,
    tag: "New listing",
    images: [
      "https://images.pexels.com/photos/31656149/pexels-photo-31656149.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "An airy apartment with a welcoming living room and convenient access to the neighborhood.",
    specifications: [
      { label: "Furnishing", value: "Semi-furnished" },
      { label: "Security deposit", value: "3 months" },
      { label: "Availability", value: "Available next month" }
    ],
    features: ["Balcony", "Covered parking", "Lift", "Close to transit"]
  },
  {
    id: "powai-office",
    title: "A flexible Powai workspace",
    area: "Powai",
    city: "Mumbai",
    type: "Commercial",
    mode: "commercial",
    price: 18500000,
    beds: 0,
    baths: 2,
    areaSqft: 1450,
    tag: "Commercial",
    images: [
      "https://images.pexels.com/photos/34604972/pexels-photo-34604972.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A flexible commercial space in a well-connected district, suited to a growing local business.",
    specifications: [
      { label: "Ownership", value: "Leasehold" },
      { label: "Parking", value: "2 spaces" },
      { label: "Floor", value: "Ground floor" }
    ],
    features: ["Open-plan layout", "Private washrooms", "Power backup", "Visitor parking"]
  },
  {
    id: "juhu-retail",
    title: "Street-front Juhu studio",
    area: "Juhu",
    city: "Mumbai",
    type: "Commercial",
    mode: "commercial",
    price: 125000,
    beds: 0,
    baths: 1,
    areaSqft: 860,
    tag: "Commercial",
    images: [
      "https://images.pexels.com/photos/34450816/pexels-photo-34450816.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A bright street-front space with flexible possibilities in an established neighborhood.",
    specifications: [
      { label: "Lease term", value: "Negotiable" },
      { label: "Floor", value: "Ground floor" },
      { label: "Frontage", value: "Street-facing" }
    ],
    features: ["Street entrance", "Flexible open plan", "Customer parking nearby", "High foot traffic"]
  },
  {
    id: "worli-rental",
    title: "City living in Worli",
    area: "Worli",
    city: "Mumbai",
    type: "Apartment",
    mode: "rent",
    price: 225000,
    beds: 3,
    baths: 3,
    areaSqft: 1540,
    tag: "Featured",
    images: [
      "https://images.pexels.com/photos/6128712/pexels-photo-6128712.jpeg?w=1000"
    ],
    imagePaths: [],
    description: "A spacious city apartment with easy access to business districts, dining, and the coast.",
    specifications: [
      { label: "Furnishing", value: "Semi-furnished" },
      { label: "Security deposit", value: "3 months" },
      { label: "Availability", value: "Immediate" }
    ],
    features: ["Balcony", "Gym and pool", "Covered parking", "Near the coastal road"]
  }
];

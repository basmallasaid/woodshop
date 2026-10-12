export type ProductColor = {
  name: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  material: string;
  description: string;
  dimensions: string;
  images: [string, string];
  colors: ProductColor[];
};

export const products: Product[] = [
  {
    slug: "hawthorne-chair",
    name: "The Hawthorne Chair",
    category: "Seating",
    price: 1280,
    material: "White oak · Hand-woven seat",
    description:
      "A generous everyday chair shaped for long, unhurried meals. The curved back is carved by hand and every joint is fitted in our Portland workshop.",
    dimensions: '31"H × 22"W × 23"D',
    images: [
      "https://images.unsplash.com/photo-1720391793902-06a80038b1ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
      "https://images.unsplash.com/photo-1607073297082-07da3b1014dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    ],
    colors: [
      { name: "Natural Oak", value: "#c6a87c" },
      { name: "Smoked Oak", value: "#6d5844" },
      { name: "Ebony", value: "#292824" },
    ],
  },
  {
    slug: "turner-table",
    name: "The Turner Table",
    category: "Tables",
    price: 3400,
    material: "Solid ash · Traditional joinery",
    description:
      "A quiet dining table with a strong architectural stance. Selected solid-ash boards meet in a softly rounded top, supported by hand-cut mortise and tenon joints.",
    dimensions: '30"H × 72"W × 36"D',
    images: [
      "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
      "https://images.unsplash.com/photo-1719899913493-1e508c3833e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    ],
    colors: [
      { name: "Natural Ash", value: "#d2bd99" },
      { name: "Warm Umber", value: "#8b6749" },
      { name: "Forest", value: "#485348" },
    ],
  },
  {
    slug: "field-bench",
    name: "The Field Bench",
    category: "Benches",
    price: 1860,
    material: "Black walnut · Oil finish",
    description:
      "A versatile bench for an entry, bedside, or dining table. Its broad seat celebrates the grain of a single board while the underframe provides lasting strength.",
    dimensions: '18"H × 58"W × 16"D',
    images: [
      "https://images.unsplash.com/photo-1660711608771-122bf9eb37d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
      "https://images.unsplash.com/photo-1685374103134-c94d0b8978e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    ],
    colors: [
      { name: "Black Walnut", value: "#694a37" },
      { name: "Oxidized", value: "#383a35" },
      { name: "Honey", value: "#ad7b46" },
    ],
  },
  {
    slug: "ridge-cabinet",
    name: "The Ridge Cabinet",
    category: "Storage",
    price: 2780,
    material: "White oak · Woven cane",
    description:
      "Balanced storage for the things worth keeping close. Sliding doors and adjustable shelving sit inside a solid timber frame finished with natural hardwax oil.",
    dimensions: '31"H × 54"W × 18"D',
    images: [
      "https://images.unsplash.com/photo-1640190582299-b8c67cfca2a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
      "https://images.unsplash.com/photo-1630245783610-824bda5ec1c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=85&w=1400",
    ],
    colors: [
      { name: "White Oak", value: "#cbb793" },
      { name: "Clay", value: "#9a634b" },
      { name: "Dark Oak", value: "#4b4036" },
    ],
  },
];

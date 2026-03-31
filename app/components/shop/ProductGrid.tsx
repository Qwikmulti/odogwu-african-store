"use client";

import { useState } from "react";
import FilterBar, { Category } from "./FilterBar";
import ProductCard, { Product } from "./ProductCard";

const allProducts: Product[] = [
  // Meat & Fish
  {
    id: "1",
    name: "Fresh Goat Meat",
    description: "Premium quality fresh goat meat, perfect for pepper soup, suya, and traditional stews.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "/images/product-1.jpeg",
  },
  {
    id: "2",
    name: "Beef Oxtail",
    description: "Slow-cooked oxtail perfect for Jamaican-style brown stew or pressure-cooked to tender perfection.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "/images/product-2.jpeg",
  },
  {
    id: "3",
    name: "Titus Sardines in Tomato Sauce",
    description: "Beloved West African canned sardines in rich tomato sauce. Perfect for sandwiches and rice dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "/images/product-3.jpeg",
  },
  {
    id: "4",
    name: "Smoked Mackerel",
    description: "Rich, smoky mackerel — a staple for traditional Nigerian fish rolls and peppered fish dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "/images/product-4.jpeg",
  },
  {
    id: "5",
    name: "Stockfish",
    description: "Dried Atlantic cod, essential for authentic Nigerian egusi soup and many West African dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "/images/product-5.jpeg",
  },
  {
    id: "6",
    name: "Cow Feet (Ponmo)",
    description: "Tenderized cow feet — a favourite in Nigerian pepper soup and translational jollof dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "/images/product-6.jpeg",
  },

  // African Staples
  {
    id: "7",
    name: "Garri (White)",
    description: "Premium fermented cassava flakes for eba. Fine texture, properly dehydrated.",
    category: "African Staples",
    categoryId: "staples",
    image: "/images/product-7.jpeg",
  },
  {
    id: "8",
    name: "Garri (Yellow/Palm Oil)",
    description: "Rich yellow garri with palm oil infused for that extra flavour in your eba.",
    category: "African Staples",
    categoryId: "staples",
    image: "/images/product-8.jpeg",
  },
  {
    id: "9",
    name: "Semovita",
    description: "Finely milled semolina for smooth, lump-free semolina swallow. A household favourite.",
    category: "African Staples",
    categoryId: "staples",
    image: "/images/product-9.jpeg",
  },
  {
    id: "10",
    name: "Yam Flour (Elubo)",
    description: "Premium yam flour for making authentic amala. Smooth consistency every time.",
    category: "African Staples",
    categoryId: "staples",
    image: "/images/product-10.jpeg",
  },
  {
    id: "11",
    name: "Plantain Flour",
    description: "Fine plantain flour for preparing plantain fufu — great with Nigerian soups.",
    category: "African Staples",
    categoryId: "staples",
    image: "/images/product-11.jpeg",
  },
  {
    id: "12",
    name: "Egusi Melon Seeds",
    description: "Ground egusi seeds — the essential base for Nigeria's most popular soup.",
    category: "African Staples",
    categoryId: "staples",
    image: "/images/product-12.jpeg",
  },

  // Caribbean
  {
    id: "13",
    name: "Scotch Bonnet Peppers",
    description: "Fiery Scotch bonnet chillies — essential for authentic Caribbean jerk and pepper sauces.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "/images/product-13.jpeg",
  },
  {
    id: "14",
    name: "Grace Coconut Milk",
    description: "Rich coconut milk for Caribbean curries, rice and peas, and traditional dishes.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "/images/product-14.jpeg",
  },
  {
    id: "15",
    name: "Ackee & Saltfish",
    description: "Canned ackee in brine with premium saltfish — Jamaica's national dish, ready to cook.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "/images/product-15.jpeg",
  },
  {
    id: "16",
    name: "Callaloo",
    description: "Tender callaloo leaves — a Caribbean green vegetable essential for callaloo rice and soups.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "/images/product-16.jpeg",
  },
  {
    id: "17",
    name: "Jerk Seasoning",
    description: "Authentic Jamaican jerk marinade — scotch bonnet, allspice, thyme and garlic.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "/images/product-17.jpeg",
  },
  {
    id: "18",
    name: "Dried Crayfish",
    description: "Ground West African crayfish — the secret umami bomb for Nigerian and Ghanaian soups.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "/images/product-18.jpeg",
  },

  // Snacks & Drinks
  {
    id: "19",
    name: "Chin Chin",
    description: "Crunchy, sweet fried dough — the quintessential Nigerian party snack and childhood favourite.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "/images/product-19.jpeg",
  },
  {
    id: "20",
    name: "Puff Puff Mix",
    description: "Pre-mixed puff puff batter — just add water and fry for fluffy, golden Nigerian doughnuts.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "/images/product-20.jpeg",
  },
  {
    id: "21",
    name: "Malta Guinness",
    description: "The iconic non-alcoholic malt drink from Guinness — rich, sweet, and energizing.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "/images/product-21.jpeg",
  },
  {
    id: "22",
    name: "Zobo Drink Mix",
    description: "Hibiscus flower drink concentrate for making the beloved Nigerian zobo — tart, sweet, refreshing.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "/images/product-22.jpeg",
  },
  {
    id: "23",
    name: "Lucozade Energy",
    description: "The classic British energy drink — glucose-fuelled energy, a UK cultural staple.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "/images/product-23.jpeg",
  },
  {
    id: "24",
    name: "Groundnut (Peanuts)",
    description: "Dry roasted groundnuts — a wholesome, protein-rich snack for every occasion.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "/images/product-1.jpeg",
  },

  // Cosmetics
  {
    id: "25",
    name: "African Black Soap",
    description: "Traditional Ghanaian black soap — unrefined shea butter and cocoa blend for cleansing and skincare.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "/images/product-2.jpeg",
  },
  {
    id: "26",
    name: "Raw Shea Butter",
    description: "Pure, unrefined shea butter — deeply moisturising for skin, hair, and body care.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "/images/product-3.jpeg",
  },
  {
    id: "27",
    name: "Cantu Coconut Milk",
    description: "Cantu coconut milk collection — leave-in conditioner, curl activator, and shine spray.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "/images/product-4.jpeg",
  },
  {
    id: "28",
    name: "Hair Food (Murray's)",
    description: "Murray's Hair Food — petroleum jelly and mineral oil blend for natural hair moisture.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "/images/product-5.jpeg",
  },

  // Wholesale
  {
    id: "29",
    name: "Bulk Rice (25kg)",
    description: "Premium long-grain rice in 25kg wholesale bags — perfect for families and caterers.",
    category: "Wholesale",
    categoryId: "wholesale",
    image: "/images/product-6.jpeg",
  },
  {
    id: "30",
    name: "Bulk Palm Oil (5L)",
    description: "Crude red palm oil — the authentic cooking oil for egusi, fried plantain, and more.",
    category: "Wholesale",
    categoryId: "wholesale",
    image: "/images/product-7.jpeg",
  },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProducts =
    activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.categoryId === activeCategory);

  return (
    <div className="space-y-8">
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-[#6B7280] text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

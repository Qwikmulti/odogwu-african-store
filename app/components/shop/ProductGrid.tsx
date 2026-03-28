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
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
  },
  {
    id: "2",
    name: "Beef Oxtail",
    description: "Slow-cooked oxtail perfect for Jamaican-style brown stew or pressure-cooked to tender perfection.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&q=80",
  },
  {
    id: "3",
    name: "Titus Sardines in Tomato Sauce",
    description: "Beloved West African canned sardines in rich tomato sauce. Perfect for sandwiches and rice dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&q=80",
  },
  {
    id: "4",
    name: "Smoked Mackerel",
    description: "Rich, smoky mackerel — a staple for traditional Nigerian fish rolls and peppered fish dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=500&q=80",
  },
  {
    id: "5",
    name: "Stockfish",
    description: "Dried Atlantic cod, essential for authentic Nigerian egusi soup and many West African dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=500&q=80",
  },
  {
    id: "6",
    name: "Cow Feet (Ponmo)",
    description: "Tenderized cow feet — a favourite in Nigerian pepper soup and translational jollof dishes.",
    category: "Meat & Fish",
    categoryId: "meat-fish",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=500&q=80",
  },

  // African Staples
  {
    id: "7",
    name: "Garri (White)",
    description: "Premium fermented cassava flakes for eba. Fine texture, properly dehydrated.",
    category: "African Staples",
    categoryId: "staples",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80",
  },
  {
    id: "8",
    name: "Garri (Yellow/Palm Oil)",
    description: "Rich yellow garri with palm oil infused for that extra flavour in your eba.",
    category: "African Staples",
    categoryId: "staples",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80",
  },
  {
    id: "9",
    name: "Semovita",
    description: "Finely milled semolina for smooth, lump-free semolina swallow. A household favourite.",
    category: "African Staples",
    categoryId: "staples",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=500&q=80",
  },
  {
    id: "10",
    name: "Yam Flour (Elubo)",
    description: "Premium yam flour for making authentic amala. Smooth consistency every time.",
    category: "African Staples",
    categoryId: "staples",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80",
  },
  {
    id: "11",
    name: "Plantain Flour",
    description: "Fine plantain flour for preparing plantain fufu — great with Nigerian soups.",
    category: "African Staples",
    categoryId: "staples",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80",
  },
  {
    id: "12",
    name: "Egusi Melon Seeds",
    description: "Ground egusi seeds — the essential base for Nigeria's most popular soup.",
    category: "African Staples",
    categoryId: "staples",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
  },

  // Caribbean
  {
    id: "13",
    name: "Scotch Bonnet Peppers",
    description: "Fiery Scotch bonnet chillies — essential for authentic Caribbean jerk and pepper sauces.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=500&q=80",
  },
  {
    id: "14",
    name: "Grace Coconut Milk",
    description: "Rich coconut milk for Caribbean curries, rice and peas, and traditional dishes.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
  },
  {
    id: "15",
    name: "Ackee & Saltfish",
    description: "Canned ackee in brine with premium saltfish — Jamaica's national dish, ready to cook.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80",
  },
  {
    id: "16",
    name: "Callaloo",
    description: "Tender callaloo leaves — a Caribbean green vegetable essential for callaloo rice and soups.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
  },
  {
    id: "17",
    name: "Jerk Seasoning",
    description: "Authentic Jamaican jerk marinade — scotch bonnet, allspice, thyme and garlic.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?w=500&q=80",
  },
  {
    id: "18",
    name: "Dried Crayfish",
    description: "Ground West African crayfish — the secret umami bomb for Nigerian and Ghanaian soups.",
    category: "Caribbean",
    categoryId: "caribbean",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80",
  },

  // Snacks & Drinks
  {
    id: "19",
    name: "Chin Chin",
    description: "Crunchy, sweet fried dough — the quintessential Nigerian party snack and childhood favourite.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },
  {
    id: "20",
    name: "Puff Puff Mix",
    description: "Pre-mixed puff puff batter — just add water and fry for fluffy, golden Nigerian doughnuts.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80",
  },
  {
    id: "21",
    name: "Malta Guinness",
    description: "The iconic non-alcoholic malt drink from Guinness — rich, sweet, and energizing.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80",
  },
  {
    id: "22",
    name: "Zobo Drink Mix",
    description: "Hibiscus flower drink concentrate for making the beloved Nigerian zobo — tart, sweet, refreshing.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80",
  },
  {
    id: "23",
    name: "Lucozade Energy",
    description: "The classic British energy drink — glucose-fuelled energy, a UK cultural staple.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=500&q=80",
  },
  {
    id: "24",
    name: "Groundnut (Peanuts)",
    description: "Dry roasted groundnuts — a wholesome, protein-rich snack for every occasion.",
    category: "Snacks & Drinks",
    categoryId: "snacks",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
  },

  // Cosmetics
  {
    id: "25",
    name: "African Black Soap",
    description: "Traditional Ghanaian black soap — unrefined shea butter and cocoa blend for cleansing and skincare.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80",
  },
  {
    id: "26",
    name: "Raw Shea Butter",
    description: "Pure, unrefined shea butter — deeply moisturising for skin, hair, and body care.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80",
  },
  {
    id: "27",
    name: "Cantu Coconut Milk",
    description: "Cantu coconut milk collection — leave-in conditioner, curl activator, and shine spray.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
  },
  {
    id: "28",
    name: "Hair Food (Murray's)",
    description: "Murray's Hair Food — petroleum jelly and mineral oil blend for natural hair moisture.",
    category: "Cosmetics",
    categoryId: "cosmetics",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
  },

  // Wholesale
  {
    id: "29",
    name: "Bulk Rice (25kg)",
    description: "Premium long-grain rice in 25kg wholesale bags — perfect for families and caterers.",
    category: "Wholesale",
    categoryId: "wholesale",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
  },
  {
    id: "30",
    name: "Bulk Palm Oil (5L)",
    description: "Crude red palm oil — the authentic cooking oil for egusi, fried plantain, and more.",
    category: "Wholesale",
    categoryId: "wholesale",
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",
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

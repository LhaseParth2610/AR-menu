
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Menu as MenuIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import FoodCard from "@/components/FoodCard";
import Sidebar from "@/components/Sidebar";

const menuData = {
  "Best Selling": [
    {
      id: 1,
      name: "Corn Pizza",
      description: "Cheesy delight with corn & capsicum",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      modelPath: "/models/corn-pizza.glb",
      calories: 250,
      serves: 1,
      type: "Veg",
      size: "12\" thin crust"
    },
    {
      id: 2,
      name: "Classic Burger",
      description: "Juicy beef patty with fresh vegetables",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      modelPath: "/models/burger.glb",
      calories: 420,
      serves: 1,
      type: "Non-Veg",
      size: "6\" bun"
    }
  ],
  "Beverages": [
    {
      id: 3,
      name: "Iced Coffee",
      description: "Rich espresso with ice and cream",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
      modelPath: "/models/iced-coffee.glb",
      calories: 120,
      serves: 1,
      type: "Veg",
      size: "16 oz"
    }
  ],
  "Burgers": [
    {
      id: 2,
      name: "Classic Burger",
      description: "Juicy beef patty with fresh vegetables",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      modelPath: "/models/burger.glb",
      calories: 420,
      serves: 1,
      type: "Non-Veg",
      size: "6\" bun"
    }
  ],
  "Pizzas": [
    {
      id: 1,
      name: "Corn Pizza",
      description: "Cheesy delight with corn & capsicum",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      modelPath: "/models/corn-pizza.glb",
      calories: 250,
      serves: 1,
      type: "Veg",
      size: "12\" thin crust"
    }
  ]
};

const Menu = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Best Selling");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = Object.keys(menuData);
  const currentItems = menuData[selectedCategory as keyof typeof menuData] || [];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-600 hover:text-slate-900 md:hidden"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </Button>
            
            <h1 className="text-xl font-semibold text-slate-900">Menu</h1>
          </div>
          
          <div className="text-sm text-slate-500">
            {selectedCategory}
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={(category) => {
            setSelectedCategory(category);
            setSidebarOpen(false);
          }}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{selectedCategory}</h2>
              <p className="text-slate-600">
                {currentItems.length} item{currentItems.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentItems.map((item) => (
                <FoodCard
                  key={item.id}
                  item={item}
                  onViewAR={() => navigate(`/ar/${item.id}`, { state: { item } })}
                />
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu;

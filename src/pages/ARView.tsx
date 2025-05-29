
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Menu as MenuIcon, Settings, Share2, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const ARView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item;

  useEffect(() => {
    // Load model-viewer script dynamically
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!item) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center p-4">
        <Card className="bg-white shadow-2xl border-2 border-orange-200">
          <CardContent className="p-8 text-center">
            <div className="text-6xl mb-4">😢</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Oops! Dish Not Found</h1>
            <p className="text-gray-600 mb-6">Looks like this tasty item went missing!</p>
            <Button 
              onClick={() => navigate("/menu")} 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl"
            >
              Back to Menu 🍽️
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Enhanced Header with food-inspired colors */}
      <header className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/menu")}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-white">{item.name}</h1>
              <p className="text-xs text-orange-100">AR Experience</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/settings")}
              className="text-white hover:bg-white/20 rounded-xl"
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Enhanced AR Model Viewer */}
      <div className="relative h-[55vh] bg-gradient-to-b from-white to-orange-50 border-b-4 border-orange-200">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full h-full flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-orange-200">
            <div className="text-center space-y-6">
              <div className="relative">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-6xl">{item.id === 1 ? '🍕' : item.id === 2 ? '🍔' : '☕'}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AR</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-xl font-bold text-gray-800">3D AR Model</p>
                <p className="text-orange-600 font-semibold">👆 Tap and drag to rotate</p>
                <div className="flex justify-center space-x-2">
                  <Badge className="bg-green-500 text-white border-0 rounded-full px-3 py-1">
                    AR Ready ✨
                  </Badge>
                  <Badge className="bg-orange-500 text-white border-0 rounded-full px-3 py-1">
                    3D View 👁️
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Item Details */}
      <div className="p-4 space-y-4">
        {/* Main Info Card */}
        <Card className="bg-white shadow-xl border-2 border-orange-200 rounded-2xl overflow-hidden">
          <CardContent className="p-6">
            <div className="space-y-6">
              {/* Header Info with food emojis */}
              <div className="text-center">
                <h2 className="text-3xl font-black text-gray-800 mb-2">{item.name}</h2>
                <div className="flex justify-center space-x-2 mb-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-lg font-bold text-orange-600">4.5</span>
                  <span className="text-gray-500">(324 reviews)</span>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed font-medium bg-orange-50 p-3 rounded-xl border border-orange-200">
                  {item.description}
                </p>
              </div>

              {/* Enhanced Nutrition Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl border-2 border-orange-200">
                  <div className="text-3xl font-black text-orange-600">{item.calories}</div>
                  <div className="text-sm font-semibold text-gray-700">🔥 Calories</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl border-2 border-red-200">
                  <div className="text-3xl font-black text-red-600">{item.serves}</div>
                  <div className="text-sm font-semibold text-gray-700">👥 Serves</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border-2 border-green-200">
                  <Badge 
                    className={`text-lg font-bold px-4 py-2 rounded-full ${
                      item.type === "Veg" 
                        ? "bg-green-500 text-white" 
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.type === "Veg" ? "🌱 Veg" : "🍖 Non-Veg"}
                  </Badge>
                  <div className="text-sm font-semibold text-gray-700 mt-2">Type</div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl border-2 border-yellow-200">
                  <div className="text-lg font-bold text-yellow-600">{item.size}</div>
                  <div className="text-sm font-semibold text-gray-700">📏 Size</div>
                </div>
              </div>

              {/* Enhanced Ingredients */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-2xl border-2 border-orange-200">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  🧄 Ingredients
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["🧀 Cheese", "🌽 Corn", "🫑 Capsicum", "🍅 Tomato", "🧅 Onion"].map((ingredient) => (
                    <Badge 
                      key={ingredient} 
                      className="bg-white text-gray-700 border-2 border-orange-300 hover:bg-orange-100 rounded-full px-3 py-1 font-semibold"
                    >
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 text-lg rounded-2xl shadow-xl border-2 border-white/20 transform hover:scale-105 transition-all">
            <ShoppingCart className="mr-3 h-5 w-5" />
            Add to Cart - ₹299 🛒
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="border-2 border-orange-300 bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 rounded-xl"
              onClick={() => navigate("/menu")}
            >
              <MenuIcon className="mr-2 h-4 w-4" />
              More Items
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-red-300 bg-white text-red-600 hover:bg-red-50 font-bold py-3 rounded-xl"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share AR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARView;

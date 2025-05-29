
import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu as MenuIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 text-gray-900 flex flex-col relative overflow-hidden">
      {/* Sketchy Food Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl transform rotate-12">🍕</div>
        <div className="absolute top-16 right-16 text-3xl transform -rotate-12">🍔</div>
        <div className="absolute top-24 left-1/4 text-3xl transform rotate-45">🌮</div>
        <div className="absolute top-32 right-1/3 text-4xl transform -rotate-6">🍟</div>
        <div className="absolute top-48 left-12 text-3xl transform rotate-12">🥗</div>
        <div className="absolute top-56 right-20 text-4xl transform rotate-45">🍰</div>
        <div className="absolute bottom-32 left-20 text-4xl transform -rotate-12">🍝</div>
        <div className="absolute bottom-44 right-12 text-3xl transform rotate-6">🥤</div>
        <div className="absolute bottom-56 left-1/3 text-4xl transform -rotate-45">🍗</div>
        <div className="absolute bottom-64 right-1/4 text-3xl transform rotate-12">🧀</div>
        <div className="absolute top-72 left-1/2 text-4xl transform -rotate-12">🥙</div>
        <div className="absolute bottom-20 left-1/2 text-3xl transform rotate-45">🍪</div>
      </div>

      {/* Decorative sketchy lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 400 600">
        <path d="M50,100 Q150,50 250,100 T450,100" stroke="#ff6b35" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M0,200 Q100,150 200,200 T400,200" stroke="#ff8500" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M100,300 Q200,250 300,300 T500,300" stroke="#ffa726" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M50,400 Q150,350 250,400 T450,400" stroke="#ffcc02" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <path d="M0,500 Q100,450 200,500 T400,500" stroke="#ff5722" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Header */}
      <header className="p-4 text-center relative z-10 pt-8">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            TasteAR
          </h1>
          <div className="absolute -top-2 -right-6 text-xl animate-bounce">🍽️</div>
        </div>
        <div className="flex justify-center items-center mt-2 space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </header>

      {/* Main Content - Centered and Compact */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-6 relative z-10">
        {/* Restaurant Info */}
        <div className="text-center space-y-4 max-w-sm">
          <div className="relative">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Spice Junction
            </h2>
            <div className="absolute -top-1 -right-8 text-xl animate-spin">🌟</div>
          </div>
          <p className="text-gray-700 text-base leading-relaxed font-medium bg-white/60 backdrop-blur-sm p-4 rounded-2xl border-2 border-orange-200 shadow-lg">
            Authentic Indian flavors meet modern dining. From spicy street food to royal curries, experience the taste of India in every bite! 🇮🇳
          </p>
        </div>

        {/* Action Buttons - Compact */}
        <div className="flex flex-col space-y-3 w-full max-w-xs">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-700 mb-2">MENU</p>
            <Button
              onClick={() => navigate("/menu")}
              className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/20"
            >
              <MenuIcon className="mr-2 h-5 w-5" />
              Explore Dishes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <Button
            onClick={() => navigate("/settings")}
            variant="outline"
            className="border-2 border-orange-300 bg-white/80 backdrop-blur-sm text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold py-3 text-base rounded-2xl transition-all duration-300 shadow-lg"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>

        {/* Floating Food Icons - Smaller and positioned for mobile */}
        <div className="absolute top-1/4 left-4 text-3xl animate-bounce delay-300">🥨</div>
        <div className="absolute top-1/3 right-4 text-2xl animate-bounce delay-500">🍩</div>
        <div className="absolute bottom-1/4 left-8 text-3xl animate-bounce delay-700">🌯</div>
      </main>

      {/* Footer - Compact */}
      <footer className="p-4 text-center text-gray-500 relative z-10">
        <div className="flex justify-center items-center space-x-2 mb-1">
          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
          <p className="font-medium text-sm">Powered by AR Technology</p>
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
        <p className="text-xs">Taste the future of dining</p>
      </footer>
    </div>
  );
};

export default Index;


import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu as MenuIcon, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 text-gray-900 flex flex-col relative overflow-hidden">
      {/* Sketchy Food Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl transform rotate-12">🍕</div>
        <div className="absolute top-20 right-16 text-5xl transform -rotate-12">🍔</div>
        <div className="absolute top-32 left-1/4 text-4xl transform rotate-45">🌮</div>
        <div className="absolute top-44 right-1/3 text-5xl transform -rotate-6">🍟</div>
        <div className="absolute top-64 left-12 text-4xl transform rotate-12">🥗</div>
        <div className="absolute top-80 right-20 text-5xl transform rotate-45">🍰</div>
        <div className="absolute bottom-32 left-20 text-6xl transform -rotate-12">🍝</div>
        <div className="absolute bottom-44 right-12 text-4xl transform rotate-6">🥤</div>
        <div className="absolute bottom-64 left-1/3 text-5xl transform -rotate-45">🍗</div>
        <div className="absolute bottom-80 right-1/4 text-4xl transform rotate-12">🧀</div>
        <div className="absolute top-96 left-1/2 text-5xl transform -rotate-12">🥙</div>
        <div className="absolute bottom-20 left-1/2 text-4xl transform rotate-45">🍪</div>
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
      <header className="p-6 text-center relative z-10">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            TasteAR
          </h1>
          <div className="absolute -top-2 -right-8 text-2xl animate-bounce">🍽️</div>
        </div>
        <p className="text-gray-700 mt-4 text-xl font-semibold">Experience Dining in Augmented Reality</p>
        <div className="flex justify-center items-center mt-2 space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-10 relative z-10">
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border-2 border-orange-200">
            <div className="text-3xl mb-2">👁️</div>
            <p className="text-sm font-semibold text-gray-700">View in 3D</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border-2 border-red-200">
            <div className="text-3xl mb-2">🔍</div>
            <p className="text-sm font-semibold text-gray-700">AR Experience</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg border-2 border-yellow-200">
            <div className="text-3xl mb-2">🛒</div>
            <p className="text-sm font-semibold text-gray-700">Easy Ordering</p>
          </div>
        </div>

        <div className="text-center space-y-6 max-w-md">
          <div className="relative">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Hungry? Let's Go!
            </h2>
            <div className="absolute -top-1 -right-12 text-2xl animate-spin">🌟</div>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            See your food before you order. Every dish in stunning 3D detail!
          </p>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <Button
            onClick={() => navigate("/menu")}
            className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-6 text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl border-2 border-white/20"
          >
            <MenuIcon className="mr-3 h-6 w-6" />
            Explore Menu
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>

          <Button
            onClick={() => navigate("/settings")}
            variant="outline"
            className="border-2 border-orange-300 bg-white/80 backdrop-blur-sm text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold py-6 text-lg rounded-2xl transition-all duration-300 shadow-lg"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button>
        </div>

        {/* Floating Food Icons */}
        <div className="absolute top-1/4 left-8 text-4xl animate-bounce delay-300">🥨</div>
        <div className="absolute top-1/3 right-8 text-3xl animate-bounce delay-500">🍩</div>
        <div className="absolute bottom-1/4 left-12 text-4xl animate-bounce delay-700">🌯</div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-gray-500 relative z-10">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
          <p className="font-medium">Powered by AR Technology</p>
          <div className="w-1 h-1 bg-red-400 rounded-full"></div>
        </div>
        <p className="text-xs">Taste the future of dining</p>
      </footer>
    </div>
  );
};

export default Index;

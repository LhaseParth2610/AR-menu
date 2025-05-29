
import { useNavigate } from "react-router-dom";
import { ArrowRight, Menu as MenuIcon, Settings, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 text-gray-900 flex flex-col relative overflow-hidden">
      {/* Enhanced Sketchy Food Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl transform rotate-12 animate-bounce">🍕</div>
        <div className="absolute top-16 right-16 text-3xl transform -rotate-12 animate-pulse">🍔</div>
        <div className="absolute top-24 left-1/4 text-3xl transform rotate-45 animate-bounce delay-300">🌮</div>
        <div className="absolute top-32 right-1/3 text-4xl transform -rotate-6 animate-pulse delay-200">🍟</div>
        <div className="absolute top-48 left-12 text-3xl transform rotate-12 animate-bounce delay-500">🥗</div>
        <div className="absolute top-56 right-20 text-4xl transform rotate-45 animate-pulse delay-400">🍰</div>
        <div className="absolute bottom-32 left-20 text-4xl transform -rotate-12 animate-bounce delay-700">🍝</div>
        <div className="absolute bottom-44 right-12 text-3xl transform rotate-6 animate-pulse delay-600">🥤</div>
        <div className="absolute bottom-56 left-1/3 text-4xl transform -rotate-45 animate-bounce delay-100">🍗</div>
        <div className="absolute bottom-64 right-1/4 text-3xl transform rotate-12 animate-pulse delay-800">🧀</div>
        <div className="absolute top-72 left-1/2 text-4xl transform -rotate-12 animate-bounce delay-400">🥙</div>
        <div className="absolute bottom-20 left-1/2 text-3xl transform rotate-45 animate-pulse delay-900">🍪</div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-red-300 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-700"></div>
      </div>

      {/* Decorative sketchy lines with animation */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 400 600">
        <path d="M50,100 Q150,50 250,100 T450,100" stroke="#ff6b35" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse"/>
        <path d="M0,200 Q100,150 200,200 T400,200" stroke="#ff8500" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse delay-200"/>
        <path d="M100,300 Q200,250 300,300 T500,300" stroke="#ffa726" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse delay-400"/>
        <path d="M50,400 Q150,350 250,400 T450,400" stroke="#ffcc02" strokeWidth="3" fill="none" strokeLinecap="round" className="animate-pulse delay-600"/>
        <path d="M0,500 Q100,450 200,500 T400,500" stroke="#ff5722" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse delay-800"/>
      </svg>

      {/* Header with enhanced design */}
      <header className="p-4 text-center relative z-10 pt-6">
        <div className="relative inline-block">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
            TasteAR
          </h1>
          <div className="absolute -top-2 -right-6 text-xl animate-bounce">🍽️</div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
        </div>
        <div className="flex justify-center items-center mt-3 space-x-2">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </header>

      {/* Main Content - Enhanced and Interactive */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 space-y-6 relative z-10">
        {/* Restaurant Info Card */}
        <Card className="w-full max-w-sm bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
          <CardContent className="p-6 text-center space-y-4">
            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Spice Junction
              </h2>
              <div className="absolute -top-1 -right-8 text-xl animate-spin">🌟</div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex justify-around items-center py-2">
              <div className="flex items-center space-x-1 text-green-600">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold">4.8</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-bold">25 min</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-600">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-bold">2.1 km</span>
              </div>
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed font-medium">
              Authentic Indian flavors meet modern dining. From spicy street food to royal curries, experience the taste of India in every bite! 🇮🇳
            </p>
            
            {/* Interactive badges */}
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-bold animate-pulse">Spicy 🌶️</span>
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold animate-pulse delay-100">Fresh 🥬</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs font-bold animate-pulse delay-200">Authentic 👨‍🍳</span>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          {/* Menu Button */}
          <div className="text-center space-y-2">
            <p className="text-lg font-bold text-gray-700 tracking-wide">MENU</p>
            <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
            <ArrowRight className="mx-auto h-6 w-6 text-orange-500 animate-bounce" />
            <Button
              onClick={() => navigate("/menu")}
              className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white font-bold py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-white/20 group"
            >
              <MenuIcon className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Explore Dishes
              <div className="ml-2 text-xl group-hover:animate-bounce">🍽️</div>
            </Button>
          </div>

          {/* Settings Button */}
          <Button
            onClick={() => navigate("/settings")}
            variant="outline"
            className="border-2 border-orange-300 bg-white/80 backdrop-blur-sm text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-bold py-3 text-base rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Settings className="mr-2 h-4 w-4 group-hover:rotate-90 transition-transform duration-500" />
            Settings
          </Button>
        </div>

        {/* Interactive Floating Elements */}
        <div className="absolute top-1/4 left-4 text-3xl animate-bounce delay-300 hover:scale-125 transition-transform cursor-pointer">🥨</div>
        <div className="absolute top-1/3 right-4 text-2xl animate-bounce delay-500 hover:scale-125 transition-transform cursor-pointer">🍩</div>
        <div className="absolute bottom-1/4 left-8 text-3xl animate-bounce delay-700 hover:scale-125 transition-transform cursor-pointer">🌯</div>
      </main>

      {/* Enhanced Footer */}
      <footer className="p-4 text-center text-gray-500 relative z-10">
        <div className="flex justify-center items-center space-x-2 mb-2">
          <div className="w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
          <p className="font-medium text-sm">Powered by AR Technology</p>
          <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        </div>
        <p className="text-xs opacity-75">Taste the future of dining ✨</p>
        <div className="flex justify-center space-x-4 mt-2">
          <div className="w-6 h-0.5 bg-gradient-to-r from-orange-300 to-transparent rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-to-r from-red-300 to-transparent rounded-full"></div>
          <div className="w-6 h-0.5 bg-gradient-to-r from-pink-300 to-transparent rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

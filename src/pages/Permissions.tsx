
import { useNavigate } from "react-router-dom";
import { Camera, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Permissions = () => {
  const navigate = useNavigate();

  const handleAllow = () => {
    // In a real app, you would request camera permissions here
    console.log("Camera permissions granted");
    navigate("/menu");
  };

  const handleDeny = () => {
    console.log("Camera permissions denied");
    navigate("/menu");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-slate-800/50 border-slate-700 text-white">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold">Camera Access Required</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center space-y-3">
            <p className="text-slate-300 leading-relaxed">
              To provide you with the best AR dining experience, we need access to your camera to display 3D food models in your environment.
            </p>
            
            <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>View realistic 3D food models</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>See actual portion sizes</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span>Make better dining decisions</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={handleAllow}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-3"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Allow Camera Access
            </Button>
            
            <Button
              onClick={handleDeny}
              variant="outline"
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              <XCircle className="mr-2 h-5 w-5" />
              Continue Without AR
            </Button>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-slate-400 hover:text-slate-300 underline"
            >
              Return to Home
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Permissions;

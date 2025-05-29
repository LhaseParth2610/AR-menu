
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Bell, Shield, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const navigate = useNavigate();

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
            <h1 className="text-xl font-semibold text-slate-900">Settings</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="p-4 md:p-6">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* AR Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>AR Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Enable AR Features</div>
                  <div className="text-sm text-slate-600">Allow 3D model viewing in AR</div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Auto-detect Surfaces</div>
                  <div className="text-sm text-slate-600">Automatically place models on detected surfaces</div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notifications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">New Menu Items</div>
                  <div className="text-sm text-slate-600">Get notified about new dishes</div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Special Offers</div>
                  <div className="text-sm text-slate-600">Receive notifications about deals</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Privacy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Analytics</div>
                  <div className="text-sm text-slate-600">Help improve the app experience</div>
                </div>
                <Switch defaultChecked />
              </div>
              <Button variant="outline" className="w-full">
                View Privacy Policy
              </Button>
            </CardContent>
          </Card>

          {/* Appearance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Palette className="h-5 w-5" />
                <span>Appearance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex flex-col">
                  <div className="w-8 h-8 bg-white border-2 border-slate-300 rounded mb-2"></div>
                  <span className="text-sm">Light</span>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col">
                  <div className="w-8 h-8 bg-slate-800 border-2 border-slate-600 rounded mb-2"></div>
                  <span className="text-sm">Dark</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button 
              onClick={() => navigate("/permissions")}
              variant="outline" 
              className="w-full"
            >
              Manage Permissions
            </Button>
            <Button 
              onClick={() => navigate("/menu")}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700"
            >
              Back to Menu
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;

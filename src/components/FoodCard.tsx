import { useState } from "react";
import { Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ARViewer from "@/components/ARViewer";

interface FoodItem {
  id: number;
  name: string;
  description: string;
  image: string;
  modelPath: string;
  calories: number;
  serves: number;
  type: string;
  size: string;
}

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-slate-200 overflow-hidden">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge 
              variant={item.type === "Veg" ? "default" : "destructive"}
              className={item.type === "Veg" ? "bg-green-500 hover:bg-green-600" : ""}
            >
              {item.type}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-3 w-3 text-amber-500 fill-current" />
            <span className="text-xs font-medium">4.5</span>
          </div>
        </div>
        
        <CardContent className="p-4 space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-slate-900 mb-1">{item.name}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{item.calories} cal</span>
            <span>Serves {item.serves}</span>
            <span>{item.size}</span>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:shadow-lg"
              >
                <Eye className="mr-2 h-4 w-4" />
                Expand to view in AR
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl p-0 overflow-hidden">
              <div className="flex flex-col h-[80vh]">
                {/* Top half: AR Viewer */}
                <div className="flex-1">
                  <ARViewer modelPath={item.modelPath} altText={item.name} height="100%" />
                </div>
                {/* Bottom half: Details */}
                <div className="p-4 bg-white border-t border-slate-200">
                  <h3 className="font-semibold text-xl text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-1"><span className="font-medium">Calories:</span> <span>{item.calories} cal</span></div>
                    <div className="flex items-center space-x-1"><span className="font-medium">Serves:</span> <span>{item.serves}</span></div>
                    <div className="flex items-center space-x-1"><span className="font-medium">Size:</span> <span>{item.size}</span></div>
                    <div className="flex items-center space-x-1"><span className="font-medium">Type:</span> <Badge variant={item.type === "Veg" ? "default" : "destructive"} className={item.type === "Veg" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"}>{item.type}</Badge></div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </>
  );
};

export default FoodCard;


import { Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  onViewAR: () => void;
}

const FoodCard = ({ item, onViewAR }: FoodCardProps) => {
  return (
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

        <Button
          onClick={onViewAR}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-medium transition-all duration-300 group-hover:shadow-lg"
        >
          <Eye className="mr-2 h-4 w-4" />
          Expand to view in AR
        </Button>
      </CardContent>
    </Card>
  );
};

export default FoodCard;

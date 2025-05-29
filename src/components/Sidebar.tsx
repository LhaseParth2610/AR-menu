
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ categories, selectedCategory, onCategorySelect, isOpen, onClose }: SidebarProps) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r border-slate-200 min-h-screen">
        <div className="p-4 border-b border-slate-200">
          <h2 className="font-semibold text-slate-900">Categories</h2>
        </div>
        
        <nav className="p-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => onCategorySelect(category)}
              className={cn(
                "w-full justify-start mb-1 text-left",
                selectedCategory === category
                  ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {category}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-40 transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 className="font-semibold text-slate-900">Categories</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="p-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => onCategorySelect(category)}
              className={cn(
                "w-full justify-start mb-1 text-left",
                selectedCategory === category
                  ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {category}
            </Button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

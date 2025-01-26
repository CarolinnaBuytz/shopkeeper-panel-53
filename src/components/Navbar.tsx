import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="bg-geek-dark/95 backdrop-blur-sm fixed w-full z-50 border-b border-geek-purple/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white animate-glow">GeekStore</span>
          </Link>
          
          <div className="flex-1 px-8">
            <input
              type="search"
              placeholder="Buscar produtos..."
              className="w-full max-w-md px-4 py-2 rounded-lg bg-white/10 border border-geek-purple/20 text-white placeholder-white/50 focus:outline-none focus:border-geek-pink/50"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5 text-white hover:text-geek-pink transition-colors" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/admin">
                <User className="w-5 h-5 text-white hover:text-geek-pink transition-colors" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
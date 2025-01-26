import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  Library,
  Palette,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Package, label: "Produtos", path: "/admin/products" },
  { icon: Library, label: "Coleções", path: "/admin/collections" },
  { icon: Palette, label: "Temas", path: "/admin/themes" },
  {
    icon: CreditCard,
    label: "Pagamentos",
    path: "/admin/payment-settings",
  },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <aside className="w-64 bg-geek-dark border-r border-geek-purple/20">
      <div className="h-full px-3 py-4">
        <div className="mb-8 px-3">
          <h2 className="text-2xl font-bold text-geek-pink animate-glow">
            GeekStore
          </h2>
          <p className="text-sm text-white/60">Painel Administrativo</p>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "bg-geek-purple/20 text-geek-pink"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                )}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={logout}
            className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sair
          </button>
        </nav>
      </div>
    </aside>
  );
};
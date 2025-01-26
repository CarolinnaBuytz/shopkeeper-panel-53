import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Shirt,
  Gamepad2,
  ShoppingCart,
  Users,
  Settings,
  CreditCard,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  {
    label: "PRODUTOS",
    type: "header",
  },
  { icon: Package, label: "Todos os Produtos", path: "/admin/products" },
  { icon: ShoppingBag, label: "Colecionáveis", path: "/admin/collectibles" },
  { icon: Shirt, label: "Vestuário", path: "/admin/clothing" },
  { icon: Gamepad2, label: "Games", path: "/admin/games" },
  {
    label: "VENDAS",
    type: "header",
  },
  { icon: ShoppingCart, label: "Pedidos", path: "/admin/orders" },
  { icon: Users, label: "Clientes", path: "/admin/customers" },
  {
    label: "CONFIGURAÇÕES",
    type: "header",
  },
  { icon: Settings, label: "Geral", path: "/admin/settings" },
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
          {menuItems.map((item, index) => {
            if (item.type === "header") {
              return (
                <div
                  key={index}
                  className="text-xs font-semibold text-white/40 px-3 pt-4 pb-2"
                >
                  {item.label}
                </div>
              );
            }

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
            className="w-full flex items-center px-3 py-2 text-sm font-medium rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors mt-4"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sair
          </button>
        </nav>
      </div>
    </aside>
  );
};
import { LayoutDashboard, Package, Collection, Palette, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Package, label: "Produtos", path: "/admin/products" },
  { icon: Collection, label: "Coleções", path: "/admin/collections" },
  { icon: Palette, label: "Temas", path: "/admin/themes" },
  { icon: Settings, label: "Configurações", path: "/admin/settings" },
];

export const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-geek-dark border-r border-geek-purple/20">
      <div className="p-6">
        <Link to="/" className="text-xl font-bold text-white">
          GeekStore <span className="text-geek-pink">Admin</span>
        </Link>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-6 py-3 text-sm ${
                isActive
                  ? "text-geek-pink bg-geek-pink/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
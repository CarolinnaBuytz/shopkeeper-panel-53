import { LayoutDashboard, Package, FolderKanban, Palette, Settings, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Package, label: "Produtos", path: "/admin/products" },
  { icon: FolderKanban, label: "Coleções", path: "/admin/collections" },
  { icon: Palette, label: "Temas", path: "/admin/themes" },
  { icon: Settings, label: "Configurações", path: "/admin/settings" },
];

export const AdminSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    logout();
    navigate("/login");
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
  };

  return (
    <aside className="w-64 min-h-screen bg-geek-dark border-r border-geek-purple/20">
      <div className="p-6">
        <Link to="/" className="text-xl font-bold text-white">
          GeekStore <span className="text-geek-pink">Admin</span>
        </Link>
      </div>
      <nav className="mt-6 flex flex-col h-[calc(100vh-180px)] justify-between">
        <div>
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
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-6 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 mt-auto"
        >
          <LogOut className="w-5 h-5" />
          <span>Sair</span>
        </button>
      </nav>
    </aside>
  );
};
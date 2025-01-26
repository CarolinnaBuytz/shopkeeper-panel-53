import { AdminSidebar } from "@/components/AdminSidebar";
import { Routes, Route } from "react-router-dom";
import Products from "./admin/Products";
import Collections from "./admin/Collections";
import Themes from "./admin/Themes";
import PaymentSettings from "./admin/PaymentSettings";
import Collectibles from "./admin/Collectibles";
import Clothing from "./admin/Clothing";
import Games from "./admin/Games";
import Orders from "./admin/Orders";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-geek-dark/95">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <Routes>
          <Route
            index
            element={
              <div>
                <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["Produtos", "Vendas", "Usuários"].map((item) => (
                    <div
                      key={item}
                      className="p-6 rounded-lg bg-white/5 border border-geek-purple/20"
                    >
                      <h3 className="text-lg font-medium text-white mb-2">
                        {item}
                      </h3>
                      <p className="text-3xl font-bold text-geek-pink">0</p>
                    </div>
                  ))}
                </div>
              </div>
            }
          />
          <Route path="products" element={<Products />} />
          <Route path="collections" element={<Collections />} />
          <Route path="themes" element={<Themes />} />
          <Route path="payment-settings" element={<PaymentSettings />} />
          <Route path="collectibles" element={<Collectibles />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="games" element={<Games />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </main>
    </div>
  );
};

export default Admin;
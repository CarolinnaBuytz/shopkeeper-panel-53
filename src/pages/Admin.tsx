import { AdminSidebar } from "@/components/AdminSidebar";
import { Routes, Route } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  DollarSign,
  ShoppingCart,
  Users,
  CreditCard,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Products from "./admin/Products";
import Collections from "./admin/Collections";
import Themes from "./admin/Themes";
import PaymentSettings from "./admin/PaymentSettings";
import Collectibles from "./admin/Collectibles";
import Clothing from "./admin/Clothing";
import Games from "./admin/Games";
import Orders from "./admin/Orders";

const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
}: {
  title: string;
  value: string;
  icon: any;
  change: string;
}) => (
  <Card className="p-6 bg-geek-dark border border-geek-purple/20">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-white/60">{title}</p>
        <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
      </div>
      <div className="p-2 bg-geek-purple/20 rounded-lg">
        <Icon className="w-6 h-6 text-geek-pink" />
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      {parseFloat(change) > 0 ? (
        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
      ) : (
        <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
      )}
      <span
        className={parseFloat(change) > 0 ? "text-green-500" : "text-red-500"}
      >
        {change}% vs. mês anterior
      </span>
    </div>
  </Card>
);

const RecentOrder = ({
  customer,
  date,
  amount,
  status,
}: {
  customer: string;
  date: string;
  amount: string;
  status: "pending" | "completed" | "cancelled";
}) => (
  <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg mb-2">
    <div>
      <p className="text-white font-medium">{customer}</p>
      <p className="text-sm text-white/60">{date}</p>
    </div>
    <div className="text-right">
      <p className="text-geek-pink font-medium">R$ {amount}</p>
      <p
        className={`text-sm ${
          status === "completed"
            ? "text-green-500"
            : status === "cancelled"
            ? "text-red-500"
            : "text-yellow-500"
        }`}
      >
        {status}
      </p>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-bold text-white">Dashboard</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Receita Total"
        value="R$ 15.249,00"
        icon={DollarSign}
        change="12.5"
      />
      <StatCard title="Pedidos" value="125" icon={ShoppingCart} change="8.2" />
      <StatCard title="Clientes" value="1,250" icon={Users} change="15.3" />
      <StatCard
        title="Ticket Médio"
        value="R$ 122,00"
        icon={CreditCard}
        change="-2.1"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-geek-dark border border-geek-purple/20">
        <h2 className="text-xl font-bold text-white mb-4">Últimos Pedidos</h2>
        <div className="space-y-2">
          <RecentOrder
            customer="João Silva"
            date="19/02/2024"
            amount="299.99"
            status="pending"
          />
          <RecentOrder
            customer="Maria Santos"
            date="18/02/2024"
            amount="159.99"
            status="completed"
          />
          <RecentOrder
            customer="Pedro Oliveira"
            date="17/02/2024"
            amount="89.99"
            status="cancelled"
          />
        </div>
        <Link
          to="/admin/orders"
          className="text-geek-pink text-sm mt-4 hover:text-geek-pink/80 inline-block"
        >
          Ver todos os pedidos →
        </Link>
      </Card>

      <Card className="p-6 bg-geek-dark border border-geek-purple/20">
        <h2 className="text-xl font-bold text-white mb-4">
          Produtos com Baixo Estoque
        </h2>
        <div className="text-white/60 text-center py-8">
          Nenhum produto com estoque baixo no momento.
        </div>
      </Card>
    </div>
  </div>
);

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-geek-dark/95">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Routes>
          <Route index element={<Dashboard />} />
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
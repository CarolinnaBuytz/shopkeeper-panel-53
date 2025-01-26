import { AdminSidebar } from "@/components/AdminSidebar";

const Admin = () => {
  return (
    <div className="flex min-h-screen bg-geek-dark/95">
      <AdminSidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Produtos", "Vendas", "Usuários"].map((item) => (
            <div
              key={item}
              className="p-6 rounded-lg bg-white/5 border border-geek-purple/20"
            >
              <h3 className="text-lg font-medium text-white mb-2">{item}</h3>
              <p className="text-3xl font-bold text-geek-pink">0</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Admin;
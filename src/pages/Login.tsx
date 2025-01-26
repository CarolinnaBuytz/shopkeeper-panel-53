import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/admin");
      toast({
        title: "Login realizado com sucesso!",
        description: "Bem-vindo ao painel administrativo.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro ao fazer login",
        description: "Credenciais inválidas. Tente novamente.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-geek-dark">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/5 rounded-lg border border-geek-purple/20">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            GeekStore <span className="text-geek-pink">Admin</span>
          </h1>
          <p className="text-white/70 mt-2">Faça login para acessar o painel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 border-geek-purple/20 text-white placeholder:text-white/50"
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/10 border-geek-purple/20 text-white placeholder:text-white/50"
            />
          </div>
          <Button type="submit" className="w-full bg-geek-pink hover:bg-geek-pink/90">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
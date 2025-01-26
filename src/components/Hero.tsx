import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-geek-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/1f421ee5-13a9-4365-9cfb-5e8e68bffa2a.png')] bg-cover bg-center opacity-10" />
      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-glow">
          Bem-vindo à GeekStore
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Entre em uma dimensão paralela de produtos geek incríveis. De
          colecionáveis raros a itens exclusivos do universo nerd.
        </p>
        <Button
          size="lg"
          className="bg-geek-pink hover:bg-geek-pink/90 text-white"
        >
          Explorar Universo
        </Button>
      </div>
    </div>
  );
};
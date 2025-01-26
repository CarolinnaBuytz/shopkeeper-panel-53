import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Collectible {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const Collectibles = () => {
  const [collectibles, setCollectibles] = useState<Collectible[]>([]);
  const { toast } = useToast();
  const [newCollectible, setNewCollectible] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const handleAddCollectible = (e: React.FormEvent) => {
    e.preventDefault();
    const collectible: Collectible = {
      id: Date.now().toString(),
      name: newCollectible.name,
      description: newCollectible.description,
      price: Number(newCollectible.price),
      category: newCollectible.category,
      image: newCollectible.image,
    };

    setCollectibles([...collectibles, collectible]);
    setNewCollectible({ name: "", description: "", price: "", category: "", image: "" });
    toast({
      title: "Colecionável adicionado",
      description: "O item foi adicionado com sucesso!",
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Colecionáveis</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddCollectible} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Item</Label>
              <Input
                id="name"
                value={newCollectible.name}
                onChange={(e) =>
                  setNewCollectible({ ...newCollectible, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={newCollectible.description}
                onChange={(e) =>
                  setNewCollectible({
                    ...newCollectible,
                    description: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                value={newCollectible.price}
                onChange={(e) =>
                  setNewCollectible({ ...newCollectible, price: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Input
                id="category"
                value={newCollectible.category}
                onChange={(e) =>
                  setNewCollectible({ ...newCollectible, category: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="image">URL da Imagem</Label>
              <Input
                id="image"
                type="url"
                value={newCollectible.image}
                onChange={(e) =>
                  setNewCollectible({ ...newCollectible, image: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Adicionar Colecionável
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collectibles.map((collectible) => (
              <Card key={collectible.id}>
                <CardContent className="p-4">
                  <img
                    src={collectible.image}
                    alt={collectible.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">{collectible.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{collectible.description}</p>
                  <p className="text-lg font-bold text-geek-pink">
                    R$ {collectible.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-400">Categoria: {collectible.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Collectibles;
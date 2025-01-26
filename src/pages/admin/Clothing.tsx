import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ClothingItem {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  color: string;
  image: string;
}

const Clothing = () => {
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);
  const { toast } = useToast();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: "",
    size: "",
    color: "",
    image: "",
  });

  const sizes = ["PP", "P", "M", "G", "GG", "XG"];

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const item: ClothingItem = {
      id: Date.now().toString(),
      name: newItem.name,
      description: newItem.description,
      price: Number(newItem.price),
      size: newItem.size,
      color: newItem.color,
      image: newItem.image,
    };

    setClothingItems([...clothingItems, item]);
    setNewItem({ name: "", description: "", price: "", size: "", color: "", image: "" });
    toast({
      title: "Vestuário adicionado",
      description: "O item foi adicionado com sucesso!",
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Vestuário</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddItem} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Item</Label>
              <Input
                id="name"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={newItem.description}
                onChange={(e) =>
                  setNewItem({ ...newItem, description: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                value={newItem.price}
                onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="size">Tamanho</Label>
              <Select
                value={newItem.size}
                onValueChange={(value) => setNewItem({ ...newItem, size: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um tamanho" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="color">Cor</Label>
              <Input
                id="color"
                type="text"
                value={newItem.color}
                onChange={(e) => setNewItem({ ...newItem, color: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="image">URL da Imagem</Label>
              <Input
                id="image"
                type="url"
                value={newItem.image}
                onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Adicionar Item
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clothingItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                  <p className="text-lg font-bold text-geek-pink">
                    R$ {item.price.toFixed(2)}
                  </p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Tamanho: {item.size}</span>
                    <span>Cor: {item.color}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clothing;
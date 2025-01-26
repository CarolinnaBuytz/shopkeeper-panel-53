import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
}

const Collections = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const { toast } = useToast();
  const [newCollection, setNewCollection] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleAddCollection = (e: React.FormEvent) => {
    e.preventDefault();
    const collection: Collection = {
      id: Date.now().toString(),
      name: newCollection.name,
      description: newCollection.description,
      image: newCollection.image,
    };

    setCollections([...collections, collection]);
    setNewCollection({ name: "", description: "", image: "" });
    toast({
      title: "Coleção adicionada",
      description: "A coleção foi adicionada com sucesso!",
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Coleções</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddCollection} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome da Coleção</Label>
              <Input
                id="name"
                value={newCollection.name}
                onChange={(e) =>
                  setNewCollection({ ...newCollection, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={newCollection.description}
                onChange={(e) =>
                  setNewCollection({
                    ...newCollection,
                    description: e.target.value,
                  })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="image">URL da Imagem</Label>
              <Input
                id="image"
                type="url"
                value={newCollection.image}
                onChange={(e) =>
                  setNewCollection({ ...newCollection, image: e.target.value })
                }
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <PlusCircle className="mr-2 h-4 w-4" /> Adicionar Coleção
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {collections.map((collection) => (
              <Card key={collection.id}>
                <CardContent className="p-4">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">{collection.name}</h3>
                  <p className="text-sm text-gray-500">{collection.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Collections;
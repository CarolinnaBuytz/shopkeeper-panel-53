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

interface Game {
  id: string;
  name: string;
  description: string;
  price: number;
  platform: string;
  genre: string;
  image: string;
}

const Games = () => {
  const [games, setGames] = useState<Game[]>([]);
  const { toast } = useToast();
  const [newGame, setNewGame] = useState({
    name: "",
    description: "",
    price: "",
    platform: "",
    genre: "",
    image: "",
  });

  const platforms = ["PS5", "PS4", "Xbox Series X", "Xbox One", "Nintendo Switch", "PC"];
  const genres = ["Ação", "Aventura", "RPG", "Estratégia", "Esporte", "Corrida"];

  const handleAddGame = (e: React.FormEvent) => {
    e.preventDefault();
    const game: Game = {
      id: Date.now().toString(),
      name: newGame.name,
      description: newGame.description,
      price: Number(newGame.price),
      platform: newGame.platform,
      genre: newGame.genre,
      image: newGame.image,
    };

    setGames([...games, game]);
    setNewGame({ name: "", description: "", price: "", platform: "", genre: "", image: "" });
    toast({
      title: "Jogo adicionado",
      description: "O jogo foi adicionado com sucesso!",
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Games</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddGame} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Jogo</Label>
              <Input
                id="name"
                value={newGame.name}
                onChange={(e) => setNewGame({ ...newGame, name: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={newGame.description}
                onChange={(e) =>
                  setNewGame({ ...newGame, description: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                type="number"
                value={newGame.price}
                onChange={(e) => setNewGame({ ...newGame, price: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="platform">Plataforma</Label>
              <Select
                value={newGame.platform}
                onValueChange={(value) => setNewGame({ ...newGame, platform: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma plataforma" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((platform) => (
                    <SelectItem key={platform} value={platform}>
                      {platform}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="genre">Gênero</Label>
              <Select
                value={newGame.genre}
                onValueChange={(value) => setNewGame({ ...newGame, genre: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um gênero" />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="image">URL da Imagem</Label>
              <Input
                id="image"
                type="url"
                value={newGame.image}
                onChange={(e) => setNewGame({ ...newGame, image: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Adicionar Jogo
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {games.map((game) => (
              <Card key={game.id}>
                <CardContent className="p-4">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="font-bold text-lg">{game.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{game.description}</p>
                  <p className="text-lg font-bold text-geek-pink">
                    R$ {game.price.toFixed(2)}
                  </p>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Plataforma: {game.platform}</span>
                    <span>Gênero: {game.genre}</span>
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

export default Games;
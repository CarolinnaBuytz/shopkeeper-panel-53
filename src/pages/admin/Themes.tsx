import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface Theme {
  id: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}

const Themes = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const { toast } = useToast();
  const [newTheme, setNewTheme] = useState({
    name: "",
    primaryColor: "#FF1493",
    secondaryColor: "#9B87F5",
    backgroundColor: "#1A1F2C",
  });

  const handleAddTheme = (e: React.FormEvent) => {
    e.preventDefault();
    const theme: Theme = {
      id: Date.now().toString(),
      ...newTheme,
    };

    setThemes([...themes, theme]);
    setNewTheme({
      name: "",
      primaryColor: "#FF1493",
      secondaryColor: "#9B87F5",
      backgroundColor: "#1A1F2C",
    });
    toast({
      title: "Tema adicionado",
      description: "O tema foi adicionado com sucesso!",
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Temas</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddTheme} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome do Tema</Label>
              <Input
                id="name"
                value={newTheme.name}
                onChange={(e) =>
                  setNewTheme({ ...newTheme, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="primaryColor">Cor Primária</Label>
              <div className="flex gap-2">
                <Input
                  id="primaryColor"
                  type="color"
                  value={newTheme.primaryColor}
                  onChange={(e) =>
                    setNewTheme({ ...newTheme, primaryColor: e.target.value })
                  }
                  className="w-20"
                  required
                />
                <Input
                  value={newTheme.primaryColor}
                  onChange={(e) =>
                    setNewTheme({ ...newTheme, primaryColor: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="secondaryColor">Cor Secundária</Label>
              <div className="flex gap-2">
                <Input
                  id="secondaryColor"
                  type="color"
                  value={newTheme.secondaryColor}
                  onChange={(e) =>
                    setNewTheme({ ...newTheme, secondaryColor: e.target.value })
                  }
                  className="w-20"
                  required
                />
                <Input
                  value={newTheme.secondaryColor}
                  onChange={(e) =>
                    setNewTheme({ ...newTheme, secondaryColor: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="backgroundColor">Cor de Fundo</Label>
              <div className="flex gap-2">
                <Input
                  id="backgroundColor"
                  type="color"
                  value={newTheme.backgroundColor}
                  onChange={(e) =>
                    setNewTheme({ ...newTheme, backgroundColor: e.target.value })
                  }
                  className="w-20"
                  required
                />
                <Input
                  value={newTheme.backgroundColor}
                  onChange={(e) =>
                    setNewTheme({ ...newTheme, backgroundColor: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Adicionar Tema
            </Button>
          </form>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((theme) => (
              <Card
                key={theme.id}
                style={{ backgroundColor: theme.backgroundColor }}
                className="p-4"
              >
                <h3
                  className="font-bold text-lg mb-4"
                  style={{ color: theme.primaryColor }}
                >
                  {theme.name}
                </h3>
                <div className="flex gap-2">
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: theme.primaryColor }}
                  />
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: theme.secondaryColor }}
                  />
                  <div
                    className="w-8 h-8 rounded"
                    style={{ backgroundColor: theme.backgroundColor }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Themes;
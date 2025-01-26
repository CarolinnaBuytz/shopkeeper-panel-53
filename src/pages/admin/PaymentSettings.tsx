import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PaymentSettings = () => {
  const { toast } = useToast();
  const [selectedGateway, setSelectedGateway] = useState("");
  const [credentials, setCredentials] = useState({
    pagseguro: {
      email: "",
      token: "",
      sandbox: false,
    },
    mercadopago: {
      accessToken: "",
      publicKey: "",
      sandbox: false,
    },
  });

  const handleSaveCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para salvar as credenciais
    toast({
      title: "Configurações salvas",
      description: "As configurações de pagamento foram salvas com sucesso!",
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Configurações de Pagamento</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveCredentials} className="space-y-6">
            <div>
              <Label>Gateway de Pagamento</Label>
              <Select
                value={selectedGateway}
                onValueChange={setSelectedGateway}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um gateway" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pagseguro">PagSeguro</SelectItem>
                  <SelectItem value="mercadopago">Mercado Pago</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedGateway === "pagseguro" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="pagseguro-email">Email PagSeguro</Label>
                  <Input
                    id="pagseguro-email"
                    type="email"
                    value={credentials.pagseguro.email}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        pagseguro: {
                          ...credentials.pagseguro,
                          email: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="pagseguro-token">Token PagSeguro</Label>
                  <Input
                    id="pagseguro-token"
                    type="password"
                    value={credentials.pagseguro.token}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        pagseguro: {
                          ...credentials.pagseguro,
                          token: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            )}

            {selectedGateway === "mercadopago" && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="mercadopago-access-token">
                    Access Token Mercado Pago
                  </Label>
                  <Input
                    id="mercadopago-access-token"
                    type="password"
                    value={credentials.mercadopago.accessToken}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        mercadopago: {
                          ...credentials.mercadopago,
                          accessToken: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="mercadopago-public-key">
                    Public Key Mercado Pago
                  </Label>
                  <Input
                    id="mercadopago-public-key"
                    type="password"
                    value={credentials.mercadopago.publicKey}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        mercadopago: {
                          ...credentials.mercadopago,
                          publicKey: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
            )}

            {selectedGateway && (
              <Button type="submit" className="w-full">
                Salvar Configurações
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSettings;
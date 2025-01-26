import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  customerName: string;
  date: string;
  total: number;
  status: string;
  items: string[];
}

const Orders = () => {
  const [orders] = useState<Order[]>([
    {
      id: "1",
      customerName: "João Silva",
      date: "2024-03-20",
      total: 299.99,
      status: "Pendente",
      items: ["Camiseta Geek", "Action Figure"],
    },
    {
      id: "2",
      customerName: "Maria Santos",
      date: "2024-03-19",
      total: 159.90,
      status: "Enviado",
      items: ["Jogo PS5", "Chaveiro"],
    },
  ]);

  const { toast } = useToast();

  const handleStatusChange = (orderId: string, newStatus: string) => {
    toast({
      title: "Status atualizado",
      description: `Pedido ${orderId} atualizado para ${newStatus}`,
    });
  };

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Pedidos</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customerName}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                  <TableCell>{order.items.join(", ")}</TableCell>
                  <TableCell>
                    <Select
                      value={order.status}
                      onValueChange={(value) => handleStatusChange(order.id, value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pendente">Pendente</SelectItem>
                        <SelectItem value="Confirmado">Confirmado</SelectItem>
                        <SelectItem value="Enviado">Enviado</SelectItem>
                        <SelectItem value="Entregue">Entregue</SelectItem>
                        <SelectItem value="Cancelado">Cancelado</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Orders;
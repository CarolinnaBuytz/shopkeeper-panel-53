import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const customers = [
  {
    id: 1,
    name: "João Silva",
    email: "joao@email.com",
    orders: 5,
    totalSpent: "R$ 1.299,99",
    lastOrder: "19/02/2024",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria@email.com",
    orders: 3,
    totalSpent: "R$ 759,99",
    lastOrder: "18/02/2024",
  },
];

const Customers = () => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Clientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Pedidos</TableHead>
                <TableHead>Total Gasto</TableHead>
                <TableHead>Último Pedido</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{customer.totalSpent}</TableCell>
                  <TableCell>{customer.lastOrder}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
export interface Pedido {
  id: number;
  cpf_id: string;
  created_at: string;
  valor: number;
  entrega: number;
  pagamento: string;
}

export interface PedidoProps {
  cpf_id: string;
  valor: number;
  entrega: number;
  id: number;
  pagamento: string;
}

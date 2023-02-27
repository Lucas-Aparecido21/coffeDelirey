import xhr from "./xhr";
import { AxiosPromise } from "axios";

import {
  ClienteProps,
  Cliente,
  Pedido,
  PedidoProps,
  ItensProps,
  AtuCliente,
} from "../@types";
import { CartItem2 } from "../Context/CoffeeContext";

/* CLIENTES */
const getClient = (): AxiosPromise<Cliente[]> => xhr.get(`clientes/`);

const getClientByCpf = (cpf: string): AxiosPromise<ClienteProps> =>
  xhr.get(`clientes/${cpf}`);

const postCreateCliente = (params: ClienteProps): AxiosPromise<ClienteProps> =>
  xhr.post(`clientes/`, params);

const postAtualizaCliente = (
  cpf: string,
  params: AtuCliente
): AxiosPromise<AtuCliente> => xhr.put(`clientes/${cpf}`, params);

const deleteClienteByCpf = (cpf: string) => xhr.delete(`clientes/${cpf}`);

/* CLIENTES */

/* PEDIDOS */
const getPedido = (): AxiosPromise<Pedido[]> => xhr.get(`pedidos/`);

const getPedidoByID = (id: number): AxiosPromise<PedidoProps> =>
  xhr.get(`pedidos/${id}`);

const postCreatePedido = (
  params: PedidoProps,
  cpf_id: string
): AxiosPromise<PedidoProps> => xhr.post(`pedidos/${cpf_id}`, params);

const deletePedidoByID = (id: number) => xhr.delete(`pedidos/${id}`);

/* PEDIDOS */

/* ITENS DO PEDIDO*/
const postCreateItens = (
  itens: { itens: CartItem2[] },
  id_pedido: number
): AxiosPromise<ItensProps> => xhr.post(`itens/${id_pedido}`, itens);

const getItensByIdPedido = (id_pedido: string): AxiosPromise<ItensProps> =>
  xhr.get(`itens/${id_pedido}`);
/* ITENS DO PEDIDO*/

export {
  getClientByCpf,
  getClient,
  postCreateCliente,
  deleteClienteByCpf,
  postAtualizaCliente,
  getPedido,
  getPedidoByID,
  deletePedidoByID,
  postCreatePedido,
  postCreateItens,
  getItensByIdPedido,
};

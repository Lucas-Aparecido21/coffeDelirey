import xhr from "./xhr";
import { AxiosPromise } from "axios";

import { ClienteProps, Cliente, Pedido, PedidoProps } from "../@types";

/* CLIENTES */
const getClient = (): AxiosPromise<Cliente[]> => xhr.get(`clientes/`);

const getClientByCpf = (cpf: string): AxiosPromise<ClienteProps> =>
  xhr.get(`clientes/${cpf}`);

const postCreateCliente = (params: ClienteProps): AxiosPromise<ClienteProps> =>
  xhr.post(`clientes/`, params);

/* CLIENTES */

/* PEDIDOS */
const getPedido = (): AxiosPromise<Pedido[]> => xhr.get(`pedidos/`);

const getPedidoByID = (id: number): AxiosPromise<PedidoProps> =>
  xhr.get(`pedidos/${id}`);

const postCreatePedido = (
  params: PedidoProps,
  cpf: string
): AxiosPromise<PedidoProps> => xhr.post(`pedidos/${cpf}`, params);
/* PEDIDOS */

export {
  getClientByCpf,
  getClient,
  postCreateCliente,
  getPedido,
  getPedidoByID,
  postCreatePedido,
};

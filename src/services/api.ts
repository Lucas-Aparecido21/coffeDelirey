import xhr from "./xhr";
import { AxiosPromise } from "axios";

import { ClienteProps, Cliente, Pedido } from "../@types";

/* CLIENTES */
const getClient = (): AxiosPromise<Cliente[]> => xhr.get(`clientes/`);

const getClientByCpf = (cpf: string): AxiosPromise<ClienteProps> =>
  xhr.get(`clientes/${cpf}`);

const postCreateCliente = (params: ClienteProps): AxiosPromise<ClienteProps> =>
  xhr.post(`clientes/`, params);

/* CLIENTES */

/* PEDIDOS */
const getPedido = (): AxiosPromise<Pedido[]> => xhr.get(`pedidos/`);

/* PEDIDOS */

export { getClientByCpf, getClient, postCreateCliente, getPedido };

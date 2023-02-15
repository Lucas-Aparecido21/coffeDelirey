import xhr from "./xhr";
import { AxiosPromise } from "axios";

import { ClienteProps } from "../@types";

const getClient = (): AxiosPromise<ClienteProps> => xhr.get(`clientes/`);

const getClientByCpf = (cpf: string): AxiosPromise<ClienteProps> =>
  xhr.get(`clientes/${cpf}`);

const postCreateCliente = (): AxiosPromise<ClienteProps> =>
  xhr.post(`clientes/`);

export { getClientByCpf, getClient, postCreateCliente };

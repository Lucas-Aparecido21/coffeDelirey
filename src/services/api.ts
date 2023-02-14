import xhr from "./xhr";
import { AxiosPromise } from "axios";

import { ClienteProps } from "../@types";

const getClientByCpf = (cpf: string): AxiosPromise<ClienteProps> =>
  xhr.get(`clientes/${cpf}`);

export { getClientByCpf };

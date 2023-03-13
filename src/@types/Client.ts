export interface ClienteProps {
  cpf: string;
  cep: string;
  cidade: string;
  telefone: string;
  complemento?: string | undefined;
  nome: string;
  rua: string;
  uf: string;
  bairro: string;
  numero: string;
}

export interface ClientePropsViaCep {
  cpf: string;
  cep: string;
  localidade: string;
  telefone: string;
  complemento?: string | undefined;
  nome: string;
  logradouro: string;
  uf: string;
  bairro: string;
  numero: string;
}

export interface Cliente {
  cpf: string;
  nome: string;
  telefone: string;
  cep: string;
}

export interface AtuCliente {
  cep: string;
  cidade: string;
  telefone: string;
  complemento?: string | undefined;
  nome: string;
  rua: string;
  uf: string;
  bairro: string;
  numero: string;
}

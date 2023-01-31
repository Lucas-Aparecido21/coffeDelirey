import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("clientes")
class Clientes {
  @PrimaryGeneratedColumn("identity")
  cpf: string;

  @Column()
  name: string;

  @Column()
  telefone: number;

  @Column()
  cep: string;

  @Column()
  rua: string;

  @Column()
  cidade: string;

  @Column()
  bairro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

export default Clientes;

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("pedidos")
class Pedidos {
  @PrimaryGeneratedColumn("identity")
  id: number;

  @Column()
  valorTotal: number;

  @Column()
  cpfCliente: string;

  @Column("decimal")
  entrega: number;

  @CreateDateColumn()
  created_at: Date;
}

export default Pedidos;

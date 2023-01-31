import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("itens")
class Itens {
  @PrimaryGeneratedColumn("identity")
  id: number;

  @Column()
  idPedido: number;

  @Column("decimal")
  preco: number;

  @Column("int")
  quantidadeVendida: number;
}

export default Itens;

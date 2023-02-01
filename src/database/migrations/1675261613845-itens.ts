import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class itens1675167752049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "itens",
        columns: [
          {
            name: "id",
            type: "number",
            isPrimary: true,
          },

          {
            name: "idPedido",
            type: "number",
          },
          {
            name: "preco",
            type: "number",
          },

          {
            name: "quantidadeVendida",
            type: "number",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedidos");
  }
}

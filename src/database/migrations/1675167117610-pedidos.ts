import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class pedidos1675167117610 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedidos",
        columns: [
          {
            name: "id",
            type: "number",
            isPrimary: true,
          },

          {
            name: "valorTotal",
            type: "number",
          },
          {
            name: "cpfCliente",
            type: "string",
          },

          {
            name: "entrega",
            type: "number",
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedidos");
  }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class clientes1675108481868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "clientes",
              columns: [
                {
                  name: "CPF",
                  type: "string",
                  isPrimary: true,
                },
      
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "telefone",
                  type: "number",
                  isUnique: true,
                },
      
                {
                  name: "cep",
                  type: "number",
                },


                {
                    name: "rua",
                    type: "varchar",
                },
                 {
                    name: "cidade",
                    type: "varchar",
                },
                 {
                    name: "bairro",
                    type: "varchar",
                },
                {
                    name: "numero",
                    type: "varchar",
                },
                {
                    name: "complemento",
                    type: "varchar",
                    isNullable:true,
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
            })
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes");
    }

}

import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreateUserAddressRelation1645570803177
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        name: 'user_address_FK',
        columnNames: ['address_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'adresses',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('users');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('address_id') !== -1
    );
    await queryRunner.dropForeignKey('users', foreignKey);
  }
}

import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class CreatePostUserRelation1645728654426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'posts',
      new TableForeignKey({
        name: 'posts_user_FK',
        columnNames: ['owner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('posts');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('owner_id') !== -1
    );
    await queryRunner.dropForeignKey('posts', foreignKey);
  }
}

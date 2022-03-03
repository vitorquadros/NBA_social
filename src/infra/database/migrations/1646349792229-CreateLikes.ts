import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateLikes1646349792229 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'likes',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'user_id',
            type: 'uuid'
          },
          {
            name: 'post_id',
            type: 'uuid'
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'likes',
      new TableForeignKey({
        name: 'likes_user_FK',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'likes',
      new TableForeignKey({
        name: 'likes_post_FK',
        columnNames: ['post_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'posts',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('likes');
    const userForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1
    );

    const postForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('post_id') !== -1
    );

    await queryRunner.dropForeignKey('likes', userForeignKey);
    await queryRunner.dropForeignKey('likes', postForeignKey);

    await queryRunner.dropTable('likes');
  }
}

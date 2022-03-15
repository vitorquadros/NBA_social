import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey
} from 'typeorm';

export class CreateComments1647378822455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'comments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'text',
            type: 'varchar'
          },
          {
            name: 'owner_id',
            type: 'uuid'
          },
          {
            name: 'post_id',
            type: 'uuid'
          },
          {
            name: 'parent_comment_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );

    await queryRunner.createForeignKey(
      'comments',
      new TableForeignKey({
        name: 'comments_user_FK',
        columnNames: ['owner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'comments',
      new TableForeignKey({
        name: 'comments_post_FK',
        columnNames: ['post_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'posts',
        onDelete: 'CASCADE'
      })
    );

    await queryRunner.createForeignKey(
      'comments',
      new TableForeignKey({
        name: 'comments_parent_FK',
        columnNames: ['parent_comment_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'comments',
        onDelete: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('comments');
    const ownerForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('owner_id') !== -1
    );

    const postForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('post_id') !== -1
    );

    const parentCommentForeignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('parent_comment_id') !== -1
    );

    await queryRunner.dropForeignKey('comments', ownerForeignKey);
    await queryRunner.dropForeignKey('comments', postForeignKey);
    await queryRunner.dropForeignKey('comments', parentCommentForeignKey);

    await queryRunner.dropTable('comments');
  }
}

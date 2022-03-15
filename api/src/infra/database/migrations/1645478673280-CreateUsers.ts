/* eslint-disable quotes */
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1645478673280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'username',
            type: 'varchar',
            isUnique: true,
            isNullable: true
          },
          {
            name: 'display_name',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'birthday',
            type: 'timestamp',
            isNullable: true
          },
          {
            name: 'role',
            type: 'varchar',
            default: "'user'"
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'nba_team',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'address_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'avatar',
            type: 'varchar',
            default: "'profile_default.jpg'"
          },
          {
            name: 'cover',
            type: 'varchar',
            default: "'cover_default.jpg'"
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

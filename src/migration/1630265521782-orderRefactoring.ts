import {MigrationInterface, QueryRunner} from "typeorm";

export class orderRefactoring1630265521782 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COlUMN "total_price" TO "total"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" RENAME COlUMN "total" TO "total_price"`);
    }

}

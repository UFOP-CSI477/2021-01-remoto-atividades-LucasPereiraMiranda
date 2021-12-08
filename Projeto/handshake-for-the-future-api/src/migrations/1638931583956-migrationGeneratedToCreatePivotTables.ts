import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationGeneratedToCreatePivotTables1638931583956 implements MigrationInterface {
    name = 'migrationGeneratedToCreatePivotTables1638931583956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories_startups_startups" ("categoriesId" integer NOT NULL, "startupsId" integer NOT NULL, CONSTRAINT "PK_3880c2423e231f211ee71f74d0d" PRIMARY KEY ("categoriesId", "startupsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_473acac432de672bd6a1876fbc" ON "categories_startups_startups" ("categoriesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_40ff89332332cdfaba41ba7281" ON "categories_startups_startups" ("startupsId") `);
        await queryRunner.query(`CREATE TABLE "categories_users_users" ("categoriesId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_86cd344863799578236e8557b28" PRIMARY KEY ("categoriesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_32ec81665c8769145fc15c6546" ON "categories_users_users" ("categoriesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_83d70976fcfb7143a39566876a" ON "categories_users_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "categories_startups_startups" ADD CONSTRAINT "FK_473acac432de672bd6a1876fbc5" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories_startups_startups" ADD CONSTRAINT "FK_40ff89332332cdfaba41ba72818" FOREIGN KEY ("startupsId") REFERENCES "startups"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories_users_users" ADD CONSTRAINT "FK_32ec81665c8769145fc15c65464" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories_users_users" ADD CONSTRAINT "FK_83d70976fcfb7143a39566876ae" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories_users_users" DROP CONSTRAINT "FK_83d70976fcfb7143a39566876ae"`);
        await queryRunner.query(`ALTER TABLE "categories_users_users" DROP CONSTRAINT "FK_32ec81665c8769145fc15c65464"`);
        await queryRunner.query(`ALTER TABLE "categories_startups_startups" DROP CONSTRAINT "FK_40ff89332332cdfaba41ba72818"`);
        await queryRunner.query(`ALTER TABLE "categories_startups_startups" DROP CONSTRAINT "FK_473acac432de672bd6a1876fbc5"`);
        await queryRunner.query(`DROP INDEX "IDX_83d70976fcfb7143a39566876a"`);
        await queryRunner.query(`DROP INDEX "IDX_32ec81665c8769145fc15c6546"`);
        await queryRunner.query(`DROP TABLE "categories_users_users"`);
        await queryRunner.query(`DROP INDEX "IDX_40ff89332332cdfaba41ba7281"`);
        await queryRunner.query(`DROP INDEX "IDX_473acac432de672bd6a1876fbc"`);
        await queryRunner.query(`DROP TABLE "categories_startups_startups"`);
    }

}

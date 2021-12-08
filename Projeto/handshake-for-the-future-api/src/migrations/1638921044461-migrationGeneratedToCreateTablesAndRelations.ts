import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationGeneratedToCreateTablesAndRelations1638921044461 implements MigrationInterface {
    name = 'migrationGeneratedToCreateTablesAndRelations1638921044461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "userType" character varying NOT NULL, "description" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, "avatarUrl" character varying, "linkedinUrl" character varying NOT NULL, "facebookUrl" character varying NOT NULL, "instagramUrl" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "startupId" integer, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "startups" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "localization" character varying NOT NULL, "cellphone" character varying NOT NULL, "foundation_date" TIMESTAMP NOT NULL, "logoUrl" character varying, "linkedinUrl" character varying NOT NULL, "facebookUrl" character varying NOT NULL, "instagramUrl" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d3f4c6833156641c6dfdbee31b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "annual_billings" ("id" SERIAL NOT NULL, "billing" integer NOT NULL, "year" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "startupId" integer, CONSTRAINT "PK_a51976c744772f7118993bf0f54" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_7b4c7e1a4a34f2ef50caf682d0f" FOREIGN KEY ("startupId") REFERENCES "startups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "annual_billings" ADD CONSTRAINT "FK_daf608367e04f850b00baf12ced" FOREIGN KEY ("startupId") REFERENCES "startups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annual_billings" DROP CONSTRAINT "FK_daf608367e04f850b00baf12ced"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_7b4c7e1a4a34f2ef50caf682d0f"`);
        await queryRunner.query(`DROP TABLE "annual_billings"`);
        await queryRunner.query(`DROP TABLE "startups"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}

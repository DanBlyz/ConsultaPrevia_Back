import { MigrationInterface, QueryRunner } from 'typeorm';

export class ControlAccesos0100001660522400974 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE SCHEMA "control-accesos";`);

    await queryRunner.query(
      `CREATE TABLE "control-accesos"."GRUPO" (
        "GRUPO_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "CODIGO" character varying(20) NOT NULL,
        "NOMBRE" character varying(300) NOT NULL,
        "DESCRIPCION" character varying(8000),
        CONSTRAINT "PK_GRUPO" PRIMARY KEY ("GRUPO_ID")
      );`,
    );

    await queryRunner.query(
      `CREATE TABLE "control-accesos"."ROL" (
        "ROL_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "CODIGO" character varying(50) NOT NULL,
        "NOMBRE" character varying(50) NOT NULL,
        "GRUPO_ID" int4 NOT NULL,
        CONSTRAINT "PK_ROL" PRIMARY KEY ("ROL_ID")
      );`,
    );

    await queryRunner.query(
      `CREATE TABLE "control-accesos"."ROL_CUENTA" (
        "ROL_CUENTA_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "INST_REGISTRO" timestamptz NOT NULL,
        "FEC_INICIO" date NOT NULL,
        "FEC_CONCLUSION" date,
        "ROL_ID" int4 NOT NULL,
        "CUENTA_ID" int4 NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_ROL_CUENTA" PRIMARY KEY ("ROL_CUENTA_ID")
      );`,
    );

    await queryRunner.query(
      `CREATE TABLE "control-accesos"."CUENTA" (
        "CUENTA_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "CODIGO" character varying(50) NOT NULL,
        "MODO_AUTENTICACION" character varying(20) NOT NULL,
        "NOMBRE" character varying(50) NOT NULL,
        "CLAVE" character varying(50) NOT NULL,
        "CONTRASENIA" character varying(100) NOT NULL,
        "ESTA_AUTORIZADA" boolean NOT NULL,
        "INST_ULT_SESION" timestamptz NULL,
        "NUM_INT_FALLIDOS" int4 NOT NULL,
        "ESTA_BLOQUEADA" boolean NOT NULL,
        "INST_ULT_BLOQUEO" timestamptz NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_CUENTA" PRIMARY KEY ("CUENTA_ID")
      );`,
    );

    await queryRunner.query(
      `CREATE TABLE "control-accesos"."USUARIO" (
        "CUENTA_ID" int4 NOT NULL,
        "NOMBRE" character varying(50) NOT NULL,
        "APELLIDO" character varying(50) NOT NULL,
        "NOM_PUBLICO" character varying(100) NOT NULL,
        "CORREO_ELECTRONICO" character varying(300) NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_USUARIO" PRIMARY KEY ("CUENTA_ID")
      );`,
    );

    await queryRunner.query(
      `ALTER TABLE "control-accesos"."ROL" ADD CONSTRAINT "FK_ROL__GRUPO" FOREIGN KEY ("GRUPO_ID") REFERENCES "control-accesos"."GRUPO"("GRUPO_ID");`,
    );
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."ROL_CUENTA" ADD CONSTRAINT "FK_ROL_CUENTA__ROL" FOREIGN KEY ("ROL_ID") REFERENCES "control-accesos"."ROL"("ROL_ID");`,
    );
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."ROL_CUENTA" ADD CONSTRAINT "FK_ROL_CUENTA__CUENTA" FOREIGN KEY ("CUENTA_ID") REFERENCES "control-accesos"."CUENTA"("CUENTA_ID");`,
    );
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."USUARIO" ADD CONSTRAINT "FK_USUARIO__CUENTA" FOREIGN KEY ("CUENTA_ID") REFERENCES "control-accesos"."CUENTA"("CUENTA_ID");`,
    );

    await queryRunner.query(
      `INSERT INTO "control-accesos"."GRUPO" ("CODIGO", "NOMBRE", "DESCRIPCION")
       VALUES ('SCA', 'SISTEMA DE CONTROL DE ACCESOS', 'SISTEMA DE CONTROL DE ACCESOS');`,
    );
    await queryRunner.query(
      `INSERT INTO "control-accesos"."ROL" ("CODIGO", "NOMBRE", "GRUPO_ID")
       VALUES ('59b68ee822eb49ce4f20f0dc870bdd639f0b8bae', 'ADMINISTRADOR', 1);`,
    );
    await queryRunner.query(
      `INSERT INTO "control-accesos"."CUENTA" ("CODIGO", "MODO_AUTENTICACION", "NOMBRE", "CLAVE", "CONTRASENIA", "ESTA_AUTORIZADA", "INST_ULT_SESION", "NUM_INT_FALLIDOS", "ESTA_BLOQUEADA", "INST_ULT_BLOQUEO", "_USU_CREADOR", "_INST_CREACION", "_USU_MODIFICACION", "_INST_MODIFICACION", "_USU_ELIMINACION", "_INST_ELIMINACION")
       VALUES ('588daa40964a5061aef2', 'BASE DE DATOS', 'adsib', '$2b$10$nRDYI3R0cJOu8vOxMNk4be', '$2b$10$nRDYI3R0cJOu8vOxMNk4bebpAFqYwsHNxh5DzU7suC2ejld6tCmfy', true, NULL, 0, false, NULL, 'ADSIB', NOW(), NULL, NULL, NULL, NULL);`,
    );
    await queryRunner.query(
      `INSERT INTO "control-accesos"."ROL_CUENTA" ("INST_REGISTRO", "FEC_INICIO", "FEC_CONCLUSION", "ROL_ID", "CUENTA_ID", "_USU_CREADOR", "_INST_CREACION", "_USU_MODIFICACION", "_INST_MODIFICACION", "_USU_ELIMINACION", "_INST_ELIMINACION")
       VALUES (NOW(), NOW(), NULL, 1, 1, 'ADSIB', NOW(), NULL, NULL, NULL, NULL);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."ROL_CUENTA" DROP CONSTRAINT "FK_ROL_CUENTA__ROL";`,
    );
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."ROL_CUENTA" DROP CONSTRAINT "FK_ROL_CUENTA__CUENTA";`,
    );
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."ROL" DROP CONSTRAINT "FK_ROL__GRUPO";`,
    );
    await queryRunner.query(
      `ALTER TABLE "control-accesos"."USUARIO" DROP CONSTRAINT "FK_USUARIO__CUENTA";`,
    );
    await queryRunner.query(`DROP TABLE "control-accesos"."USUARIO";`);
    await queryRunner.query(`DROP TABLE "control-accesos"."ROL_CUENTA";`);
    await queryRunner.query(`DROP TABLE "control-accesos"."CUENTA";`);
    await queryRunner.query(`DROP TABLE "control-accesos"."ROL";`);
    await queryRunner.query(`DROP TABLE "control-accesos"."GRUPO";`);

    await queryRunner.query(`DROP SCHEMA "control-accesos";`);
  }
}

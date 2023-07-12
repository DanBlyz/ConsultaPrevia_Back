"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personal0100001658412732078 = void 0;
class Personal0100001658412732078 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE SCHEMA "personal";`);
        await queryRunner.query(`CREATE TABLE personal."PARAMETRO" (
        "PARAM_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "TIPO" varchar(30) NOT NULL,
        "ORDEN" int4 NOT NULL,
        "VALOR" varchar(30) NOT NULL,
        "TEXTO" varchar(30) NOT NULL,
        "ESTA_ACTIVO" bool NOT NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" varchar(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" varchar(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_PARAMETRO" PRIMARY KEY ("PARAM_ID")
      );`);
        await queryRunner.query(`CREATE TABLE personal."UNI_ORGANIZACIONAL" (
        "UNI_ORG_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "CODIGO" varchar(20) NOT NULL,
        "SIGLA" varchar(10) NOT NULL,
        "NOMBRE" varchar(300) NOT NULL,
        "ESTA_ACTIVA" bool NOT NULL,
        "UNI_ORG_SUPERIOR_ID" integer NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" varchar(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" varchar(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_UNI_ORGANIZACIONAL" PRIMARY KEY ("UNI_ORG_ID")
      );`);
        await queryRunner.query(`CREATE TABLE personal."PUESTO" (
        "PUESTO_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "NOMBRE" varchar(300) NOT NULL,
        "DESCRIPCION" varchar(8000) NULL,
        "NIVEL_JERARQUICO" int4 NOT NULL,
        "ESTA_ACTIVO" bool NOT NULL,
	      "UNI_ORG_ID" int4 NOT NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" varchar(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" varchar(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_PUESTO" PRIMARY KEY ("PUESTO_ID")
      );`);
        await queryRunner.query(`CREATE TABLE personal."FOTOGRAFIA" (
        "PERS_ID" int4 NOT NULL,
        "ARCHIVO" text NOT NULL,
        "TIPO_MIME" varchar(30) NOT NULL,
        "EXTENSION" varchar(5) NOT NULL,
        "TAMANIO" int4 NOT NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        CONSTRAINT "PK_FOTOGRAFIA" PRIMARY KEY ("PERS_ID")
      );`);
        await queryRunner.query(`CREATE TABLE personal."PERSONA" (
        "PERS_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "CODIGO" varchar(50) NOT NULL,
        "PRIM_APELLIDO" varchar(50) NOT NULL,
        "SEG_APELLIDO" varchar(50),
        "NOMBRE" varchar(50) NOT NULL,
        "NUM_DOCUMENTO" varchar(20) NOT NULL,
        "EXPEDICION" varchar(20) NOT NULL,
        "FEC_NACIMIENTO" date NOT NULL,
        "CORREO_PERSONAL" varchar(300) NOT NULL,
        "CELULAR_PERSONAL" varchar(20) NOT NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" varchar(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" varchar(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_PERSONA" PRIMARY KEY ("PERS_ID")
      );`);
        await queryRunner.query(`CREATE TABLE personal."INFO_LABORAL" (
        "PERS_ID" int4 NOT NULL,
        "TIPO_LABORAL" varchar(20) NOT NULL,
        "CORREO_INSTITUCIONAL" varchar(300) NULL,
        "NUM_INTERNO" varchar(10) NULL,
        "ESTADO" varchar(20) NOT NULL,
        "CUENTA" varchar(50) NULL,
        "UNI_ORG_ID" int4 NOT NULL,
        "PUESTO_ID" int4 NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" varchar(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" varchar(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_INFO_LABORAL" PRIMARY KEY ("PERS_ID")
      );`);
        await queryRunner.query(`CREATE TABLE personal."PUESTO_PERSONA" (
        "PUESTO_PERS_ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
        "TIPO_MOVILIDAD" varchar(20) NOT NULL,
        "TIPO_LABORAL" varchar(20) NOT NULL,
        "FEC_INICIO" date NOT NULL,
        "FEC_CONCLUSION" date NULL,
        "ES_INTERINATO" bool NOT NULL,
        "TIENE_DESVINCULACION" bool NOT NULL,
        "ESTADO" varchar(20) NOT NULL,
        "PUESTO_ID" int4 NULL,
        "PERS_ID" int4 NOT NULL,
        "UNI_ORG_ID" int4 NOT NULL,
        "_USU_CREADOR" varchar(50) NOT NULL,
        "_INST_CREACION" timestamptz NOT NULL,
        "_USU_MODIFICACION" varchar(50),
        "_INST_MODIFICACION" timestamptz,
        "_USU_ELIMINACION" varchar(50),
        "_INST_ELIMINACION" timestamptz,
        CONSTRAINT "PK_PUESTO_PERSONA" PRIMARY KEY ("PUESTO_PERS_ID")
      );`);
        await queryRunner.query(`ALTER TABLE personal."UNI_ORGANIZACIONAL" ADD CONSTRAINT "FK_UNI_ORGANIZACIONAL_RECUR" FOREIGN KEY ("UNI_ORG_SUPERIOR_ID") REFERENCES personal."UNI_ORGANIZACIONAL" ("UNI_ORG_ID");`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO" ADD CONSTRAINT "FK_PUESTO__UNI_ORGANIZACIONAL" FOREIGN KEY ("UNI_ORG_ID") REFERENCES personal."UNI_ORGANIZACIONAL" ("UNI_ORG_ID");`);
        await queryRunner.query(`ALTER TABLE personal."FOTOGRAFIA" ADD CONSTRAINT "FK_FOTOGRAFIA__PERSONA" FOREIGN KEY ("PERS_ID") REFERENCES personal."PERSONA" ("PERS_ID");`);
        await queryRunner.query(`ALTER TABLE personal."INFO_LABORAL" ADD CONSTRAINT "FK_INFO_LABORAL__PERSONA" FOREIGN KEY ("PERS_ID") REFERENCES personal."PERSONA" ("PERS_ID");`);
        await queryRunner.query(`ALTER TABLE personal."INFO_LABORAL" ADD CONSTRAINT "FK_INFO_LABORAL__UNI_ORGANIZACIONAL" FOREIGN KEY ("UNI_ORG_ID") REFERENCES personal."UNI_ORGANIZACIONAL" ("UNI_ORG_ID");`);
        await queryRunner.query(`ALTER TABLE personal."INFO_LABORAL" ADD CONSTRAINT "FK_INFO_LABORAL__PUESTO" FOREIGN KEY ("PUESTO_ID") REFERENCES personal."PUESTO" ("PUESTO_ID");`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO_PERSONA" ADD CONSTRAINT "FK_PUESTO_PERSONA__PUESTO" FOREIGN KEY ("PUESTO_ID") REFERENCES personal."PUESTO" ("PUESTO_ID");`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO_PERSONA" ADD CONSTRAINT "FK_PUESTO_PERSONA__PERSONA" FOREIGN KEY ("PERS_ID") REFERENCES personal."PERSONA" ("PERS_ID");`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO_PERSONA" ADD CONSTRAINT "FK_PUESTO_PERSONA__UNI_ORGANIZACIONAL" FOREIGN KEY ("UNI_ORG_ID") REFERENCES personal."UNI_ORGANIZACIONAL" ("UNI_ORG_ID");`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE personal."PUESTO_PERSONA" DROP CONSTRAINT "FK_PUESTO_PERSONA__UNI_ORGANIZACIONAL";`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO_PERSONA" DROP CONSTRAINT "FK_PUESTO_PERSONA__PERSONA";`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO_PERSONA" DROP CONSTRAINT "FK_PUESTO_PERSONA__PUESTO";`);
        await queryRunner.query(`ALTER TABLE personal."INFO_LABORAL" DROP CONSTRAINT "FK_INFO_LABORAL__PUESTO";`);
        await queryRunner.query(`ALTER TABLE personal."INFO_LABORAL" DROP CONSTRAINT "FK_INFO_LABORAL__UNI_ORGANIZACIONAL";`);
        await queryRunner.query(`ALTER TABLE personal."INFO_LABORAL" DROP CONSTRAINT "FK_INFO_LABORAL__PERSONA";`);
        await queryRunner.query(`ALTER TABLE personal."FOTOGRAFIA" DROP CONSTRAINT "FK_FOTOGRAFIA__PERSONA";`);
        await queryRunner.query(`ALTER TABLE personal."PUESTO" DROP CONSTRAINT "FK_PUESTO__UNI_ORGANIZACIONAL";`);
        await queryRunner.query(`ALTER TABLE personal."UNI_ORGANIZACIONAL" DROP CONSTRAINT "FK_UNI_ORGANIZACIONAL_RECUR";`);
        await queryRunner.query(`DROP TABLE personal."PUESTO_PERSONA";`);
        await queryRunner.query(`DROP TABLE personal."INFO_LABORAL";`);
        await queryRunner.query(`DROP TABLE personal."PERSONA";`);
        await queryRunner.query(`DROP TABLE personal."FOTOGRAFIA";`);
        await queryRunner.query(`DROP TABLE personal."PUESTO";`);
        await queryRunner.query(`DROP TABLE personal."UNI_ORGANIZACIONAL";`);
        await queryRunner.query(`DROP TABLE personal."PARAMETRO";`);
        await queryRunner.query(`DROP SCHEMA "personal";`);
    }
}
exports.Personal0100001658412732078 = Personal0100001658412732078;
//# sourceMappingURL=1658412732078-personal010000.js.map
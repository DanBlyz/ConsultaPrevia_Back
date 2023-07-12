import { MigrationInterface, QueryRunner } from 'typeorm';

export class correspondencia010001661952251539 implements MigrationInterface {
  name = 'Correspondencia01000-1661952251539';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE correspondencia."ADJUNTO" (
        "ADJ_ID" integer NOT NULL,
        "TIPO" character varying(20) NOT NULL,
        "CODIGO" character varying(50) NOT NULL,
        "TIPO_MIME" character varying(30) NOT NULL,
        "TAMANIO" integer NOT NULL,
        "EXTENSION" character varying(5) NOT NULL,
        "ESTA_FIRMADO" boolean NOT NULL,
        "NOM_PUBLICO" character varying(300) NOT NULL,
        "NOM_PRIVADO" character varying(300) NOT NULL,
        "ESTADO" character varying(20) NOT NULL,
        "DOC_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_ADJUNTO" PRIMARY KEY ("ADJ_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."BUZON" (
        "BUZON_ID" integer NOT NULL,
        "UNI_ORGANIZACIONAL" character varying(300) NOT NULL,
        "PUESTO" character varying(300) NOT NULL,
        "ESTADO" character varying(20) NOT NULL,
        "REF_UNI_ORG_ID" int4 NOT NULL,
        "REF_PUESTO_ID" int4 NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_BUZON" PRIMARY KEY ("BUZON_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."BUZON_USUARIO" (
        "BUZON_USU_ID" integer NOT NULL,
        "TIPO_ACCESO" character varying(20) NOT NULL,
        "USUARIO" character varying(50),
        "NOMBRE" character varying(300),
        "FEC_INICIO" date NOT NULL,
        "FEC_CONCLUSION" date,
        "ESTADO" character varying(20) NOT NULL,
        "BUZON_ID" integer NOT NULL,
        "REF_PERSONA_ID" int4 NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_BUZON_USUARIO" PRIMARY KEY ("BUZON_USU_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."CLASIFICACION" (
        "CLASIF_ID" integer NOT NULL,
        "NOMBRE" character varying(300) NOT NULL,
        "DESCRIPCION" character varying(8000),
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_CLASIFICACION" PRIMARY KEY ("CLASIF_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."CLASIFICACION_BUZON" (
        "CLASIF_BUZON_ID" integer NOT NULL,
        "CLASIF_ID" integer NOT NULL,
        "BUZON_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_CLASIFICACION_BUZON" PRIMARY KEY ("CLASIF_BUZON_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."CONTENIDO" (
        "DOC_ID" integer NOT NULL,
        "VERSION" integer NOT NULL,
        "PLAN_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_CONTENIDO" PRIMARY KEY ("DOC_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."CONTENIDO_DETALLE" (
        "CONT_DET_ID" integer NOT NULL,
        "VARIABLE" character varying(50) NOT NULL,
        "VALOR" character varying NOT NULL,
        "DOC_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_CONTENIDO_DETALLE" PRIMARY KEY ("CONT_DET_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."DOCUMENTO" (
        "DOC_ID" integer NOT NULL,
        "NUMERO" integer NOT NULL,
        "GESTION" integer NOT NULL,
        "CITE" character varying(300) NOT NULL,
        "CITE_EXTERNO" character varying(300),
        "INST_REGISTRO" timestamp with time zone NOT NULL,
        "FECHA" date NOT NULL,
        "REFERENCIA" character varying(8000) NOT NULL,
        "NUM_HOJAS" integer NOT NULL,
        "PRIORIDAD" character varying(20) NOT NULL,
        "OBSERVACION" character varying(255),
        "ES_BORRADOR" boolean NOT NULL,
        "ESTA_IMPRESO" boolean NOT NULL,
        "HOJA_RUTA_ID" integer NOT NULL,
        "TIPO_DOC_ID" integer NOT NULL,
        "CLASIF_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_DOCUMENTO" PRIMARY KEY ("DOC_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."DOCUMENTO_DETALLE" (
            "DOC_DET_ID" integer NOT NULL,
            "TIPO" character varying(20) NOT NULL,
            "VALOR" character varying(8000) NOT NULL,
            "DOC_ID" integer NOT NULL,
            "_USU_CREADOR" character varying(50) NOT NULL,
            "_INST_CREACION" timestamp with time zone NOT NULL,
            "_USU_MODIFICACION" character varying(50),
            "_INST_MODIFICACION" timestamp with time zone,
            "_USU_ELIMINACION" character varying(50),
            "_INST_ELIMINACION" timestamp with time zone,
            CONSTRAINT "PK_DOCUMENTO_DETALLE" PRIMARY KEY ("DOC_DET_ID")
        );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."DOCUMENTO_SEGUIMIENTO" (
        "DOC_SEG_ID" integer NOT NULL,
        "ACCION" character varying(20) NOT NULL,
        "INSTANTE" timestamp with time zone NOT NULL,
        "USUARIO" character varying(50) NOT NULL,
        "DOC_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_DOCUMENTO_SEGUIMIENTO" PRIMARY KEY ("DOC_SEG_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."ETIQUETA" (
            "ETIQ_ID" integer NOT NULL,
            "NOMBRE" character varying(300) NOT NULL,
            "DESCRIPCION" character varying(8000),
            "USUARIO" character varying(50) NOT NULL,
            "ES_PUBLICA" boolean NOT NULL,
            "DOC_ID" integer NOT NULL,
            "_USU_CREADOR" character varying(50) NOT NULL,
            "_INST_CREACION" timestamp with time zone NOT NULL,
            "_USU_MODIFICACION" character varying(50),
            "_INST_MODIFICACION" timestamp with time zone,
            "_USU_ELIMINACION" character varying(50),
            "_INST_ELIMINACION" timestamp with time zone,
            CONSTRAINT "PK_ETIQUETA" PRIMARY KEY ("ETIQ_ID")
        );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."HOJA_RUTA" (
        "HOJA_RUTA_ID" integer NOT NULL,
        "GESTION" integer NOT NULL,
        "NUMERO" integer NOT NULL,
        "FECHA" date NOT NULL,
        "ESTADO" character varying(20) NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_HOJA_RUTA" PRIMARY KEY ("HOJA_RUTA_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."NOTA" (
        "NOTA_ID" integer NOT NULL,
        "INSTANTE" timestamp with time zone NOT NULL,
        "TITULO" character varying(300) NOT NULL,
        "CONTENIDO" character varying(8000) NOT NULL,
        "USUARIO" character varying(50) NOT NULL,
        "ES_PUBLICA" boolean NOT NULL,
        "DOC_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_NOTA" PRIMARY KEY ("NOTA_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."PARTICIPANTE" (
            "PART_ID" integer NOT NULL,
            "TIPO" character varying(20) NOT NULL,
            "NOMBRE" character varying(300) NOT NULL,
            "PUESTO" character varying(300) NOT NULL,
            "UNI_ORGANIZACIONAL" character varying(300) NOT NULL,
            "ENTIDAD" character varying(300),
            "DOC_ID" integer NOT NULL,
            "_USU_CREADOR" character varying(50) NOT NULL,
            "_INST_CREACION" timestamp with time zone NOT NULL,
            "_USU_MODIFICACION" character varying(50),
            "_INST_MODIFICACION" timestamp with time zone,
            "_USU_ELIMINACION" character varying(50),
            "_INST_ELIMINACION" timestamp with time zone,
            CONSTRAINT "PK_PARTICIPANTE" PRIMARY KEY ("PART_ID")
        );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."PLANTILLA" (
        "PLAN_ID" integer NOT NULL,
        "FECHA" date NOT NULL,
        "VERSION" integer NOT NULL,
        "ESTRUCTURA" character varying NOT NULL,
        "TIPO_DOC_ID" integer NOT NULL,
        "_USU_CREADOR" character varying(50) NOT NULL,
        "_INST_CREACION" timestamp with time zone NOT NULL,
        "_USU_MODIFICACION" character varying(50),
        "_INST_MODIFICACION" timestamp with time zone,
        "_USU_ELIMINACION" character varying(50),
        "_INST_ELIMINACION" timestamp with time zone,
        CONSTRAINT "PK_PLANTILLA" PRIMARY KEY ("PLAN_ID")
    );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."SEGUIMIENTO" (
            "SEG_ID" integer NOT NULL,
            "ACCION" character varying(20) NOT NULL,
            "INSTANTE" timestamp with time zone NOT NULL,
            "PROVEIDO_ACCION" character varying(20),
            "PROVEIDO" character varying(8000),
            "VIA_APROBADA" boolean NOT NULL,
            "FEC_RECEPCION" timestamp with time zone,
            "OBSERVACION" character varying(8000),
            "ES_BORRADOR" boolean NOT NULL,
            "ESTADO" character varying(20) NOT NULL,
            "DOC_ID" integer NOT NULL,
            "BUZON_ID_ORIGEN" integer NOT NULL,
            "BUZON_ID_DESTINO" integer,
            "BUZON_ID_ACTUAL" integer NOT NULL,
            "_USU_CREADOR" character varying(50) NOT NULL,
            "_INST_CREACION" timestamp with time zone NOT NULL,
            "_USU_MODIFICACION" character varying(50),
            "_INST_MODIFICACION" timestamp with time zone,
            "_USU_ELIMINACION" character varying(50),
            "_INST_ELIMINACION" timestamp with time zone,
            CONSTRAINT "PK_SEGUIMIENTO" PRIMARY KEY ("SEG_ID")
        );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."TIPO_DOCUMENTO" (
            "TIPO_DOC_ID" integer NOT NULL,
            "SIGLA" character varying(20) NOT NULL,
            "NOMBRE" character varying(300) NOT NULL,
            "DESCRIPCION" character varying(8000),
            "ESTA_ACTIVO" boolean NOT NULL,
            "_USU_CREADOR" character varying(50) NOT NULL,
            "_INST_CREACION" timestamp with time zone NOT NULL,
            "_USU_MODIFICACION" character varying(50),
            "_INST_MODIFICACION" timestamp with time zone,
            "_USU_ELIMINACION" character varying(50),
            "_INST_ELIMINACION" timestamp with time zone,
            CONSTRAINT "PK_TIPO_DOCUMENTO" PRIMARY KEY ("TIPO_DOC_ID")
        );`,
    );

    await queryRunner.query(
      `CREATE TABLE correspondencia."prueba" (
            "ci" integer NOT NULL,
            "nombre" character varying(20) NOT NULL,
            "apellido" character varying(300) NOT NULL,
            CONSTRAINT "PK_ci" PRIMARY KEY ("ci")
        );`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."ADJUNTO" ADD CONSTRAINT "FK_ADJUNTO_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."BUZON_USUARIO" ADD CONSTRAINT "FK_BUZON_USUARIO_BUZON" FOREIGN KEY ("BUZON_ID") REFERENCES correspondencia."BUZON" ("BUZON_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CLASIFICACION_BUZON" ADD CONSTRAINT "FK_CLASIFICACION_BUZON_BUZON" FOREIGN KEY ("BUZON_ID") REFERENCES correspondencia."BUZON" ("BUZON_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CLASIFICACION_BUZON" ADD CONSTRAINT "FK_CLASIFICACION_BUZON_CLASIFICACION" FOREIGN KEY ("CLASIF_ID") REFERENCES correspondencia."CLASIFICACION" ("CLASIF_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CONTENIDO_DETALLE" ADD CONSTRAINT "FK_CONTENIDO_DETALLE_CONTENIDO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."CONTENIDO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CONTENIDO" ADD CONSTRAINT "FK_CONTENIDO_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CONTENIDO" ADD CONSTRAINT "FK_CONTENIDO_PLANTILLA" FOREIGN KEY ("PLAN_ID") REFERENCES correspondencia."PLANTILLA" ("PLAN_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO_DETALLE" ADD CONSTRAINT "FK_DOCUMENTO_DETALLE_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO_SEGUIMIENTO" ADD CONSTRAINT "FK_DOCUMENTO_SEGUIMIENTO_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO" ADD CONSTRAINT "FK_DOCUMENTO_CLASIFICACION" FOREIGN KEY ("CLASIF_ID") REFERENCES correspondencia."CLASIFICACION" ("CLASIF_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO" ADD CONSTRAINT "FK_DOCUMENTO_HOJA_RUTA" FOREIGN KEY ("HOJA_RUTA_ID") REFERENCES correspondencia."HOJA_RUTA" ("HOJA_RUTA_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO" ADD CONSTRAINT "FK_DOCUMENTO_TIPO_DOCUMENTO" FOREIGN KEY ("TIPO_DOC_ID") REFERENCES correspondencia."TIPO_DOCUMENTO" ("TIPO_DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."ETIQUETA" ADD CONSTRAINT "FK_ETIQUETA_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."NOTA" ADD CONSTRAINT "FK_NOTA_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."PARTICIPANTE" ADD CONSTRAINT "FK_PARTICIPANTE_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."PLANTILLA" ADD CONSTRAINT "FK_PLANTILLA_TIPO_DOCUMENTO" FOREIGN KEY ("TIPO_DOC_ID") REFERENCES correspondencia."TIPO_DOCUMENTO" ("TIPO_DOC_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" ADD CONSTRAINT "FK_SEGUIMIENTO_BUZON_ACTUAL" FOREIGN KEY ("BUZON_ID_ACTUAL") REFERENCES correspondencia."BUZON" ("BUZON_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" ADD CONSTRAINT "FK_SEGUIMIENTO_BUZON_DESTINO" FOREIGN KEY ("BUZON_ID_DESTINO") REFERENCES correspondencia."BUZON" ("BUZON_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" ADD CONSTRAINT "FK_SEGUIMIENTO_BUZON_ORIGEN" FOREIGN KEY ("BUZON_ID_ORIGEN") REFERENCES correspondencia."BUZON" ("BUZON_ID");`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" ADD CONSTRAINT "FK_SEGUIMIENTO_DOCUMENTO" FOREIGN KEY ("DOC_ID") REFERENCES correspondencia."DOCUMENTO" ("DOC_ID");`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE correspondencia."ADJUNTO" DROP CONSTRAINT "FK_ADJUNTO_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."BUZON_USUARIO" DROP CONSTRAINT "FK_BUZON_USUARIO_BUZON";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CLASIFICACION_BUZON" DROP CONSTRAINT "FK_CLASIFICACION_BUZON_BUZON";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CLASIFICACION_BUZON" DROP CONSTRAINT "FK_CLASIFICACION_BUZON_CLASIFICACION";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CONTENIDO_DETALLE" DROP CONSTRAINT "FK_CONTENIDO_DETALLE_CONTENIDO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CONTENIDO" DROP CONSTRAINT "FK_CONTENIDO_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."CONTENIDO" DROP CONSTRAINT "FK_CONTENIDO_PLANTILLA";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO_DETALLE" DROP CONSTRAINT "FK_DOCUMENTO_DETALLE_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO_SEGUIMIENTO" DROP CONSTRAINT "FK_DOCUMENTO_SEGUIMIENTO_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO" DROP CONSTRAINT "FK_DOCUMENTO_CLASIFICACION";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO" DROP CONSTRAINT "FK_DOCUMENTO_HOJA_RUTA";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."DOCUMENTO" DROP CONSTRAINT "FK_DOCUMENTO_TIPO_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."ETIQUETA" DROP CONSTRAINT "FK_ETIQUETA_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."NOTA" DROP CONSTRAINT "FK_NOTA_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."PARTICIPANTE" DROP CONSTRAINT "FK_PARTICIPANTE_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."PLANTILLA" DROP CONSTRAINT "FK_PLANTILLA_TIPO_DOCUMENTO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" DROP CONSTRAINT "FK_SEGUIMIENTO_BUZON_ACTUAL";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" DROP CONSTRAINT "FK_SEGUIMIENTO_BUZON_DESTINO";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" DROP CONSTRAINT "FK_SEGUIMIENTO_BUZON_ORIGEN";`,
    );

    await queryRunner.query(
      `ALTER TABLE correspondencia."SEGUIMIENTO" DROP CONSTRAINT "FK_SEGUIMIENTO_DOCUMENTO";`,
    );

    await queryRunner.query(`DROP TABLE correspondencia."ADJUNTO";`);
    await queryRunner.query(`DROP TABLE correspondencia."BUZON";`);
    await queryRunner.query(`DROP TABLE correspondencia."BUZON_USUARIO";`);
    await queryRunner.query(`DROP TABLE correspondencia."CLASIFICACION";`);
    await queryRunner.query(
      `DROP TABLE correspondencia."CLASIFICACION_BUZON";`,
    );
    await queryRunner.query(`DROP TABLE correspondencia."CONTENIDO";`);
    await queryRunner.query(`DROP TABLE correspondencia."CONTENIDO_DETALLE";`);
    await queryRunner.query(`DROP TABLE correspondencia."DOCUMENTO";`);
    await queryRunner.query(`DROP TABLE correspondencia."DOCUMENTO_DETALLE";`);
    await queryRunner.query(
      `DROP TABLE correspondencia."DOCUMENTO_SEGUIMIENTO";`,
    );
    await queryRunner.query(`DROP TABLE correspondencia."ETIQUETA";`);
    await queryRunner.query(`DROP TABLE correspondencia."HOJA_RUTA";`);
    await queryRunner.query(`DROP TABLE correspondencia."NOTA";`);
    await queryRunner.query(`DROP TABLE correspondencia."PARTICIPANTE";`);
    await queryRunner.query(`DROP TABLE correspondencia."PLANTILLA";`);
    await queryRunner.query(`DROP TABLE correspondencia."SEGUIMIENTO";`);
    await queryRunner.query(`DROP TABLE correspondencia."TIPO_DOCUMENTO";`);
    await queryRunner.query(`DROP TABLE correspondencia."prueba";`);

    await queryRunner.query(`DROP SCHEMA "correspondencia";`);
  }
}

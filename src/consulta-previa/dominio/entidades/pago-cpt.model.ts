import { AutoMap } from '@automapper/classes';

export class PagoCpt {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idActos: number;
  
    @AutoMap()
    pagoRealizado: boolean;
    
    @AutoMap()
    flujo: string;
  
    @AutoMap()
    diasViaje: number;
  
    @AutoMap()
    tipoViaje: string;

    @AutoMap()
    montoTotal: number;

    @AutoMap()
    apm: string;

    @AutoMap()
    descripcion: string;

    @AutoMap()
    estado: string;

    @AutoMap()
    transaccion: number;

    @AutoMap()
    fechaActual: Date;

    @AutoMap()
    canal: string;

    @AutoMap()
    cpt: number;

    @AutoMap()
    fechaVigencia: Date;

    @AutoMap()
    fechaValidez: Date;

    @AutoMap()
    inicioVigencia: Date;

    @AutoMap()
    tipoServicio: string;

    @AutoMap()
    cptPdf: string;
}

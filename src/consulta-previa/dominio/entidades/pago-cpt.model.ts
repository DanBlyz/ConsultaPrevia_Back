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
}

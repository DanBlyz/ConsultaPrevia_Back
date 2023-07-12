import { AutoMap } from '@automapper/classes';

export class Viaje {
    @AutoMap()
    id: number;
  
    @AutoMap()
    fk_idPago: number;
  
    @AutoMap()
    fechaInicio: Date;
    
    @AutoMap()
    fechaFin: Date;
  
    @AutoMap()
    descripcion: string;
  
    @AutoMap()
    nroFormulario: string;
  
    @AutoMap()
    formularioPdf: string;
}

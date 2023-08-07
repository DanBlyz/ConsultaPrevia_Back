export declare class UniOrganizacional {
    id: number;
    codigo: string;
    sigla: string;
    nombre: string;
    estaActiva: boolean;
    uniOrganizacionalSuperiorId?: number;
    uniOrganizacionalSuperiorNombre: string;
    numPuestos: number;
    sePuedeModificar: boolean;
    sePuedeEliminar: boolean;
}

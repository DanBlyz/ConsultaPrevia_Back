import { AutomapperProfile } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
export declare class ContenidoProfile extends AutomapperProfile {
    constructor(mapper: Mapper);
    get profile(): (mapper: any) => void;
}

import { AutomapperProfile } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';
export declare class ContactoFiltroProfile extends AutomapperProfile {
    constructor(mapper: Mapper);
    get profile(): (mapper: any) => void;
}

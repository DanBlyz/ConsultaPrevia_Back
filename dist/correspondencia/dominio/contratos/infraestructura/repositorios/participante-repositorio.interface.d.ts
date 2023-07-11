import { IRepositorio } from './base/repositorio.interface';
import { Participante } from '../../../entidades';
import { ParticipanteFiltro } from '../../../entidades/filtros';
export interface IParticipanteRepositorio extends IRepositorio<Participante, ParticipanteFiltro> {
}

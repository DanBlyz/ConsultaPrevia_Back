import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Identidad } from '../identidad';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_CLAVE'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const accessToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      ?.replace('bearer', '')
      .trim();

    const identidad = Identidad.getInstance();
    identidad.usuarioId = payload.user_id;
    identidad.cuenta = payload.nickname;
    identidad.roles = payload.roles;
    identidad.accessToken = accessToken;
    return {
      usuarioId: payload.user_id,
      cuenta: payload.nickname,
      roles: payload.roles,
    };
  }
}

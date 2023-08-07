export declare class Identidad {
    private static instance;
    usuarioId: any;
    cuenta: string;
    roles: string[];
    accessToken: string;
    private constructor();
    static getInstance(): Identidad;
}

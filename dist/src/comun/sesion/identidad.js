"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identidad = void 0;
class Identidad {
    constructor() { }
    static getInstance() {
        if (!Identidad.instance) {
            Identidad.instance = new Identidad();
        }
        return Identidad.instance;
    }
}
exports.Identidad = Identidad;
//# sourceMappingURL=identidad.js.map
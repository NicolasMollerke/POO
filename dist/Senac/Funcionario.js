"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const Pessoa_1 = require("./Pessoa");
class Funcionario extends Pessoa_1.Pessoa {
    constructor() {
        super(...arguments);
        this._salario = 0;
    }
}
exports.Funcionario = Funcionario;
//# sourceMappingURL=Funcionario.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const faker_1 = require("@faker-js/faker");
class Util {
    static gerarNome() {
        const randomName = faker_1.fakerPT_BR.person.firstName();
        return randomName;
    }
    static gerarNumeroDePedido() {
        return "" + faker_1.fakerPT_BR.number.int();
    }
}
exports.Util = Util;
//# sourceMappingURL=Util.js.map
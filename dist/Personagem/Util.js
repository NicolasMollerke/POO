"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const faker_1 = require("@faker-js/faker");
class Util {
    static gerarNumeroAleatorio(minimo, maximo) {
        return minimo + Math.round(Math.random() * (maximo - minimo));
    }
    static gerarNome() {
        const randomName = faker_1.fakerPT_BR.person.firstName();
        return randomName;
    }
}
exports.Util = Util;
for (let index = 0; index < 10; index++) {
    const nome = Util.gerarNome();
}
//# sourceMappingURL=Util.js.map
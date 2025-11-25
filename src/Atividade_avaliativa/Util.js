"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const faker_1 = require("@faker-js/faker");
class Util {
    static gerarNome() {
        const randomName = faker_1.faker.person.firstName();
        return randomName;
    }
    static gerarNumeroAleatorio(minimo, maximo) {
        return minimo + Math.round(Math.random() * (maximo - minimo));
    }
    static gerarForca() {
        return Math.round(Math.random() * 1000);
    }
}
exports.Util = Util;
//# sourceMappingURL=Util.js.map
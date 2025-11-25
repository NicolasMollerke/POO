"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Livro_1 = require("./Livro");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const teclado = (0, prompt_sync_1.default)();
let livros = [];
while (true) {
    console.log("+-------------MENU-------------+");
    console.log("|1. Adicionar livro    |");
    console.log("|2. Ver status                 |");
    console.log("|3. Checar se personagem vive  |");
    console.log("|4. Subir Nível                |");
    console.log("|5. Regenerar Mana             |");
    console.log("|6. Equipar arma               |");
    console.log("|7. Lançar feitiço             |");
    console.log("|8. Receber dano               |");
    console.log("|9. Sair                       |");
    console.log("+--------------------------+");
    const escolha = +teclado("Escolha uma opção do menu:");
    if (escolha === 9) {
        break;
    }
    switch (escolha) {
        case 1:
            livros.push(Livro_1.Livro.adicionarLivro());
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}
//# sourceMappingURL=main.js.map
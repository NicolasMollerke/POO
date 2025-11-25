"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const teclado = (0, prompt_sync_1.default)();
const p = new Personagem_1.Personagem("Edécio");
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1 + Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = 20;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;
while (true) {
    console.log("+-------------MENU-------------+");
    console.log("|1. Treinar Poder de Ataque    |");
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
            treinarPoderAtaque(p);
            break;
        case 2:
            console.table(p);
            break;
        case 3:
            console.log(p.estaVivo() ? "Pesonagem vivo" : "Personagem subiu!");
            break;
        case 4:
            subirNivel(p);
            break;
        case 5:
            regenerarMana(p);
            break;
        case 6:
            const arma = teclado("Escolha arma: ");
            p.equiparArma(arma);
            break;
        case 7:
            const custo = +teclado("Custo de mana: ");
            p.lancarFeitico(custo);
            break;
        case 8:
            const dano = +teclado("Dano causado: ");
            console.log(p.receberDano(dano));
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}
function treinarPoderAtaque(person) {
    person.treinarPoderAtaque();
}
function subirNivel(person) {
    person.subirNivel();
}
function regenerarMana(person) {
    person.regenerarMana();
}
//# sourceMappingURL=Main.js.map
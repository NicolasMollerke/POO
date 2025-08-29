import { Personagem } from "./Personagem";
import Prompt from "prompt-sync"

const teclado = Prompt();

const p = new Personagem("Edécio");

p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = "Cajado";
p.manaMaxima = 100;
p.manaAtual = 20;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

while (true){

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

const escolha: number = +teclado("Escolha uma opção do menu:")

if (escolha === 9){
    break;
}
switch(escolha){
    case 1:
        treinarPoderAtaque(p);
        break;
    case 2: 
        console.table(p);
        break
    case 3:
        console.log(p.estaVivo()? "Pesonagem vivo": "Personagem subiu!")
        break;
    case 4:
        subirNivel(p);
        break
    case 5:
        regenerarMana(p);
        break
    case 6:
        const arma: string = teclado("Escolha arma: ")
        p.equiparArma(arma)
        break
    case 7:
        const custo: number = +teclado("Custo de mana: ")
        p.lancarFeitico(custo)
        break
    case 8:
        const dano: number = +teclado("Dano causado: ")
        console.log(p.receberDano(dano))
        break
    default:
        console.log("Opção inválida!")
        break;
}

}

function treinarPoderAtaque(person: Personagem): void{
    person.treinarPoderAtaque();
}

function subirNivel(person: Personagem): void{
    person.subirNivel();
}

function regenerarMana(person: Personagem): void{
    person.regenerarMana();
}



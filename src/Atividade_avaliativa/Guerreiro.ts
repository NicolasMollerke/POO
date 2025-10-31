
import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Guerreiro extends Personagem {
    constructor(
        nome: string, forca: number, habilidade: number, poderAtaque: number, esquiva: number, resistencia: number, vidaMaxima: number
    ) {
        super(
            nome + "- Warrior",
            forca > 1000 || forca < 1 ? 1 : forca,
            0,
            forca * 10,
            esquiva > 50 || esquiva < 1 ? 1 : esquiva,
            resistencia > 90 || resistencia < 0 ? 0 : resistencia,
            vidaMaxima > 40000 || vidaMaxima < 1 ? 1 : vidaMaxima,
        )
        this._vidaAtual = this._vidaMaxima;
    }

    public atacar(oponente: Personagem): void {
        const chance = Math.random() * 100;
        if (oponente._esquiva > chance) {
            console.log("Falhou")
        }
        else {
            oponente._vidaAtual = oponente._vidaAtual - (this._poderAtaque - oponente._resistencia)

        }
    }
}

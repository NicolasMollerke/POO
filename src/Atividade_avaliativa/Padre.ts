
import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Padre extends Personagem{
    constructor() {
        super(
            `${Util.gerarNome()} Priest`,
            0,
            0,
            0,
            0,
            0,
            0,
            Util.gerarNumeroAleatorio(1,8000)
        );
        this._vidaAtual = this._vidaMaxima;
    }


}

import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Guerreiro extends Personagem{
    constructor() {
        super(
            Util.gerarNome(),
            Util.gerarNumeroAleatorio(1, 1000),
            0,
            Personagem._forca*10,
            Util.gerarNumeroAleatorio(0, 50),
            Util.gerarNumeroAleatorio(0, 90),
            Util.gerarNumeroAleatorio(1, 40000),
            Personagem._vidaMaxima
        );
    }


    set nome(randomName: string){
        this._nome = `Warrior ${randomName}` ;
    }

    static FabricaDeGuerreiro(randomName: string): Personagem{
        return new Personagem(randomName)
    }
}
}

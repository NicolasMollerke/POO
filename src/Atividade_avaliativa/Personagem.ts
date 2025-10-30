export class Personagem{
    constructor(
        protected _nome: string,
        protected _forca: number,
        protected _habilidadeMental: number,
        protected _poderAtaque: number,
        protected _esquiva: number,
        protected _resistencia: number,
        protected _vidaAtual: number,
        protected _vidaMaxima: number,
    ){}
    
    atacar(nome: string){

    }
    contraAtacar(nome: string){

    }

    aprimorarHabilidadel(){
    }

    regenrarVida(){
    }   
}
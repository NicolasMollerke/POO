export class Personagem {
    protected _nome: string
    protected _forca: number
    protected _habilidadeMental: number
    protected _poderAtaque: number
    _esquiva: number
    _resistencia: number
    _vidaAtual: number
    _vidaMaxima: number

    constructor(nome: string, forca: number, habilidade: number, poderAtaque: number, esquiva: number, resistencia: number, vidaMaxima: number) {
        this._nome = nome
        this._forca = forca
        this._habilidadeMental = habilidade
        this._poderAtaque = poderAtaque
        this._esquiva = esquiva
        this._resistencia = resistencia
        this._vidaMaxima = vidaMaxima
        this._vidaAtual = vidaMaxima
    }


    atacar(oponente: Personagem) {

    }
    contraAtacar(nome: string) {

    }

    aprimorarHabilidadel() {
    }

    regenrarVida() {
    }
}
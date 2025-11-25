export declare class Personagem {
    protected _nome: string;
    protected _forca: number;
    protected _habilidadeMental: number;
    protected _poderAtaque: number;
    _esquiva: number;
    _resistencia: number;
    _vidaAtual: number;
    _vidaMaxima: number;
    constructor(nome: string, forca: number, habilidade: number, poderAtaque: number, esquiva: number, resistencia: number, vidaMaxima: number);
    atacar(oponente: Personagem): void;
    contraAtacar(nome: string): void;
    aprimorarHabilidadel(): void;
    regenrarVida(): void;
}
//# sourceMappingURL=Personagem.d.ts.map
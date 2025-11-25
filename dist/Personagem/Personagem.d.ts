export declare class Personagem {
    nome: string;
    classe: string;
    raca: string;
    nivel: number;
    arma: string;
    manaAtual: number;
    manaMaxima: number;
    vidaAtual: number;
    vidaMaxima: number;
    poderAtaque: number;
    constructor(nome: string);
    treinarPoderAtaque(): void;
    estaVivo(): boolean;
    subirNivel(): void;
    regenerarMana(): void;
    equiparArma(arma: string): void;
    lancarFeitico(custo: number): void;
    receberDano(dano: number): number;
}
//# sourceMappingURL=Personagem.d.ts.map
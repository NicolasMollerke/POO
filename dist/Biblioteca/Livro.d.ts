export declare class Livro {
    private _titulo;
    private _autor;
    private _isbn;
    private _ano;
    constructor(_titulo?: string, _autor?: string, _isbn?: string, _ano?: number);
    get titulo(): string;
    get autor(): string;
    get isbn(): string;
    set isbn(isbn: string);
    converte(): string;
    get ano(): number;
    salvarEmArquivo(caminho?: string): void;
    static adicionarLivro(): Livro;
}
//# sourceMappingURL=Livro.d.ts.map
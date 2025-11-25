"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const fs_1 = __importDefault(require("fs"));
class Livro {
    constructor(_titulo = "", _autor = "", _isbn = "", _ano = 0) {
        this._titulo = _titulo;
        this._autor = _autor;
        this._isbn = _isbn;
        this._ano = _ano;
    }
    get titulo() {
        return this._titulo;
    }
    get autor() {
        return this._autor;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(isbn) {
        if (isbn.length === 13) {
            this._isbn = isbn;
        }
        else {
            throw new Error("Erro de validação");
        }
    }
    converte() {
        return `${this._titulo};${this._autor};${this._isbn};${this._ano}\n`;
    }
    get ano() {
        return this._ano;
    }
    salvarEmArquivo(caminho = 'livros.txt') {
        try {
            fs_1.default.appendFileSync(caminho, this.converte(), { encoding: 'utf8' });
        }
        catch (err) {
            throw new Error(`Erro ao salvar arquivo: ${err.message || err}`);
        }
    }
    static adicionarLivro() {
        const teclado = (0, prompt_sync_1.default)();
        const titulo = teclado("Titulo do livro:");
        const autor = teclado("Autor do livro:");
        const isbn = teclado("ISBN do livro:");
        const anoInput = teclado("Ano de lançamento do livro:");
        const ano = parseInt(anoInput, 10);
        if (isNaN(ano)) {
            throw new Error("Ano inválido");
        }
        return new Livro(titulo, autor, isbn, ano);
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map
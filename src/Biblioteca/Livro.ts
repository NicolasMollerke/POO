import Prompt from "prompt-sync"
import fs from 'fs';
import { Util } from "./Util";

const teclado = Prompt();

export class Livro {
    constructor(
        private _titulo: string = "",
        private _autor: string = "",
        private _isbn: string = "",
        private _ano: number = 0
    ){}

    
    public get titulo(): string {
        return this._titulo;
    }
    
    public get autor(): string {
        return this._autor;
    }

    public get isbn(): string {
        return this._isbn;
    }

     public get ano(): number{
        return this._ano;
    }

    private alterarTitulo(tituloNovo: string) { //estavam privados mudei para acessar nos testes
        this._titulo = tituloNovo; 
    }

    private alterarAutor(autorNovo: string) {
        this._autor = autorNovo; 
    }

    private alterarIsbn(isbnNovo: string) {
        this._isbn = isbnNovo; 
    }

    private alterarAno(anoNovo: number) {
        this._ano = anoNovo;
    }

    
    public static obtemLivros(caminho: string = 'livros.txt'): Livro[] {
        
        const livros: Livro[] = [];
        if (fs.existsSync(caminho)) {
        //le os dados do arquivo separando as linhas ("\n")
            const itens = fs.readFileSync(caminho, "utf-8").split("\n");

            for (let i = 0; i < itens.length; i++){
                const linha = itens[i];
                if (!linha) continue; // pula linhas vazias ou indefinidas

                const partes = linha.split(";");

                const titulo = partes[0];
                const autor = partes[1];
                const isbn = partes[2];
                const ano: number = Number(partes[3]) || 0;

                livros.push(new Livro(titulo, autor, isbn, ano));
            }
        }

        return livros;
    }
    
    private converte(): string { //converte as informações para string
        return `${this._titulo};${this._autor};${this._isbn};${this._ano}\n`;
    }
    
    public static salvarEmArquivo(caminho: string = 'livros.txt', livros: Livro[] = []): void {
        const itens = [];

        for(let i=0; i < livros.length; i++){
            itens.push(livros[i]?.converte());
        }

        fs.writeFileSync(caminho, itens.join(""), { encoding: "utf8" });
    }

    public static adicionarLivro(): Livro {

        const titulo: string = teclado("Titulo do livro:");
        const autor: string = teclado("Autor do livro:");
        const isbn: string = Util.gerarIsbn();
        const ano: number = +teclado("Ano de lançamento do livro:");

        console.log("Livro adicionado com sucesso!");
        
        return new Livro(titulo, autor, isbn, ano)
    }

    public static listarLivros(livros: Livro[]): void {
        console.log('+------Livros Cadastardos------+');
        
        for(let i=0; i < livros.length; i++){
            console.log(`${i+1}° - ${livros[i]?.titulo}`); //Começar a listar a partir do numero 1
        }
    }

    public static atualizarInformacoes(livros: Livro[]): void {
        this.listarLivros(livros);

        const num = +teclado("Escolha o livro que voce quer atualizar: ");
        const i = num-1;

        console.log("1. Titulo");
        console.log("2. Autor");
        console.log("3. ISBN");
        console.log("4. Ano de lançamento");
    

        const escolha: number = +teclado("Escolha o que voce quer alterar:");

            switch(escolha){
                case 1:
                    const tituloNovo = teclado("Digite o novo titulo: ");
                    livros[i]!.alterarTitulo(tituloNovo);
                    console.log("Titulo alterado com sucesso!");
                    break;
                case 2:
                    const autorNovo = teclado("Digite o novo titulo: ");
                    livros[i]!.alterarAutor(autorNovo);
                    console.log("Autor alterado com sucesso!");
                    break;
                case 3:
                    const isbnNovo = teclado("Digite o novo titulo: ");
                    livros[i]!.alterarIsbn(isbnNovo);
                    console.log("ISBN alterado com sucesso!");
                    break;
                case 4:
                    const anoNovo = +teclado("Digite o novo ano: ");
                    livros[i]!.alterarAno(anoNovo);
                    console.log("Ano alterado com sucesso!");
                    break;
                default:
                    console.log("Opção inválida!")
                    break;
            }
       
    }

    public static excluirLivro(livros: Livro[]): void {
        this.listarLivros(livros);

        const num = +teclado("Escolha o livro que voce quer excluir: ");
        const i = num-1;

        livros.splice(i);
        console.log("OK! Livro excluído com sucesso.");
    }
}
    
import { Membro } from "./Membro"
import { Livro } from "./Livro"
import Prompt from "prompt-sync"
import fs from 'fs';    
import { Util } from "./Util";

const teclado = Prompt();

export class Emprestimo {
    constructor(
        private _membro: string,
        private _livro: string,
        private _dataEmprestimo: Date | null = null, //data pode começar vazia
        private _dataDevolucao: Date | null = null

    ){}

    public get membro(): string {
        return this._membro;
    }
    
    public get livro(): string {
        return this._livro;
    }

    public get dataEmprestimo(): Date | null {
        return this._dataEmprestimo;
    }

    public get dataDevolucao(): Date | null {
        return this._dataDevolucao;
    }

    public static obtemEmprestimos(caminho: string): Emprestimo[] {
            const emprestimos: Emprestimo[] = [];
            
            if(fs.existsSync(caminho)) {
                const itens = fs.readFileSync(caminho, "utf-8").split("\n")
    
                for (let i = 0; i < itens.length; i++){
                    const linha = itens[i];
                    if(!linha) continue;
    
                    const partes = linha.split(";");
    
                    if (!partes[0] || !partes[1]) continue;
    
                    const membro = partes[0];
                    const livro = partes[1];
                    const dataEmprestimo = partes[2] ? new Date(partes[2]) : null; //condição se data existir
                    const dataDevolucao = partes[3] ? new Date(partes[3]) : null;
                    
                    emprestimos.push(new Emprestimo(membro, livro, dataEmprestimo, dataDevolucao));
                }
            }
            return emprestimos;
    }

    private converte(): string { //converte as informações para string
        return `${this._membro};${this._livro};${this._dataEmprestimo};${this._dataDevolucao}\n`;
    }

    public static salvarEmArquivo(caminho: string = 'emprestimos.txt', emprestimos: Emprestimo[] = []): void {
            const itens = [];
    
            for(let i=0; i < emprestimos.length; i++){
                itens.push(emprestimos[i]?.converte());
            }
    
            fs.writeFileSync(caminho, itens.join(""), { encoding: "utf8" });
    }

    public static realizarEmprestimo(livros: Livro[], membros: Membro[], livrosEmprestimo: Livro[], membrosEmprestimo: Membro[]): Emprestimo {
            Membro.listarMembros(membros);
            const numM = +teclado("Quem que vai realizar o emprestimo: ");
            const iM = numM-1;

            Livro.listarLivros(livros);
            const numL = +teclado("Qual o livro escolhido: ");
            const iL = numL-1;

            const membroSelecionado = membros[iM]!;
            const livroSelecionado = livros[iL]!;

            membrosEmprestimo.push(membroSelecionado);
            livrosEmprestimo.push(livroSelecionado);
            membros.splice(iM, 1);
            livros.splice(iL, 1);

            const dataEmprestimo = Util.gerarData();
            const dataDevolucao = new Date(dataEmprestimo.getTime() + 7 * 24 * 60 * 60 * 1000);
                    
            return new Emprestimo(membroSelecionado.nome, livroSelecionado.titulo, dataEmprestimo, dataDevolucao)
    }

    public static listarEmprestimosAtivos(emprestimosAtivos: Emprestimo[]){
        console.log('+------Emprestimos Ativos------+');

        for(let i=0; i < emprestimosAtivos.length; i++){
            console.log(`${i+1}° - ${emprestimosAtivos[i]?.membro} - ${emprestimosAtivos[i]?.livro} - ${emprestimosAtivos[i]?.dataEmprestimo} - ${emprestimosAtivos[i]?.dataDevolucao}`)
        }
    }

    public static listarHistoricoEmprestimos (emprestimos: Emprestimo[]){
        console.log('+------Historico de Emprestimos------+');

        for(let i=0; i < emprestimos.length; i++){
            console.log(`${i+1}° - ${emprestimos[i]?.membro} - ${emprestimos[i]?.livro} - ${emprestimos[i]?.dataEmprestimo} - ${emprestimos[i]?.dataDevolucao}`)
        }
    }

    public static devolverLivro (livros: Livro[], membros: Membro[], livrosEmprestimo: Livro[], membrosEmprestimo: Membro[], emprestimosAtivos: Emprestimo[]): void {
        Membro.listarMembros(membrosEmprestimo);
        const escolha = +teclado("Qual o seu nome: ");
        const numM = escolha-1;

        const livro = livrosEmprestimo[numM];
        const membro = membrosEmprestimo[numM];

        livros.push(new Livro(livro?.titulo, livro?.autor, livro?.isbn, livro?.ano));
        livrosEmprestimo.splice(numM, 1);

        membros.push(new Membro(membro?.nome, membro?.matricula, membro?.endereco, membro?.telefone));
        membrosEmprestimo.splice(numM, 1);

        emprestimosAtivos.splice(numM, 1); //Quando o membro devolve o livro o empréstimo deixa de ser ativo
    }
}
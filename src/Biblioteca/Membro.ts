import Prompt from "prompt-sync"
import fs from 'fs';
import { Pessoa } from "./Pessoa";
import { Util } from "./Util";

const teclado = Prompt();

export class Membro extends Pessoa {
    constructor(nome: string = "", matricula: string = "", endereco: string = "", telefone: string = "") {
        super(nome, matricula, endereco, telefone);
    }
    
    public get nome(): string {
        return this._nome;
    }
    
    public get matricula(): string {
        return this._matricula;
    }
    
    public get endereco(): string {
        return this._endereco;
    }
    
    public get telefone(): string {
        return this._telefone;
    }

    public alterarNome(nomeNovo: string) {
        this._nome = nomeNovo;
    }

    public alterarMatricula(matriculaNova: string) {
        this._matricula = matriculaNova;
    }
    
    public alterarEndereco(enderecoNovo: string) {
        this._endereco = enderecoNovo;
    }
    
    public alterarTelefone(telefoneNovo: string) {
        this._telefone = telefoneNovo;
    }

    public static obtemMembros(caminho: string): Membro[] {
        
        const membros: Membro[] = [];
        if(fs.existsSync(caminho)) {
            const itens = fs.readFileSync(caminho, "utf-8").split("\n")

            for (let i = 0; i < itens.length; i++){
                const linha = itens[i];
                if(!linha) continue;

                const partes = linha.split(";");

                const nome = partes[0];
                const matricula = partes[1];
                const endereco = partes[2];
                const telefone = partes[3];

                membros.push(new Membro(nome, matricula, endereco, telefone))
            }
        }

        return membros;
    } 

    private converte(): string {
        return `${this._nome};${this._matricula};${this._endereco};${this._telefone}\n`
    }

    public static salvarEmArquivo(caminho: string = 'membros.txt', membros: Membro[] = []): void {
        const itens = []

        for(let i=0; i < membros.length; i++){
            itens.push(membros[i]?.converte())
        }

        fs.writeFileSync(caminho, itens.join(""), { encoding: "utf8" });
    }

    public static adicionarMembro(): Membro {
        
        const nome =  Util.gerarNome();
        const matricula = Util.gerarMatricula();
        const endereco = Util.gerarEndereco();
        const telefone = Util.gerarTelefone();

        console.log("Membro adicionado com sucesso!");
        
        return new Membro(nome, matricula, endereco, telefone);
        
    }

    public static listarMembros(membros: Membro[]): void{
        console.log('+------Membros Cadastardos-----+');

        for(let i=0; i < membros.length; i++){
            console.log(`${i+1}° - ${membros[i]?.nome}`)
        }
    }

    public static atualizarInformacoes(membros: Membro[]): void {
        this.listarMembros(membros)

        const num = +teclado("Escolha o membro que voce quer atualizar: ")
        const i = num-1

        console.log("1. Nome")
        console.log("2. Matricula")
        console.log("3. Endereco")
        console.log("4. Telefone")
    

        const escolha: number = +teclado("Escolha o que voce quer alterar: ")

            switch(escolha){
                case 1:
                    const nomeNovo = teclado("Digite o novo nome: ");
                    membros[i]!.alterarNome(nomeNovo);
                    console.log("Nome alterado com sucesso!");
                    break;
                case 2:
                    const matriculaNova = teclado("Digite a nova matricula: ");
                    membros[i]!.alterarMatricula(matriculaNova);
                    console.log("Matricula alterada com sucesso!");
                    break;
                case 3:
                    const enderecoNovo = teclado("Digite o novo endereco: ");
                    membros[i]!.alterarEndereco(enderecoNovo);
                    console.log("Endereco alterado com sucesso!");
                    break;
                case 4:
                    const telefoneNovo = teclado("Digite o novo telefone: ");
                    membros[i]!.alterarTelefone(telefoneNovo);
                    console.log("Telefone alterado com sucesso!");
                    break;
                default:
                    console.log("Opção inválida!");
                    break;
            }
       
    }

    public static excluirMembro(membros: Membro[]): void {
        this.listarMembros(membros);

        const num = +teclado("Escolha o membro que voce quer excluir: ");
        const i = num-1;

        membros.splice(i, 1); //garante a remoção de apenas 1 elemento
        console.log("OK! Membro excluído com sucesso.");
    }

}
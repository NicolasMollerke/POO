import { Disciplina } from "./Disciplina";
import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa{
    private _turma: string = "";
    private _discplinasMatriculadas: Disciplina [] = [];
    
    private constructor(nome: string){ //private não deixa ser extendida
        super(nome);
    }
    static FabricaDeAluno(nome: string): Aluno{
        return new Aluno(nome)
    }

    public falar(): string{
        return "Aluno falando!"
    }

    public falaEspecial(){
        //Falar da própria classe
        this.falar();
        //Falar da classe mãe
        super.falar();
    }
}
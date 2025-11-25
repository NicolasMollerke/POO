export abstract class Pessoa {
    protected _nome: string;
    protected _matricula: string;
    protected _endereco: string;
    protected _telefone: string;

    constructor(nome: string = "", matricula: string = "", endereco: string = "", telefone: string = "") {
        this._nome = nome;
        this._matricula = matricula;
        this._endereco = endereco;
        this._telefone = telefone;
    }
    
    public abstract alterarNome(nomeNovo: string): void;
    
    public abstract alterarMatricula(nmatriculaNovo: string): void;
    
    public abstract alterarEndereco(enderecoNovo: string): void;
    
    public abstract alterarTelefone(telefoneNovo: string): void;

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

}





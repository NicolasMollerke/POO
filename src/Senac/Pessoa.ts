export class Pessoa{
    protected _nome: string;
    protected _cpf: string;
    protected _endereco: string;
    protected _estadoCivil: string;

    constructor(nome: string) {
        this._cpf = "";
        this._endereco = "";
        this._estadoCivil = "";
        this._nome = "";
    }


    public falar(): string{
        return "Pessoa falando!"
    }
}

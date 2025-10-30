export class GenericModel{
    protected _id: string = "";
    protected _nome: string = "";
    protected _criadoEm: Date = new Date();
    protected _atualiadoEm: Date = new Date();
    protected _removidoEm: Date | null = null;
}
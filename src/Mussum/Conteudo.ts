import { Aula } from "./Aula";
import { GenericModel } from "./GenericModel";

export class Conteudo extends GenericModel{
    private _aula: Aula = new Aula();
    private _url: string = "";
}
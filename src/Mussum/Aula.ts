import { Conteudo } from "./Conteudo";
import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Aula extends GenericModel{
    private _unidade: Unidade = new Unidade();
    private _conteudo: Conteudo [] = [];
}
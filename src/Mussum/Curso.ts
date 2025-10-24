import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Curso extends GenericModel{
    private _unidades: Unidade[] = [];
}
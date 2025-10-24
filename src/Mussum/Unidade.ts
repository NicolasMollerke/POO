import { Aula } from "./Aula";
import { Curso } from "./Curso";
import { GenericModel } from "./GenericModel";

export class Unidade extends GenericModel{
    private _cursos: Curso[] = [];
    private _aulas: Aula[] = [];
    private _ativa: boolean = true;

    constructor(){
        super();
    }
}
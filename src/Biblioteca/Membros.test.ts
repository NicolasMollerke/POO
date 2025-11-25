jest.mock('fs', () => ({
    existsSync: jest.fn(),
    readFileSync: jest.fn(),
    writeFileSync: jest.fn(),
}));

const tecladoMock = jest.fn();
jest.mock('prompt-sync', () => {
    return () => tecladoMock; 
});

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

jest.mock('./Util', () => ({
    Util: {
        gerarIsbn: jest.fn(() => "TEST-ISBN-123"),
        gerarNome: jest.fn(),
        gerarMatricula: jest.fn(),
        gerarEndereco: jest.fn(),
        gerarTelefone: jest.fn()
    }
}));

import { afterAll, beforeEach, describe, expect, jest, test } from "@jest/globals";
import { Membro } from "./Membro";
import fs from 'fs';
import Prompt from "prompt-sync";
import { Util } from "./Util";

const teclado = Prompt();

describe("Quando manipular o Membro", () => {

    beforeEach(() => {
        consoleLogSpy.mockClear(); 
        tecladoMock.mockClear();
    });

    afterAll(() => {
        consoleLogSpy.mockRestore();
    });

    test("deve adicionar um novo membro", () => {
            //Cenário
            const nomeEsperado = "João";
            const matriculaEsperada = "810016485";
            const enderecoEsperado = "587 Avenida Albuquerque Casa 6";
            const telefoneEsperado = "+55 (34) 0164-8855";
            (Util.gerarNome as jest.Mock).mockReturnValue(nomeEsperado);
            (Util.gerarMatricula as jest.Mock).mockReturnValue(matriculaEsperada);
            (Util.gerarEndereco as jest.Mock).mockReturnValue(enderecoEsperado);
            (Util.gerarTelefone as jest.Mock).mockReturnValue(telefoneEsperado);
    
            //Execução
            const novo = Membro.adicionarMembro();
    
            //Validação
            expect(novo.nome).toBe(nomeEsperado);
            expect(novo.matricula).toBe(matriculaEsperada);
            expect(novo.endereco).toBe(enderecoEsperado);
            expect(novo.telefone).toBe(telefoneEsperado);
        })
    test("deve alterar matricula do mebro", () => {
        //Cenário
        const membros: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ]

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")  
        .mockReturnValueOnce("2")
        .mockReturnValueOnce("102445143");
        Membro.atualizarInformacoes(membros)

        //Validação
        expect(membros[0]?.matricula).toBe("102445143")
    })
    test("deve alterar endereço do mebro", () => {
        //Cenário
        const membros: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ]

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")  
        .mockReturnValueOnce("3")
        .mockReturnValueOnce("39294 Alameda Beatriz Sobrado 10");
        Membro.atualizarInformacoes(membros)

        //Validação
        expect(membros[0]?.endereco).toBe("39294 Alameda Beatriz Sobrado 10")
    })
    test("deve alterar telefone do mebro", () => {
        //Cenário
        const membros: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ]

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")  
        .mockReturnValueOnce("4")
        .mockReturnValueOnce("55 (57) 9753-8749");
        Membro.atualizarInformacoes(membros)

        //Validação
        expect(membros[0]?.telefone).toBe("55 (57) 9753-8749")
    })
    test("deve listar membros adicionados", () => {
        //Cenário
        const membros: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ];
    
        //Execução
        const lista = Membro.listarMembros(membros);
    
        //Validação
        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        expect(lista).toBe(undefined);
    })
    test("deve excluir um membro", () => {
         //Cenário
        const membros: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ];
    
        //Execução
        tecladoMock
        .mockReturnValueOnce("1")
        Membro.excluirMembro(membros);
    
        //Validação
        expect(membros.length).toBe(0);
    })

})
jest.mock('fs', () => ({
    existsSync: jest.fn(),
    readFileSync: jest.fn(),
    writeFileSync: jest.fn(),
}));

const tecladoMock = jest.fn();
jest.mock('prompt-sync', () => {
    return () => tecladoMock; 
});

jest.mock('./Util', () => ({
    Util: {
        gerarData: jest.fn()
    }
}));

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

import { afterAll, beforeEach, describe, expect, jest, test } from "@jest/globals";
import { Emprestimo } from "./Emprestimo";
import { Membro } from "./Membro";
import { Livro } from "./Livro";
import fs from 'fs';
import Prompt from "prompt-sync";
import { Util } from "./Util";

const teclado = Prompt();

describe("Quando manipular o Emprestimo", () => {

    beforeEach(() => {
        consoleLogSpy.mockClear(); 
        tecladoMock.mockClear();
    });

    afterAll(() => {
        consoleLogSpy.mockRestore();
    });

    test("deve realizar um empréstimo", () => {
        //Cenário
        const membros: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ]
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];
        const livrosEmprestimo: Livro[] = [];
        const membrosEmprestimo: Membro[] = [];
        const emprestimos: Emprestimo[] = [];
    
        //Execução
        const dataEmprestimoMock = new Date(2025, 9, 16, 15, 5, 33);
        (Util.gerarData as jest.Mock).mockReturnValue(dataEmprestimoMock);
        const dataDevolucaoMock = new Date(dataEmprestimoMock.getTime() + 7 * 24 * 60 * 60 * 1000); //soma 7 dias a data de emprestimo
        tecladoMock
        .mockReturnValueOnce("1")
        .mockReturnValueOnce("1");
        const novoE = Emprestimo.realizarEmprestimo(livros, membros, livrosEmprestimo, membrosEmprestimo);
        emprestimos.push(novoE);
    
        //Validação
        expect(emprestimos[0]?.membro).toBe("João");
        expect(emprestimos[0]?.livro).toBe("O Pequeno Príncipe");
        expect(emprestimos[0]?.dataEmprestimo).toEqual(dataEmprestimoMock); //toEqual compara o conteudo
        expect(emprestimos[0]?.dataDevolucao).toEqual(dataDevolucaoMock);
        expect(membros.length).toBe(0);
        expect(livros.length).toBe(0);
        expect(livrosEmprestimo.length).toBe(1);
        expect(membrosEmprestimo.length).toBe(1);
    })
    test("deve listar os Emprestimos ativos", () => {
         //Cenário
        const emprestimosAtivos: Emprestimo[] = [
            new Emprestimo("Warley Barros", "O Senhor dos Anéis", new Date("Thu Oct 16 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília"), new Date("Thu Oct 23 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília"))
        ];
    
        //Execução
        const lista = Emprestimo.listarEmprestimosAtivos(emprestimosAtivos);
    
        //Validação
        expect(consoleLogSpy).toHaveBeenCalledTimes(2); //+------Emprestimos Ativos------+ e 1° - Warley Barros - O Senhor dos Anéis - Thu Oct 16 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília - Thu Oct 23 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília
        expect(lista).toBe(undefined); //listarEmprestimosAtivos não retorna nada
    })
    test("deve devolver o livro", () => {
         //Cenário
        const membros: Membro[] = []
        const livros: Livro[] = [];
        const livrosEmprestimo: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];
        const membrosEmprestimo: Membro[] = [
            new Membro("João", "810016485", "587 Avenida Albuquerque Casa 6", "+55 (34) 0164-8855")
        ];
        const emprestimosAtivos: Emprestimo[] = [
            new Emprestimo("Warley Barros", "O Senhor dos Anéis", new Date("Thu Oct 16 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília"), new Date("Thu Oct 23 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília"))
        ];
    
        //Execução
        tecladoMock
        .mockReturnValueOnce("1")
        .mockReturnValueOnce("1");
        Emprestimo.devolverLivro(livros, membros, livrosEmprestimo, membrosEmprestimo, emprestimosAtivos);
    
        //Validação
        expect(membros.length).toBe(1);
        expect(livros.length).toBe(1);
        expect(livrosEmprestimo.length).toBe(0);
        expect(membrosEmprestimo.length).toBe(0);
        expect(emprestimosAtivos.length).toBe(0);
    })
    test("deve listar o historico de Emprestimo", () => {
         //Cenário
        const emprestimos: Emprestimo[] = [
            new Emprestimo("Warley Barros", "O Senhor dos Anéis", new Date("Thu Oct 16 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília"), new Date("Thu Oct 23 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília"))
        ];
    
        //Execução
        const lista = Emprestimo.listarHistoricoEmprestimos(emprestimos);
    
        //Validação
        expect(consoleLogSpy).toHaveBeenCalledTimes(2); //+------Historico de Emprestimos------+ e 1° - Warley Barros - O Senhor dos Anéis - Thu Oct 16 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília - Thu Oct 23 2025 15:05:33 GMT-0300 (Horário Padrão de Brasília
        expect(lista).toBe(undefined); //listarEmprestimos não retorna nada
    })

})
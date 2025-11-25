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
    }
}));

import { afterAll, beforeEach, describe, expect, jest, test } from "@jest/globals";
import { Livro } from "./Livro";
import fs from 'fs';
import Prompt from "prompt-sync";
import { Util } from "./Util";

const teclado = Prompt();

describe("Quando manipular o Livro", () => {

    beforeEach(() => { //zera o número de chamadas do consoleLogSpy entre cada teste
        consoleLogSpy.mockClear();
        tecladoMock.mockClear(); 
    });

    afterAll(() => {
        consoleLogSpy.mockRestore();
    });

    test("deve adicionar um novo livro", () => {
        //Cenário
        tecladoMock
        .mockReturnValueOnce("O Morro dos Ventos Uivantes")
        .mockReturnValueOnce("Emily Bronte")              
        .mockReturnValueOnce("1847");
        const isbnEsperado = "978-857186196-1";
        (Util.gerarIsbn as jest.Mock).mockReturnValue(isbnEsperado);

        //Execução
        const novo = Livro.adicionarLivro();

        //Validação
        expect(novo.titulo).toBe("O Morro dos Ventos Uivantes");
        expect(novo.autor).toBe("Emily Bronte");
        expect(novo.isbn).toBe(isbnEsperado);
        expect(novo.ano).toBe(1847);
    })
    test("deve alterar titulo do livro", () => {
        //Cenário
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")  
        .mockReturnValueOnce("1")
        .mockReturnValueOnce("Crime e Castigo");
        Livro.atualizarInformacoes(livros); //assim posso deixar o método privado

        //Validação
        expect(livros[0]?.titulo).toBe("Crime e Castigo");
    })
    test("deve alterar autor do livro", () => {
        //Cenário
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];

        //Execução
        tecladoMock
        .mockReturnValueOnce("1") 
        .mockReturnValueOnce("2")
        .mockReturnValueOnce("Machado de Assis")
        Livro.atualizarInformacoes(livros);

        //Validação
        expect(livros[0]?.autor).toBe("Machado de Assis");
    })
    test("deve alterar isbn do livro", () => {
        //Cenário
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")  
        .mockReturnValueOnce("3")
        .mockReturnValueOnce("3123412412210")
        Livro.atualizarInformacoes(livros);

        //Validação
        expect(livros[0]?.isbn).toBe("3123412412210");
    })
    test("deve alterar ano de lançamento do livro", () => {
        //Cenário
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")  
        .mockReturnValueOnce("4")
        .mockReturnValueOnce(1945);
        Livro.atualizarInformacoes(livros) //assim posso deixar o método privado

        //Validação
        expect(livros[0]?.ano).toBe(1945)
    })
    test("deve listar livros adicionados", () => {
        //Cenário
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];

        //Execução
        const lista = Livro.listarLivros(livros);

        //Validação
        expect(consoleLogSpy).toHaveBeenCalledTimes(2); //+------Livros Cadastardos------+ e 1° - O Pequeno Príncipe
        expect(lista).toBe(undefined); //listarLivro não retorna nada
    })
    test("deve excluir um livro", () => {
        //Cenário
        const livros: Livro[] = [
            new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", "9788599426210", 1943),
        ];

        //Execução
        tecladoMock
        .mockReturnValueOnce("1")
        Livro.excluirLivro(livros);

        //Validação
        expect(livros.length).toBe(0);
    })

})
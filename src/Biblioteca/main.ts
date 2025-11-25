import { Livro } from "./Livro";
import Prompt from "prompt-sync"
const teclado = Prompt();
import { Membro } from "./Membro";
import { Emprestimo } from "./Emprestimo";

const livros: Livro[] = Livro.obtemLivros('src/Biblioteca/livros.txt');
const livrosEmprestimo: Livro[] = Livro.obtemLivros('src/Biblioteca/livrosEmprestimo.txt');
const membros: Membro[] = Membro.obtemMembros('src/Biblioteca/membros.txt');
const membrosEmprestimo: Membro[] = Membro.obtemMembros('src/Biblioteca/membrosEmprestimo.txt')
const emprestimosAtivos: Emprestimo[] = Emprestimo.obtemEmprestimos('src/Biblioteca/emprestimosAtivos.txt');
const emprestimos: Emprestimo[] = Emprestimo.obtemEmprestimos('src/Biblioteca/emprestimos.txt');

while (true){

console.log("+-------------MENU-------------+");
console.log("|1. Adicionar livro            |");
console.log("|2. Listar livros cadastrados  |");
console.log("|3. Atualizar livro            |");
console.log("|4. Excluir livro              |");
console.log("|5. Adicionar Membro           |");
console.log("|6. Listar Membros             |");
console.log("|7. Atualizar Membro           |");
console.log("|8. Excluir Membro             |");
console.log("|9. Realizar Emprestimo        |");
console.log("|10.Listar Emprestimos Ativos  |");
console.log("|11.Devolver Livro             |");
console.log("|12.Historico de Emprestimos   |");
console.log("+--------------------------+");

const escolha: number = +teclado("Escolha uma opção do menu:")

    if (escolha === 13){
        break;
    }
    switch(escolha){
        case 1:
            const novoL = Livro.adicionarLivro();
            livros.push(novoL);
            break;
        case 2:
            Livro.listarLivros(livros);
            break;
        case 3:
            Livro.atualizarInformacoes(livros);
            break;
        case 4:
            Livro.excluirLivro(livros);
            break;
        case 5:
            const novoM = Membro.adicionarMembro();
            membros.push(novoM);
            break;
        case 6:
            Membro.listarMembros(membros);
            break;
        case 7:
            Membro.atualizarInformacoes(membros);
            break;
        case 8:
            Membro.excluirMembro(membros);
            break;
        case 9:
            const novoE = Emprestimo.realizarEmprestimo(livros, membros, livrosEmprestimo, membrosEmprestimo);
            emprestimos.push(novoE);
            emprestimosAtivos.push(novoE)
            break;
        case 10:
            Emprestimo.listarEmprestimosAtivos(emprestimosAtivos);
            break;
        case 11:
            Emprestimo.devolverLivro(livros, membros, livrosEmprestimo, membrosEmprestimo, emprestimosAtivos);
            break;
        case 12:
            Emprestimo.listarHistoricoEmprestimos(emprestimos);
            break;
        default:
            console.log("Opção inválida!")
            break;
    }
}

Emprestimo.salvarEmArquivo('src/Biblioteca/emprestimos.txt', emprestimos);
Emprestimo.salvarEmArquivo('src/Biblioteca/emprestimosAtivos.txt', emprestimosAtivos);
Livro.salvarEmArquivo('src/Biblioteca/livros.txt', livros);
Livro.salvarEmArquivo('src/Biblioteca/livrosEmprestimo.txt', livrosEmprestimo);
Membro.salvarEmArquivo('src/Biblioteca/membros.txt', membros);
Membro.salvarEmArquivo('src/Biblioteca/membrosEmprestimo.txt', membrosEmprestimo);


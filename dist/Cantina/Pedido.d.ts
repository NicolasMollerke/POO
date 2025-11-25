import { Cliente } from "./Cliente";
import { Item } from "./Item";
export declare class Pedido {
    itens: Item[];
    cliente: Cliente;
    status: string;
    numero: string;
    valorPagar: number;
    constructor(cliente: Cliente);
    cancelarPedido(): void;
    alterarStatus(status: string): void;
    adicionarItem(item: Item): void;
    obterCliente(): Cliente;
    atualizarValorPagar(): void;
    removerItem(codigo: string): void;
}
//# sourceMappingURL=Pedido.d.ts.map
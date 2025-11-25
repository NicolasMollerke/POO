"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Item_1 = require("./Item");
(0, globals_1.describe)("Quando manipular o item", () => {
    (0, globals_1.test)("deve calcular o preço final corretamente sem desconto", () => {
        //Cenário
        const preco_item = 10;
        const it = new Item_1.Item();
        it.preco = preco_item;
        it.nome = "Derby";
        //Execução
        const precoFinal = it.obterPrecoFinal();
        //Validação
        (0, globals_1.expect)(precoFinal).toBe(preco_item);
    });
    (0, globals_1.test)("deve aplicar um desconto e calcular o preço final corretamente", () => {
        //Cenário
        const preco_item = 20;
        const it = new Item_1.Item();
        it.preco = preco_item;
        //Execução
        it.aplicarDesconto(10);
        const precoFinal = it.obterPrecoFinal();
        //Validação
        (0, globals_1.expect)(precoFinal).toBe(18);
    });
    (0, globals_1.test)("deve indicar que não está em promoção se não houver desconto", () => {
        //Cenário
        const it = new Item_1.Item();
        it.preco = 20;
        //Execução
        const promo = it.emPromocao();
        //Validação
        (0, globals_1.expect)(promo).toBe(false);
    });
    (0, globals_1.test)("deve indicar que está em promoção após aplicar um desconto", () => {
        //Cenário
        const it = new Item_1.Item();
        it.preco = 20;
        //Execução
        it.aplicarDesconto(10);
        const promo = it.emPromocao();
        //Validação
        (0, globals_1.expect)(promo).toBe(true);
    });
});
//# sourceMappingURL=Item.test.js.map
import { describe, expect, test } from "@jest/globals";
import { Item } from "./Item";


describe("Quando manipular o item", () => {

    test("deve calcular o preço final corretamente sem desconto", () => {
        //Cenário
        const preco_item = 10;
        const it: Item = new Item();
        it.preco = preco_item
        it.nome = "Derby"

        //Execução
        const precoFinal = it.obterPrecoFinal()

        //Validação
        expect(precoFinal).toBe(preco_item)
    })

    test("deve aplicar um desconto e calcular o preço final corretamente", () => {
        //Cenário
        const preco_item = 20;
        const it: Item = new Item();
        it.preco = preco_item

        //Execução
        it.aplicarDesconto(10)
        const precoFinal = it.obterPrecoFinal()

        //Validação
        expect(precoFinal).toBe(18)
    })

    test("deve indicar que não está em promoção se não houver desconto", () => {
        //Cenário
        const it: Item = new Item();
        it.preco = 20


        //Execução
        const promo = it.emPromocao()

        //Validação
        expect(promo).toBe(false)
    })
    
    test("deve indicar que está em promoção após aplicar um desconto", () => {
        //Cenário
        const it: Item = new Item();
        it.preco = 20


        //Execução
        it.aplicarDesconto(10)
        const promo = it.emPromocao()

        //Validação
        expect(promo).toBe(true)
    })
})
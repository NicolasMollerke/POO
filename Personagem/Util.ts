import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util{

    static gerarNumeroAleatorio(minimo: number, maximo: number): number{ //estatico
        return minimo + Math.round (Math.random() * (maximo - minimo))
    }

    static gerarNome(): string{
        const randomName = faker.person.firstName();
        return randomName
    }
    
    static gerarEmail(nome){
        return faker.internet.email
    }
}

for (let index = 0; index < 10; index++) {
    const nome = Util.gerarNome()
    const email = Util.gerarEmail(nome)
}
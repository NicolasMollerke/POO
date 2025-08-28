import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util{

    static gerarNumeroAleatorio(minimo: number, maximo: number): number{ //estatico
        return minimo + Math.round (Math.random() * (maximo - minimo))
    }

    static gerarNome(): string{
        const randomName = faker.person.firstName();
        return randomName
    }
}

for (let index = 0; index < 10; index++) {
    const nome = Util.gerarNome()
}
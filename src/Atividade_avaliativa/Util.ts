import { faker } from '@faker-js/faker';

export class Util{
    static gerarNome(): string{
        const randomName = faker.person.firstName();
        return randomName
    }

    static gerarNumeroAleatorio(minimo: number, maximo: number): number{ //estatico
        return minimo + Math.round (Math.random() * (maximo - minimo))
    }


    static gerarForca(){
        return Math.round(Math.random() * 1000);
    }
}
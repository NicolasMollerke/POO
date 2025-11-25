import { fakerPT_BR as faker } from '@faker-js/faker';

export class Util{
    static gerarIsbn(): string {
        return faker.string.numeric(13);
    }

    static gerarNome(): string {
        return faker.person.fullName();
    }

    static gerarMatricula(): string {
        return faker.string.numeric(9);
    }

    static gerarEndereco(): string {
        return faker.location.streetAddress(true);
    }

    static gerarTelefone(): string {
        return faker.phone.number();
    }

    static gerarData(): Date {
        return faker.date.anytime();
    }
}
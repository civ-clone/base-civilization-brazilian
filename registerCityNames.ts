import Brazilian from './Brazilian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

// The first is the capital.
(
  [
    'Rio de Janeiro',
    'São Paulo',
    'Salvador',
    'Brasília',
    'Recife',
    'Belo Horizonte',
    'Fortaleza',
    'Manaus',
    'Belém',
    'Curitiba',
    'Porto Alegre',
    'Goiânia',
    'São Luís',
    'Natal',
    'Florianópolis',
    'Vitória',
    'Campinas',
    'Santos',
    'Ouro Preto',
    'Olinda',
    'João Pessoa',
    'Maceió',
    'Aracaju',
    'Teresina',
    'Cuiabá',
    'Campo Grande',
    'Porto Velho',
    'Macapá',
    'Boa Vista',
    'Petrópolis',
    'Paraty',
  ] as string[]
).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Brazilian, i === 0))
);

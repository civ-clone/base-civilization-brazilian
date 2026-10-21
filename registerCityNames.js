"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Brazilian_1 = require("./Brazilian");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
// The first is the capital.
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
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Brazilian_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map
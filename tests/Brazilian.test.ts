import { PedroII } from '../Leaders';
import Brazilian from '../Brazilian';
import Leader from '@civ-clone/core-civilization/Leader';
import { expect } from 'chai';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';
import '../index';

describe('Brazilian', (): void => {
  it('has a people, a nation and two colours', (): void => {
    const attributes = Object.fromEntries(
      attributeRegistryInstance
        .getByCivilization(Brazilian)
        .map((attribute) => [attribute.name(), attribute.value()])
    );

    expect(attributes.people).to.equal('Brazilian');
    expect(attributes.nation).to.equal('Brazil');
    expect(attributes.colors).to.have.lengthOf(2);
    attributes.colors.forEach((color: string) =>
      expect(color).to.match(/^#([0-9A-F]{3}|[0-9A-F]{6})$/i)
    );
  });

  it('has city names, all different, with its capital first', (): void => {
    const cityNames = cityNameRegistryInstance
      .entries()
      .filter((cityName) => cityName.civilization() === Brazilian);

    expect(cityNames.length).to.be.at.least(30);
    expect(new Set(cityNames.map((cityName) => cityName.name())).size).to.equal(
      cityNames.length
    );
    expect(
      cityNames
        .filter((cityName) => cityName.capital())
        .map((cityName) => cityName.name())
    ).to.eql(['Rio de Janeiro']);
  });

  it('has leaders of the Brazilians', (): void => {
    ([[PedroII, 'Pedro II']] as [typeof Leader, string][]).forEach(
      ([LeaderType, name]) => {
        expect(LeaderType.civilization()).to.equal(Brazilian);
        expect(new LeaderType().name()).to.equal(name);
      }
    );
  });
});

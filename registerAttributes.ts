import Brazilian from './Brazilian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Brazilian',
  nation: 'Brazil',
  colors: ['#00A6A6', '#FFDF00'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Brazilian, name, value))
);

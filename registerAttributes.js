"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Brazilian_1 = require("./Brazilian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Brazilian',
    nation: 'Brazil',
    colors: ['#00A6A6', '#FFDF00'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Brazilian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map
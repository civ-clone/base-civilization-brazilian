import Leader from '@civ-clone/core-civilization/Leader';
import Civilization from '@civ-clone/core-civilization/Civilization';
import Brazilian from '../Brazilian';

export class PedroII extends Leader {
  static civilization(): typeof Civilization {
    return Brazilian;
  }

  name(): string {
    return 'Pedro II';
  }
}

export default PedroII;

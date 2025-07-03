// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/04-arrows');
// const { getAge, getUUID } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');

import { buildLogger } from './plugins/logger.plugin';

const logger = buildLogger('app.js');
logger.log('Hola Mundo');
logger.error('Esto es algo malo');

// const info = getPokemonById(3)
//     .then(pokemon => console.log({pokemon}))
//     .catch((err) => console.error(err))
//     .finally(() => console.log('Finalmente'));

// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson(obj);
// console.log({ john });

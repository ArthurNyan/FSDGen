const createTemplate = require('./createTemplate');

const layer = 'shared';
const sliceName = process.argv[2];

if (!sliceName) {
  throw new Error('Укажите название компонента');
}

createTemplate(layer, sliceName);

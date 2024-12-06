const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const firstCharUpperCase = require('../helpers/firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);

  try {
    await fs.writeFile(
      resolveRoot('src', layer, 'ui', sliceName, 'index.ts'),
      `export { ${componentName} } from './${componentName}';`,
    );
  } catch (e) {
    console.error('Не удалось создать PUBLIC API');
  }
};

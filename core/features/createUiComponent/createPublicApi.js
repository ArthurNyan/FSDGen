const fs = require('fs/promises');
const resolveRoot = require('../../lib/resolveRoot');
const firstCharUpperCase = require('../../lib/firstCharUpperCase');

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

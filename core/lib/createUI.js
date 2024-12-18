const fs = require('fs/promises');
const firstCharUpperCase = require('./firstCharUpperCase');
const componentTemplate = require('../templates/componentTemplate');
const storyTemplate = require('../templates/storyTemplate');
const styleTemplate = require('../templates/styleTemplate');

module.exports = async (layer, sliceName, resolveUIPath) => {
  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName);
      await fs.mkdir(resolveUIPath(componentName));
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName),
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      );
    } catch (e) {
      console.error('Не удалось создать компонент');
    }
  };

  await createComponent();
};

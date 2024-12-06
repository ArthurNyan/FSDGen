const fs = require('fs/promises');
const resolveRoot = require('../../helpers/resolveRoot');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.error(
        `Не удалось создать model сегмент для слайса ${sliceName}`,
        e,
      );
    }
  };


  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.error('Не удалось создать тип схемы стейта', e);
    }
  };

  await createModelStructure();
  await createSchemaType();
};

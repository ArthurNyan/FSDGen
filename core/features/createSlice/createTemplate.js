const fs = require('fs/promises');
const resolveRoot = require('../../lib/resolveRoot');
const createModel = require('./createModel');
const createUI = require('../../lib/createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    console.error(`не удалось создать директорию для слайса ${sliceName}`);
  }

  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath());
    } catch (e) {
      console.error('Не удалось создать UI директорию');
    }
  };

  await createModel(layer, sliceName);

  await createUIDir();
  await createUI(layer, sliceName, resolveUIPath);
  await createPublicApi(layer, sliceName);
};

const resolveRoot = require('../helpers/resolveRoot');
const createUI = require('./createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, 'ui', ...segments);

  await createUI(layer, sliceName, resolveUIPath);
  await createPublicApi(layer, sliceName);
};

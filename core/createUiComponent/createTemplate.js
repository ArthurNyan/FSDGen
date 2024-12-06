const resolveRoot = require('../helpers/resolveRoot');
const createUI = require('../helpers/createUI');
const createPublicApi = require('./templates/createPublicApi');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot('src', layer, 'ui', ...segments);

  await createUI(layer, sliceName, resolveUIPath);
  await createPublicApi(layer, sliceName);
};

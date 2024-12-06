const resolveRoot = require('../../lib/resolveRoot');
const createUI = require('../../lib/createUI');
const createPublicApi = require('./createPublicApi');

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) =>
    resolveRoot(process.cwd(), 'src', layer, 'ui', ...segments);

  await createUI(layer, sliceName, resolveUIPath);
  await createPublicApi(layer, sliceName);
};

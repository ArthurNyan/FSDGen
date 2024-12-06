const firstCharUpperCase = require('../../lib/firstCharUpperCase');

module.exports = (
  sliceName,
) => `export interface ${firstCharUpperCase(sliceName)}Schema {

}`;

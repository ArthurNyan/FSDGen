const firstCharUpperCase = require('../../helpers/firstCharUpperCase');

module.exports = (
  sliceName,
) => `export interface ${firstCharUpperCase(sliceName)}Schema {

}`;

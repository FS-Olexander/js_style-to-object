'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString.split(';');

  const filtered = lines
    .map((line) => line.replaceAll(';', ''))
    .filter((line) => line.trim() !== '');

  const keyValues = filtered.map((line) => line.split(':', 2));

  keyValues.forEach(([key, value]) => {
    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;

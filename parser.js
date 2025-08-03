import customEntities from './entities.js';

export function parseCustomEntities(text) {
  return text.replace(/&([a-zA-Z0-9]+);/g, (match, key) => {
    const entity = customEntities[key];
    return entity ? entity : match;
  });
}

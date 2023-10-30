const checkNames = require('./app');

test('should return an array with the correct names - all names without x', () => {
  const result = checkNames(['Momo', 'Hadji', 'Leo']);
  expect(result).toEqual(['Momo', 'Hadji', 'Leo']);
});

test('should return only one name as the rest contains the letter x', () => {
  const result = checkNames(['DMX', 'Xzibit', 'JeanKevin']);
  expect(result).toEqual(['JeanKevin']);
});

test('should return only one name as xena contains the letter x', () => {
  const result = checkNames(['JC', 'Leo', 'xena']);
  expect(result).toEqual(['JC', 'Leo']);
});
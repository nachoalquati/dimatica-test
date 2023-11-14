import { expect, test } from '@jest/globals';

function getCapitalizeFirstWord(name: string): string {
  if (name == null) {
    throw new Error('Failed to capitalize first word with null');
  }
  if (!name) {
    return name;
  }
  return name.split(' ').map(
    n => n.length > 1 ? (n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()) : n
  ).join(' ');
}

test('1. Test lower case sentence', async function () {
    const result = getCapitalizeFirstWord('dimatica software');
  expect(result).toBe('Dimatica Software');
});

test('2. Test empty string', async function () {
    const result = getCapitalizeFirstWord('');
  expect(result).toBe('');
});


test('3. Test error for null input', function () {
    expect(() => getCapitalizeFirstWord(null)).toThrowError('Failed to capitalize first word with null');
});




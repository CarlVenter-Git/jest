const check_list = require('./index');

describe("Additional check_list Tests", () => {
  test('number divisible by 3', () => {
      expect(check_list([3, 6, 9])).toBe('fizz, fizz, fizz');
  });

  test('number divisible by 5', () => {
      expect(check_list([5, 10, 20])).toBe('buzz, buzz, buzz');
  });

  test('number divisible by both 3 and 5', () => {
      expect(check_list([15, 30, 45])).toBe('fizzbuzz, fizzbuzz, fizzbuzz');
  });

  test('number not divisible by 3 or 5', () => {
      expect(check_list([1, 2, 4])).toBe('1, 2, 4');
  });

  test('mixed numbers', () => {
      expect(check_list([1, 3, 5, 15])).toBe('1, fizz, buzz, fizzbuzz');
  });

  test('empty list', () => {
      expect(check_list([])).toBe('');
  });
});
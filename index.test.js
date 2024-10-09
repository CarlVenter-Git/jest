const check_list = require('./index');

describe("Index.html Tests", () => {
    test('true', () => {
      expect(check_list([3])).toBe('fizz');
    });

    test('false', () => {
      expect(check_list([5])).toBe('buzz');
    });

    test('true', () => {
      expect(check_list([15])).toBe('fizzbuzz');
    });

    test('true', () => {
      expect(check_list([3])).toBe('fizz');
    });

});
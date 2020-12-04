import dynamodb from '../../../src/database/dynamodb';

describe('', () => {
  test('Dynamo is an object', () => {
    expect(typeof dynamodb).toBe('object');
  });
});

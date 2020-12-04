module.exports = {
  tables: [
      {
          TableName: 'prueba-tecnica2',
          KeySchema: [
              {
                  AttributeName: 'id',
                  KeyType: 'HASH',
              },
          ],
          AttributeDefinitions: [
              {
                  AttributeName: 'id',
                  AttributeType: 'S',
              },
          ],
          BillingMode: 'PAY_PER_REQUEST',
      },
  ],
};
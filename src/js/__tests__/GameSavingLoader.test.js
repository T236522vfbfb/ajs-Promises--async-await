import GameSavingLoader from './GameSavingLoader.js';

test('should return test data', async () => {
  const expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  const recived = await GameSavingLoader.load();
  expect(recived).toBe(expected);
});
import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i++) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('decoding data from assignment', () => {
  const buffer = getBuffer();
  const result = ArrayBufferConverter.toString(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(result).toBe(expected);
});

test('encoding and decoding returns initial data', () => {
  const initialData = 'this is my sample string';
  const buffer = ArrayBufferConverter.load(initialData);
  const data = ArrayBufferConverter.toString(buffer);

  expect(data).toBe(initialData);
});

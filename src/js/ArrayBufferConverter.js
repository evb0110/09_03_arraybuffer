class ArrayBufferConverter {
  static load(str) {
    const buffer = new ArrayBuffer(str.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < str.length; i++) {
      bufferView[i] = str.charCodeAt(i);
    }
    return buffer;
  }

  static toString(buffer) {
    const bufferView = new Uint16Array(buffer);
    return bufferView.reduce((acc, el) => acc + String.fromCharCode(el), '');
  }
}

export default ArrayBufferConverter;

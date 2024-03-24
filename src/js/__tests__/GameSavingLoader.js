import json from '../Parser/parser.js';
import read from '../Reader/reader.js';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data));
  }
}
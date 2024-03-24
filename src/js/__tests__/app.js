import GameSavingLoader from '../GameSavingLoader/GameSavingLoader.js';

GameSavingLoader.load().then((saving) => saving, (error) => console.log(error));
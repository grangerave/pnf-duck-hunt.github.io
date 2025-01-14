import StorageManager from '../models/StorageManager.js';
import { setupFormModal } from './DialogHandler.js';
import { retrieveRecentScoresLoader } from './SpinnerHandler.js';
import { createGame} from './ServiceController.js';

const setGameTitle = (gameName) => {
  const gameNameSpan = document.querySelector('.gameName');
  gameNameSpan.innerHTML = gameName;
  gameNameSpan.style.fontStyle = 'italic';
};

const startLeaderBoard = () => {
  const gameData = StorageManager.getData();
  if (gameData.length === 0) {
    setGameTitle(createGame());
  }else{
    setGameTitle(gameData.gameName);
  }
  return retrieveRecentScoresLoader();
};

export { startLeaderBoard, setGameTitle };

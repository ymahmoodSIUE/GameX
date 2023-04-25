////Updating game by Milad
const games = [];

class Game {
  constructor(name, icon, timeLimit, premiumVersion) {
    this.id = Date.now(); //uniq identifier
    this.name = name;
    this.icon = icon;
    this.timeLimit = timeLimit;
    this.premiumVersion = premiumVersion;
    this.totalTimePlayed = 0;
    this.numberOfTimesPlayed = 0;
    this.avgScore = 0;
    this.highestScore = 0;
    this.ranking = 0;
  }
}


class GameController {
  updateGames(id, name, icon, timeLimit, premiumVersion) {
    const gameItem = games.find((item) => item.id === id);
    if (gameItem) {
      gameItem.name = name;
      gameItem.icon = icon;
      gameItem.timeLimit = timeLimit;
      gameItem.premiumVersion = premiumVersion;

      const games = games.filter((item) => item.id !== id);
      games.push(gameItem);
      return "update successful.";
    } else {
      return "update failed.";
    }
  }
}
const updateBtn = document.querySelector(".update-game");
console.log(updateBtn);

if (updateBtn) {
  updateBtn.addEventListener("click", updateGameHandler);
}

function updateGameHandler(e) {
  e.preventDefault();
  const gameName = document.querySelector(".game-name").value;
  const icon = document.querySelector(".Icon").value;
  const timeLimit = document.querySelector(".time-limit").value;
  const premiumVersion = document.querySelector(".premium-version").value;
  const gameCtrl = new GameController();

  gameCtrl.updateGames(gameName, icon, timeLimit, premiumVersion);
  window.location.href = "main.html?update=successful";
}

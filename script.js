const gameNames = ["Asteroid", "Packman", "Space Invaders", "Tetris"]
const generalStats = ["Total time"]
var games = []; 

function onLoad() {
    initializeGames(); 
    printGames();
    printGeneralStats(); 
    printGameSpecificStats(); 
}

function initializeGames() {
    for (let i = 0; i < gameNames.length; i++) {
         var game = new Game(gameNames[i])
         games[i] = game; 
    }
}

function printGames() {
    var gamestList = document.getElementById('gamesList');
    var gamesListHTML = "<ul>";
    for (let i = 0; i < games.length; i++) {
        gamesListHTML += "<li>" + games[i].name + "</li>"; 
    }
    gamesListHTML +="</ul>";
    gamestList.innerHTML = gamesListHTML; 
} 

function printGeneralStats() {
    var generalStatsList = document.getElementById('generalStatsList');
    var genStatsListHTML = "<ul>";
    for (let i = 0; i < generalStats.length; i++) {
        genStatsListHTML += "<li>" + generalStats[i] + ": 0</li>"; 
    }
    genStatsListHTML +="</ul>";
    generalStatsList.innerHTML = genStatsListHTML; 
}

function printGameSpecificStats() {
    var gameSpecificStatsList = document.getElementById('gameSpecificStatsList');
    var gameSpecificStatsListHTML = "";
    for (let i = 0; i < games.length; i++) {
        gameSpecificStatsListHTML += "<h4>" + games[i].name + "</h4><ul>"; 
        gameSpecificStatsListHTML += "<li> Total time played: " + games[i].totalTimePlayed + "</li>";
        gameSpecificStatsListHTML += "<li> Average score: " + games[i].avgScore + "</li>";
        gameSpecificStatsListHTML += "<li> Highest score: " + games[i].highestScore + "</li>";
        gameSpecificStatsListHTML += "<li> Ranking: " + games[i].ranking + "</li>";
        gameSpecificStatsListHTML += "</ul>";
    }
    
    gameSpecificStatsList.innerHTML = gameSpecificStatsListHTML; 
}

class Game {
    constructor(name) {
        this.name = name;
        this.totalTimePlayed = 0; 
        this.avgScore = 0; 
        this.highestScore = 0;  
        this.ranking = 0; 
    }

setTotalTimePlayed(time) {
    if (time < 0) {
        throw 'Time cannot be negative';
    }
    this.totalTimePlayed = time; 
}

setAvgScore(avgScore) {
    if (avgScore < 0) {
        throw 'Average score cannot be negative';
    }
    this.avgScore = avgScore; 
}

setHighestScore(newHighestScore) {
    if (newHighestScore < this.highestScore) {
        throw 'New high score is less than current high score';
    }
    this.highestScore = newHighestScore;
}
}

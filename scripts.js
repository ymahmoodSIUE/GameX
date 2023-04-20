const gameNames = ["<a href='asteroid.html'>Asteroid</a>",
                   "<a href='packman.html'>Packman</a>",
                   "<a href='spaceinvader.html'>Space Invaders</a>",
                   "<a href='tetris.html'>Tetris</a>"
                  ]
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
         var game = new Game(gameNames[i]);
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
        gameSpecificStatsListHTML += "<li> Number of times played: " + games[i].numberOfTimesPlayed + "</li>";
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
        this.numberOfTimesPlayed = 0; 
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
    
setNumberOfTimesPlayed(num) {
    if (num < 0) {
        throw 'Time cannot be negative';
    }
    this.numberOfTimesPlayed = num; 
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

//Change theme
const logoAddress = "assets/images/gameX-logo.jpg"; 
var logo = document.getElementById('logo'); 
logo.src = logoAddress; 

function changeTheme(backgroundColor, borderColor, textColor, logoPath) {
    document.documentElement.style.setProperty('--background-color', backgroundColor);
    document.documentElement.style.setProperty('--border-color', borderColor);
    document.documentElement.style.setProperty('--text-color', textColor);
    logo.src = logoPath; 
}

defaultColor.addEventListener('click', () => {
    changeTheme('#ADD8E6', '#000000', '#000000', logoAddress); 
});

purplePride.addEventListener('click', () => {
    changeTheme('#E6E6FA', '#CC99FF', '#9933FF', "assets/images/logoPurplePride.jpg"); 
});

pinkBlush.addEventListener('click', () => {
    changeTheme('#FFC0CB', '#DB7093', '#C71585', "assets/images/logoPinkBlush.jpg"); 
});

////Updating game by Milad
class GameController{
    updateGames(id,name,totalTimePlayed, numberOfTimesPlayed, avgScore,highestScore,ranking){
        const gameItem= games.find((item)=>item.id===id)
        if (ads) {
            gameItem.name=name;
            gameItem.totalTimePlayed=totalTimePlayed;
            gameItem.numberOfTimesPlayed=numberOfTimesPlayed;
            gameItem.avgScore=avgScore;
            gameItem.highestScore=highestScore;
            gameItem.ranking=ranking;

            const games=games.filter((item)=>item.id !==id)
            games.push(gameItem);
            return "update successful.";

        }else{
            return "update failed."
        }

    }
}
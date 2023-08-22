function gameObject() {
    const object = {
        "home": {
            "teamName":"Brooklyn Nets",
            "colors":["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                } 
            }
        },
        "away": {
            "teamName":"Charlotte Hornets",
            "colors":["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks":5,
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks":1,
                    "slamDunks":0,
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks":5,
                    "slamDunks":12,
                },
            }
        }
    };
    return object;
}
function homeTeamName() {
    const object = gameObject();
    return object["home"]["teamName"];
}
function numPointsScored(playerName) {
    const object = gameObject();
    const homePlayers = object["home"]["players"];
    const awayPlayers = object["away"]["players"];
    if (homePlayers[playerName]) {
        return homePlayers[playerName]["points"];
    }
    else if (awayPlayers[playerName]) {
        return awayPlayers[playerName]["points"];
    }
    else {
        return "Nope, not here cheif";
    };
}
function shoeSize(playerName) {
    const object = gameObject();
    const homePlayers = object["home"]["players"];
    const awayPlayers = object["away"]["players"];
    if (homePlayers[playerName]) {
        return homePlayers[playerName]["shoe"];
    }
    else if (awayPlayers[playerName]) {
        return awayPlayers[playerName]["shoe"];
    }
    else {
        return "Nope, nope";
    };
}
function teamColors(teamName) {
    const object = gameObject();
    if (object["home"]["teamName"] === teamName) {
        return object["home"]["colors"];
    }
    else if (object["away"]["teamName"] === teamName) {
        return object ["away"]["colors"];
    }
    else {
        return "nope, good sir";
    };
}
function teamNames() {
    const object = gameObject();
    return [object["home"]["teamName"], object["away"]["teamName"]];
}
function playerNumbers(teamName) {
    const object = gameObject();
    if (object["home"]["teamName"] === teamName) {
        return object["home"]["players"];
    }
    else if (object["away"]["teamName"] === teamName) {
        return object["away"]["players"];
    }
    else {
        return "You tried";
    };
}
function playerStats(playerName) {
    const object = gameObject();
    const homePlayers = object["home"]["players"];
    const awayPlayers = object["away"]["players"];
    if (homePlayers[playerName]) {
        return homePlayers[playerName];
    }
    else if (awayPlayers[playerName]) {
        return awayPlayers[playerName];
    }
    else {
        return "Nope, no nope";
    };
}
function bigShoeRebounds() {
    const object = gameObject();
    let maxShoeSize = -1;
    let rebounds = -1;
    const allPlayers = {...object["home"]["players"], ...object["away"]["players"]};
    for (const playerName in allPlayers) {
        const player = allPlayers[playerName];
        if (player["shoe"] > maxShoeSize) {
            maxShoeSize = player["shoe"];
            rebounds = player["rebounds"];
        }
    }
    return rebounds;
}
function mostPointsScored() {
    const object = gameObject();
    let mostPointsScored = -1;
    let playerNameWithMostPoints = ""
    const allPlayers = {...object["home"]["players"], ...object["away"]["players"]};
    for (const playerName in allPlayers) {
        const player = allPlayers[playerName];
        if (player["points"] > mostPointsScored) {
            mostPointsScored = player["points"];
            playerNameWithMostPoints = playerName;
        }
    }
    return playerNameWithMostPoints;
}
function winningTeam() {
    const object = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    const homePlayers = object["home"]["players"];
    const awayPlayers = object["away"]["players"];
    for (const playerName in homePlayers) {
        homeTeamPoints += homePlayers[playerName]["points"];
    }
    for (const playerName in awayPlayers) {
        awayTeamPoints += awayPlayers[playerName]["points"];
    }
    if (homeTeamPoints > awayTeamPoints) {
        return object["home"]["teamName"];
    }
    else if (homeTeamPoints < awayTeamPoints) {
        return object["away"]["teamName"];
    }
    else {
        return "It's a tie carl!";
    }
}
function playerWithLongestName() {
    const object = gameObject();
    let longestName = "";
    const allPlayers = {...object["home"]["players"], ...object["away"]["players"]};
    for (const playerName in allPlayers) {
        if (playerName.length > longestName.length) {
            longestName = playerName;
        }
    }
    return longestName;
}   
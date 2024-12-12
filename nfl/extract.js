"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Provided JSON data
var jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// Headers for the CSV
var headers = [
    "gameid",
    "date",
    "time",
    "away_team",
    "home_team",
    "by_pts",
    "away_pred",
    "home_pred",
    "won_sims",
    "avg_margin",
    "actual_win_team",
    "away_actual",
    "home_actual",
    "result_fav_num",
    "result_fav",
    "pred_total",
];
// Parse the JSON into structured rows
function parseData(data) {
    var games = [];
    var currentGame = {};
    var gameId = 1;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var entry = data_1[_i];
        if (entry.propertyName1 === "Date/Time") {
            if (Object.keys(currentGame).length > 0) {
                games.push(__assign({ gameid: gameId++ }, currentGame));
                currentGame = {};
            }
            // Parse Date and Time
            var _a = entry.propertyName2.split(" "), date = _a[0], time = _a[1];
            currentGame.date = date;
            currentGame.time = time;
        }
        else if (entry.propertyName1 === "Matchup") {
            var _b = entry.propertyName2.split("\n\n\nby"), matchup = _b[0], spread = _b[1];
            var _c = matchup.split("@").map(function (team) { return team.trim(); }), awayTeam = _c[0], homeTeam = _c[1];
            currentGame.away_team = awayTeam;
            currentGame.home_team = homeTeam;
            currentGame.by_pts = parseFloat(spread.trim());
        }
        else if (entry.propertyName1 === "Prediction") {
            var _d = entry.propertyName2.split("\nw"), scoreline = _d[0], simsInfo = _d[1];
            var _e = scoreline
                .split("wins")[1]
                .trim()
                .split("-")
                .map(Number), awayPred = _e[0], homePred = _e[1];
            var wonSims = parseFloat(simsInfo.match(/won (\d+.\d+)%/)[1]) / 100;
            var avgMargin = parseFloat(simsInfo.match(/average margin of (\d+.\d+)/)[1]);
            currentGame.away_pred = awayPred;
            currentGame.home_pred = homePred;
            currentGame.won_sims = wonSims;
            currentGame.avg_margin = avgMargin;
        }
        else if (entry.propertyName1 === "Actual") {
            var _f = entry.propertyName2.split("wins"), actualTeam = _f[0], actualScoreline = _f[1];
            var _g = actualScoreline
                .trim()
                .split("-")
                .map(Number), awayActual = _g[0], homeActual = _g[1];
            currentGame.actual_win_team = actualTeam.trim();
            currentGame.away_actual = awayActual;
            currentGame.home_actual = homeActual;
            // Compute additional fields
            var predictedFav = currentGame.away_pred > currentGame.home_pred
                ? currentGame.away_team
                : currentGame.home_team;
            var actualFav = currentGame.away_actual > currentGame.home_actual
                ? currentGame.away_team
                : currentGame.home_team;
            currentGame.result_fav = predictedFav === actualFav ? "Y" : "N";
            currentGame.result_fav_num = currentGame.result_fav === "Y" ? 1 : 0;
            currentGame.pred_total = currentGame.away_pred + currentGame.home_pred;
        }
    }
    // Add the last game
    if (Object.keys(currentGame).length > 0) {
        games.push(__assign({ gameid: gameId++ }, currentGame));
    }
    return games.filter(function (game) { return !Object.values(game).includes(null); }); // Exclude null rows
}
// Convert the parsed data to CSV
function toCSV(data) {
    var rows = [headers.join(",")];
    var _loop_1 = function (game) {
        var row = headers.map(function (header) { var _a; return (_a = game[header]) !== null && _a !== void 0 ? _a : ""; }).join(",");
        rows.push(row);
    };
    for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
        var game = data_2[_i];
        _loop_1(game);
    }
    return rows.join("\n");
}
// Main Execution
var parsedGames = parseData(jsonData);
var csvOutput = toCSV(parsedGames);
fs.writeFileSync("output.csv", csvOutput);
console.log("CSV data written to output.csv");

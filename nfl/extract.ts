import * as fs from "fs";

// Provided JSON data
const jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Headers for the CSV
const headers = [
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
function parseData(data: any[]) {
  const games: any[] = [];
  let currentGame: any = {};
  let gameId = 1;

  for (const entry of data) {
    if (entry.propertyName1 === "Date/Time") {
      if (Object.keys(currentGame).length > 0) {
        games.push({ gameid: gameId++, ...currentGame });
        currentGame = {};
      }

      // Parse Date and Time
      const [date, time] = entry.propertyName2.split(" ");
      currentGame.date = date;
      currentGame.time = time;
    } else if (entry.propertyName1 === "Matchup") {
      const [matchup, spread] = entry.propertyName2.split("\n\n\nby");
      const [awayTeam, homeTeam] = matchup.split("@").map((team) => team.trim());

      currentGame.away_team = awayTeam;
      currentGame.home_team = homeTeam;
      currentGame.by_pts = parseFloat(spread.trim());
    } else if (entry.propertyName1 === "Prediction") {
      const [scoreline, simsInfo] = entry.propertyName2.split("\nw");
      const [awayPred, homePred] = scoreline
        .split("wins")[1]
        .trim()
        .split("-")
        .map(Number);

      const wonSims = parseFloat(simsInfo.match(/won (\d+.\d+)%/)[1]) / 100;
      const avgMargin = parseFloat(simsInfo.match(/average margin of (\d+.\d+)/)[1]);

      currentGame.away_pred = awayPred;
      currentGame.home_pred = homePred;
      currentGame.won_sims = wonSims;
      currentGame.avg_margin = avgMargin;
    } else if (entry.propertyName1 === "Actual") {
      const [actualTeam, actualScoreline] = entry.propertyName2.split("wins");
      const [awayActual, homeActual] = actualScoreline
        .trim()
        .split("-")
        .map(Number);

      currentGame.actual_win_team = actualTeam.trim();
      currentGame.away_actual = awayActual;
      currentGame.home_actual = homeActual;

      // Compute additional fields
      const predictedFav =
        currentGame.away_pred > currentGame.home_pred
          ? currentGame.away_team
          : currentGame.home_team;
      const actualFav =
        currentGame.away_actual > currentGame.home_actual
          ? currentGame.away_team
          : currentGame.home_team;

      currentGame.result_fav = predictedFav === actualFav ? "Y" : "N";
      currentGame.result_fav_num = currentGame.result_fav === "Y" ? 1 : 0;
      currentGame.pred_total = currentGame.away_pred + currentGame.home_pred;
    }
  }

  // Add the last game
  if (Object.keys(currentGame).length > 0) {
    games.push({ gameid: gameId++, ...currentGame });
  }

  return games.filter((game) => !Object.values(game).includes(null)); // Exclude null rows
}

// Convert the parsed data to CSV
function toCSV(data: any[]) {
  const rows = [headers.join(",")];
  for (const game of data) {
    const row = headers.map((header) => game[header] ?? "").join(",");
    rows.push(row);
  }
  return rows.join("\n");
}

// Main Execution
const parsedGames = parseData(jsonData);
const csvOutput = toCSV(parsedGames);
fs.writeFileSync("output.csv", csvOutput);

console.log("CSV data written to output.csv");
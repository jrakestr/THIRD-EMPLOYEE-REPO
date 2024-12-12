const fs = require("fs");
const path = require("path");
const csvParser = require("csv-parser");

// Path to the input CSV file
const inputFilePath = "/Users/justinrakestraw/Documents/nflweek12.csv";
// Path to the output CSV file
const outputFilePath = "/Users/justinrakestraw/Documents/nflweek12_output.csv";

// Function to read CSV data and convert it to an array of objects
function readCSV(filePath) {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on("data", (data) => results.push(data))
            .on("end", () => resolve(results))
            .on("error", (error) => reject(error));
    });
}

// Function to convert JSON array to plain CSV (no quotes)
function convertToCSV(data) {
    if (!data || !data.length) {
        return "";
    }

    // Extract headers
    const headers = Object.keys(data[0]);
    const rows = data.map(row =>
        headers.map(field => (row[field] || "").toString()).join(",")
    );

    // Combine headers and rows
    return [headers.join(","), ...rows].join("\n");
}

// Function to write CSV to a file
function writeCSV(filePath, content) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`CSV file written successfully to ${filePath}`);
}

// Main function to process the input CSV
async function processCSV() {
    try {
        // Step 1: Read CSV data
        const gameData = await readCSV(inputFilePath);

        // Step 2: Convert data to CSV format
        const csvContent = convertToCSV(gameData);

        // Step 3: Write CSV to output file
        writeCSV(outputFilePath, csvContent);

        console.log("Game data processed and saved successfully.");
    } catch (error) {
        console.error("Error processing CSV:", error);
    }
}

// Execute the script
processCSV();
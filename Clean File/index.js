const fs = require('fs');
const { parse } = require('csv-parse');
const { stringify } = require('csv-stringify');

function cleanVendorName(name) {
  // Convert to uppercase for consistency
  let cleaned = name.toUpperCase();
  
  // Remove common transaction words
  const wordsToRemove = [
    'PURCHASE', 'PAYMENT', 'PMT', 'TXN', 'TRANSACTION', 'POS', 
    'DEBIT', 'CREDIT', 'ACH', 'ATM', 'FEE', 'INT'
  ];
  
  wordsToRemove.forEach(word => {
    cleaned = cleaned.replace(new RegExp(`\\b${word}\\b`, 'g'), '');
  });
  
  // Remove special characters and numbers
  cleaned = cleaned.replace(/[^A-Z\s]/g, '');
  
  // Remove extra spaces and trim
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  return cleaned;
}

async function processCSV(inputFile, outputFile) {
  const records = [];
  const parser = fs
    .createReadStream(inputFile)
    .pipe(parse({
      columns: true,
      skip_empty_lines: true
    }));

  for await (const record of parser) {
    const cleanedName = cleanVendorName(record.Name);
    records.push({
      ...record,
      'Parsed_Vendor': cleanedName
    });
  }

  const stringifier = stringify({ header: true });
  const writeStream = fs.createWriteStream(outputFile);
  stringifier.pipe(writeStream);
  
  records.forEach(record => stringifier.write(record));
  stringifier.end();
  
  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);
  });
}

// Example usage
if (require.main === module) {
  const inputFile = process.argv[2];
  const outputFile = process.argv[3] || 'cleaned_transactions.csv';

  if (!inputFile) {
    console.error('Please provide an input CSV file path');
    process.exit(1);
  }

  processCSV(inputFile, outputFile)
    .then(() => console.log(`Processing complete. Output saved to ${outputFile}`))
    .catch(err => console.error('Error processing CSV:', err));
}

module.exports = { cleanVendorName, processCSV };
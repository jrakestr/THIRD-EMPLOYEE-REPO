 // Merge all files into single csv (input/2024 NFL LB Stats Week 1.csv input/2024 NFL LB Stats Week 2.csv input/2024 NFL LB Stats Week 3.csv input/2024 NFL LB Stats Week 4.csv input/2024 NFL LB Stats Week 5.csv input/2024 NFL LB Stats Week 6.csv input/2024 NFL LB Stats Week 7.csv input/2024 NFL LB Stats Week 8.csv input/2024 NFL LB Stats Week 9.csv input/2024 NFL LB Stats Week 10.csv input/2024 NFL LB Stats Week 11.csv)
const fs = require('fs');

const inputFiles = [
    'input/2024 NFL LB Stats Week 1.csv',
    'input/2024 NFL LB Stats Week 2.csv',
    'input/2024 NFL LB Stats Week 3.csv',
    'input/2024 NFL LB Stats Week 4.csv',
    'input/2024 NFL LB Stats Week 5.csv',
    'input/2024 NFL LB Stats Week 6.csv',
    'input/2024 NFL LB Stats Week 7.csv',
    'input/2024 NFL LB Stats Week 8.csv',
    'input/2024 NFL LB Stats Week 9.csv',
    'input/2024 NFL LB Stats Week 10.csv',
    'input/2024 NFL LB Stats Week 11.csv'
];

const outputFile = 'output/merged_LB_Stats.csv';

let mergedData = '';

inputFiles.forEach((file, index) => {   
    const data = fs.readFileSync(file, 'utf8');
    const lines = data.split('\n');
    if (index === 0) {
        mergedData += lines.join('\n') + '\n';
    } else {
        mergedData += lines.slice(1).join('\n') + '\n';
    }
});

fs.writeFileSync(outputFile, mergedData);
console.log(`All CSV files have been merged into ${outputFile}`);


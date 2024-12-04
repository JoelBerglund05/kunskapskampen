
const sassExport = require('sass-export'); // Ensure this is installed
const fs = require('fs');

// Replace with the actual path to your SCSS variables file
const inputFilePath = './css/scss/main.scss';
const outputFilePath = './variables.json';

try {
  const exported = sassExport.exporter({
    inputFiles: [inputFilePath], // Array of SCSS files to parse
  });

  // Write the output to a JSON file
  fs.writeFileSync(outputFilePath, JSON.stringify(exported, null, 2));
  console.log('SCSS variables successfully extracted!');
} catch (error) {
  console.error('Error exporting SCSS variables:', error);
}

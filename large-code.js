const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Define file paths
const fileName = 'data.json';
const filepath = path.join(__dirname, fileName);

console.log('--- 1. Starting Synchronous Node.js Script ---');

try {
    // 2. Synchronous file write
    const sampleData = {
        message: 'hello from a synchronous node.js script!',
        timestamp: new Date().toISOString(),
        items: ['apple', 'banana', 'cherry']
    };

    console.log(`Writing data to ${fileName} synchronously...`);
    // Fixed typo: wiritFileSync -> writeFileSync, and added indentation (2) to JSON.stringify
    fs.writeFileSync(filepath, JSON.stringify(sampleData, null, 2), 'utf-8');
    console.log('File write complete.');

    // 3. Synchronous file read 
    console.log(`Reading data from ${fileName} synchronously...`);
    const fileContent = fs.readFileSync(filepath, 'utf-8');
    const parsedData = JSON.parse(fileContent);

    console.log('Parsed file content:');
    console.log(parsedData);

    // 4. Synchronous shell command execution
    console.log('Executing a system command synchronously (node version)...');
    const stdout = execSync('node -v', {
        encoding: 'utf-8'
    });
    console.log(`Node.js version from shell: ${stdout.trim()}`);

} catch (error) {
    console.error('An error occurred during execution:', error.message);
}

console.log('--- Script finished successfully ---');
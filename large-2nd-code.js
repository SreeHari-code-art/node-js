const fs = require('fs/promises');
const path = require('path');
const { execSync } = require('child_process');

async function runAsyncScript() {
    // Define file paths
    const fileName = 'asynchronous-data.json';
    const filepath = path.join(__dirname, fileName);

    console.log('--- 1. Starting Asynchronous Node.js Script ---');

    try {
        // 2. Asynchronous file write
        const sampleData = {
            message: 'hello from an asynchronous node.js script!',
            timestamp: new Date().toISOString(),
            items: ['apple', 'banana', 'cherry']
        };

        console.log(`Writing data to ${fileName} asynchronously...`);
        await fs.writeFile(filepath, JSON.stringify(sampleData, null, 2), 'utf-8');
        console.log('File write complete.');

        // 3. Asynchronous file read 
        console.log(`Reading data from ${fileName} asynchronously...`);
        const fileContent = await fs.readFile(filepath, 'utf-8');
        const parsedData = JSON.parse(fileContent);

        console.log('Parsed file content:');
        console.log(parsedData);

        // 4. Shell command execution (execSync is inherently synchronous, which is fine here)
        console.log('Executing a system command (node version)...');
        const stdout = execSync('node -v', {
            encoding: 'utf-8'
        });
        console.log(`Node.js version from shell: ${stdout.trim()}`);

    } catch (error) {
        console.error('An error occurred during execution:', error.message);
    }

    console.log('--- Script finished successfully ---');
}

// Call the async function to run the script
runAsyncScript();
#!/usr/bin/env node

const { exec } = require('child_process');

const command = process.argv[2];
const layer = process.argv[3];
const sliceName = process.argv[4];

const usageMessage = `
Usage:
  fsdgen slice <layer> <sliceName>
  fsdgen ui <componentName>

Examples:
  fsdgen slice features userProfile
  fsdgen slice entities article
  fsdgen ui Button
`;

if (!command || (command !== 'slice' && command !== 'ui')) {
    console.log(usageMessage);
    process.exit(1);
}

if (command === 'slice') {
    if (!layer || !sliceName) {
        console.error('Usage: fsdgen slice <layer> <sliceName>');
        process.exit(1);
    }

    exec(`node ./createSlice/index.js ${layer} ${sliceName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
} else if (command === 'ui') {
    const componentName = process.argv[3];
    if (!componentName) {
        console.error('Usage: fsdgen ui <componentName>');
        process.exit(1);
    }

    exec(`node ./createUiComponent/index.js ${componentName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(stdout);
    });
} else {
    console.log('Hello, World!');
}
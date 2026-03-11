const fs = require('fs');
const content = fs.readFileSync('c:/Users/ramot/OneDrive/Desktop/adm2/homelengo.vercel.app/css/styles.css', 'utf8');

const lines = content.split('\n');
lines.forEach((line, index) => {
    if (line.includes('form-style') && (line.includes('hover') || line.includes('focus'))) {
        console.log(`${index + 1}: ${line}`);
    }
    if (line.includes('.wd-find-select') && (line.includes('hover') || line.includes('focus'))) {
        console.log(`${index + 1}: ${line}`);
    }
});

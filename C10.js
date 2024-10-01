const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processInputSync(input) {
    // Operasi sinkron
    const vowel = 'aeiou'
    const openManipulation = (word) => {
            if (word.length === 0) return word;
            const firstChar = word[0].toLowerCase();
            if (vowel.includes(firstChar)) {
                return word;
            } else {
            return vowel.includes(firstChar) ? word : word.slice(1) + word[0] + 'nyo'
        };
    };
        return input.split(' ').map(openManipulation).join(' ');
};

function mainSync() {
    rl.setPrompt('tulis kalimatmu disini > ');
    rl.prompt();    

    rl.on('line', (line) => {
        if (line.trim().toLowerCase() === 'good bye!') {
            console.log('Good bye!');
            rl.close();
        } else {
            // Proses dilakukan secara sinkron
            const result = processInputSync(line.trim());
            console.log(`hasil konversi: ${result}`);
            rl.prompt();
        }
    });

    rl.on('close', () => {
        console.log('Program selesai.');
        process.exit(0);
    });
}

mainSync();

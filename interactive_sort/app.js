const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let data = null
let dataText = []
let dataNumber = []


const sortRequest = "\n How would you like to sort values? \n1. Sort words alphabetically\n 2. Show numbers from lesser to greater\n 3. Show numbers from bigger to smaller \n 4. Display words in ascending order by number of letters in the word \n 5. Show only unique words \n Select (1 - 5) end press Enter:"
const firstQuestion = "Hello. Enter 10 words or digits deviding them in space: "

function input(text) {
    return new Promise((callbackFn, errorFn) => {
        rl.question(text, (uinput) => {
            callbackFn(uinput);
        }, () => {
            errorFn();
        });
    });
}

const main = async () => {
    data = await input(firstQuestion);

    if (data.toLowerCase() === 'exit') {

        rl.close();
        process.exit(0);

    } else {
        data = data.split(' ')

        data.forEach(element => {
            if (isNaN(element)) {

                dataText.push(element)
            }
            else dataNumber.push(element)
        })
    }
    const number = await input(sortRequest);
    console.log(number);
    switch (number) {
        case '1':
            const sortedText = dataText.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
            dataText = []
            console.log(sortedText);
            break;
        case '2':
            const sortedNumbersIncr = dataNumber.sort((a, b) => a - b)
            console.log(sortedNumbersIncr);
            dataNumber = []
            break;
        case '3':
            const sortedNumbersDecr = dataNumber.sort((a, b) => b - a)
            console.log(sortedNumbersDecr);
            dataNumber = []
            break;
        case '4':
            const sortedTextByLength = dataText.sort((a, b) => a.length - b.length)
            dataText = []
            console.log(sortedTextByLength);
            break;
        case '5':
            const uniqueText = dataText.filter((word, index, arr) => {
                return index !== arr.indexOf(word)
            })
            dataText = []
            console.log(uniqueText);
            break;

        default:
            break;
    }

    main()
};

main();
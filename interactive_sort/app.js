const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = null

const sortRequest = " \n1. Sort words alphabetically\n 2. Show numbers from lesser to greater\n 3. Show numbers from bigger to smaller \n 4. Display words in ascending order by number of letters in the word \n 5. Show only unique words"

const interactiveSort = async () => {

    console.log('Hello. Enter 10 words or digits deviding them in space:');
    rl.on('line', (line) => {
        console.log(`Received: ${line}`);
    });
    // const answer = await rl.question('')
    // console.log(answer);

    // rl.question('Hello. Enter 10 words or digits deviding them in space: ', async (answer) => {

    //     data = await answer.split(' ')
    //     rl.pause()

    //     if (data.length < 10) {
    //         console.log('You entered less then 10 words or digits');
    //         rl.close();
    //         return
    //     }
    //     console.log("How would you like to sort value?");
    //     console.log(sortRequest);
    //     rl.resume()

    //     rl.close();
    // });

}

interactiveSort()


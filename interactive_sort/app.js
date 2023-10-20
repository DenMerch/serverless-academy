const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

let data = null

// const questionRequest = "a - Sort words alphabetically 2 Show numbers from lesser to greater 3 Show numbers from bigger to smaller 4 Display words in ascending order by number of letters in the word
// 5 Show only unique words
// 6 Display only unique values from the set of words and numbers entered by the user
// 7 To exit the program, the user need to enter`exit`, otherwise the program will repeat itself again and again, asking for new data and suggesting sorting"

const interactiveSort = () => {

    rl.question('Hello. Enter 10 words or digits deviding them in space: ', async (answer) => {

        data = await answer.split(' ')

        if (data.length < 10) {
            console.log('You entered less then 10 words or digits');
            rl.close();
            return
        }
        if (data.length > 10) {
            console.log('You entered more then 10 words or digits');
            rl.close();
            return
        }

        console.log(data);

        rl.close();
    });
}

interactiveSort()


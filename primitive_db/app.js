const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const fs = require('fs');
const { writeFile, getUserByName, listUsers } = require('./writeFile')

let user = {}

const userQuestionGenderAge = [
    {
        type: 'list',
        name: 'gender',
        message: 'Choose your Gender',
        choices: ['Male', 'Female'],
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'age',
        message: 'Enter your age:',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
        },
        filter: Number,
    },
]

function main() {
    userQuest()
}

function userQuest() {
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: "Enter the User's name",
    }).then((answers) => {
        if (answers.name === '') {
            isExit = true
            searchUser()
            throw new Error
        }
        else user.name = answers.name;
    }).then(() => {
        inquirer.prompt(userQuestionGenderAge)
            .then((answers) => {
                user.age = answers.age
                user.gender = answers.gender
                writeFile(user)
                user = {}
                userQuest()
            })
    }).catch((er) => {

    })
}

async function searchUser() {
    inquirer.prompt({
        type: 'input',
        name: 'search',
        message: "Would you to search values in DB?"
    }).then(async (answers) => {
        if (answers.search === "N" || answers.search === "No") {
            throw new Error
        } else if (answers.search === "Y" || answers.search === "Yes") {

            console.log(await listUsers());
            inquirer.prompt({
                type: 'input',
                name: 'user',
                message: "Enter user's name you wanna find in DB"
            }).then(async (answers) => {
                const foundedUser = await getUserByName(answers.user)
                if (foundedUser.length) {
                    console.log(foundedUser);
                }
                else console.log("This user does not exist in the database");
            })
        }
    }).catch((er) => {

    })
}



main()


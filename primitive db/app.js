const inquirer = require('inquirer');
const fs = require('fs');


function main() {
    inquirer
        .prompt([
            "Enter the User's name. To cancel press ENTER: ",
        ])
        .then((answers) => {
            console.log(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}
main()

//Enter the User's name. To cancel press ENTER:
//Choose your Gender. (choose)
//Enter your age:
//after Enter :Would you to search values in DB? (Yes/No)
//log(db)
//Enter user's name you wanna find in DB
//User Name was found.
//LOG({user})
const fs = require('fs').promises;
const path = require("path")
async function writeFile(content) {
    try {
        const data = await listUsers()
        const newData = [...data, content]
        return await fs.writeFile(path.join(__dirname, "./db.txt"), JSON.stringify(newData), "utf-8")
    } catch (error) {

        console.log(error.message);
    }

}
async function listUsers() {
    try {
        const data = await fs.readFile(path.join(__dirname, "./db.txt"), "utf-8")

        return JSON.parse(data)

    } catch (error) {
        console.log(error.message);
    }
}

async function getUserByName(userName) {
    try {
        const data = await listUsers()


        return data.filter(user => user.name === userName)

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    writeFile,
    listUsers,
    getUserByName
}
const path = require('path');
const fs = require('fs');


const directoryPath = path.join(__dirname, 'files');
const filesDir = readFilesSync(directoryPath)
const filesData = readFiles(filesDir)
console.log(filesData.then((resp) => {

}));
// filesData.then((resp) => {
//     console.log(resp);
// });

function readFilesSync(dir) {
    const filesName = [];

    fs.readdirSync(dir).forEach(filename => {
        const name = path.parse(filename).name;
        filesName.push(`${name}.txt`)
    });

    return filesName;
}
async function readFiles(filesName) {
    const dataFiles = []
    await filesName.forEach(async name => {
        const fileData = await fs.readFile(path.join(directoryPath, name), { encoding: 'utf-8' }, function (err, data) {
            // console.log(data);
            return dataFiles.push(data.split('\n'))
        })


    })
    // console.log(`31 ${dataFiles}`);
    return dataFiles

}
// console.log(`35 ${filesData}`);

// fsPromises.readdir(directoryPath)
//     .then(async (result) => {
//         return await result.forEach(async (file) => {
//             let filesData = []
//             await fs.readFile(path.join(directoryPath, file), { encoding: 'utf-8' }, function (err, data) {
//                 return [...filesData, ...data.split('\n')]
//             })


//         })


//     }).then((result) => {
//         console.log(result);
//         function onlyUnique(value, index, array) {
//             return array.indexOf(value) === index;
//         }
//         console.log(result.filter(onlyUnique));
//     }).catch((er) => {
//         console.log(er);
//     })

// async function (err, files) {
//     let filesData = []
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     //listing all files using forEach
//     await files.forEach(async function (file) {
//         fs.readFile(path.join(directoryPath, file), { encoding: 'utf-8' }, function (err, data) {
//             if (!err) {
//                 filesData = [...filesData, ...data.split('\n')]
//                 console.log(filesData);
//             } else {
//                 console.log(err);
//             }
//         });

//     });

// });


// async function doFileList(path) {
//     try {
//         const words = []
//         const files = await readdir(path).then(resp => resp.forEach(file => fs.readFile(path.join(directoryPath, file))))
//             .then(resp => console.log(resp))

//         return files
//     } catch (err) {
//         console.error(err);
//     }
// }

// const filesList = doFileList(directoryPath).then(async (resp) => {
//     return resp
// })

// module.exports = {
//     filesList
// }



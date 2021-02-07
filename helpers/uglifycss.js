const fs = require('fs');
const path = require('path');

const uglifyCss = require('uglifycss');

const sourceDirectoryPath = path.join(__dirname, '../resources/css');
const destinationDirectoryFile = path.join(__dirname, '../public/css/style.css');

const getAllFiles = function (dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath)

    arrayOfFiles = arrayOfFiles || []

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file))
        }
    })

    return arrayOfFiles
}

exports.compress = () => {
    fs.writeFile(
        destinationDirectoryFile,
        uglifyCss.processFiles(
            getAllFiles(sourceDirectoryPath), {maxLineLen: 500, expandVars: true}
        ),
        function (err) {
            if (err) return console.log(err);
            console.log('all css from resources/css/* compressed into public/css/style.css');
        }
    );
}
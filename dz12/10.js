// const fs = require('fs-extra')
// fs.emptyDir('nomer1')
// fs.emptyDir('nomer2')
// .then(() => {
// console.log('papki!')
//   fs.writeFile('D:/u4eba/112/nomer1/file1.txt', 'glhf')
//   .then(() => {
//   console.log('file!')
// fs.copyFile('D:/u4eba/112/nomer1/file1.txt','D:/u4eba/112/nomer2/file1.txt')
//   .then(() => {
//     console.log('copy!')  
//     fs.remove('D:/u4eba/112/nomer1')
//  fs.remove('D:/u4eba/112/nomer2')
//  .then(() => {
//   console.log('delete!')
// })
//   .catch(err => {
//     console.error(err)      
// })

// })
// })
// })
const fs = require('fs-extra');
const nomer1 = 'nomer1';
const nomer2 = 'nomer2';
const file1 = 'nomer1/file1.txt';

function papka1(nomer1) {
    fs.emptyDir(nomer1, (err) => {
        if (err) return console.error(err);
        console.log('papka1');
        File1(file1);
    });
}

function File1(file1) {
    fs.ensureFile(file1, (err) => {
        if (err) return console.error(err);
        console.log('file1');
        papka2(nomer2);
    });
}

function papka2(nomer2) {
    fs.emptyDir(nomer2, (err) => {
        if (err) return console.error(err);
        console.log('papka2');
        moveFile(file1, file2);
    });
}

function moveFile(file1, file2) {
    fs.move(file1, file2, (err) => {
        if (err) return console.error(err);
        console.log('moved');
        deleteFile(file2);
    });
}

function deleteFile(file2) {
    fs.remove(file2, (err) => {
        if (err) return console.error(err);
        console.log('file removed');
        deleteFolders(nomer1, nomer2);
    });
}

function deleteFolders(momer1, nomer2) {
    fs.remove(momer1);
    fs.remove(nomer2);
    console.log('papki removed')
}
papka1(nomer1);
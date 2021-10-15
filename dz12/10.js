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

function papka1(nomer1){ 
fs.emptyDir(nomer1, (err) => {
  if (err) return console.error(err)
  console.log('papka #1');
  papka1(nomer1)
})
}

fs.copy('/tmp/myfile', '/tmp/mynewfile', err => {
  if (err) return console.error(err)
  console.log('success!')
})
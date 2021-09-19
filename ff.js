const fs = require('fs-extra')
fs.emptyDir('nomer1')
fs.emptyDir('nomer2')
.then(() => {
console.log('dve papki!')
  fs.writeFile('D:/u4eba/112/nomer1/file1.txt', 'glhf')
  .then(() => {
  console.log('file#1!')
fs.copyFile('D:/u4eba/112/nomer1/file1.txt','D:/u4eba/112/nomer2/file1.txt')
  .then(() => {
    console.log('copy!')  
    fs.remove('D:/u4eba/112/nomer1')
 fs.remove('D:/u4eba/112/nomer2')
 .then(() => {
  console.log('delete!')
})
  .catch(err => {
    console.error(err)      
})

})
})
})
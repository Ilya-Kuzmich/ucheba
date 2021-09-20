const fs = require('fs-extra')
fs.emptyDir('w211')
fs.emptyDir('w212')
.then(() => {
console.log('dve_papki!')
  fs.writeFile('D:/u4eba/112/w211/om645.txt', '2.2tdi 170ls')
  .then(() => {
  console.log('file#1!')
fs.copyFile('D:/u4eba/112/w211/om645.txt','D:/u4eba/112/w212/om645.txt')
  .then(() => {
    console.log('copy!')  
    fs.remove('D:/u4eba/112/w211')
 fs.remove('D:/u4eba/112/w212')
 .then(() => {
  console.log('delete!')
})
  .catch(err => {
    console.error(err)      
})

})
})
})

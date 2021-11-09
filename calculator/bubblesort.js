const arr=[ 4, 12, 6, 3, 8, 9, 7]
bubblesort(arr)
function bubblesort(arr){
    for (let n=0;n<arr.length;n++)
    for (let i=0; i < arr.length-1-n; i++ ){
    if (arr[i]>arr[i+1]){
    const buff=arr[i]
    arr[i]=arr[i+1]
    arr[i+1]=buff
    }
    }
    
}
console.log(arr)

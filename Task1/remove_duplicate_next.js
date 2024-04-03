// // Remove duplicate  If duplicates is next to each other in an array
// // Ex:[1,1,2,2,3,4,3] result:[1,2,3,4,3]
const arr1=[1,1,2,2,3,4,3]
const arr2=[]
arr2[0]=arr1[0]
for(i=1;i<arr1.length;i++){
    if(arr2[arr2.length-1]!=arr1[i]){
    arr2.push(arr1[i])
    }
}
console.log(arr2)
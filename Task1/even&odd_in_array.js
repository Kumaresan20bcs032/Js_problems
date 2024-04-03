//find even numbers and odd numbers in an array

let arr=[1,2,3,4,5]
//even number in array
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("Even number in array is: ",arr[i])
    }
}
console.log("========================")
//odd number in array
for(i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        console.log("Even number in array is: ",arr[i])
    }
}
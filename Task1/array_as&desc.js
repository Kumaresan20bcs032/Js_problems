//2.Sort an array ascending decending
//sorting array in ascending order
let arr=[1,5,7,2,5]
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            let c=arr[j]
            arr[j]=arr[i]
            arr[i]=c
        }
    }
}
console.log(arr)

//sorting array in descending order
let arr2=[1,5,7,2,5]
for(i=0;i<arr2.length;i++){
    for(j=i+1;j<arr2.length;j++){
        if(arr2[i]<arr2[j]){
            let c=arr2[i]
            arr2[i]=arr2[j]
            arr2[j]=c
        }
    }
}
console.log(arr2)
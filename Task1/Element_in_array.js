// 1.Find a given value inside an array
let arr=[10,20,3,4,11,12]
let k=3
let f=0;
for(i=0;i<arr.length;i++){
    if(arr[i]==k){
      f=1  
    }
}
if(f==1){
    console.log(k)
}
else{
    console.log(-1)
}
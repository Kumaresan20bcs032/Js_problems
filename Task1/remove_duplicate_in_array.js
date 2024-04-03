//remove duplicates in array
//type1
let s=new Set([1,2,3,1]);
for(val of s){
    console.log(val)
}
//type2
let arr=[1,2,3,1,2]
let res=[]
for(i=0;i<arr.length;i++){
    if(!(arr[i] in res)){
        res.push(arr[i])
    }
}
console.log(res)

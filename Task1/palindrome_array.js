//find array is palindrome are not
 let arr=[1,2,3,2,1]
 l=0
 r=arr.length-1
 let f=0
 while(l<r){
     if(arr[l]==arr[r]){
         l++
         r--
     }
     else{
         f=1
         break
     }
 }
 if(f===1){
     console.log("Given array is not an palindrome");
 }
 else{
     console.log("Given array is an palindrome");
 }

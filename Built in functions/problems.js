// 1.Find a given value inside an array

arr=[1,2,3,4,5]
k=4
if(arr.includes(k)){
    console.log("Element present in array")
}
else{
    console.log("Element not present in array")
}

//2.Sort an array ascending decending

arr=[1,2,8,4,5]
arr.sort()
console.log("Sorted array in ascending order: ",arr)
console.log("Sorted array in descending order: ",arr.reverse())

//3.Finding first and last value in an array

arr=[1,2,3,4,5,6,7]
console.log("first value in array is: ",arr[0])
console.log("last value in array is: ",arr[arr.length-1])

//4.romove duplicates in an array

arr=[1,2,3,1,2,5]
s=new Set(arr)
console.log("After removed duplicates in array: ",s)    

//5.find if the array is palandrome or not

arr=[1,2,3]
s1=arr.toString()
s2=arr.reverse().toString()
if(s1===s2){
    console.log("Given array is palindrome")
}
else{
  console.log("Given array is not an palindrome")  
}

//6.find even numbers and odd numbers in an array

arr=[1,2,3,4,5]
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("Even number in array is: ",arr[i])
    }
    else{
        console.log("Odd number in array is: ",arr[i])
    }
}

//7. Remove duplicate  If duplicates is next to each other in an array
//Ex:[1,1,2,2,3,4,3] result:[1,2,3,4,3]

arr=[1,1,2,2,3,4,3,3]
res=[]
for(i=0;i<arr.length;i++){
    if(res[res.length-1]!=arr[i]){
    res.push(arr[i])
    }
}
console.log("After removed duplicates next each other: ",res)

// 8.Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// ex:Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// ex:Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

arr1=[1,3]
arr2=[2]
res=arr1.concat(arr2).sort()
if((res.length)%2===0){
    let t=(res.length)/2
    let c=(res[t]+res[t-1])/2
    console.log("Median of sorted array: ",parseFloat(c).toFixed(5))
}
else{
    let t=parseInt((res.length)/2)
    console.log("Median of sorted array: ",res[t].toFixed(5))
}

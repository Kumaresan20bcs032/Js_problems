// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// ex:Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// ex:Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

let arr1=[1,3]
let arr2=[2,4]
arr1=arr1.concat(arr2)
const res=arr1.sort()
if((res.length)%2===0){
    let t=(res.length)/2
    let c=(res[t]+res[t-1])/2
    console.log(parseFloat(c).toFixed(5))
}
else{
    let t=parseInt((res.length)/2)
    console.log(res[t].toFixed(5))
}


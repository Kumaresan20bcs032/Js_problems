//const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const arrays = [["a", "b"], ["c", "d"], ["a", "e"]];
// Output: ["a", "b", "c", "d", "e"]

function flat2Darray(args){
    const flatArray=args.reduce((acc,value)=>{
        return acc.concat(value)
    },[])
    console.log(flatArray)
}
flat2Darray([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
flat2Darray([["a", "b"], ["c", "d"], ["a", "e"]]);


//Count Occurrences of Elements
//const fruits = ["apple", "orange", "apple", "banana", "orange", "banana", "banana"];
// Output: { apple: 2, orange: 2, banana: 3 }

function countOccurence(args){
    const result=args.reduce((acc,value)=>{
        
        if(acc[value]){
            acc[value]=acc[value]+1;
        }
        else{
            acc[value]=1;
        }
        return acc;
        
    },{})
    console.log(result);
}
countOccurence(["apple", "orange", "apple", "banana", "orange", "banana", "banana"]);

//Merge Multiple Arrays
//const arrays = [[5, 6], [7, 8], [6, 9]];
// Output: [5, 6, 7, 8, 9]
//const arrays = [["a", "b"], ["c", "d"], ["a", "e"]];
// Output: ["a", "b", "c", "d", "e"]

function mergeMultipleArray(args){
    const array=args.flat().reduce((acc,value)=>{
        if(!acc.includes(value)){
            acc.push(value)
        }
        return acc
    },[]);
    
    console.log(array)
}
mergeMultipleArray([[5, 6], [7, 8], [6, 9]])
mergeMultipleArray([["a", "b"], ["c", "d"], ["a", "e"]])


//Convert Array to Object
//const entries = [["brand", "Nike"], ["size", "M"], ["color", "Black"]];
// Output: { brand: 'Nike', size: 'M', color: 'Black' }

//const entries = [["make", "Toyota"], ["model", "Camry"], ["year", 2021]];
// Output: { make: 'Toyota', model: 'Camry', year: 2021 }

function converArrayToObject(args){
    const object=args.reduce((acc,value)=>{
    acc[value[0]]=value[1];
    return acc;
    },{})
    console.log(object);
}

converArrayToObject([["brand", "Nike"], ["size", "M"], ["color", "Black"]]);
converArrayToObject([["make", "Toyota"], ["model", "Camry"], ["year", 2021]]);



//Sum of Values in an Object Array
//const products = [
// { name: "Product A", price: 30 },
// { name: "Product B", price: 20 },
// { name: "Product C", price: 50 }
//];

// Output: 100

//const products = [
// { name: "Product X", price: 15.5 },
//{ name: "Product Y", price: 25.75 },
//{ name: "Product Z", price: 35.25 }
//];

// Output: 76.5

function sumValues(args){
    const sum=args.reduce((acc,value)=>{
      acc+=value?.price;
      return acc;
    },0)
    console.log(sum);
}

sumValues([
    { name: "Product A", price: 30 },
    { name: "Product B", price: 20 },
    { name: "Product C", price: 50 }
])

sumValues([
    { name: "Product X", price: 15.5 },
    { name: "Product Y", price: 25.75 },
    { name: "Product Z", price: 35.25 }
])


//Remove Duplicates from an Array
//const items = ["a", "b", "a", "c", "b", "d"];
// Output: ["a", "b", "c", "d"]
//const items = [10, 20, 10, 30, 20, 40];
// Output: [10, 20, 30, 40]

function removeDuplicates(args){
    const array=args.reduce((acc,value)=>{
        if(!acc.includes(value)){
            acc.push(value)
        }
      return acc; 
    },[])
    console.log(array)
}
removeDuplicates(["a", "b", "a", "c", "b", "d"])
removeDuplicates([10, 20, 10, 30, 20, 40])

//Calculate the Average
//const numbers = [5, 10, 15, 20, 25]; //5/5=1,
// Output: 15
//const numbers = [7, 14, 21, 28, 35];
// Output: 21

function calculateAverageAge(args){
    let sum=0
    const averageAge=args.reduce((acc,value)=>{
        sum+=value;
        acc=sum/args.length;
        return acc;
    },0)
    console.log(averageAge)
}
calculateAverageAge([7, 14, 21, 28, 35]);
calculateAverageAge([5, 10, 15, 20, 25]);


//Find Maximum Value
//const numbers = [-5, -2, -10, -1];
// Output: -1
//const numbers = [100, 200, 300, 400, 500];
// Output: 500

function maxValue(args){
    const max=args.reduce((acc,value)=>{
        acc=Math.max(acc,value);
        return acc;
    },-Infinity);
    console.log(max)
}
maxValue([-5, -2, -10, -1])
maxValue([100, 200, 300, 400, 500])

//Group Objects by a Property

//const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Joe", age: 25 },
//     { name: "Jack", age: 20 }
// ];
// Output: { '25': [{name: 'John', age: 25}, {name: 'Joe', age: 25}],
//           '30': [{name: 'Jane', age: 30}],
//           '20': [{name: 'Jack', age: 20}] }

//const items = [
//     { category: "electronics", name: "TV" },
//     { category: "furniture", name: "Sofa" },
//     { category: "electronics", name: "Radio" },
//     { category: "furniture", name: "Table" }
// ];
// Output: { electronics: [{category: 'electronics', name: 'TV'}, {category: 'electronics', name: 'Radio'}],
//           furniture: [{category: 'furniture', name: 'Sofa'}, {category: 'furniture', name: 'Table'}] }


function groupObjects(args,key){
    const group=args.reduce((acc,value)=>{
        if(acc[value[key]]){
            acc[value[key]].push(value);
        }
        else{
            acc[value[key]]=[value]
        }
        return acc;
    },{})
    console.log(group);
}
groupObjects([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Joe", age: 25 },
    { name: "Jack", age: 20 }
],"age")

groupObjects([
    { category: "electronics", name: "TV" },
    { category: "furniture", name: "Sofa" },
    { category: "electronics", name: "Radio" },
    { category: "furniture", name: "Table" }
],"name")

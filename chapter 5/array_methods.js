let arr=[1,3,5,7,9]
console.log(arr)

// Array methods
let a=arr.toString()
console.log(a, typeof a)

let b=arr.join(" and ")
console.log(b, typeof b)

let c=arr.pop()
console.log(arr, c)

let d=arr.push(11)
console.log(arr, d)

let e=arr.shift()
console.log(arr, e)

let f=arr.unshift(13)
console.log(arr, f)

let p=delete arr[2]
console.log(arr, p)

let arr1=[2,4,6,8,10]
let arr2=[12,14, 16,18,20]
let arr3=[22,24,26,28,30]
let q=arr1.concat(arr2)
console.log(q)
let r=arr1.concat(arr2, arr3)
console.log(r)

let arr4=[515, 6,2,97,34,52]
console.log(arr4)
arr4.sort()
console.log(arr4)
let compare=(a,b)=>{
    return a-b
}
arr4.sort(compare)
console.log(arr4)
let compare1=(a,b)=>{
    return b-a
}
arr4.sort(compare1)
console.log(arr4)

let arr5=[9, 2, 7, 6, 1, 3]
arr5.reverse()
console.log(arr5)

let arr6=[7,5,9,7,1,8]
let deletedValues = arr6.splice(2,3,2,12,20,22)
console.log(arr6)
console.log(deletedValues, typeof deletedValues)

let arr7=[6,3,7,5,9]
let x=arr7.slice(2)
console.log(x, arr7)
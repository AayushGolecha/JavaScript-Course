let a = [20, 40, 60, 80, "Not Present", false, null]

console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
a[7]=100
a[1]=50
console.log(a)

console.log(typeof a)

for(let i=0;i<a.length;i++){
    console.log(a[i])
}
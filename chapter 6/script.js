
console.clear()  // it will clear the console

console.log(console)

console.assert(5>53) // if assertation is not correct throws a error
console.assert(55>53) // if assertation is correct does not throw a error

console.log("log")

let obj={a:1, b:2, c:3}
console.table(obj)

console.warn("It is a warning sign")

console.error("It is a error")

console.info("It is a info")

console.time("p1")
console.timeEnd("p1")

console.time("For-Loop")
for(let i=0;i<5;i++){
    console.log(i)
}
console.timeEnd("For-Loop")

console.time("While-Loop")
let i=0
while(i<5){
    console.log(i)
    i++
}
console.timeEnd("While-Loop")

console.time("Do-While-Loop")
let x=0
do{
    console.log(x)
    x++
}while(x<5)
console.timeEnd("Do-While-Loop")


alert("The Script Has Started Working")
let a=prompt("Enter the value of a here", "22") // we can also add a default value to alert using this syntax
a=Number.parseInt(a)
alert("The type of the entered value is "+(typeof a))
let write=confirm("Are you sure you want to write the number on website?")
if(write==true){
    document.write(a)
}
else{
    document.write("Please let me write the value!!")
}



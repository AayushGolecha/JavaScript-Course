console.log("Script is working")

// Children of an Element
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)

let a=Array.from(document.body.childNodes)
console.log(a)


// Sibling And The Parent
let b=document.body.firstChild
console.log(b.parentNode)
console.log(b.parentElement)

console.log(document.documentElement.parentNode)
console.log(document.documentElement.parentElement)

console.log(b)
console.log(b.firstChild)
console.log(b.firstChild.nextSibling)
console.log(b.lastChild)
console.log(b.lastChild.previousSibling)


// Element Only Navigation
let c=document.body
console.log(c.children)
console.log(c.firstElementChild)
console.log(c.firstElementChild.nextElementSibling)
console.log(c.lastElementChild)
console.log(c.lastElementChild.previousElementSibling)


// Table Links
let t=document.body.children[3]
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.tBodies.rows)
console.log(t.tBodies.length)
console.log(t.rows[1].cells)
console.log(t.rows[1].rowIndex)
console.log(t.rows[1].sectionRowIndex)
console.log(t.rows[1].children[2])
console.log(t.rows[1].children[2].cellIndex)

console.log(typeof document)
console.log(typeof window)

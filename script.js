
let countpp = document.getElementById("countppl")

let count = 0

function increase() {
    count += 1
    countpp.innerText=count
}



let saveEl = document.getElementById("savel")

function save() {
    saveEl.textContent += count+" : "
    countpp.textContent=0
    count=0
}
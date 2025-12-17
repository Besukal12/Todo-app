let inputBox = document.getElementById('input-box')
let list = document.getElementById('list')

function addtask(){
    if (inputBox.value === '') {
        alert('Please Enter your Task')
    } else {
        let li = document.createElement('li')
        let span = document.createElement('span')

        li.textContent = inputBox.value 
        span.textContent = "\u274C"

        list.appendChild(li)
        li.appendChild(span)
    }
    
    inputBox.value = ''
    savedata()
}

list.addEventListener("click", e => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
        savedata()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        savedata()
    }
})

function savedata(){
    localStorage.setItem("save", list.innerHTML)
}
function showdata(){
    list.innerHTML = localStorage.getItem("save")
}
showdata()
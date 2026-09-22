let XIcon = document.getElementById('XIcon')
let barsIcon = document.getElementById('barsIcon')
let sideBar = document.getElementById('sideBar')

barsIcon.onclick = function(){
    sideBar.style.left = '0'

    XIcon.classList.remove('hide')
    barsIcon.classList.add('hide')
}

XIcon.onclick = function(){
    sideBar.style.left = '-300px'

    XIcon.classList.add('hide')
    barsIcon.classList.remove('hide')
}
let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function combineLists() {
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}
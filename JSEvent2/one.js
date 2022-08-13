function mouseOverEx() {
    document.getElementById('one').style.backgroundColor = "green"
}
function mouseOutEx() {
    document.getElementById('two').style.backgroundColor = "yellow"
}
function clickEx() {
    document.getElementById('three').style.backgroundColor = "red"
}
function doubleClickEx() {
    document.getElementById('four').style.backgroundColor = "blue"
}
function focusEx() {
    document.getElementById('five').style.backgroundColor = "blue"
}

function blurEx() {
    let name = document.getElementById('six').value

    document.getElementById('six').value = name.toUpperCase()
}
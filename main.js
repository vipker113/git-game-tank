let hp = 20;

function moveTank(e) {
    console.log(e.code);
    let keyCode = e.keyCode
    if (keyCode == 38) {
        moveUp()
    }
    else if (keyCode == 40) {
        moveDown()
    }
    else if (keyCode == 37) {
        moveLeft()
    }
    else if (keyCode == 39) {
        moveRight()
    }
}
function moveDown() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top < 270) {
        top = top + 30;
        document.getElementById("tank-img").style["top"] = `${top}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(180deg)"
    }
}
function moveUp() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top > 0) {
        top = top - 30;
        document.getElementById("tank-img").style["top"] = `${top}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(0deg)"

    }
}
function moveLeft() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    left = left - 30;
    document.getElementById("tank-img").style["left"] = `${left}px`;
    document.getElementById("tank-img").style["transform"] = "rotate(-90deg)"
}
function moveRight() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    left = left + 30;
    document.getElementById("tank-img").style["left"] = `${left}px`;
    document.getElementById("tank-img").style["transform"] = "rotate(90deg)"
}
function Hit() {
    hp -= 1;
    document.getElementById("hp").innerText = hp
}
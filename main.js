let hp = 20;
document.getElementById("span0").style.display= "none";
function moveTank(e) {
    console.log(e.code);
    let keyCode = e.keyCode
    switch (keyCode) {
        case 38:  moveUp() ; break;
        case 40:  moveDown() ; break;
        case 37:  moveLeft() ; break;
        case 39:  moveRight() ; break;
    }
    // if (keyCode == 38) {
    //     moveUp()
    // }
    // else if (keyCode == 40) {
    //     moveDown()
    // }
    // else if (keyCode == 37) {
    //     moveLeft()
    // }
    // else if (keyCode == 39) {
    //     moveRight()
    // }
}
function getHit() {
    if (hp > 0) {
        hp-=1;
    }
    document.getElementById("hp").innerText = hp
    if (hp <= 20 && hp > 15) {
        document.getElementById("hp").style["backgroundColor"] = "#adff2f"
        document.getElementById("span0").style.display= "none";
    }  else if (hp < 16 && hp > 10) {
        document.getElementById("hp").style["backgroundColor"] = "yellow"
        document.getElementById("span0").style.display= "none";
    } else if (hp < 11 && hp >= 6) {
        document.getElementById("hp").style["backgroundColor"] = "orange"
        document.getElementById("span0").style.display= "none";
    } else if (hp < 6 && hp > 1) {
        document.getElementById("hp").style["backgroundColor"] = "red"
        document.getElementById("span0").style.display= "none";
    } else if (hp  < 1) {
        document.getElementById("span0").style.display= "block";
    } 
}
function moveDown() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top < 269) {
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
    if (left > 0) {
     left = left - 30;
    document.getElementById("tank-img").style["left"] = `${left}px`;
    document.getElementById("tank-img").style["transform"] = "rotate(-90deg)"
    }
}
function moveRight() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    if (left < 269) {
        left = left + 30;
    document.getElementById("tank-img").style["left"] = `${left}px`;
    document.getElementById("tank-img").style["transform"] = "rotate(90deg)"
    }
}
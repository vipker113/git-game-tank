let hp = 20;
document.getElementById("span0").style.display= "none";
document.getElementById("keyboard").style.display= "none";
document.getElementById("reload").style.display= "none";
document.getElementById("boom-img").style["left"]=30*Math.floor((Math.random() * 9)+1)+"px"
document.getElementById("boom-img").style["top"]=30*Math.floor((Math.random() * 9)+1) +"px"
let x2=document.getElementById("boom-img").style["left"]
let y2=document.getElementById("boom-img").style["top"]
function moveTank(e) {
    console.log(e.code);
    let keyCode = e.keyCode
    switch (keyCode) {
        case 38:  moveUp() ; break; 
        case 40:  moveDown() ;  break;
        case 37:  moveLeft() ; break;
        case 39:  moveRight()  ; break;
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
function hitPoints() {
    let heath=document.getElementById("cayHp").style["width"]
    heath= parseInt(heath)
    heath-=10;
    document.getElementById("cayHp").style.width= `${heath}px` ;
    if (heath < 200 && heath > 150) {
        document.getElementById("cayHp").style["backgroundColor"] = "#adff2f"
    }  else if (heath < 151 && heath > 100) {
        document.getElementById("cayHp").style["backgroundColor"] = "yellow"
    } else if (heath < 101 && heath > 50) {
        document.getElementById("cayHp").style["backgroundColor"] = "orange"
    } else if (heath < 51 && heath >=0 ) {
        document.getElementById("cayHp").style["backgroundColor"] = "red"
    }
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
        explosion();
        document.getElementById("reload").style.display= "block";
    } 
    hitPoints();
}
function moveDown() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top < 269) {
        top = top + 30;
        document.getElementById("tank-img").style["top"] = `${top}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(180deg)"
    }
    checkExplosion() ; 
}
function moveUp() {
    let top = document.getElementById("tank-img").style["top"];
    top = parseInt(top);
    if (top > 0) {
        top = top - 30;
        document.getElementById("tank-img").style["top"] = `${top}px`;
        document.getElementById("tank-img").style["transform"] = "rotate(0deg)"
    }
    checkExplosion() ; 
}
function moveLeft() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    if (left > 0) {
     left = left - 30;
    document.getElementById("tank-img").style["left"] = `${left}px`;
    document.getElementById("tank-img").style["transform"] = "rotate(-90deg)"
    }
    checkExplosion() ; 
}
function moveRight() {
    let left = document.getElementById("tank-img").style["left"];
    left = parseInt(left);
    if (left < 269) {
        left = left + 30;
    document.getElementById("tank-img").style["left"] = `${left}px`;
    document.getElementById("tank-img").style["transform"] = "rotate(90deg)"
    }
    checkExplosion() ; 
}
function explosion(){
    document.getElementById("tank-img").src="./images/explosion.png"
}

function checkExplosion(){
    let x= document.getElementById("tank-img").style["left"]
    x= parseInt(x)
    let y= document.getElementById("tank-img").style["top"]
    y= parseInt(y)
    x2= document.getElementById("boom-img").style["left"]
    x2= parseInt(x2)
    y2= document.getElementById("boom-img").style["top"]
    y2= parseInt(y2)
    if (x == x2 && y == y2) {
        hitPoints();
        getHit();
        hitPoints();
        randomBoom();
        checkDuplicate();
        // document.getElementById("span0").style.display= "block";
    } 
}
function openKB() {
    if (document.getElementById("keyboard").style.display == "none") {
        document.getElementById("keyboard").style.display= "block";
        document.getElementById("virtualKB").innerText="Tắt Bàn Phím Ảo"
    } else if (document.getElementById("keyboard").style.display != "none") {
        document.getElementById("keyboard").style.display = "none";
        document.getElementById("virtualKB").innerText="Bật Bàn Phím Ảo"
    }

}
function reload() {
    if( hp < 1) {
        location.reload()
    }
}
function randomBoom() {
    document.getElementById("boom-img").style["left"]=(30*Math.floor((Math.random() * 9)+1) +"px")
    document.getElementById("boom-img").style["top"]=(30*Math.floor((Math.random() * 9)+1) +"px")
}
function checkDuplicate() {
    if (document.getElementById("boom-img").style["left"]==document.getElementById("tank-img").style["left"] && document.getElementById("boom-img").style["top"]==document.getElementById("tank-img").style["top"]) {
        randomBoom();
    }
}
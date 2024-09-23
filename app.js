let simon = [];
let user = [];
let level = 0;
let start = false;
let Points = 0;



let buttons = document.querySelectorAll(".box")
let heading = document.querySelector("h3");
let boxes = document.querySelector(".boxes");
let score = document.querySelector(".score");
let body = document.querySelector("body");
let gameovr = document.querySelectorAll(".gameover");



for (btn of buttons) {
    btn.addEventListener("click", (e) => {
        e.target.classList.add("flash");

        setTimeout(() => {
            e.target.classList.remove("flash");
        }, 200)
    })
}

redflash = () => {
    body.style.backgroundColor = "red";
    setTimeout(() => {
        body.style.backgroundColor = "black";
    }, 200)
}


let levelup = () => {
    score.innerText = `SCORE : ${Points}`;
    heading.innerText = `Level ${++level}`;
    Points += 10;
    newflash();
    user = [];
}

let newflash = () => {
    let turn = Math.floor(Math.random() * 4);
    let button = buttons[turn];
    flash(button);
    console.log("flashed");
    simon.push(button.getAttribute("id"));
    console.log(simon);
}

if(screen.width <550){
    console.log("screen size");
    heading.innerText= "Press anywhere to start";
    window.addEventListener("click"  , () => {
        if(start == false){
            levelup();
        start = true;
        for (g of gameovr) {
            if(g.classList.contains("none")){
                
            
            }
            else{
                g.classList.add("none");
                }
        }
    }

})
}

window.addEventListener("keypress", () => {
    if (!start) {
        levelup();
        start = true;
        for (g of gameovr) {
            if(g.classList.contains("none")){
                
            
            }
            else{
                g.classList.add("none");
                }
        }

    }
}
)


let flash = (btn) => {

    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 160);
}






let match = (ind) => {

    
    if (user[ind] == simon[ind]) {
        if (user.length == simon.length) {
            setTimeout(() => {
                levelup();
            }, 600);


        }

    }
    else {
        gameover();
    }



}










boxes.addEventListener("click", (e) => {
    if(simon.length !== 0){
    user.push(e.target.getAttribute("id"));
    console.log(user);
    let ind = user.length - 1;

    match(ind);
    }
})

let gameover = () => {

    heading.innerText = "Press any key to start";
    level = 0;
    user = [];
    simon = [];
    start = false;
    redflash();
    for (g of gameovr) {
        
        
            g.classList.remove("none");
    }

}







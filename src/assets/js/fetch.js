let btn = document.querySelectorAll('button');

let globalState = {
    x: 0,
    y: 0
}

adventure(globalState.x, globalState.y);
//multiple();
//polisen();

btn.forEach(element => {
    element.addEventListener('click', buttons)
});

function buttons(event){
    
    switch (event.target.id) {
        case 'left':
            globalState.x -= 1;
            adventure(globalState.x, globalState.y);
            break;
        case 'up':
            globalState.y += 1;
            adventure(globalState.x, globalState.y);
            break;
        case 'down':
            globalState.y -= 1;
            adventure(globalState.x, globalState.y);
            break;
        case 'right':
            globalState.x += 1;
            adventure(globalState.x, globalState.y);
            break;
    }
}

map();

function map(){
    let link = `http://localhost:1234/allAdventures`;

    fetch(link)
        .then(x => x.json())
        .then(function (data) {
        
            console.log(data);
            data.adventure.result.forEach(element => {
                console.log(element);
            });
        
        })
}

function adventure(x, y){

    console.log('början av funktionen: ' + x, y);

    let link = `http://localhost:1234/adventure?x=${x}&y=${y}`;

    document.querySelector('#position').innerHTML = `<h3>Xpos:${x} Ypos:${y}</h3>`;

    fetch(link)
        .then(x => x.json())
        .then(function (data) {
            
            if (data.adventure.result.length > 0) {

                document.querySelector('h1 p').innerHTML = data.adventure.result[0].title;

                document.querySelector('#adventure').innerHTML = `<p class="main_text">
                <img class="cr" src='assets/images/fantasy_gui_png/frame_02_03.png'>
                <img class="cl" src='assets/images/fantasy_gui_png/frame_02_04.png'>
                <img class="ctl" src='assets/images/fantasy_gui_png/frame_02_03.png'>
                <img class="ctr" src='assets/images/fantasy_gui_png/frame_02_04.png'>
                Du står vid ${data.adventure.result[0].describe}, som är ${data.adventure.result[0].attribute}.</p>`;

                document.querySelector('body').style.backgroundImage = `url(assets/images/${data.adventure.result[0].title.replace(/\s+/g, '_')}.jpg)`;

                if (data.adventure.enemies) {
                    if (data.adventure.result[0].enemy) {
                        document.querySelector('#adventure').innerHTML += `<div class="enemy"><img class="skull" src='assets/images/fantasy_gui_png/button_10_s03.png'><p class="skull_p">En fiende uppenbarade sig. Var redo för strid eller fly för ditt liv.</p><img class="skull_2" src='assets/images/fantasy_gui_png/button_10_s03.png'></div>`;
                    }
                }
            }else{
                globalState.x = 0;
                globalState.y = 0;

                document.querySelector('h1 p').innerHTML = 'Portal';

                document.querySelector('#adventure').innerHTML = `<p class="main_text">
                <img class="cr" src='assets/images/fantasy_gui_png/frame_02_03.png'>
                <img class="cl" src='assets/images/fantasy_gui_png/frame_02_04.png'>
                <img class="ctl" src='assets/images/fantasy_gui_png/frame_02_03.png'>
                <img class="ctr" src='assets/images/fantasy_gui_png/frame_02_04.png'>
                Från ingenstans blir du indragen i en magisk portal, som slungar iväg dig till en annan plats!
                </p>`;

                document.querySelector('body').style.backgroundImage = `url(assets/images/portal.jpg)`;

                btn.forEach(element => {
                    element.style.display = 'none';
                });

                setTimeout(() => {
                    btn.forEach(element => {
                        element.style.display = 'block';
                    });
                    adventure(globalState.x, globalState.y);
                }, 3000);
            }

            

        })
}

function multiple(){

    let link = "http://localhost:1234/multiple?number=5";

    fetch(link)
        .then(x => x.json())
        .then(function (data) {

            for (let i = 0; i < data.calcs.length; i++) {
                document.querySelector('#multi').innerHTML += `${data.calcs[i].num1} x ${data.calcs[i].num2} = ${data.calcs[i].prod}<br><br>`;
            }

        })
}

function polisen(){

    let link = "https://polisen.se/api/events?DateTime=2022-03-28&type=Misshandel";

    fetch(link)
        .then(x => x.json())
        .then(function (data) {

            for (let i = 0; i < data.length; i++) {
                document.querySelector('#polisensApi').innerHTML += data[i].name;
            }

        })
}

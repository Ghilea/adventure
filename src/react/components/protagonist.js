const getProtagonist = () => {
    let link = `http://localhost:1234/getProtagonist?id=1`;
    let link2 = `http://localhost:1234/getEnemy?id=1`;

    fetch(link)
        .then(x => x.json())
        .then(function (data) {

            fetch(link2)
                .then(y => y.json())
                .then(function (data2) {
                    document.querySelector('#adventure').innerHTML = `
                    <div class="fight">
                        <div class="hero">
                            <div class="hp">${data.protagonist.result[0].name} [ ${data.protagonist.result[0].health} ]</div>
                            <div class="img"><img src='assets/images/fantasycharacters/${data.protagonist.result[0].img}.png'></div>
                            <p class="output">text här</p>
                        </div>
                    </div>`;
                })

        })

}

export default getProtagonist;

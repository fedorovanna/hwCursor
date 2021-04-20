document.querySelector('#getInfo').addEventListener('click', getInfo)
document.querySelector('#getPlanets').addEventListener('click', getPlanets)
const infoContainer = document.getElementById('info-container');
function getInfo(){
    episodeNum = document.querySelector('select').value;
    axios.get(`https://swapi.dev/api/films/${episodeNum}/`)
    .then((result) => {
        const characters = result.data.characters;  
        for (let i = 0; i < characters.length; i++) {
            axios.get(`https${characters[i].substring(4)}`).then((res)=>{
                const character = document.createElement('div');
                character.className = 'character';
                const img = new Image(25, 25);
                if(res.data.gender==='male')img.src = './male.png';
                else if(res.data.gender==='female')img.src = './female.png';
                else img.src = './question.png';
                character.innerHTML = `
                Name: ${res.data.name}<br>
                Birth year: ${res.data.birth_year}<br>
                Gender:`
                character.appendChild(img);
                infoContainer.appendChild(character); 
                            
            })    
        }
        while(infoContainer.firstChild) {
            infoContainer.removeChild(infoContainer.firstChild);
        };
    })
}

let p = 1
function getPlanets(page){
    while(infoContainer.firstChild) {
        infoContainer.removeChild(infoContainer.firstChild);
    };
    axios.get(`https://swapi.dev/api/planets/?page=${p}`)
    .then((res) => {
        for (let i = 0; i < res.data.results.length; i++) {
            const planet = document.createElement('div');
            planet.className = "planet";
            planet.innerHTML = res.data.results[i].name
            infoContainer.appendChild(planet); 
        }
        const previous = document.createElement('button');
        previous.className = 'button'
        previous.innerText = 'previous'
        const next = document.createElement('button');
        next.className = 'button'
        next.innerText = 'next'
        next.setAttribute('value', 'next');
        previous.setAttribute('value', 'previous');
        infoContainer.appendChild(previous);
        infoContainer.appendChild(next);
        next.addEventListener('click', function(){
            p++;
            if(p===7){
                p=6
            }
            getPlanets(p); 
        });
        previous.addEventListener('click', function(){
            p--;
            if(p===0){
                p=1
            }
            getPlanets(p);
        });
    })
}

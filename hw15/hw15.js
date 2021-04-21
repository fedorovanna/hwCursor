function* createIdGenerator(){
    let i = 0;
    while(true)
    yield i++;
}

const idGenerator = createIdGenerator();

function* newFontGenerator(defSize) {
    const text = document.querySelector('#sample');
    text.style.fontSize = defSize + 'pt';
    let size = Number.parseInt(text.style.fontSize);
    let value = null;
    while(true){
        if (value === "up") {
            size += 2;
            text.style.fontSize = size + 'pt';
        } else if (value === "down") {
            size -= 2;
            text.style.fontSize = size + 'pt';
        }
        value = yield;
        document.querySelector('.current').textContent = text.style.fontSize
    }
    
}
const fontGenerator = newFontGenerator(14);
const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
downButton.addEventListener('click', ()=>{
    fontGenerator.next('down').value;
})
upButton.addEventListener('click', ()=>{
    fontGenerator.next('up').value;
})  

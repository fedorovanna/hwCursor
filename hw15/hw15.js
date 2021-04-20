function* createIdGenerator(){
    let i = 0;
    while(true)
        yield i++;
}

const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(14);

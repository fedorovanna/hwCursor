async function getRandomChinese(length){
    last5 = ''
    count = 0
    while(count < length){
        last5 += String.fromCharCode(Date.now()).substr(-5)
        await new Promise((resolve) => {
            setTimeout(() => {resolve(last5)}, 50)
        });
        count++
    }
    console.log(last5)
}
getRandomChinese(4)

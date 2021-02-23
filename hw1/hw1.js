const productPrice1 = 15.678
const productPrice2 = 123.9655
const productPrice3 = 90.2345
console.log('Max:', Math.max(productPrice1, productPrice2, productPrice3))
console.log('Min:', Math.min(productPrice1, productPrice2, productPrice3))
totalPrice = productPrice1 + productPrice2 + productPrice3
console.log('Total price:', totalPrice)
roundedTotalPrice = Math.floor(productPrice1) + Math.floor(productPrice2) + Math.floor(productPrice3)
console.log('Rounded total price:', roundedTotalPrice)
console.log(`Total price rounded to hundreds: ${Math.round(roundedTotalPrice/100)*100}`)
const evenOrOdd = (Math.floor(roundedTotalPrice) % 2  == 0) ? true : false;
console.log('Even:', evenOrOdd)
console.log('Change for 500 uah: ', 500 - totalPrice)   
console.log('Average:', ((productPrice1+productPrice2+productPrice3)/3).toFixed(2))
randomDiscount=Math.random()*100
console.log('Discount:', randomDiscount)
discountPrice=totalPrice-((totalPrice*randomDiscount)/100)
console.log('Price with discount:', discountPrice.toFixed(2))
netProfit=discountPrice-totalPrice/2
console.log('Net profit:', netProfit)
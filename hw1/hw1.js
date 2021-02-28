const productPrice1 = 15.678
const productPrice2 = 123.9655
const productPrice3 = 90.2345
const maxPrice = Math.max(productPrice1, productPrice2, productPrice3)
console.log('Max:', maxPrice)
const minPrice = Math.min(productPrice1, productPrice2, productPrice3)
console.log('Min:', minPrice)
const totalPrice = (productPrice1 + productPrice2 + productPrice3)
console.log('Total price:', totalPrice.toFixed(2))
roundedTotalPrice = (Math.floor(productPrice1) + Math.floor(productPrice2) + Math.floor(productPrice3))
console.log('Rounded total price:', roundedTotalPrice)
console.log(`Total price rounded to hundreds: ${Math.round(roundedTotalPrice / 100) * 100}`)
const evenOrOdd = (Math.floor(roundedTotalPrice) % 2  == 0) ? true : false;
console.log('Even:', evenOrOdd)
const clientMoney = 500
console.log('Change for 500 uah: ', (clientMoney - totalPrice).toFixed(2))  
const averagePrice= (productPrice1 + productPrice2 + productPrice3) / 3
console.log('Average:', averagePrice.toFixed(2))
let randomDiscount=Math.random()*100
console.log('Discount:', randomDiscount.toFixed(2))
let discountPrice=totalPrice - ((totalPrice * randomDiscount) / 100)
console.log('Price with discount:', discountPrice.toFixed(2))
const netProfit=totalPrice / 2 - (totalPrice - discountPrice)
console.log('Net profit:', netProfit.toFixed(2))
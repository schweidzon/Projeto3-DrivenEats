// Botao 

const btn = document.querySelector('.disabled')
const btn2 = document.getElementsByClassName('abled none')[0]

let plateName;
let platePrice;
let bevName;
let bevPrice;
let desName;
let desPrice;
let totalPrice;

function selectFood(plate) {     

    const prevButton = document.querySelector('.food .selected')
    const prevCheckMark = document.querySelector('.food .selected .icon ion-icon')    
    
    if ( prevButton !== null) {
        prevButton.classList.remove('selected')   
        prevCheckMark.classList.add('none')                    
    }    
  
    plate.classList.add('selected')

    const checkMark = document.querySelector('.food .selected .icon ion-icon')     
    checkMark.classList.remove('none') 

    const foodName = document.querySelector('.selected h3')
    const foodPrice = document.querySelector('.selected p:last-of-type')
    plateName = foodName.innerHTML
    platePrice= foodPrice.innerHTML 

   
    continuar()   
 
    
    
}






function selectBeverage(beverage) {
    const prevButton = document.querySelector('.beverage .selected')
    const prevCheckMark = document.querySelector('.beverage .selected .icon ion-icon')   
    console.log(prevCheckMark)
    if ( prevButton !== null) {
        prevButton.classList.remove('selected')
        prevCheckMark.classList.add('none')
    }

    beverage.classList.add('selected')
    const checkMark = document.querySelector('.beverage .selected .icon ion-icon')     
    checkMark.classList.remove('none')

    const beverageName = document.querySelector('.beverage .selected h3')
    const beveragePrice = document.querySelector(' .beverage .selected p:last-of-type')
    console.log(beverageName.innerHTML)
    console.log(beveragePrice.innerHTML)

    bevName = beverageName.innerHTML
    bevPrice = beveragePrice.innerHTML
    continuar()


}

function selectDessert(dessert) {
    const prevButton = document.querySelector('.dessert .selected')
    const prevCheckMark = document.querySelector('.dessert .selected .icon ion-icon')
    if ( prevButton !== null) {
        prevButton.classList.remove('selected')
        prevCheckMark.classList.add('none')
    }

    dessert.classList.add('selected')

    const checkMark = document.querySelector('.dessert .selected .icon ion-icon')     
    checkMark.classList.remove('none')

    const dessertName = document.querySelector('.dessert .selected h3')
    const dessertPrice = document.querySelector('.dessert .selected p:last-of-type')
    console.log(dessertName.innerHTML)
    console.log(dessertPrice.innerHTML)

    desName = dessertName.innerHTML
    desPrice = dessertPrice.innerHTML
    continuar()


}

function continuar() {  
    const btn1 = document.querySelector('.disabled')
    const btn = document.querySelector('.abled')  
    
    if(plateName !== undefined && bevName !== undefined && desName !== undefined) {
        btn1.classList.add('none')
        btn.classList.remove('none')
        
    }
    
}   

function confirmation() {
    const confirm = document.querySelector('.confirmation')
    const container = document.querySelector('.container')
    const dishName = document.querySelector('.dish1 h4')
    const dishPrice = document.querySelector('.dish1 p')
    const beverage = document.querySelector('.beverage1 h4')
    const beveragePrice = document.querySelector('.beverage1 p')
    const dessert = document.querySelector('.dessert1 h4')
    const dessertPrice = document.querySelector('.dessert1 p')
    const total = document.querySelector('.total1 p')


    confirm.classList.remove('none')
    container.classList.add('opacity')
    dishName.innerHTML = plateName
    dishPrice.innerHTML = platePrice
    beverage.innerHTML = bevName
    beveragePrice.innerHTML = bevPrice
    dessert.innerHTML = desName
    dessertPrice.innerHTML = desPrice
    totalPrice ="R$ " + (Number(platePrice.replace('R$', '').replace(',' , '.')) + Number(bevPrice.replace('R$', '').replace(',' , '.')) + Number(desPrice.replace('R$', '').replace(',' , '.'))).toFixed(2)
    console.log(totalPrice)
    total.innerHTML = totalPrice.replace('.' , ',')

}


function sendOrder() {
    console.log(platePrice)
    let nome = prompt('Digite seu nome')
    let end = prompt('Digite seu endereço')  
  

    let msg = `Olá, gostaria de fazer o pedido:
               - Prato: ${plateName}
               - Bebida: ${bevName}
               - Sobremesa: ${desName}
               Total: R$ ${totalPrice}`

    let msgBonus = ` - Nome: ${nome}
                     - Endereço: ${end}`


      

    window.open("https://wa.me/5591984864966?text=" + msg + msgBonus) 
}
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

  


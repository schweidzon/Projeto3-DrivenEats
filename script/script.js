
let plateName;
let platePrice;
let bevName;
let bevPrice;
let desName;
let desPrice;
let totalPrice;

// Função de selecionar o prato principal //

function selectFood(plate) {     

    const prevButton = document.querySelector('.food .selected');
    const prevCheckMark = document.querySelector('.food .selected .icon ion-icon');
    
    if ( prevButton !== null) {
        prevButton.classList.remove('selected');  
        prevCheckMark.classList.add('none');                    
    }    
  
    plate.classList.add('selected');

    const checkMark = document.querySelector('.food .selected .icon ion-icon');     
    checkMark.classList.remove('none'); 

    const foodName = document.querySelector('.selected h3');
    const foodPrice = document.querySelector('.selected p:last-of-type');
    plateName = foodName.innerHTML;
    platePrice= foodPrice.innerHTML; 

    continuar();     
    
}

// Função de selecionar a bebiba //

function selectBeverage(beverage) {

    const prevButton = document.querySelector('.beverage .selected');
    const prevCheckMark = document.querySelector('.beverage .selected .icon ion-icon');   
    
    if ( prevButton !== null) {
        prevButton.classList.remove('selected');
        prevCheckMark.classList.add('none');
    }

    beverage.classList.add('selected');

    const checkMark = document.querySelector('.beverage .selected .icon ion-icon');     
    checkMark.classList.remove('none');

    const beverageName = document.querySelector('.beverage .selected h3');
    const beveragePrice = document.querySelector(' .beverage .selected p:last-of-type');
    console.log(beverageName.innerHTML);
    console.log(beveragePrice.innerHTML);

    bevName = beverageName.innerHTML;
    bevPrice = beveragePrice.innerHTML;

    continuar();
}

// Função de selecionar a sobremesa //

function selectDessert(dessert) {
    const prevButton = document.querySelector('.dessert .selected');
    const prevCheckMark = document.querySelector('.dessert .selected .icon ion-icon');

    if ( prevButton !== null) {
        prevButton.classList.remove('selected');
        prevCheckMark.classList.add('none');
    }
    dessert.classList.add('selected');

    const checkMark = document.querySelector('.dessert .selected .icon ion-icon');     
    checkMark.classList.remove('none');

    const dessertName = document.querySelector('.dessert .selected h3');
    const dessertPrice = document.querySelector('.dessert .selected p:last-of-type');
    console.log(dessertName.innerHTML);
    console.log(dessertPrice.innerHTML);

    desName = dessertName.innerHTML;
    desPrice = dessertPrice.innerHTML;

    continuar();
}

// Função de habilitar o botão fechar pedido //

function continuar() {  
    const btn1 = document.querySelector('.disabled');
    const btn = document.querySelector('.abled');  
    
    if(plateName !== undefined && bevName !== undefined && desName !== undefined) {
        btn1.classList.add('none');
        btn.classList.remove('none');        
    }
    
}   

// Função de confirmação do pedido //

function confirmation() {

    const confirm = document.querySelector('.confirmation');
    const container = document.querySelector('.container');
    const dishName = document.querySelector('.dish1 h4');
    const dishPrice = document.querySelector('.dish1 p');
    const beverage = document.querySelector('.beverage1 h4');
    const beveragePrice = document.querySelector('.beverage1 p');
    const dessert = document.querySelector('.dessert1 h4');
    const dessertPrice = document.querySelector('.dessert1 p');
    const total = document.querySelector('.total1 p');

    confirm.classList.remove('none');
    container.classList.add('opacity');
    dishName.innerHTML = plateName;
    dishPrice.innerHTML = platePrice.replace("R$", "");
    beverage.innerHTML = bevName;
    beveragePrice.innerHTML = bevPrice.replace("R$", "");;
    dessert.innerHTML = desName;
    dessertPrice.innerHTML = desPrice.replace("R$", "");;

    totalPrice ="R$ " + (Number(platePrice.replace('R$', '').replace(',' , '.')) + Number(bevPrice.replace('R$', '').replace(',' , '.')) + Number(desPrice.replace('R$', '').replace(',' , '.'))).toFixed(2);
    
    total.innerHTML = totalPrice.replace('.' , ',');

}

// Função de cancelar pedido

function cancel() {

    const confirm = document.querySelector('.confirmation');
    const container = document.querySelector('.container');

    confirm.classList.add('none');
    container.classList.remove('opacity');


}

// Função de mandar o pedido pro whatsapp com mensagem pronta  //


function sendOrder() {
  
    let nome = prompt('Digite seu nome');
    let end = prompt('Digite seu endereço');   

    let msg = `Olá, gostaria de fazer o pedido:
               \n- Prato: ${plateName}
               \n- Bebida: ${bevName}
               \n- Sobremesa: ${desName}
               \nTotal: ${totalPrice.replace(".", ",")}
               \n\n`;

    let msgBonus = ` - Nome: ${nome}
                     \n- Endereço: ${end}`;  

    console.log(msg)
                     
    msg = encodeURIComponent(msg)
    console.log(msg)

    window.open("https://wa.me/5591999999999?text=" + msg + msgBonus);
}
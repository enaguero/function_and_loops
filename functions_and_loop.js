// Functions 

function withdrawMoney(initialAmount, moneyForParty){
    if(initialAmount < moneyForParty){
        //throw new Error("There is not enough money");
        console.log("There is not enough money");
        return;
    }

    return initialAmount - moneyForParty;
}

const addMoney = (initialAmount, additionalMoney) => {
    return initialAmount + additionalMoney;
};

let result; //undefined
result = withdrawMoney(10000, 1000);

console.log(result);

let result2 = withdrawMoney(1000, 10000);
console.log(result2);

let result3 = addMoney(10000,1000);
console.log(result3);


// Loops 
// Ejecutar código de modo repetitivo hasta que cumpla una condición
// Enviar un email o mensaje a los usuarios
// user1@4geeks.com
// user2@4geeks.com
// ... user1000@4geeks.com

let sendEmail = (email, msg) => {
    let outputColor = "color:green; font-size:12px;";
    console.log(email);
    console.log("%c" + msg, outputColor);
};

let message = "Bienvenidos al mundo de la pogramación en 4Geelk";

for(let i=1;i <= 10;i++){
    // let i = 0;
    
    console.log("Index : "+i);
    console.log(i == 0);
    if ( i  >= 1 ){
        continue;
    }

    let email = "user"+ i +"@4geeks.com";
    
    sendEmail(email, message);
    // i = i + 1;
}


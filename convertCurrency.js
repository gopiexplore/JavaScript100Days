//Simple Currency Converter


const rates={
    USD:1,
    EUR:0.9,
    GBP:0.8,
    IND:82
}
const convertCurrency=(amount,fC,tC)=>{
    let amountInUsd=0;
    if(fC!="USD"){
        amountInUsd=amount/rates[fC];
    }else{
        amountInUsd=amount;
    }
    let convertedAmount=0;
    if(tC!='USD'){
        convertedAmount=amountInUsd*rates[tC]
    }else{
        convertedAmount=amountInUsd;
    }

    return convertedAmount;
}
console.log(convertCurrency(100,"GBP","EUR"))
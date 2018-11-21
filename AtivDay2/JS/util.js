function oddOrEven(number){
    if(number%2 == 0){
        return "even";
    }
    else{
    return "odd"
    }
};

//função para gerar numero aleatorio!
function random(){
   return (Math.floor(Math.random(1,1000) * 10)).toString();
}

//exportar para o node enxergar em outras pages!!
module.exports = {
    oddOrEven,
    random

}


/*var idade = 15;

//idade >= 18 ? console.log("Pode") : console.log ("Não Pode")

var pode = idade >= 18 ? true: false;

console.log("Pode");*/

var nota1 = 5.0;
var nota2 = 6.0;

var media = ( nota1 + nota2) /2;

var conceito =""

if( media >= 8){
  
    conceito = "ótimo";
  
}

else if (media >= 6.5){

    conceito = "Bom";
    
}else {

    conceito ="Regular";

}

console.log(media);
console.log(conceito);

switch(conceito){

    case "ótimo":
        console.log("Parabéns você é ótimo aluno")
        break;

    case "Bom":
        console.log("Parabéns você está no caminho certo")
        break;

    case "Regular":
        console.log("Estude um pouco mais")
        break;

    default:
        console.log("Houve algum erro")
        break;
}

Bebida = "Agua de coco"
valor = " "

switch(Bebida){
case "Cafe":
    valor = "Voce escolheu cafe que custa 10,00"
    break;
    case "leite":
    valor = "Voce escolheu leite que custa 15,00"
    break;
case "cha":
    valor = "Voce escolheu cha que custa 20,00"
    break;
case "Agua de coco":
    valor = "Voce escolheu Agua de coco que custa 25,00"
    break;
default:
    valor = "Por favor escolha entre cafe, leite ou cha"
}
   


console.log(valor);
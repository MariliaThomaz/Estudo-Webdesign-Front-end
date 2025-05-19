 //desafio sobre  switch case
 
 let valor = "bb";
         switch(typeof valor) {
            case "number":
                console.log("O valor é um número");
                break;  
            case "string":
                console.log("O valor é uma string");
                break;
            case "boolean":
                console.log("O valor é um booleano");
                break;
            case "object":
                console.log("O valor é um objeto");
                break;  
            default:
                console.log("Tipo de valor não reconhecido");
                break;  

         }
            
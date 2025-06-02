
function calcularAreaRetangulo(base, altura) {
   if (typeof base !== 'number' || typeof altura !== 'number') {
      throw new Error('Base e altura devem ser números.');
      // Lança um erro se base ou altura não forem números
      // o  que é  throw new Error('mensagem de erro') é usado para lançar um erro personalizado
    }
    return base * altura;
}
    //console.log(calcularAreaRetangulo(5, "sdasd")) // 50

function calcularAreaTriangulo(base, altura) {
    if (typeof base !== 'number' || typeof altura !== 'number') {
        throw new Error('Base e altura devem ser números.');
        // Lança um erro se base ou altura não forem números
    }
    return (base * altura) / 2;
}   

function calcularAreaCirculo(raio) {    
    if (typeof raio !== 'number') {
        throw new Error('Raio deve ser um número.');
        // Lança um erro se raio não for um número
    }
    return Math.PI * Math.pow(raio, 2);
}
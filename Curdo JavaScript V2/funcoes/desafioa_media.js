function calculandoMedia() {
    try {
        if (arguments.length === 0) {
            throw new Error("Nenhum valor foi passado.");
        }

        for (let i = 0; i < arguments.length; i++) {
            const valor = arguments[i];

            if (typeof valor !== "number" || isNaN(valor)) {
                throw new Error(`Valor inválido: ${valor} não é um número.`);
            }
        }

        let total = 0;
        for (let i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }

        let quantidade = arguments.length;
        let media = total / quantidade;

        return media;

    } catch (e) {
        console.error("Erro ao calcular a média:", e.message);
        return null;
    }
}

console.log(calculandoMedia(7, 9, 8, 10));     // ✅ Deve retornar 8.5
console.log(calculandoMedia());               // ❌ Erro: Nenhum valor foi passado.
console.log(calculandoMedia(7, 9, 8, "10"));   // ❌ Erro: "10" não é número

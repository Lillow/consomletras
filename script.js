function identifyLetter(letter) {
	const letterMap = {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
		I: 9,
		J: 10,
		K: 11,
		L: 12,
		M: 13,
		N: 14,
		O: 15,
		P: 16,
		Q: 17,
		R: 18,
		S: 19,
		T: 20,
		U: 21,
		V: 22,
		W: 22,
		X: 23,
		Y: 24,
		Z: 25,
	};

	const upperCaseLetter = letter.toUpperCase();
	return letterMap[upperCaseLetter] || 0;
}

function converterTexto() {
	const inputText = document.getElementById("texto").value;
	const letters = inputText.match(/[A-Za-z]/g) || [];

	let sum = 0;
	letters.forEach((letter) => {
		sum += identifyLetter(letter);
	});

	document.getElementById(
		"resultado"
	).textContent = `A soma dos valores é: ${sum}`;
}

function limparTexto() {
	document.getElementById("texto").value = ""; // Limpa o conteúdo da caixa de texto
	document.getElementById("resultado").textContent = ""; // Limpa o resultado anterior
}

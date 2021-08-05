// Inicialização

document.getElementById('resultado').style.display = 'none';


//T-01
function imc(){
	//variaveis
	var value01 = document.getElementById('value01').value;
	var value02 = document.getElementById('value02').value;

	value01 = parseFloat(value01);
	value02 = parseFloat(value02);


	// alert(value01)
	// alert(value02)
	// console.log(value01)
	// console.log(value02)

	var resultado = value02 / (value01*value01);
	//console.log(resultado);

	//resetar resultado
	a1 = document.getElementById('tr6').style.background = '';
	a2 = document.getElementById('tr6').style.textShadow = '';
	b1 = document.getElementById('tr5').style.background = '';
	b2 = document.getElementById('tr5').style.textShadow = '';
	c1 = document.getElementById('tr4').style.background = '';
	c2 = document.getElementById('tr4').style.textShadow = '';
	d1 = document.getElementById('tr3').style.background = '';
	d2 = document.getElementById('tr3').style.textShadow = '';
	e1 = document.getElementById('tr2').style.background = '';
	e2 = document.getElementById('tr2').style.textShadow = '';


	//testes de intervalo
	if (resultado >= 35) {
		var a1 = document.getElementById('tr6').style.background = 'rgba(9, 240, 195, 50%)';
		var a2 = document.getElementById('tr6').style.textShadow = '0 0 0.02px';
		// console.log('35')
	}else if (resultado >= 30) {
		var b1 = document.getElementById('tr5').style.background = 'rgba(9, 240, 195, 50%)';
		var b2 = document.getElementById('tr5').style.textShadow = '0 0 0.02px';
		// console.log('30')
	}else if (resultado >= 25) {
		var c1 = document.getElementById('tr4').style.background = 'rgba(9, 240, 195, 50%)';
		var c2 = document.getElementById('tr4').style.textShadow = '0 0 0.02px';
		// console.log('25')
	}else if (resultado >= 18.5) {
		var d1 = document.getElementById('tr3').style.background = 'rgba(9, 240, 195, 50%)';
		var d2 = document.getElementById('tr3').style.textShadow = '0 0 0.02px';
		// console.log('18.5')
	}else{
		var e1 = document.getElementById('tr2').style.background = 'rgba(9, 240, 195, 50%)';
		var e2 = document.getElementById('tr2').style.textShadow = '0 0 0.02px';
		// console.log('< 18.5')
	}

	//conversao do resultado para string e substituição do ponto pela virgula
	resultado = resultado.toFixed(2);
	resultado = resultado.toString().replace('.',',');


	//mostra os resultados
	if (resultado == 'NaN'){
		swal({
			title: "Oops",
			text: "Algo deu errado!",
			icon: "error",
			button: "Ok",
		});
		return;
	}else {
		document.getElementById('resultado').style.display = 'flex';
		document.getElementById('imc').innerHTML = "Seu IMC: " + resultado;
		document.querySelector('#resultado').scrollIntoView({ 
			behavior: 'smooth' 
		});
	}
}

/////////////////////////////////////////////////////////////////////

//T-02
function media(){


	// cria variaveis
	var value03 = document.getElementById('value03').value;
	var value04 = document.getElementById('value04').value;
	var value05 = document.getElementById('value05').value;
	var media;

	value03 = parseFloat(value03);
	value04 = parseFloat(value04);
	value05 = parseFloat(value05);

	// console.log(value03);
	// console.log(value04);
	// console.log(value05);

	//TESTA SE NUMERO FOR <10 E >0
	if (value03 < 0 || value03 > 10) {
		swal({
			title: "Oops",
			text: "Insira um valor menor que 10!",
			icon: "error",
			button: "Ok",
		});
		return;
		value03 = document.getElementById('value03').value = null;
	}
	//////////////////////
	if (value04 < 0 || value04 > 10) {
		swal({
			title: "Oops",
			text: "Insira um valor menor que 10!",
			icon: "error",
			button: "Ok",
		});
		return;
		value04 = document.getElementById('value04').value = null;
	}
	//////////////////////
	if (value05 < 0 || value05 > 10) {
		swal({
			title: "Oops",
			text: "Insira um valor menor que 10!",
			icon: "error",
			button: "Ok",
		});
		return;
		value05 = document.getElementById('value05').value = null;
	}

	//calcula media
	media = (value03 + value04 + value05) /3;
	media = media.toFixed(2);

	if (media == "NaN") {
		swal({
			title: "Oops",
			text: "Algo deu errado!",
			icon: "error",
			button: "Ok",
		});
	}else {
		document.getElementById("media").innerHTML = "Sua Média: " + media;
	}
}

/////////////////////////////////////////////////////////////////////

//T-03
function concat(){
	
	//cria variaveis
	var value06 = document.getElementById('value06').value;
	var value07 = document.getElementById('value07').value;

	value06 = parseInt(value06);
	value07 = parseInt(value07);

	// console.log(value06);
	// console.log(value07);

	var soma = (value06 + value07);
	var subt = (value06 - value07);
	var mult = (value06 * value07);
	var divi = (value06 / value07);

	soma = parseFloat(soma).toFixed(2)
	subt = parseFloat(subt).toFixed(2)
	mult = parseFloat(mult).toFixed(2)
	divi = parseFloat(divi).toFixed(2)

	// console.log(soma);
	// console.log(subt);
	// console.log(mult);
	// console.log(divi);


	//verifica se deu erro
	if (soma == "NaN") {
		swal({
			title: "Oops",
			text: "Algo deu errado!",
			icon: "error",
			button: "Ok",
		});
		return;
	}else {
		soma = document.getElementById('soma').innerHTML = "Soma: " + soma;
		subt = document.getElementById('subt').innerHTML = "Subtração: " + subt;
		mult = document.getElementById('mult').innerHTML = "Multiplicação: " + mult;
		divi = document.getElementById('divi').innerHTML = "Divisão: " + divi;
	}

	//limpa os <input>
	var value06 = document.getElementById('value06').value = "";
	var value07 = document.getElementById('value07').value = "";

}
function concat2(){
	//cria variaveis
	var nome = document.getElementById('value08').value;
	var sobrenome = document.getElementById('value09').value;
	var nomeCompleto = nome + " " + sobrenome;

	nome = document.getElementById('nome').innerHTML = "Nome: " + nome;
	sobrenome = document.getElementById('sobrenome').innerHTML = "Sobrenome: " + sobrenome;
	nomeCompleto = document.getElementById('nomeCompleto').innerHTML = "Nome Completo: " + nomeCompleto;
}

//T-04
function numeroPreferido(){
    return Math.floor(Math.random() * 101);
}
function numeroPreferido2(){
	var nomeCompleto2 = document.getElementById('value08').value;
	var x = numeroPreferido();

	document.getElementById('numeroPreferido').innerHTML = "Numero Gerado: " + x;
	document.getElementById('numeroPreferido').innerHTML = "O numero preferido de " + nomeCompleto2 + " 	é o: " + x;
}



///////////////////////////////////////////////////////////
function limpar(){
	//limpa os espaços dos <input>
	value01 = document.getElementById('value01').value = "";
	value02 = document.getElementById('value02').value = "";
}
function limpar2(){
	//limpa os espaços dos <input>
	value03 = document.getElementById('value03').value = "";
	value04 = document.getElementById('value04').value = "";
	value05 = document.getElementById('value05').value = "";
}
function limpar3(){
	//limpa os espaços dos <input>
	nome = document.getElementById('value08').value = "";
	sobrenome = document.getElementById('value09').value = "";
}
 	
  //variaveis globais
 	let nome= document.getElementById("Primeiro-nome")
 	let secNome= document.getElementById("Segundo-nome")
 	let email= document.getElementById("email")
 	const senha= document.getElementById("senha")
	 function clicar(){  //função de clicar

	 	if(nome.value.length == 0){ // If do Nome
			window.alert("Preecha os dados corretamente")
			}
		if(secNome.value.length == 0){ // If do sobrenome
			window.alert("Preecha os dados corretamente")
			 
		}	

		if (email.value.length == 0) { // If do email
			window.alert('Email invalido, use o gmail de preferencia');	
			
		}

		if (senha.value.length <=6 ) {
			window.alert("Senha curta demais, insira uma de no minimo 6 caracteres")
			
	 }
} 
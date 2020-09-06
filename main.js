  	
  //variaveis globais
 	let nome= document.getElementById("Primeiro-nome")
 	let secNome= document.getElementById("Segundo-nome")
 	let email= document.getElementById("email")
 	let senha= document.getElementById("senha")

 	let svg= document.getElementById("svg")
 	let svg2= document.getElementById("svg2")
 	let svg3= document.getElementById("svg3")
 	let svg4= document.getElementById("svg4")

 	let res1= document.getElementById("res1")
 	let res2= document.getElementById("res2")
 	let res3= document.getElementById("res3")
 	let res4= document.getElementById("res4")

	 function clicar(){  //função de clicar

	 	if(nome.value.length == 0){ // If do Nome
	 		res1.innerHTML="<p>First name cannot be empty</p>"
	 		nome.style.border="2px solid red"
	 		svg.style.display="inline-block"
	 	} else{
	 		res1.innerHTML=""
	 		nome.style.border="2px solid green"
	 		svg.style.display="none"
	 	}	
			
		if(secNome.value.length == 0){ // If do sobrenome
			res2.innerHTML="<p>Last name cannot be empty</p>"
			secNome.style.border="2px solid red" 
	 		svg2.style.display="inline-block"
		}else{
	 		res2.innerHTML=""
	 		secNome.style.border="2px solid green"
	 		svg2.style.display="none"
	 	}	

		if (email.value.length == 0) { // If do email
		    res3.innerHTML="<p>   invalid email</p>"
		    email.style.border="2px solid red"
	 		svg3.style.display="inline-block"
		}else{
	 		res3.innerHTML=""
	 		email.style.border="2px solid green"
	 		svg3.style.display="none"
	 	}

		if (senha.value.length < 6 ) {
			res4.innerHTML="<p>    6-digit passwords only</p>"
			senha.style.border="2px solid red"
	 		svg4.style.display="inline-block"
	     }else{
	 		res4.innerHTML=""
	 		senha.style.border="2px solid green"
	 		svg4.style.display="none"
	 	}

} 

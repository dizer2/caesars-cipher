let usersss = JSON.parse(localStorage.getItem('USERSSS')) || [];

let alphabet = [];

for(let i = 97; i <= 122; i++){
	alphabet.push(String.fromCharCode(i))
}

for(let i = 60; i <= 90; i++){
	alphabet.push(String.fromCharCode(i))
}



console.log(alphabet)


function chiper(passsword, n=3){
	let chiperPassword = '';
	for(let i = 0; i <passsword.length; i++){
		let currentIndex = alphabet.indexOf(passsword[i]);
		if(currentIndex+n <= alphabet.length - 1){
			currentIndex+=n;
			chiperPassword+=alphabet[currentIndex];
		}else{
			chiperPassword+=alphabet[n-(alphabet.length-currentIndex)]
		}

	}
	return chiperPassword;

	
}



function dechiper(passsword, n=3){
	let deChiperPassword = '';
	for(let i = 0; i <passsword.length; i++){
		let currentIndex = alphabet.indexOf(passsword[i]);
		if(currentIndex-n >= 0){
			currentIndex-=n;
			deChiperPassword+=alphabet[currentIndex]
		}else{
			deChiperPassword+=alphabet[alphabet.length-(n-currentIndex)]
		}
	}
	return deChiperPassword;
}


signUp.onclick = function(){
	let loginValue = loginInput.value;
	let passwordValue = passwordInput.value;
	let login = chiper(loginValue, 3)
	let password = chiper(passwordValue, 3)

	console.log(login)
	console.log(password)

	let lengthArr = usersss.length - 1;
		usersss.push({
		logins: login,
		passwords: password,

	});

	localStorage.USERSSS = JSON.stringify(usersss); 	
}


signIn.onclick = function(){
	let loginCheckValue = loginInput.value;
	let passworCheckValue = passwordInput.value;
	let loginCheck = chiper(loginCheckValue, 3)
	let passworCheck = chiper(passworCheckValue, 3)
	for(let i = 0; i < usersss.length; i++){
		if(loginCheck == usersss[i].logins && passworCheck == usersss[i].passwords){
			alert("Hello")
		}
	}
	console.log(usersss)	
}



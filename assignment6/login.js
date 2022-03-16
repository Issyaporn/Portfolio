window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin")
	form.onsubmit = checkLogin;
}

function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	const queryString =  window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const urlUsername = urlParams.get('username');
	const urlPassword = urlParams.get('password');
	var formuserName = document.forms["myLogin"]["username"]
	var formpassWord = document.forms["myLogin"]["password"]

	if((urlUsername == formuserName.value)&&(urlPassword == formpassWord.value))
	{
		alert("Login success");
		
	}
	else
	{
		alert("usernama or password uncorrect");
		return false;
	}
}

			
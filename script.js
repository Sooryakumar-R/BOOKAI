
const generateapikey=(e)=>
  {
    e.preventDefault();
    // #Generate API KEY 
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-+*';
            var apiKey =" ";
            for (var i = 0; i < 40; i++) {
                apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            document.getElementById('apiKey').textContent = 'Your API Key: ' + apiKey;
  }
var icon=document.getElementById("icon");

icon.onclick=function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme"))
    {
        icon.src="moon.png";
    }
    else
    {
        icon.src="sun.png";
    }
}



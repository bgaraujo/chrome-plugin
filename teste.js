var productName = document.querySelectorAll("h1[itemprop=name]")[0].textContent;

var body = document.getElementsByTagName("BODY")[0];


var alert = document.createElement('DIV');
alert.style.background = "#fff";
alert.style.position = "fixed";
alert.style.width = "100%";
alert.style.textAlign = "center";
alert.style.padding = "38px";
alert.style.top = "0";
alert.style.zIndex = "999";

var text = document.createElement('A');
text.style.fontSize = "20px";
text.innerHTML = "É "+productName+" que voce quer??? compra na cobasi meu amigo só clicar aqui";
text.setAttribute('href', 'https://busca.cobasi.com.br/busca?q='+productName);
alert.append(text);

//var alert = "É "+productName+" que voce quer??? compra na cobasi meu amigo só clicar aqui";

body.append(alert);
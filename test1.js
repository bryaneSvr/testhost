
var xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
	var myJSON = JSON.parse(this.responseText);
document.getElementById("demo").innerHTML = myJSON["body"];
//document.getElementById("demo").innerHTML = "num2"+myJSON["body"]["num2"];
  }
});

//xhr.open("GET", "https://w97r01av5k.execute-api.us-east-2.amazonaws.com/prod");
xhr.open("GET", "https://w97r01av5k.execute-api.us-east-2.amazonaws.com/prod/my-resource?num1=1&num2=2");

xhr.send();
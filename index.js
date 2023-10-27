// random number 
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

//selecting image
var randomimagename1 = "images/dice" +  randomNumber1 + ".png";
console.log(randomNumber1);
var randomimagename2 = "images/dice" +  randomNumber2 + ".png";
console.log(randomNumber2);

// putting image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagename1);
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomimagename2);

//judging
if(randomNumber1>randomNumber2) document.querySelector("h1").innerHTML = "GO WITH 1!!!"
else if(randomNumber1<randomNumber2) document.querySelector("h1").innerHTML = "GO WITH 2!!!"
else
{
    document.querySelector("h1").innerHTML = "ITS A TIE! Leave it to god, mate.";
    document.querySelector("h1").style.color = "#91cc4e";
    document.querySelectorAll("p").forEach(function (element) {
        element.style.color = "#91cc4e";
    });    
    var tieimg = document.getElementsByClassName("if-tie")[0];
    tieimg.setAttribute( "src", "images/jesus.png");
}
// alert(1);
// console.log(1);
var allImages=[];
allImages.push("/images/dice1.png");
allImages.push("/images/dice2.png");
allImages.push("/images/dice3.png");
allImages.push("/images/dice4.png");
allImages.push("/images/dice5.png");
allImages.push("/images/dice6.png");

// var image1=document.getElementsByClassName('img1');
var number1 = Math.floor(Math.random()*allImages.length); 
// alert(allImages[number1]);
 document.getElementsByClassName("img1")[0].src=allImages[number1] ;
// document.querySelector(".img1").src=allImages[number1] ;
// image1=allImages[number1];

// var image2=document.getElementsByClassName('img2');
var number2 = Math.floor(Math.random()*allImages.length); 
document.querySelector(".img2").src=allImages[number2] 


if(number1>number2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!!"

}
else if(number1<number2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins!! 🚩"

}
else{
    document.querySelector("h1").innerHTML="Draw !!"

}
// image2=allImages[number2];


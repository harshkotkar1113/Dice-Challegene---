console.log('Hellow, harsh code here!')

let randomNumber = Math.floor(Math.random()*6 + 1);
console.log(randomNumber);
let randomDice = "dice" + randomNumber + ".png";
let randomImageSource = "image/" + randomDice ;
let randomSkim = document.getElementsByClassName('image')[0];
console.log(randomSkim)
randomSkim.setAttribute("src" , randomImageSource)



let randomNumber2 = Math.floor(Math.random()*6 + 1);
console.log(randomNumber2);
let randomDice2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "image/" + randomDice2 ;
let randomSkim2 = document.getElementsByClassName('image')[1];
console.log(randomSkim2)
randomSkim2.setAttribute("src" , randomImageSource2)

if(randomNumber > randomNumber2){
    var answer= document.querySelector('.answer');
    console.log(answer)
    answer.innerHTML = "Congrts player 1 WIN"
}else if(randomNumber < randomNumber2){
    var answer= document.querySelector('.answer');
    answer.innerHTML = "Congrts player 2 WIN";
}else{
    var answer= document.querySelector('.answer');
    answer.innerHTML  = "!!!Draw!!!";
}
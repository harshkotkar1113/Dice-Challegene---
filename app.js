console.log('Hellow, harsh code here!')

let randomNumber = Math.floor(Math.random()*6 + 1);
console.log(randomNumber);
let randomDice = "dice" + randomNumber + ".png";
console.log(randomDice)
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


// Winner result

if(randomNumber > randomNumber2){
    var answer= document.getElementsByClassName('answer')[0];
    console.log(answer)
    answer.innerHTML = "Player 1 WIN"
}else if(randomNumber < randomNumber2){
    var answer= document.querySelector('.answer');
    answer.innerHTML = "Player 2 WIN";
}else{
    var answer= document.querySelector('.answer');
    answer.innerHTML  = "!!!Draw!!!";
}

// playgame button

let playGame = document.getElementById('btn').addEventListener
('click', function(){
    location.reload();
})
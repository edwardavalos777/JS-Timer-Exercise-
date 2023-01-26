//Countdown
let countDown = time => {
  let timer = setInterval(function () {
    time--;
    if (time <= 0) {
      clearInterval(timer);
      console.log('DONE!');
    }
    else {
      console.log(time);
    }

  }, 1000)
};
countDown(12);


//randomGame
let randomGame = () => {
  let randomNumber;
  let numberOfTimes = 0;
  let timer = setInterval(function () {
    randomNumber = Math.random();
    numberOfTimes++
    if (randomNumber > .75) {
      clearInterval(timer);
      console.log(`It took ${numberOfTimes} tries`);
    }
  }, 1000)
}

console.log(randomGame());
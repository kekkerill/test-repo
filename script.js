helloWrap = document.getElementById('wrapper')
plates = document.getElementById('plates-button')
numbers = document.getElementById('numbers-button')
car = document.getElementById('car-button')
speedClick = document.getElementById('speedClick-button')
plateWrap = document.getElementById('plate-wrap')
numberWrap = document.getElementById('number-wrap')
carWrap = document.getElementById('carWrap')
congratsWrap = document.getElementById('congrats-wrap')
speedClickWrap = document.getElementById('speedClick-wrap')
dinoWrap = document.getElementById('dinoWrap')
truePlate = document.getElementById('true-plate')
numberInput = document.getElementById('number-input')
numberOutput = document.getElementById('numberOutput')
clickButton = document.getElementById('speedClick-game-button')
dinoButton = document.getElementById('dino-button')
plateOff = document.getElementById('plateOff')
numberOff= document.getElementById('numberOff')
carOff = document.getElementById('carOff')
speedClickOff = document.getElementById('speedClickOff')
clickCount= document.getElementById('click-count')
clickTimer = document.getElementById('click-timer')
carRoad = document.getElementById('carRoad')
dino = document.getElementById('dino')
cactis = document.getElementById('cactus')
dinoReload = document.getElementById('dino-reload')


plates.onclick = () => {
    helloWrap.style.display = 'none'
    plateWrap.style.display = 'block'
}
truePlate.onclick = function(){
        plateOff.style.display = 'none';
            congratsWrap.style.display = 'block'
            setTimeout(() => {
                location.reload()
            }, 2000);
    }
numbers.onclick=() =>{
    helloWrap.style.display = 'none'
    numberWrap.style.display = 'block'
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  let numberGameAnswer = getRandomIntInclusive(1,10)
  console.log(numberGameAnswer);
numberOutput.onclick = function(){
    let numberAnswer = numberInput.value
    if (numberAnswer == numberGameAnswer) {
        numberOff.style.display = 'none';
        congratsWrap.style.display = 'block'
        setTimeout(() => {
            location.reload()
        }, 2000);
    }
    else{
        alert('Неверно, попробуйте ещё раз, ну или посмотрите ответ в консоли')
    }
}
speedClick.onclick = () =>{
    helloWrap.style.display = 'none'
    speedClickWrap.style.display = 'block'
}
let count = 0
const gameTimeout = 5000
clickButton.onclick= speedClickGame
clickCount.innerText=count
function speedClickGame(){
    clickButton.onclick = () => {count++; clickCount.innerText=count}
    const timeout = setTimeout(()=>{
        clickButton.onclick=null;
        alert('Вы кликнули '+ count +' раз')
        location.reload()
    },gameTimeout)
}
car.onclick=() =>{
    helloWrap.style.display = 'none'
    carWrap.style.display = 'block'
}
roadArr = []
roadArr[100] = '🏎️'
roadArr[0] = '🚗'
carRoad.innerText = roadArr
addEventListener('keydown', function(){  
    roadArr.shift()
    roadArr[0] = '🚗'
    carRoad.innerText = roadArr
    if (roadArr.length==1){
        carOff.style.display = 'none'
        congratsWrap.style.display = 'block'
        setTimeout(() => {
           location.reload() 
        }, 2000);
    }
})
dinoButton.onclick= () =>{
    helloWrap.style.display = 'none'
    dinoWrap.style.display = 'block'
}
document.addEventListener('keydown', function(event) {
    jump();
})
function jump() {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
    }
    setTimeout(() => {
        dino.classList.remove('jump')
    }, 300);
}
dinoReload.onclick = () =>{
    location.reload()
}
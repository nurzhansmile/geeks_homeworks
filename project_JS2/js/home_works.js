// HW 1, Звдачка 1


const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z]\w.+@gmail\.com$/;
gmailButton.addEventListener('click', () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK';
        gmailResult.style.color = 'green';
    }else{
        gmailResult.innerHTML = 'NOT OK';
        gmailResult.style.color = 'red';
    }
})



// HW 1, part 2

// const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
let positionX = 0;
let positionY = 0;
const maxWidthParentBlock = 449;
const smallBlock = () => {
    if(positionX <= maxWidthParentBlock && positionY === 0){
    positionX++
    childBlock.style.left = `${positionX}px`
        requestAnimationFrame(smallBlock);
    }else if(positionX >= maxWidthParentBlock && positionY <= maxWidthParentBlock){
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(smallBlock);
// HW 2, part 1
    }else if( positionX > 0 && positionY > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(smallBlock);
    }
    else  {
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(smallBlock);
    }
}
requestAnimationFrame(smallBlock);



// HW 2, part 2

const time = document.querySelector('#seconds')
const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonReset = document.querySelector('#reset');

let seconds = 0;
let interval = 0;
buttonStart.addEventListener('click', () => {
    clearInterval(interval)
   interval = setInterval( () => {
     seconds++
     time.innerHTML = seconds
     console.log(seconds)
 },1000)
})

buttonStop.addEventListener('click', () => {
    clearInterval(interval)
    time.innerHTML = seconds
    console.log("stop")
})

buttonReset.addEventListener('click', ()=> {
    clearInterval(interval)
    seconds = 0
    time.innerHTML = '' + 0
    console.log(seconds)
})


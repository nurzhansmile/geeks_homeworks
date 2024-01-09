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

// HW 1, Задачка 2

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
let smallBlock = 0;
const increment = () => {
    smallBlock++
    childBlock.style.left= `${smallBlock}px`
    console.log(smallBlock)
    if(smallBlock < 450){
        requestAnimationFrame(increment);
    }
}
requestAnimationFrame(increment);
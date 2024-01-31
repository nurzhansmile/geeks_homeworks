// PHONE
const phoneInput = document.querySelector('#phone_input');
const phoneButton = document.querySelector('#phone_button');
const phoneResult = document.querySelector('#phone_result');

const regExp = /^\+996 [7259]\d{2} \d{2}-\d{2}-\d{2}$/;
phoneButton.addEventListener('click', () => {
    if(regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK';
        phoneResult.style.color = 'green';
    }else{
        phoneResult.innerHTML = 'NOT OK';
        phoneResult.style.color = 'red';
    }
})

// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')


const converter =  (element, targetElement,targetElement2, currentValue) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()

            switch (currentValue) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value * 0.92).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    targetElement2.value = (element.value * 1.09).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' ? targetElement.value = '' : ''
            element.value === '' ? targetElement2.value = '' : ''

        }catch (error){
            console.log('Error', error)
        }
    }
}
converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput ,'usd')
converter(eurInput, somInput, usdInput ,'eur')


// seconds

const buyBtn = document.querySelector("#buy")
const cancelBtn = document.querySelector("#cancel")


const text = document.querySelector("#seconds");

text.textContent="0"
let timerInterval

buyBtn.onclick=()=>{
    clickFunc()
}

cancelBtn.onclick=()=>{
    text.textContent="0"
    clearInterval(timerInterval)
}

const clickFunc = ()=>{
    timer()
}


const timer = () => {
    clearInterval(timerInterval);

    let randomChoice = Math.floor(Math.random() * 3) + 1;
    console.log(randomChoice);

    let hourCount, daysCount, minutesCount, secondsCount;

    if (randomChoice === 1) {
        daysCount = 2;
        hourCount = 0;
    } else if (randomChoice === 2) {
        daysCount = 3;
        hourCount = 0;
    } else {
        daysCount = 0;
        hourCount = 12;
    }
    minutesCount = 0;
    secondsCount = 0;

    timerInterval = setInterval(() => {
        secondsCount--;
        if (secondsCount === 0||secondsCount<0) {
            secondsCount = 59;
            minutesCount--;
        }
        if (minutesCount === 0 || minutesCount <0) {
            minutesCount = 59;
            hourCount--;
        }
        if (hourCount === 0|| hourCount < 0){
            daysCount--;
            hourCount = 24;
            minutesCount = 59;
            secondsCount = 59;
        }
        if (daysCount === 0 && hourCount === 0 && minutesCount === 0 && secondsCount === 0) {
            clearInterval(timerInterval);
        }

        // Обновляем текстовое содержимое
        text.textContent = `${daysCount}:${hourCount}:${minutesCount}:${secondsCount}`;
    }, 1000);
}




// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1
const cardSwitcher = async (id) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        const data = await response.json()
        card.innerHTML =  `
            <p>${data.title} </p>
            <p style="color: ${data.completed ? 'green' : 'red'}">
            ${data.completed}
            </p>
            <span>${data.id}</span>
     `
    }catch (error){
        console.log('error', error)
    }
}

const showFirstCard = () => {
    cardSwitcher(1)
}
showFirstCard()

btnNext.onclick = ()=> {
    if (count < 200) {
        count++
    }
    else{
        count = 1
    }
    cardSwitcher(count)}
btnPrev.onclick = ()=> {
    if (count > 1) {
        count--
    }
    else{
        count = 200
    }
    cardSwitcher(count)
}





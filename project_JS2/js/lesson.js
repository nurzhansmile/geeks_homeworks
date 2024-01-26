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

// tab slider

const tabContents = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
const hideTabContent =() => {
    tabContents.forEach((tabContent) => {
        tabContent.style.display = 'none'
    })
    tabItems.forEach((tabItem) => {
        tabItem.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) =>{
    // tabContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabsParent.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 4000)
}

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem, tabIndex) =>{
            if (event.target.classList.contains('tab_content_item')){
                tabItems.forEach((tabItem, tabIndex)=>{
                    if (event.target ===tabItem) {
                        hideTabContent()
                        showTabContent(tabIndex)
                    }
                })
            }
        })
    }
}

autoSlider()

// CONVERTER

const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement,targetElement2, currentValue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (currentValue) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    targetElement2.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    targetElement2.value = (element.value *  0.92).toFixed(2)
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
        }
    }
}
converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput ,'usd')
converter(eurInput, somInput, usdInput ,'eur')

// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1
const cardFetcher = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML =  `
            <p>${data.title} </p>
            <p style="color: ${data.completed ? 'green' : 'red'}">
            ${data.completed}
            </p>
            <span>${data.id}</span>
`
        })
}

const showFirstCard = () => {
    cardFetcher(1)
}
showFirstCard()

btnNext.onclick = ()=> {
    if (count < 200) {
    count++
}
    else{
    count = 1
    }
    cardFetcher(count)}
btnPrev.onclick = ()=> {
    if (count > 1) {
        count--
    }
    else{
        count = 200
    }
    cardFetcher(count)
}

// 2 задача

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then( data => console.log(data))

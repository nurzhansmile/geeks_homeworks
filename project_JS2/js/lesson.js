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


// TAB SLIDER

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



// CARD SWITCHER

const card = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1
const cardFetcher = async (id) => {
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

// WEATHER

const citySearchInput = document.querySelector('.cityName')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'

// query params
const citySearch = () => {
    citySearchInput.oninput= async (event) => {
        try {
            const response = await fetch(`${BASE_URL}?q=${event.target.value}&appid=${API_KEY}`)
            // .then(response =>response.json() )
            const data = await response.json()
            cityName.innerHTML = data.name || 'Город не найден...'
            cityTemp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;С' : '...'
        }catch (error){
            console.log('error', error)
        }
    }
}

citySearch()

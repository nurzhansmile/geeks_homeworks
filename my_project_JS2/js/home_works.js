// Stop
//
const time = document.querySelector('#seconds');
const buttonStart = document.querySelector('#start');
const buttonStop = document.querySelector('#stop');
const buttonReset = document.querySelector('#reset');
//
// let seconds = 0;
// let interval = 0;
// buttonStart.onclick, () => {
//     clearInterval(interval)
//     interval = setInterval(() => {
//         seconds--
//         time.innerHTML = seconds
//     }, 1000)
// })
//
// buttonStop.onclick, () => {
//     clearInterval(interval)
//     time.innerHTML = seconds
// })
//
// buttonReset.onclick, () => {
//     clearInterval(interval)
//     seconds = 0
//     time.innerHTML = '' + 0
//
// })

// Gmail
const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z]\w.+@gmail\.com$/;
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'OK';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'NOT OK';
        gmailResult.style.color = 'red';
    }
}

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
    tabContents[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabItems.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 4000)
}

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem, tabIndex) =>{
            if (event.target ===tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}

autoSlider()

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




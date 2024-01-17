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
    tabContents[index].style.display = 'block'
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

const wrapper = document.querySelector(".wrapper")
const lionKingPersons = () => {
    const request = new XMLHttpRequest() // 1. Создание запроса
   // console.log(request);
    request.open('GET', 'persons.json') // 2. Указание иетода запроса и указание пути
    request.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовков
    request.send()   // Отправка запроса
    request.addEventListener('load', () => {
        const lionKingPersons = JSON.parse(request.response)
        lionKingPersons.forEach((person) =>{
            const {name, age, person_photo} = person
            const personCard = document.createElement('div')
            personCard.setAttribute('class', 'personCard')
            console.log(personCard);

            personCard.innerHTML = `
            <div class="userPhoto">
            <img src="${person_photo}" alt="${name}">
</div>
            <h2>${person.name} </h2>
            <p>${person.age}</p>`

            wrapper.append(personCard)
        })
    })
}

lionKingPersons()


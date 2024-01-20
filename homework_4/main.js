
const lionKingPersons = () => {
    const request = new XMLHttpRequest() // 1. Создание запроса
   // console.log(request);
    request.open('GET', 'persons.json') // 2. Указание иетода запроса и указание пути
    request.setRequestHeader('Content-type', 'application/json') // 3. Указание заголовков
    request.send()   // Отправка запроса
    request.addEventListener('load', () => {
        const lionKingPersons = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = lionKingPersons.name
        document.querySelector('.age').innerHTML = lionKingPersons.age
    })
}

lionKingPersons()
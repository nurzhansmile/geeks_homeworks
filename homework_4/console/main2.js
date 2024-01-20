const countries = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'countries.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()
    request.addEventListener('load', () => {
        const countries = JSON.parse(request.response)
    console.log(countries);
})
}
countries()
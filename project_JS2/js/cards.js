const cardsWrap = document.querySelector('.cards')
const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=20'

const  cards = async () => {
    try{
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        for( let i = 0; i < data.length; i++){

        cardsWrap.innerHTML +=`
        <div class="card">   
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKn9mDIQ1GvqI9kxxlQr9nH8xeFv2bk5tdbg&usqp=CAU" alt=",tppe,br">
        <h3>${data[i].title}</h3>
        <p>${data[i].body}</p>
        </div>
        `
        }

    }catch (error){
        console.log('ERROR', error)
    }
}
cards()

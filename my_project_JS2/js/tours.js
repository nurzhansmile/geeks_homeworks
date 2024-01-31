let image_tours = [
    "../images_tours/1.jpg",
    "../images_tours/2.jpg",
    "../images_tours/3.jpg",
    "../images_tours/4.jpg",
    "../images_tours/5.jpg",
    "../images_tours/6.jpg",
    "../images_tours/7.jpg",
    "../images_tours/8.jpg",
    "../images_tours/9.jpg",
    "../images_tours/10.jpg",
    "../images_tours/11.jpg",
    "../images_tours/12.jpg",
    "../images_tours/13.jpg",
    "../images_tours/14.jpg",
    "../images_tours/15.jpg",
    "../images_tours/16.jpg",
    "../images_tours/17.jpg",
    "../images_tours/18.jpg",

    ]

const cardsWrap = document.querySelector('.cards')
const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=18'

const  cards = async () => {
    try{
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        for( let i = 0; i < data.length; i++){

            cardsWrap.innerHTML +=`
        <div class="card">   
        <img src=${image_tours[i]} alt="tours">
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


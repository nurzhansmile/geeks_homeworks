//modal
const modal=document.querySelector('.modal')
const modalTriggerButton=document.querySelector('#btn-get')
const modalCloseButton=document.querySelector('.modal_close')

const openModal=()=>{
    modal.style.display='block'
    document.body.style.overflow='hidden'
}


const closeModal=()=>{
    modal.style.display='none'
    document.body.style.overflow=''

}

modalTriggerButton.onclick=()=>openModal()
modalCloseButton.onclick=()=>closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}
setTimeout(openModal, 10000)

const scrollFunc = function() {
    console.log(window.innerHeight + window.scrollY)
    console.log(document.documentElement.scrollHeight)

    if(window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight){
        console.log(2)
        openModal()
        document.removeEventListener("scroll", scrollFunc)
    }



}

document.addEventListener('scroll', scrollFunc)

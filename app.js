let modalButton = document.querySelector('.modalButton');
let closeButton = document.querySelector('.closeButton');
let modalContent = document.querySelector('.modalContent')
let modalProjectMain = document.querySelector('.modalProjectMain');
let mainContainer = document.querySelector('.mainContainer');
let blureBackground = document.querySelector('.blureBackground');


modalButton.addEventListener('click', ()=>{
    modalContent.style.display = "block"
    blureBackground.style.display = "block"
});


closeButton.addEventListener('click',()=>{
    modalContent.style.display = "none"
    blureBackground.style.display = "none"
})
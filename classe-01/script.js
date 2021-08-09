const menuButton = document.querySelector('.side-menu__button--open');
const menuButtonImage = document.querySelector('.side-menu__button img');
const sideMenu = document.querySelector('.side-menu')
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal__image');
const like = document.querySelectorAll('.like__img');
const modalLike = document.querySelector('#like')
const modalCloseButton = document.querySelector('.modal__button--close');
const modalPreviousButton = document.querySelector('.modal__button--previous');
const modalNextButton = document.querySelector('.modal__button--next');
const galleryImage = document.querySelectorAll('.item__img')
function posicao() {
    if (contador === 0) {
        modalPreviousButton.classList.add('display-none')
    } else {
        modalPreviousButton.classList.remove('display-none')
    }

    if (contador === 9) {
        modalNextButton.classList.add('display-none')
    } else {
        modalNextButton.classList.remove('display-none')
    }
}
function likeAtivo() {
    if (like[contador].classList.contains('display-none')) {
        modalLike.classList.add('display-none')

    } else {
        modalLike.classList.remove('display-none')
    }
}
let contador = 0;

menuButton.addEventListener('click', function () {
    sideMenu.classList.toggle('hidden');
    menuButtonImage.src = sideMenu.classList.contains('hidden') ? './assets/closed-menu.svg' : './assets/open-menu.svg';
})

galleryImage.forEach(imagem => imagem.addEventListener('click', function (event) {
    modal.classList.remove('display-none')
    modalImage.src = event.target.src
    contador = Number(event.target.dataset.indice);
    posicao();
    likeAtivo()
}))

modalImage.addEventListener('dblclick', function () {
    like[contador].classList.toggle('display-none')
    modalLike.classList.toggle('display-none')

})


modalPreviousButton.addEventListener('click', function () {
    contador--;
    modalImage.src = galleryImage[contador].src;
    posicao();
    likeAtivo()
})

modalNextButton.addEventListener('click', function () {
    contador++;
    modalImage.src = galleryImage[contador].src;
    posicao();
    likeAtivo()
})




modalCloseButton.addEventListener('click', function () {
    modal.classList.add('display-none')
})






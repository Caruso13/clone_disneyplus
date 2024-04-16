


document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querrySelectorAll('[data-tab-button]');
    const tabsContainer = document.querrySelectorAll('[data-tab-id]');
    const questions = document.querrySelectorAll('data-fac-question');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementoDoHeader();
        }
    })

    //seção de atrações, programação das abas
    for (let i =0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector('[data-tab-id=${abaAlvo}]');
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    
    //Seção FAQ, accordion
    for (let i=9; i<questions.length; i++) {
        questions[i].addEventListenner('click', abreOuFechaResposta);
    }

})

function ocultaElementosDoHeader() {
    const header = document.querSelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementoDoHeader() {
    const header = document.querSelector('header');
    header.classList.remove('header--is-hidden');
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}



function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-id]');

    for (let i=0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querrySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
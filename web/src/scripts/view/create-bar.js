const createElement = document.querySelector('.create-bar');
const dialogElement = document.querySelector('.dialog-join');

document.addEventListener('click', event => {
    if (!event.target.closest('.create-bar')) {
        createElement.querySelector('.favicon').style.backgroundColor = '';
        createElement.querySelector('svg').style.fill = '';
        createElement.querySelector('.dropdown').style.display = '';
    }
});

dialogElement.addEventListener('click', event => {
    if (!event.target.closest('.join-bar')) {
        dialogElement.style.display = '';
    }

    if (event.target.classList.contains('cancel')) {
        dialogElement.style.display = '';
    }
});

const onBtnCreateClicked = event => {
    if (event.target.classList.contains('favicon')) {
        createElement.querySelector('.favicon').style.backgroundColor = '#e6f4ea';
        createElement.querySelector('svg').style.fill = '#188038';
        createElement.querySelector('.dropdown').style.display = 'flex';
    }

    if (event.target.classList.contains('btn-hide')) {
        createElement.querySelector('.favicon').style.backgroundColor = '';
        createElement.querySelector('svg').style.fill = '';
        createElement.querySelector('.dropdown').style.display = '';
    }

    if (event.target.classList.contains('btn-join')) {
        dialogElement.style.display = 'flex';
    }
};

createElement.addEventListener('click', event => onBtnCreateClicked(event));
import '../templates/reset.hbs';
import '../styles/min-width-768px/reset.css';

const bodyElement = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {

});

const onBtnListenerClicked = event => {
    if (event.target.classList.contains('favicon')) {
        event.target.nextElementSibling.style.display = 'flex';

        document.addEventListener('click', event => {
            if (!event.target.parentElement.closest('div')) {
                event.target.nextElementSibling.style.display = '';
            }
        });
    }
};

bodyElement.addEventListener('click', () => onBtnListenerClicked(event));
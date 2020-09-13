import '../templates/settings.hbs';
import '../styles/min-width-768px/settings.css';
import days from './data/days.js';

const bodyElement = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () => {
    days.forEach(element => {
        document.getElementById('days-bar').innerHTML += `
            <div class="checkbox-item" role="checkbox" aria-checked="false">
                <label class="checkbox">
                    <input type="checkbox" name="days" id="${element.id}" value="${element.value}">
                    <span class="checkmark"></span>
                </label>
                <label for="${element.id}">${element.value}</label>
            </div>
        `;
    });
});

const onBtnListenerClicked = event => {
    if (event.target.classList.contains('btn-majors')) {

    }

    if (event.target.classList.contains('btn-rooms')) {
        
    }
};

bodyElement.addEventListener('click', () => onBtnListenerClicked(event));
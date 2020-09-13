import '../component/avatar-bar.js';

const avatarElement = document.querySelector('avatar-bar').shadowRoot;

document.addEventListener('click', event => {
    if (!event.target.closest('avatar-bar')) {
        avatarElement.querySelector('.favicon').style.backgroundColor = '';
        avatarElement.querySelector('.dropdown').style.display = '';
    }
});

const onBtnAvatarClicked = event => {
    if (event.target.classList.contains('favicon')) {
        avatarElement.querySelector('.favicon').style.backgroundColor = '#e6f4ea';
        avatarElement.querySelector('.dropdown').style.display = 'flex';
    }

    if (event.target.classList.contains('btn-hide')) {
        avatarElement.querySelector('.favicon').style.backgroundColor = '';
        avatarElement.querySelector('.dropdown').style.display = '';
    }
};

avatarElement.addEventListener('click', event => onBtnAvatarClicked(event));
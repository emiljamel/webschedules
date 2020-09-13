const titleElement = document.querySelector('.title-bar');

const onTitleFocusOuted = event => {
    if (event.target.classList.contains('title')) {
        if (event.target.value.length === 0) {
            event.target.value = 'Untitled schedule';
        }
    }
};

titleElement.addEventListener('focusout', event => onTitleFocusOuted(event));
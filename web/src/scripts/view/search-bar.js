const searchElement = document.querySelector('.search-bar');

const onBtnSearchClicked = event => {
    if (event.target.classList.contains('btn-submit')) {
        searchElement.querySelector('.input-search').focus();
    }

    if (event.target.classList.contains('btn-reset')) {
        searchElement.querySelector('.btn-reset').style.display = '';
        searchElement.querySelector('.input-search').value = '';
        searchElement.querySelector('.input-search').focus();
    }

    if (event.target.classList.contains('btn-close')) {
        searchElement.querySelector('.btn-close').style.display = '';
        searchElement.querySelector('.search-wrapper').style.display = '';
    }

    if (event.target.classList.contains('btn-search')) {
        searchElement.querySelector('.btn-close').style.display = 'flex';
        searchElement.querySelector('.search-wrapper').style.display = 'flex';
        searchElement.querySelector('.input-search').focus();

        document.addEventListener('click', event => {
            if (!event.target.closest('.search-bar')) {
                searchElement.querySelector('.search-wrapper').style.display = '';
            }
        });
    }
};

searchElement.addEventListener('click', event => onBtnSearchClicked(event));

const onSearchFocused = event => {
    if (event.target.classList.contains('input-search')) {        
        if (!event.target.value.length > 0) {
            searchElement.querySelector('.btn-reset').style.display = '';
        } else {
            searchElement.querySelector('.btn-reset').style.display = 'flex';
        }
    }
};

searchElement.addEventListener('input', event => onSearchFocused(event));
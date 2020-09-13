const downloadElement = document.querySelector('.download-bar');

document.addEventListener('click', event => {
    if (!event.target.closest('.download-bar')) {
        downloadElement.querySelector('.favicon').style.backgroundColor = '';
        downloadElement.querySelector('svg').style.fill = '';
        downloadElement.querySelector('.dropdown').style.display = '';
    }
});

const onBtnDownloadClicked = event => {
    if (event.target.classList.contains('favicon')) {
        downloadElement.querySelector('.favicon').style.backgroundColor = '#e6f4ea';
        downloadElement.querySelector('svg').style.fill = '#188038';
        downloadElement.querySelector('.dropdown').style.display = 'flex';
    }

    if (event.target.classList.contains('btn-hide')) {
        downloadElement.querySelector('.favicon').style.backgroundColor = '';
        downloadElement.querySelector('svg').style.fill = '';
        downloadElement.querySelector('.dropdown').style.display = '';
    }
};

downloadElement.addEventListener('click', event => onBtnDownloadClicked(event));
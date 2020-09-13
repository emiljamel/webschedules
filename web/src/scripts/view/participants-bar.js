import participants from '../data/participants.js';

const participantsElement = document.querySelector('.participants-bar');

document.addEventListener('click', event => {
    if (!event.target.closest('.participants-bar')) {
        participantsElement.querySelector('.favicon').style.backgroundColor = '';
        participantsElement.querySelector('svg').style.fill = '';
        participantsElement.querySelector('.dropdown').style.display = '';
    }
});

const onBtnParticipantsClicked = event => {
    if (event.target.classList.contains('favicon')) {
        participantsElement.querySelector('.favicon').style.backgroundColor = '#e6f4ea';
        participantsElement.querySelector('svg').style.fill = '#188038';
        participantsElement.querySelector('.dropdown').style.display = 'flex';

        let dataElement = participantsElement.querySelectorAll('.data-dropdown')[1];

        if (dataElement.childElementCount < 1) {
            participants.forEach(element => {
                dataElement.innerHTML += `
                    <div class="participants">
                        <div class="avatar">
                            <span class="avatar-img">${element.initial}</span>
                            <div class="avatar-name">
                                <span>${element.name}</span>
                                <span class="status">${element.status}</span>
                            </div>
                        </div>
                        <a class="close" role="button">&times;</a>
                    </div>
                `;
            });
        }
    }
};

participantsElement.addEventListener('click', event => onBtnParticipantsClicked(event));
const majorsElement = document.querySelector('#majors-bar');
let increment = 1;

const onBtnMajorsClicked = event => {
    const fieldElement = majorsElement.querySelector('.st-field');

    if (event.target.classList.contains('add-to-content')) {        
        fieldElement.style.marginTop = '8px';
        
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'field-bar');
        divElement.innerHTML += `
            <input type="text" name="majors" value="Majors ${increment++}" spellcheck="false" autocomplete="off">
            <a class="delete-bar" role="button">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="black" 
                    width="18px" 
                    height="18px">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </a>
        `;
        fieldElement.appendChild(divElement);
    }

    if (event.target.classList.contains('delete-bar')) {
        event.target.parentElement.remove();
    }

    if (fieldElement.childElementCount < 1) {
        fieldElement.style.marginTop = '';
    }
};

majorsElement.addEventListener('click', event => onBtnMajorsClicked(event));
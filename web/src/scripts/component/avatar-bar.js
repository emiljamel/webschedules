class AvatarBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    margin: 0;
                    position: relative;
                }

                :host > a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    border-radius: 100%;
                    text-decoration: none;
                    -webkit-tap-highlight-color: transparent;
                }

                :host > a:hover {
                    background-color: #dadce0;
                }

                svg {
                    fill: rgba(0, 0, 0, .54);
                    width: 24px;
                    height: 24px;
                    pointer-events: none;
                }

                .avatar-img {
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    color: white;
                    font-size: 18px;
                    text-align: center;
                    text-transform: uppercase;
                    background-color: #188038;
                    border-radius: 100%;
                    margin: auto;
                    padding: 0;
                    pointer-events: none;
                }

                .dropdown {
                    display: none;
                    flex-direction: column;
                    min-width: 230px;
                    height: auto;
                    max-height: calc(100vh - 86px);
                    margin-top: 16px;
                    background-color: white;
                    border: 1px solid #dadce0;
                    border-radius: 4px;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2);
                    overflow-y: auto;
                    position: absolute;
                    top: 100%;
                    right: 0;
                    z-index: 3;
                }

                .data-dropdown {
                    display: flex;
                    flex-direction: column;
                    padding: 5px 0;
                }

                .data-dropdown:not(:first-child) {
                    border-top: 1px solid #dadce0;
                }

                .dropdown a {
                    display: flex;
                    align-items: center;
                    height: 36px;
                    padding: 0 16px;
                    cursor: pointer;
                    font-size: 14px;
                    color: black;
                    text-transform: capitalize;
                    text-decoration: none;
                    -webkit-tap-highlight-color: transparent;
                }

                .dropdown a:hover {
                    background-color: #ebebeb;
                }

                .avatar-name {
                    display: inline-block;
                    width: 158px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    padding-left: 16px;

                }
            </style>

            <a class="favicon" role="button" id="avatar-bar">
                <span class="avatar-img">E</span>
            </a>
            <div class="dropdown" aria-labelledby="avatar-bar">
                <div class="data-dropdown">
                    <a href="/account.html" class="hide-bar">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="black" 
                            width="24px" 
                            height="24px">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                        <span class="avatar-name">Emil Jamel Mahmuda</span>
                    </a>
                </div>
                <div class="data-dropdown">
                    <a href="/help.html" class="btn-hide">Help</a>
                    <a href="/about.html" class="btn-hide">About</a>
                    <a href="/login.html" class="btn-hide">Exit</a>
                </div>
            </div>
        `;
    }
}

customElements.define('avatar-bar', AvatarBar);
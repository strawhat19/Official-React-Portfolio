import React from 'react';

function ColorChange({currentState, changeCurrentState}) {

    const handleColorChange = (bodyBG) => {

        bodyBG = document.body.className;

        switch(bodyBG) {
            case 'developer':
                switchLight();
                break;
            case 'designer':
                switchDark();
                break;
        }

        function switchLight() {
            let avatar = document.querySelector(`.avatar:nth-child(2) .bioPic`);
            avatar.style.background = `url(https://raw.githubusercontent.com/strawhat19/React-Portfolio/b34bbd199287b77374056d2e5806d59ea73e01c6/public/assets/rickyPics/RickySignfullNavy.svg)`;
            avatar.style.backgroundRepeat = `no-repeat`;
            let animation = document.querySelector('#animation');
            let blacks = document.querySelectorAll('.black');
            let contentContainer = document.querySelector(`.contentContainer`);
            contentContainer.style.background = '#01154f';
            document.body.style.background = 'rgb(3, 62, 227)';
            document.body.classList.remove('developer');
            document.body.classList.add('designer');
            animation.classList.remove('dark');
            animation.classList.add('light');
            blacks.forEach(element => {
                element.style.background = '#01154f';
            })
        }

        function switchDark() {
            let avatar = document.querySelector(`.avatar:nth-child(2) .bioPic`);
            avatar.style.background = `url(https://raw.githubusercontent.com/strawhat19/React-Portfolio/4b9ecdf3331d8f8cb8fa97a6387f508d9159466e/public/assets/rickyPics/RickySignfull.svg)`;
            avatar.style.backgroundRepeat = `no-repeat`;
            let animation = document.querySelector('#animation');
            let blacks = document.querySelectorAll('.black');
            let contentContainer = document.querySelector(`.contentContainer`);
            contentContainer.style.background = '#000';
            document.body.style.background = 'rgb(31, 52, 58)';
            document.body.classList.remove('designer');
            document.body.classList.add('developer');
            animation.classList.remove('light');
            animation.classList.add('dark');
            blacks.forEach(element => {
                element.style.background = '#000';
            })
        }
    }

    return (
        <div class="contentContainerTitle">
            <div class="homePage">
                <h1 class="spacer homePage">
                    <i class="fab fa-react"></i> | React 
                    <span class="boldSecondary"> Portfolio</span>
                </h1>
            </div>
            <div class="iconContainer outerIconContainer">
                <a onClick={handleColorChange} class="showScoresLink" id="showScoresLink" title="Designer"><i class="fas fa-pencil-ruler"></i> | Designer</a>
                <a onClick={handleColorChange} class="showScoresLink" id="showScoresLink" title="Developer"><i class="fas fa-code"></i> | Developer</a>
            </div>
        </div>
    );
}
 
export default ColorChange;
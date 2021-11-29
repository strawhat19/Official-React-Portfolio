import React from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function About({currentState, changeCurrentState}) {
    return (
    <div id="contentContainer" class="contentContainer contain about">
        <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} />
        <div class="content rtl">
            <div className={`innerContent ltr`}>
                <h2 className={`react`}><i class="fas fa-address-card"></i> <span class="slashes">//</span> <span class="skinny">About</span> Me</h2>
                <p class="spacer">Hey I'm Rakib Ahmed, but you can call me Ricky! I launched my first professional website in 2016. I Designed & Developed it for a prominent client in the entertainment industry. I was 19 years old… A lot has changed since then…</p>
                <h2 className={`react`}><i class="fas fa-list-ul"></i> <span class="slashes">//</span> <span class="skinny">My</span> Interests</h2>
                <SkillsList />
                <a class="gameButton transition" href="https://github.com/strawhat19" target="_blank">Github Repos</a>
                <a class="gameButton transition" href="https://strawhat19.github.io/Portfolio/" target="_blank">HTML/CSS/JS Portfolio</a>
            </div>
        </div>
    </div>
    );
}
 
export default About;
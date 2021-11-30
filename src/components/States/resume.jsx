import React from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function Resume({currentState, changeCurrentState}) {
    return (
    <div id="contentContainer" class="contentContainer contain resume">
        <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} />
        <div class="content rtl">
            <div className={`innerContent ltr`}>
                <h2 className={`react`}><i class="fas fa-file-contract"></i> <span class="slashes">//</span> <span class="skinny">My</span> Resume</h2>
                <p class="spacer">Here is my Resume:</p>
                <SkillsList />
                <a class="gameButton transition" href="https://strawhat19.github.io/Portfolio/resume/Rakib-Ahmed-Coding-Resume.pdf" target="_blank">My Resume</a>
            </div>
        </div>
    </div>
    );
}
 
export default Resume;
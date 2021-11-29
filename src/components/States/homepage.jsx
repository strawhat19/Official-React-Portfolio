import React, {useState} from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function Homepage({currentState, changeCurrentState}) {
    return (
    <div id="contentContainer" class="contentContainer contain homepage">
        <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} />
        <div class="content rtl">
            <div className={`innerContent ltr`}>
                <h2 className={`react`}><i class="fas fa-home home"></i> <span class="slashes">//</span> <span class="skinny">Home</span> Page</h2>
                <p class="spacer">Welcome to my React.js showcase and portfolio.</p>
                <h2 className={`react`}><i class="fas fa-list-ul"></i> <span class="slashes">//</span> <span class="skinny">My</span> Skills</h2>
                <SkillsList />
                <button class="gameButton transition">More Info</button>
            </div>
        </div>
    </div>
    );
}
 
export default Homepage;
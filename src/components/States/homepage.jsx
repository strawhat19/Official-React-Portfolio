import React, {useState} from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function Homepage({currentState, changeCurrentState}) {

    function aboutState() {
        changeCurrentState('aboutPage');
    }
    function portfolioState() {
        changeCurrentState('portfolioPage');
    }
    function contactState() {
        changeCurrentState('contactPage');
    }
    function resumeState() {
        changeCurrentState('resumePage');
    }

    return (
    <div id="contentContainer" class="contentContainer contain homepage">
        <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} />
        <div class="content rtl">
            <div className={`innerContent ltr`}>
                <h2 className={`react`}><i class="fas fa-home home"></i> <span class="slashes">//</span> <span class="skinny">Home</span> Page</h2>
                <p class="spacer">Welcome to my React.js showcase and portfolio. Feel free to navigate to any of the following sections:</p>
                <div className={`navButtons`}>
                    <a className="navButton" onClick={() => aboutState()} title={`About State`}>
                        <span className={`innerContent`}>
                            <i class="fas fa-address-card"></i> About Me    
                        </span>
                    </a>
                    <a className="navButton" onClick={() => portfolioState()} title={`Portfolio State`}>
                        <span className={`innerContent`}>
                            <i class="fas fa-project-diagram"></i> My Portfolio    
                        </span>
                    </a>
                    <a className="navButton" onClick={() => contactState()} title={`Contact State`}>
                        <span className={`innerContent`}>
                            <i class="fas fa-paper-plane"></i> Contact Me    
                        </span>
                    </a>
                    <a className="navButton" onClick={() => resumeState()} title={`Resume State`}>
                        <span className={`innerContent`}>
                            <i class="fas fa-file-contract"></i> My Resume    
                        </span>
                    </a>
                </div>
                <h2 className={`react`}><i class="fas fa-list-ul"></i> <span class="slashes">//</span> <span class="skinny">My</span> Skills</h2>
                <SkillsList />
            </div>
        </div>
    </div>
    );
}
 
export default Homepage;
import React from 'react';
import ColorChange from './colorChange';
import SkillsList from './skillsList';

function Contact({currentState, changeCurrentState}) { 
        return (
        <div id="contentContainer" class="contentContainer contain contact">
            <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} />
            <div class="content rtl">
                <div className={`innerContent ltr`}>
                    <h2 className={`react`}><i class="fas fa-paper-plane"></i> <span class="slashes">//</span> <span class="skinny">Get In</span> Touch</h2>
                    <p class="spacer">Get in touch with me.</p>
                    <SkillsList />
                    <button class="gameButton transition">Get in Touch</button>
                </div>
            </div>
        </div>
        );
}
 
export default Contact;
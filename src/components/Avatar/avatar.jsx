import React from 'react';
import "./style/avatar.css";
import AvatarElement from './avatarElement';

function Avatar({currentState, changeCurrentState}) {
    return  (
        <div className="avatarContainer">
            <AvatarElement currentState={currentState} changeCurrentState={changeCurrentState} />
            <AvatarElement currentState={currentState} changeCurrentState={changeCurrentState} />
        </div>
    );
}
 
export default Avatar;
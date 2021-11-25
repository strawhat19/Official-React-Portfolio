import React from 'react';
import ColorChange from './colorChange';
import Project from './project';

function Portfolio({currentState, changeCurrentState}) {
    return (
    <div id="contentContainer" class="contentContainer contain portfolio">
        <ColorChange currentState={currentState} changeCurrentState={changeCurrentState} />
        <div class="content">
            <div class="lineSep"></div>
            <h2 id="grabLabel" class="portfolioPage">Portfolio State</h2>
            <p class="spacer">Here is my Portfolio.</p>
            <ul class="list-group">
                <Project currentState={currentState} changeCurrentState={changeCurrentState} />
                <li class="list-item"><div class="html iconRow slashContainer"><i class="fab fa-html5"></i> <span class="slashes">//</span> HTML</div></li>
                <li class="list-item"><div class="css iconRow slashContainer"><i class="fab fa-css3-alt"></i> <span class="slashes">//</span> CSS</div></li>
                <li class="list-item"><div class="sass iconRow slashContainer"><i class="fab fa-sass"></i> <span class="slashes">//</span> SASS</div></li>
                <li class="list-item"><div class="js iconRow slashContainer"><i class="fab fa-js-square"></i> <span class="slashes">//</span> JS</div></li>
                <li class="list-item"><div class="node iconRow slashContainer"><i class="fab fa-node-js"></i> <span class="slashes">//</span> Node</div></li>
                <li class="list-item"><div class="sql iconRow slashContainer"><i class="fas fa-database"></i> <span class="slashes">//</span> SQL</div></li>
                <li class="list-item"><div class="mongo iconRow slashContainer"><i class="fas fa-server"></i> <span class="slashes">//</span> MongoDB</div></li>
                <li class="list-item"><div class="react iconRow slashContainer"><i class="fab fa-react"></i> <span class="slashes">//</span> React</div></li>
                <li class="list-item"><div class="swift iconRow slashContainer"><i class="fab fa-swift"></i> <span class="slashes">//</span> Swift</div></li>
                <li class="list-item"><div class="git iconRow slashContainer"><i class="fab fa-git-alt"></i> <span class="slashes">//</span> Git</div></li>
                <li class="list-item"><div class="unity iconRow slashContainer"><i class="fab fa-unity"></i> <span class="slashes">//</span> Unity</div></li>
            </ul>
            <button class="gameButton transition">More Apps</button>
        </div>
    </div>
    );
}
 
export default Portfolio;
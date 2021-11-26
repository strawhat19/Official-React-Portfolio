import React from 'react';
export default class Project extends React.Component {

    async componentDidMount() {
        // Enter code for after this component mounts here
    }

    render(project,index) {
        project = this.props.project;
        index = this.props.index + 1;

        const returnIcon = (language) => {
            switch(language) {
                default:
                    return <div class="react iconRow slashContainer"><i class="fab fa-react"></i> <span class="slashes">//</span> React</div>;
                case `JavaScript`:
                    return <div class="js iconRow slashContainer"><i class="fab fa-js-square"></i> <span class="slashes">//</span> JS</div>;
                case `SCSS`:
                    return <div class="sass iconRow slashContainer"><i class="fab fa-sass"></i> <span class="slashes">//</span> SASS</div>;
                case `HTML`:
                    return <div class="html iconRow slashContainer"><i class="fab fa-html5"></i> <span class="slashes">//</span> HTML</div>;
                case `CSS`:
                    return <div class="css iconRow slashContainer"><i class="fab fa-css3-alt"></i> <span class="slashes">//</span> CSS</div>;
            }
        }

        return (
            <a href={project.url} title={project.name + ` Project`} target="_blank" class="project iconRow slashContainer">
                <h2 id="projectLabel" class="portfolioProject">
                    {index} <span class="slashes">//</span> {project.name} <span class="slashes">//</span> {returnIcon(project.language)}
                </h2>
            </a>
        )
    }
}
import React from 'react';

export default class Project extends React.Component {
    render() {
        let project = this.props.project;
        let index = this.props.index + 1;
        return (
            <div id="projectContainer" className={`project${index}`}>
                <li class="list-item projectLi">
                    <a href={project.url} target="_blank" class="project iconRow slashContainer">
                    <i class="fas fa-project-diagram"></i> <span class="slashes">//</span> {index} <span class="slashes">//</span> {project.name}
                    </a>
                </li>
            </div>
        )
    }
}
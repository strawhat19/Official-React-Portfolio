import React from 'react';
import ColorChange from './colorChange';
import Project from './project';

// Custom User Object
class User {
    constructor(name,url,bio,projects,blog,avatar,login,repoNum,repoLink,starred,followers,following) {
        this.name = name;
        this.url = url;
        this.bio = bio;
        this.projects = projects;
        this.blog = blog;
        this.avatar = avatar;
        this.login = login;
        this.repoNum = repoNum;
        this.repoLink = repoLink;
        this.starred = starred;
        this.followers = followers;
        this.following = following;
    }

    logInfo() {
        Object.values(this).map(value => {
            console.log(value);
        })
    }
}

// Custom Repo Object
class Repository {
    constructor(name,url,date,owner,topics,license,updated,deployment,language,homepage,description) {
        this.name = name;
        this.url = url;
        this.date = date;
        this.owner = owner;
        this.updated = updated;
        this.deployment = deployment;
        this.license = license;
        this.topics = topics;
        this.language = language;
        this.homepage = homepage;
        this.description = description;
    }

    logInfo() {
        Object.values(this).map(value => {
            console.log(value);
        })
    }
}

export default class Portfolio extends React.Component {

    state = {
        github: ``,
        projects: [],
        repoQuery: `javascript`
    }

    async componentDidMount() {
        const username = `strawhat19`;
        const repoURL = `https://api.github.com/users/${username}/repos`;
        const githubURL = `https://api.github.com/users/${username}`;
        const responseRepos = await fetch(repoURL);
        const response = await fetch(githubURL);
        const githubRepos = await responseRepos.json();
        const github = await response.json();
        const {name,html_url,bio,blog,avatar_url,login,public_repos,repos_url,starred_url,followers,following} = github;
        const pinnedRepos = githubRepos.filter(repo => repo.topics.includes(this.state.repoQuery));
        pinnedRepos.map(repo => {
            const {name,html_url,created_at,owner,topics,license,updated_at,deployments_url,language,homepage,description} = repo;
            const filteredRepo = new Repository(name,html_url,created_at,owner,topics,license,updated_at,deployments_url,language,homepage,description);
            this.setState(previousState => ({
                projects: [...previousState.projects, filteredRepo]
            }));
        })
        const userInfo = new User(name,html_url,bio,this.state.projects,blog,avatar_url,login,public_repos,repos_url,starred_url,followers,following);
        this.setState({ github : userInfo});
    }

    render() {
        let user = this.state.github;
        let projects = this.state.projects;
        return (
        <div id="contentContainer" class="contentContainer contain portfolio">
            <ColorChange />
            <div class="content">
                <div class="lineSep"></div>
                <h2><i class="fas fa-project-diagram"></i> <span class="slashes">//</span> <span class="skinny">Featured</span> Projects</h2>
                <p class="spacer">Here is {user.name || `Rakib Ahmed`}'s' Pinned Github Projects:</p>
                <h2><i class="fab giticon fa-git-alt"></i> <span class="slashes">//</span> <span class="skinny">{user.name}'s</span> Pinned Github Projects:</h2>
                <div class="projectsContainer list-group">
                    {projects.map((project,index) => <Project key={project.name} index={index} project={project} state={this.state} />)}
                </div>
                
                <button class="gameButton transition"><i class="fab fa-github"></i> Github</button>
            </div>
        </div>
        );
    }
}
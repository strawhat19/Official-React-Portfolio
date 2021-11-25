import React from 'react';

// Custom Project Object
class ProjectObject {
    constructor(name,image,symbol,price,website,description,ceo,employees,changesP,currency,country,industry,exchange,sector,city,state,zip,address,extra) {
        this.name = name;
        this.image = image;
        this.symbol = symbol;
        this.price = price;
        this.website = website;
        this.description = description;
        this.ceo = ceo;
        this.employees = employees;
        this.changesP = changesP;
        this.currency = currency;
        this.country = country;
        this.industry = industry;
        this.exchange = exchange;
        this.sector = sector;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.address = address;
        this.extra = extra;
    }

    logInfo() {
        Object.values(this).map(value => {
            console.log(value);
        })
    }
}

export default class Project extends React.Component {

    state = {
        user: [],
        projects: []
    }

    async componentDidMount() {
        const username = `strawhat19`;
        const repoURL = `https://api.github.com/orgs/nodejs/repos`;
        const githubURL = `https://api.github.com/users/${username}`;
        const responseRepos = await fetch(repoURL);
        const response = await fetch(githubURL);
        const githubRepos = await responseRepos.json();
        const githubUser = await response.json();
        this.setState({ projects : githubRepos});
        this.setState({ user : githubUser});
        console.log(this.state.projects);
        console.log(this.state.user);
    }

    render() {
        return (
            <div id="projectContainer" class="projectContainer">
                <li class="list-item">
                    <div class="project iconRow slashContainer">
                        <i class="fas fa-project-diagram"></i> 
                        <span class="slashes">//</span> PROJECT
                    </div>
                </li>
            </div>
        );
    }
}
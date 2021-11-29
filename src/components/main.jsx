import React, { useState } from 'react';
import Header from './Header/header';
import Homepage from './States/homepage';
import About from './States/about';
import Resume from './States/resume';
import Portfolio from './States/portfolio';
import Contact from './States/contact';
import Footer from './Footer/footer';
import Avatar from './Avatar/avatar';

function Main() { 

        let initialState = `aboutPage`;

        const [currentState, setCurrentState] = useState(initialState);
        const changeCurrentState = (state) => setCurrentState(state);

        const handleState = () => {
            switch (currentState) {
                case 'homePage':
                    return <Homepage currentState={currentState} changeCurrentState={changeCurrentState} />;
                case 'aboutPage':
                    return <About currentState={currentState} changeCurrentState={changeCurrentState} />;
                case 'portfolioPage':
                    return <Portfolio currentState={currentState} changeCurrentState={changeCurrentState} />;
                case 'contactPage':
                    return <Contact currentState={currentState} changeCurrentState={changeCurrentState} />;
                case 'resumePage':
                    return <Resume currentState={currentState} changeCurrentState={changeCurrentState} />;
                default:
                    return <Homepage currentState={currentState} changeCurrentState={changeCurrentState} />;
            }
        }

        return (
        <main className="app">
            <div className="appMain">
                <Avatar currentState={currentState} changeCurrentState={changeCurrentState}/>
                <Header currentState={currentState} changeCurrentState={changeCurrentState} />
                    {handleState()}
            </div>
        <Footer />
        </main>
        );
    }
 
export default Main;
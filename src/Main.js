import React from 'react';
import './Main.css'
import ColorsList from './ColorsList/ColorsList';
import AdditionalSection from "./AdditionalSection/AdditionalSection";

class Main extends React.Component {

    componentDidMount(e) {
        window.addEventListener("hashchange",
                e => ('hashchange1', window.location.hash ));
    }

    render() {
        return (
            <div className="container">
                <ColorsList />
                <AdditionalSection />
            </div>
        )
    }
};

export default Main;
import React from 'react';

const Main = () => {

    // Get hash from URL address
    const hash = window.location.href;

    // Write down the regex which helps us get colors
    const regex = /http:\/\/localhost:8080\/#tags=([a-zA-Z]+(,[a-zA-Z]+)+)/i;

    // Get the array of colors: strings
    const colorsList = regex.exec(hash)[1].split(',');

    function renderColors(colorsList) {

        // For every color in array return <li> element
        return colorsList.map((color, index) => {
            return <li key={index}>
                        {color}
                   </li>
        });
    }

    return (
        <div>
            <h3>Radio Liberty</h3>
            <ul>
                {renderColors(colorsList)}
            </ul>
        </div>
    );
};

export default Main;
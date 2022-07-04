import React from 'react';

const ColorsList = () => {

    // Get hash from URL address
    let hash = window.location.href;

    // Delete '#tags=' from URL and put each color as string in array
    const colorsList = hash.substring(6).split(',');
    console.log(colorsList)

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
}

export default ColorsList;
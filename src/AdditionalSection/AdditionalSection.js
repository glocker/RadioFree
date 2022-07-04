import React, { useState } from 'react';
import './AdditionalSection.css';

const AdditionalSection = () => {

    const [state, setState] = useState();

    const handleClick = event => {
        event.preventDefault();

        window.location.href = window.location.href + ',' + state;
        setState(state);

    };

        return (
            <div className="AdditionalSection">
                <form onSubmit = {(e) => handleClick(e)}>
                    <input
                        className="Input"
                        type="text"
                        id="message"
                        name="message"
                        value={state}
                        autoComplete="off"
                        placeholder="Type a tag here"
                    />
                    <button
                        type="submit"
                        className="Button"
                    >
                        Add tag
                    </button>
                </form>
                <div>Tag: {state}</div>
            </div>
        )
}

export default AdditionalSection;
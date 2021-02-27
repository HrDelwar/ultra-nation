import React from 'react';
import './Country.css';
const Country = (props) => {
    const { name, flag } = props.country;
    const addCountry = props.addCountry;
    return (
        <div className="country">
            <div className="details-container">
                <div className="image-container"><img src={flag} alt="" /></div>
                <div className="details">
                    <h2 title={name.length > 15 && name }>{name.length > 15 ? name.slice(0, 12) + '...' : name}</h2>
                    <button onClick={() => addCountry(props.country)}>add</button>
                </div>
            </div>

        </div>
    );
};

export default Country;
import React from 'react';
import './SelectedCountry.css';

const SelectedCountry = (props) => {
    const countries = props.selectedCountry;
    const population = countries.reduce((acc, country) => acc+country.population, 0)
    return (
        <div className="selected-countries">
            <h2 className="count">selected countries: {countries.length}</h2>
            <p>Population: {population}</p>
        </div>
    );
};

export default SelectedCountry;
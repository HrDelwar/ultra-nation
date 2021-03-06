import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './CountryDetails.css'
const CountryDetails = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState({ languages: '', altSpellings: [] });

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, []);
    const { name, languages, flag, area, capital, region, subregion, timezones, topLevelDomain, altSpellings, population } = country;
    return (
        <div className="country">
            <h1 style={{ textAlign: 'center', color: '#555' }}>About {countryName}</h1>
            <div  className="country-details">
                <div className="image-container"><img src={flag} alt="" /></div>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Capital:</strong> {capital}</p>
                <p><strong>Language:</strong> {languages.length > 0 && country.languages[0].name}</p>
                <p><strong>Area:</strong> {area} kilometer ²</p>
                <p><strong>Population:</strong> {(population / 1000000).toFixed(2) || 0} million. </p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Subregion:</strong> {subregion}</p>
                <p><strong>Timezone:</strong> {timezones}</p>
                <p><strong>Top Level Domain:</strong> "{topLevelDomain}"</p>
                <p><strong>Alt Spellings:</strong> {
                    altSpellings.map((item, index) =>
                        <li key={index}>{index + 1 + '. ' + item}</li>)
                }</p>
                <Link className="back" to="/"><button>Back</button></Link>
            </div>
        </div>
    );
};

export default CountryDetails;
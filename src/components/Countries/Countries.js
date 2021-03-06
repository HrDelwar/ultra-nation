import { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {

        (async () => {
            const response = await fetch('https://restcountries.eu/rest/v2/all');
            const data = await response.json();
            setCountries(data);
        })();

    }, []);

    return (
        <div>
            <h1
                style={{ textAlign: 'center', color: '#666', textTransform: 'capitalize' }}
            >World all countries is hear!</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
                {
                    countries.map(country => <Country
                        key={country.alpha3Code}
                        country={country}
                    />)
                }
            </div>
        </div>
    );
};

export default Countries;
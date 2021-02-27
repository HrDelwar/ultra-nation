
import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import SelectedCountry from './components/SelectedCountry/SelectedCountry';


function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  useEffect(() => {

    (async () => {
      const response = await fetch('https://restcountries.eu/rest/v2/all');
      const data = await response.json();
      setCountries(data);
    })();

  }, []);

  const addCountry = (country) => {
    const newSelectedCountry = [...selectedCountry, country];
    const removeDuplicatesCountry =
      newSelectedCountry.reduce((countries, country) =>
        countries.includes(country) ? countries : [...countries, country],
        []);
    setSelectedCountry(removeDuplicatesCountry);
  }
  return (
    <div className="">
      <h1
        style={{ textAlign: 'center', color: '#666', textTransform: 'capitalize' }}
      >World all countries is hear!</h1>
      <SelectedCountry selectedCountry={selectedCountry} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center' }}>
        {
          countries.map(country => <Country
            key={country.alpha3Code}
            country={country}
            addCountry={addCountry}
          />)
        }
      </div>
    </div>
  );
}

export default App;

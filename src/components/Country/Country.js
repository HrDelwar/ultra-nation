import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';
const Country = (props) => {
    const { name, flag } = props.country;
    return (
        <div className="country">
            <Link to={`/country/${name}`} style={{textDecoration:'none'}}>
                <div className="details-container">
                    <div className="image-container"><img src={flag} alt="" /></div>
                    <div className="details">
                        <h2 title={name.length > 15 && name}>{name.length > 15 ? name.slice(0, 12) + '...' : name}</h2>
                        <button >add</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Country;
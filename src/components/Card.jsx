import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <article style={{ backgroundImage: `url(${props.imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Semi-transparent overlay to make text readable if using background image */}
      <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '8px', height: '100%' }}>
        <header>
          <h3 style={{ color: 'white' }}>{props.name}</h3>
        </header>
        
        <p style={{ color: '#ddd' }}>{props.description}</p>
        
        <footer>
          <div className="grid">
            {/* Link to external channel */}
            <a href={props.url} target="_blank" rel="noreferrer" role="button" className="secondary">Visit</a>
            
            {/* Link to internal details page */}
            <Link to={'/view/' + props.id} role="button">Details</Link>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default Card;
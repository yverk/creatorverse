import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
    const { id } = useParams(); // Grabs the ID from the URL
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single(); // Get just one object

            if (error) {
                console.error(error);
            } else {
                setCreator(data);
            }
        };
        fetchCreator();
    }, [id]);

    if (!creator) return <p>Loading...</p>;

    return (
        <article className="container">
            <header>
                <h2>{creator.name}</h2>
            </header>
            
            <div className="grid">
                <div>
                    {creator.imageURL && (
                        <img src={creator.imageURL} alt={creator.name} style={{ borderRadius: '8px' }} />
                    )}
                </div>
                <div>
                    <h3>Description</h3>
                    <p>{creator.description}</p>
                    <a href={creator.url} target="_blank" rel="noreferrer" role="button" className="secondary">
                        Visit Channel
                    </a>
                </div>
            </div>

            <footer>
                <div className="grid">
                    {/* Link to the Edit page we'll make next */}
                    <Link to={`/edit/${id}`} role="button" className="contrast">Edit Creator</Link>
                    <Link to="/" role="button" className="outline">Back to All Creators</Link>
                </div>
            </footer>
        </article>
    );
};

export default ViewCreator;
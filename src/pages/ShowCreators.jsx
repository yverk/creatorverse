import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../components/Card'; 


const ShowCreators = () => {
    const [creators, setCreators] = useState([]);

    useEffect(() => {
        const fetchCreators = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .order('created_at', { ascending: false });
            
            setCreators(data);
        };
        fetchCreators();
    }, []);

    return (
        <div className="container">
            {creators && creators.length > 0 ? (
                <section className="grid">
                    {creators.map((creator) => (
                        <Card key={creator.id} {...creator} />
                    ))}
                </section>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                    <h2>No Creators Found 🕵️‍♂️</h2>
                    <p>Start by adding your favorite content creators!</p>
                </div>
            )}
        </div>
    );
};

export default ShowCreators;
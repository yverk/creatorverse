import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    // 1. Load the existing data into the form
    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase
                .from('creators')
                .select()
                .eq('id', id)
                .single();
            setCreator(data);
        };
        fetchCreator();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({ ...prev, [name]: value }));
    };

    // 2. Update Function
    const updateCreator = async (event) => {
        event.preventDefault();
        await supabase
            .from('creators')
            .update({ 
                name: creator.name, 
                url: creator.url, 
                description: creator.description, 
                imageURL: creator.imageURL 
            })
            .eq('id', id);

        window.location = "/";
    };

    // 3. Delete Function
    const deleteCreator = async (event) => {
        event.preventDefault();
        const confirmed = window.confirm("Are you sure you want to delete this creator?");
        if (confirmed) {
            await supabase
                .from('creators')
                .delete()
                .eq('id', id);
            window.location = "/";
        }
    };

    return (
        <article className="container">
            <form>
                <label>Name</label>
                <input type="text" name="name" value={creator.name} onChange={handleChange} />

                <label>URL</label>
                <input type="text" name="url" value={creator.url} onChange={handleChange} />

                <label>Description</label>
                <textarea name="description" rows="3" value={creator.description} onChange={handleChange}></textarea>

                <label>Image URL</label>
                <input type="text" name="imageURL" value={creator.imageURL} onChange={handleChange} />

                <div className="grid">
                    <button type="submit" onClick={updateCreator}>Update Creator</button>
                    <button type="button" className="secondary" onClick={deleteCreator}>Delete Creator</button>
                </div>
            </form>
        </article>
    );
};

export default EditCreator;
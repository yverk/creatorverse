import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
    const [creator, setCreator] = useState({ name: "", url: "", description: "", imageURL: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        
        const { error } = await supabase
            .from('creators')
            .insert({
                name: creator.name, 
                url: creator.url, 
                description: creator.description, 
                imageURL: creator.imageURL
            })
            .select();

        if (error) {
            console.log(error);
        } else {
            // Redirect back to home after successful add
            window.location = "/";
        }
    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleChange} required />

                <label>URL (Link to channel)</label>
                <input type="text" name="url" onChange={handleChange} required />

                <label>Description</label>
                <textarea name="description" rows="3" onChange={handleChange} required></textarea>

                <label>Image URL (Optional)</label>
                <input type="text" name="imageURL" onChange={handleChange} />

                <button type="submit">Add Creator</button>
            </form>
        </div>
    )
}

export default AddCreator;
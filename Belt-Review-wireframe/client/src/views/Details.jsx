import React, { useContext, useState, useEffect } from 'react';
import { MyContext } from '../storContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { setTitle } = useContext(MyContext);
    const [oneNote, setOneNote] = useState({}); 

    
    setTitle("All Details for Your Note"); 

    const { id } = useParams(); 

    useEffect(() => {
       
        axios.get(`http://localhost:8000/api/notes/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneNote(res.data); 
            })
            .catch(error => console.log(error));
    }, [id]); 

    return (
        <div className='container mt-2'>
            <div className="card">
                <div className="card-header">
                    <h1 className='text-center'>{oneNote.Title}</h1>
                </div>
                <div className="card-body">
                    <p className='fs-5'>Content: {oneNote.Content}</p>
                   
                    {oneNote.createdAt && (
                        <p className='text-muted'><small>Created on: {new Date(oneNote.createdAt).toLocaleDateString()}</small></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
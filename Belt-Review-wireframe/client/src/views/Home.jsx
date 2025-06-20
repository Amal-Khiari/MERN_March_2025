import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../storContext'; 
import axios from "axios";
import { Link } from 'react-router-dom'; 

const Home = () => {
    const { setTitle } = useContext(MyContext);
    const [allNotes, setAllNotes] = useState([]);

    setTitle("All Notes");

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/notes/all")
            .then((res) => {
                console.log(res.data);
                setAllNotes(res.data);
            })
            .catch(error => console.log(error));
    }, [setTitle]); 

    
    const deletNote = (id) => {
        axios.delete(`http://localhost:8000/api/notes/delete/${id}`)
            .then((res) => {
                
                const updatedNotes = allNotes.filter((oneNote) => oneNote._id !== id);
                console.log("Deleted successfully ", updatedNotes);
                setAllNotes(updatedNotes); // 
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='container mt-2'>
            <div className="card"> 
                <div className="d-flex justify-content-evenly align-items-center flex-wrap">
                    {
                        
                        allNotes.length > 0 ? (
                            allNotes.map((oneNote) => (
                                <div
                                    className="card my-2" 
                                    key={oneNote._id} 
                                    style={{ width: '18rem', backgroundColor: '#FFFDD0', border: '1px solid #ccc' }} 
                                >
                                    <div className="card-header">
                                        <h2 className='text-center'>
                                            
                                            <Link to={`/notes/${oneNote._id}/detail`}>{oneNote.Title}</Link>
                                        </h2>
                                    </div>
                                    <div className="card-body">
                                        <p className='fs-5'>Content: {oneNote.Content}</p>
                                        
                                        {oneNote.createdAt && (
                                            <p className='text-muted'><small>{new Date(oneNote.createdAt).toLocaleDateString()}</small></p>
                                        )}
                                        
                                    </div>
                                    <div className='card-footer d-flex justify-content-center align-items-center gap-2'> 
                                        <Link to={`/notes/${oneNote._id}/edit`} className="btn btn-warning btn-sm">Edit</Link> 
                                        <button className='btn btn-danger btn-sm' onClick={() => deletNote(oneNote._id)}>Delete</button> 
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center mt-3 w-100">No notes to display.</p> 
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from "../StorContext";

const AddBookForm = () => {
    const navigate = useNavigate();
    const { setTitle } = useContext(MyContext);

    const [title, setBookTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTitle("Add a Book");
    }, [setTitle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);

        if (!title || !authorName || pageCount === null || pageCount < 0) {
            setError("Please fill in all fields correctly.");
            return;
        }

        axios.post('http://localhost:8000/api/books', {
            title,
            author: authorName,
            page: parseInt(pageCount),
            isAvailable,
        })
        .then(() => {
            console.log("Book added successfully!");
            navigate('/');
        })
        .catch((err) => {
            console.error("Error adding book:", err);
            if (err.response && err.response.data && err.response.data.message) {
                setError(`Failed to add book: ${err.response.data.message}`);
            } else {
                setError("Failed to add book. Please try again later.");
            }
        });
    };

    return (
        <div className="my-4 mx-auto p-4 bg-white rounded shadow-sm" style={{ maxWidth: '500px' }}>
            <h2 className="text-center mb-4">Add a Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="bookTitle" className="form-label">Title</label>
                    <input
                        type="text"
                        id="bookTitle"
                        className="form-control"
                        value={title}
                        onChange={(e) => setBookTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">Author Name</label>
                    <input
                        type="text"
                        id="authorName"
                        className="form-control"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="pageCount" className="form-label">Page Count</label>
                    <input
                        type="number"
                        id="pageCount"
                        className="form-control"
                        value={pageCount}
                        onChange={(e) => setPageCount(e.target.value)}
                        required
                        min="0"
                    />
                </div>

                <div className="form-check mb-4">
                    <input
                        type="checkbox"
                        id="isAvailable"
                        className="form-check-input"
                        checked={isAvailable}
                        onChange={(e) => setIsAvailable(e.target.checked)}
                    />
                    <label htmlFor="isAvailable" className="form-check-label">Is it available?</label>
                </div>

                <button type="submit" className="btn btn-info w-100">Add Book!</button>

                {error && <div className="alert alert-danger mt-3 text-center" role="alert">{error}</div>}
            </form>
        </div>
    );
}

export default AddBookForm;
                
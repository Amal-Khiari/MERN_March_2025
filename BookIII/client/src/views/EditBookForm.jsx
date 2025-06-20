import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MyContext } from "../StorContext";

const EditBookForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setTitle } = useContext(MyContext);

    const [title, setBookTitle] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [validationErrors, setValidationErrors] = useState({});

    useEffect(() => {
        setTitle("Update Book");

        const fetchBookData = () => {
            setLoading(true);
            setError(null);
            axios.get(`http://localhost:8000/api/books/${id}`) // Endpoint GET pour récupérer un livre pour l'édition
                .then((response) => {
                    const bookData = response.data;
                    setBookTitle(bookData.title);
                    setAuthorName(bookData.author);
                    setPageCount(bookData.page);
                    setIsAvailable(bookData.isAvailable);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Failed to load book data for editing.");
                    setLoading(false);
                });
        };

        if (id) {
            fetchBookData();
        } else {
            setError("No book ID provided for editing.");
            setLoading(false);
        }

    }, [id, setTitle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setValidationErrors({});

        axios.put(`http://localhost:8000/api/books/${id}`, { // Endpoint PUT pour mettre à jour un livre
            title,
            author: authorName,
            page: parseInt(pageCount),
            isAvailable,
        })
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            console.error("Error updating book:", err.response || err);
            if (err.response && err.response.data) {
                if (err.response.status === 400 && err.response.data.errors) {
                    setValidationErrors(err.response.data.errors);
                    setError("Please correct the form errors.");
                } else if (err.response.data.message) {
                    setError(`Failed to update book: ${err.response.data.message}`);
                } else {
                    setError("Failed to update book. Please try again later.");
                }
            } else {
                setError("Failed to update book. Please try again later.");
            }
        });
    };

    if (loading) {
        return <div className="text-center my-4">Loading book for editing...</div>;
    }

    if (error && Object.keys(validationErrors).length === 0) {
        return <div className="alert alert-danger text-center" role="alert">{error}</div>;
    }

    if (!book) {
        return <div className="alert alert-warning text-center" role="alert">Book data could not be loaded for editing.</div>;
    }

    return (
        <div className="my-4 mx-auto p-4 bg-white rounded shadow-sm" style={{ maxWidth: '500px' }}>
            <h2 className="text-center mb-4">Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="bookTitle" className="form-label">Title</label>
                    <input
                        type="text"
                        id="bookTitle"
                        className={`form-control ${validationErrors.title ? 'is-invalid' : ''}`}
                        value={title}
                        onChange={(e) => setBookTitle(e.target.value)}
                        required
                    />
                    {validationErrors.title && <div className="invalid-feedback">{validationErrors.title}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">Author Name</label>
                    <input
                        type="text"
                        id="authorName"
                        className={`form-control ${validationErrors.author ? 'is-invalid' : ''}`}
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        required
                    />
                    {validationErrors.author && <div className="invalid-feedback">{validationErrors.author}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="pageCount" className="form-label">Page Count</label>
                    <input
                        type="number"
                        id="pageCount"
                        className={`form-control ${validationErrors.page ? 'is-invalid' : ''}`}
                        value={pageCount}
                        onChange={(e) => setPageCount(e.target.value)}
                        required
                        min="0"
                    />
                    {validationErrors.page && <div className="invalid-feedback">{validationErrors.page}</div>}
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

                <button type="submit" className="btn btn-primary w-100">Update</button>

                {error && Object.keys(validationErrors).length === 0 && (
                    <div className="alert alert-danger mt-3 text-center" role="alert">{error}</div>
                )}
            </form>
        </div>
    );
}

export default EditBookForm;
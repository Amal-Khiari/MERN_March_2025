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
    const [error, setError] = useState(null); // Pour les erreurs génériques du formulaire
    const [validationErrors, setValidationErrors] = useState({}); // Pour les erreurs spécifiques par champ

    useEffect(() => {
        setTitle("Add a Book");
    }, [setTitle]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setValidationErrors({});

        axios.post('http://localhost:8000/api/books', { // Endpoint POST pour créer un nouveau livre
            title,
            author: authorName,
            page: parseInt(pageCount),
            isAvailable,
        })
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            console.error("Error adding book:", err.response || err);
            if (err.response && err.response.data) {
                if (err.response.status === 400 && err.response.data.errors) {
                    setValidationErrors(err.response.data.errors); // Peupler les erreurs spécifiques si elles sont structurées
                    setError("Please correct the form errors."); // Message générique pour le formulaire
                } else if (err.response.data.message) {
                    setError(`Failed to add book: ${err.response.data.message}`);
                } else {
                    setError("Failed to add book. Please try again later.");
                }
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
                        // Applique la classe 'is-invalid' de Bootstrap si une erreur existe pour ce champ
                        className={`form-control ${validationErrors.title ? 'is-invalid' : ''}`}
                        value={title}
                        onChange={(e) => setBookTitle(e.target.value)}
                        required
                    />
                    {/* Affiche le message d'erreur spécifique en rouge (via invalid-feedback de Bootstrap) */}
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

                <button type="submit" className="btn btn-info w-100">Add Book!</button>

                {error && Object.keys(validationErrors).length === 0 && (
                    <div className="alert alert-danger mt-3 text-center" role="alert">{error}</div>
                )}
            </form>
        </div>
    );
}

export default AddBookForm;
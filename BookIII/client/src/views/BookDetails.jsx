import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Correction ici
import axios from 'axios';
import { MyContext } from "../StorContext";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setTitle } = useContext(MyContext);

    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTitle("Book Details");

        const fetchBookDetails = () => {
            setLoading(true);
            setError(null);

            if (!id) {
                setError("No book ID provided.");
                setLoading(false);
                return;
            }

            axios.get(`http://localhost:8000/api/books/${id}`) // Endpoint GET pour récupérer un livre par ID
                .then((response) => {
                    setBook(response.data);
                    setTitle(response.data.title);
                })
                .catch((err) => {
                    if (err.response && err.response.status === 404) {
                        setError("Book not found.");
                    } else {
                        setError("Failed to load book details. Please try again.");
                    }
                    setTitle("Book Not Found");
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchBookDetails();

    }, [id, setTitle]);

    const handleDeleteBook = () => {
        if (!window.confirm("Are you sure you want to borrow (delete) this book? This action is irreversible.")) {
            return;
        }

        setError(null);

        axios.delete(`http://localhost:8000/api/books/${id}`) // Endpoint DELETE pour supprimer un livre par ID
            .then(() => {
                navigate('/'); // Rediriger vers la liste après suppression
            })
            .catch((err) => {
                if (err.response && err.response.data && err.response.data.message) {
                    setError(`Failed to borrow book: ${err.response.data.message}`);
                } else {
                    setError("Failed to borrow book. Please try again later.");
                }
            });
    };

    if (loading) {
        return <div className="text-center my-4">Loading book details...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center" role="alert">Error: {error}</div>;
    }

    if (!book) {
        return <div className="alert alert-warning text-center" role="alert">Book not found or missing data.</div>;
    }

    return (
        <div className="my-4 text-center">
            <h1 className="display-4 mb-4">{book.title}</h1>

            <div className="card mx-auto" style={{ maxWidth: '400px' }}>
                <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <p className="card-text">By {book.author}</p>
                    <p className="card-text">Page Count: {book.page}</p>
                    {book.isAvailable ? (
                        <p className="fw-bold text-success mt-3">Available for borrowing</p>
                    ) : (
                        <p className="fw-bold text-danger mt-3">Not available for borrowing</p>
                    )}
                    <button onClick={handleDeleteBook} className="btn btn-danger mt-3">Borrow</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
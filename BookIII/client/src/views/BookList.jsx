import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MyContext } from "../StorContext";

const BookList = () => {
    const { setTitle } = useContext(MyContext);
    const [allbooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTitle("Book Catalog");
    }, [setTitle]);

    useEffect(() => {
        const fetchAllBooks = () => {
            setLoading(true);
            setError(null);

            axios.get("http://localhost:8000/api/books") // Endpoint GET pour récupérer tous les livres
                .then((response) => {
                    setAllBooks(response.data);
                })
                .catch((err) => {
                    setError("Failed to load books. Please try again later.");
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        fetchAllBooks();

    }, []);

    if (loading) {
        return <div className="text-center my-4">Loading books...</div>;
    }

    if (error) {
        return <div className="alert alert-danger text-center" role="alert">Error: {error}</div>;
    }

    return (
        <div className="my-4 p-3 bg-white rounded shadow-sm">
            <h2 className="text-center mb-4">Book Catalog</h2>
            {allbooks.length > 0 ? (
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Page Count</th>
                                <th>Available</th>
                                <th>Actions</th>
                                <th>Book Page</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allbooks.map((book) => (
                                <tr key={book._id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.page}</td>
                                    <td>
                                        {book.isAvailable ? <span className="badge bg-success me-2">Yes</span> : <span className="badge bg-danger me-2">No</span>}
                                    </td>
                                    <td>
                                        <Link to={`/books/edit/${book._id}`} className="btn btn-sm btn-warning">Edit</Link>
                                    </td>
                                    <td>
                                        <Link to={`/books/${book._id}`} className="btn btn-sm btn-success">Book Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="alert alert-info text-center" role="alert">No books found in the catalog.</div>
            )}
        </div>
    );
}

export default BookList;

import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { MyContext } from "../StorContext";

const Header = () => {
    const { title } = useContext(MyContext);

    return (
        <header className="bg-light border-bottom p-3">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="app-title mb-0">{title || "Book Catalog"}</h1>
                <div className="d-flex gap-3">
                    <Link to="/" className="btn btn-info">Catalog</Link>
                    <Link to="/create" className="btn btn-info">Add Book</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
import React from 'react'; 
import { Routes, Route } from "react-router-dom"; 


import Header from "./components/Header";
import Create from "./views/create";
import Home from "./views/home";
import Edite from "./views/edite"; 
import Details from "./views/details";



function App() {
    

    return (
        <div className="container mt-2">
            <Header/> 
            <main>
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/notes/create" element={<Create />} />
                    <Route path="/notes/:id/detail" element={<Details />} />
                    <Route path="/notes/:id/edit" element={<Edite />} /> 
                </Routes>
            </main>
        </div>
    );
}

export default App;
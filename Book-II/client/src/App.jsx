
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from './StorContext'; 

import 'bootstrap/dist/css/bootstrap.min.css';

import BookList from "./views/BookList";
import BookDetails from "./views/BookDetails";
import AddBookForm from "./views/AddBookForm";
import Header from "./components/Header";

function App() {
  return (
   
    <StoreProvider>
      
      <Router>
        
        <div className="container-fluid p-0"> 
          <Header /> 

         
          <main className="container mt-4">
            <Routes>
              
              <Route path="/" element={<BookList />} /> 
              <Route path="/books/:id" element={<BookDetails />} />
              <Route path="/create" element={<AddBookForm />} /> 
            </Routes>
          </main>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
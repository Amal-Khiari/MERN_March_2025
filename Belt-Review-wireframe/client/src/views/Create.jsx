import React, { useContext, useState } from 'react';
import { MyContext } from '../storContext';

const Create = () => {
    const { setTitle, addNote } = useContext(MyContext);

    
    setTitle("Create Notes");


    const [noteTitle, setNoteTitle] = useState('');
    const [noteContent, setNoteContent] = useState('');
    const [isImportant, setIsImportant] = useState(false);

   
    const handleSubmit = (e) => {
        e.preventDefault(); 

       
        const newNote = { 
            title: noteTitle,
            content: noteContent,
            important: isImportant,
            id: Date.now() 
        };

       
        addNote(newNote)
            .then(() => {
               
                console.log("Note added and state cleared!");
               
                setNoteTitle('');
                setNoteContent('');
                setIsImportant(false);
            })
            .catch(error => {
                
                console.error("Error adding note:", error.message);
               
                alert("Failed to create note: " + error.message);
            });
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-semibold mb-2">Titre :</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Entrez un titre"
                            value={noteTitle}
                            onChange={(e) => setNoteTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="content" className="block text-gray-700 text-sm font-semibold mb-2">Contenu :</label>
                        <textarea
                            id="content"
                            name="content"
                            rows="5"
                            className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                            placeholder="Écrivez votre contenu ici..."
                            value={noteContent}
                            onChange={(e) => setNoteContent(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mb-6 flex items-center">
                        <input
                            type="checkbox"
                            id="important"
                            name="important"
                            className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                            checked={isImportant}
                            onChange={(e) => setIsImportant(e.target.checked)}
                        />
                        <label htmlFor="important" className="ml-2 text-gray-700 text-sm font-semibold">Important ?</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    >
                        Créer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Create;
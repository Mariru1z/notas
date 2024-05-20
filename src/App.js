
import React, { useState } from 'react';
import './App.css'
function App() {
  // Estado para almacenar las notas
  const [notes, setNotes] = useState([]);
  // Estado para almacenar la nueva nota
  const [newNote, setNewNote] = useState('');

  // Función para manejar el cambio en el campo de texto de la nueva nota
  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  // Función para agregar una nueva nota
  const addNote = (event) => {
    event.preventDefault(); // Evitar que el formulario recargue la página
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]); // Agregar la nueva nota al array de notas
      setNewNote(''); // Limpiar el campo de texto después de agregar la nota
    }
  };

  // Función para eliminar una nota
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1); // Eliminar la nota en el índice especificado
    setNotes(updatedNotes); // Actualizar el array de notas
  };

  return (
    <div>
      <h1> JOSÉ GARCIA HAMDAN 2.0 Notas Rápidas</h1>
      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={handleNoteChange}
          placeholder="Escribe una nueva nota..."
        />
        <button type="submit">Agregar Nota</button>
      </form>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

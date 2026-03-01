import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputForm from "./InputForm";
import Note from "./Note";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevValues) => {
      return [...prevValues, note];
    });
  }

  return (
    <div>
      <Header />
      <InputForm onAdd={addNote} />
      {notes.map((note, index) => {
        return <Note key={index} title={note.title} content={note.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;

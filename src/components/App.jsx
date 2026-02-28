import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputForm from "./InputForm";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote() {}

  return (
    <div>
      <Header />
      <InputForm />
      <Footer />
    </div>
  );
}

export default App;

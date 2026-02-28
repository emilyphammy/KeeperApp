import React, {useState} from "react";
import Note from "./Note";

function InputForm() {

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title}/>
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default InputForm;
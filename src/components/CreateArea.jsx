import React, {useState} from "react";

function CreateArea(props) {
    
    const [item, setItem] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setItem(prev => {
            return {
                ...prev, 
            [name]: value
            }
        });
    }

    function addNote(event) {
        props.onAdd(item);
        setItem({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={item.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3"  onChange={handleChange} value={item.content}/>
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  const [listOfItems, setListOfItems] = useState([]);

  function handleAdd(item) {
    setListOfItems(prev => { 
      return [...prev, item]
    });
  }

  function handleDelete(id) {
    setListOfItems(prev => {
      return prev.filter((value, index) => {
          return index !== id
      });
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={handleAdd}/>
      {
        listOfItems.map((item, index) => <Note key={index} id={index} title={item.title} content={item.content} onDelete={handleDelete}/>)
      }
      <Footer />
    </div>
  );
}

export default App;

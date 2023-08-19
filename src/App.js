import './App.css';
import { useState } from 'react'
function App() {
  const [text,settext] = useState("")
  const [list,setlist] = useState([])

  let add = () => {
    list.push(text);
    setlist([...list]);
    settext(""); // check this condition
  };
  let del = (i) => {
    list.splice(i,1);
    setlist([...list]);
  };
  let edit = (i) => {
    let a = prompt("Enter Value")
    list[i] = a;
    setlist([...list]);
    
  };
  return (
    <div>
      <input 
      value ={text}
      onChange = {(e) => {
        settext(e.target.value);
      } }
      />
      <button onClick = {add}>Add</button>
      {list.map((x,i) => ( <p key = {i}>
        {x}
        <button onClick = {() => del(i)}>Delete</button>
        <button onClick = {() => edit(i)}>Edit</button>
      </p>
        
      ))}
    </div>
  );
}

export default App;

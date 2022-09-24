import React,{useState} from 'react';
import './App.css';
import Header from './Header';
import CreateArea from './CreateArea';
import Count from './Count';
import Note from './Note';

function App(props) {
  const[notes,setNotes]=useState([])
 
  function addNote(newNote){
    
    setNotes(prev=>{
    return [ ...prev,newNote]
    })
  }
  function deleteNotes(id){
    
    setNotes(prev=>{
     return [ ...prev.filter((note,index)=>index!==id
     )]
  })}
  return (
   <div><Header />
   <Count count={notes.length===0 ? "Empty":`Showing ${notes.length} notes in Database`} />
   <CreateArea onAdd={addNote} />
   {notes.map((note, index)=>(
    <Note 
    key={index}
    id={index}
    title={note.title}
    content={note.content}
    onDelete={deleteNotes}
    />
   ))}
   
   </div>
  )
  }

export default App;

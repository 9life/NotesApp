import React from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';

function Note(props) {
  const style = {backgroundColor: props.color}
  return (
    <div className='note' style={style}>
      {props.children}
    </div>
  );
}

function NotesGrid(props) {
  return (
    <div className='notes-grid'>
     {props.notes.map((note) => <Note key={note.id} color={note.color}>{note.text}</Note> )}
    </div>
  );
}

function NotesEditor() {
  return (
    <div className='note-editor'>
      NotesEditor
    </div>
  );
}


function NotesApp() {
  const notes = [
    {
        id: 0,
        text: "note 1",
        color: "#FFD700"
    },
    {
        id: 1,
        text: "note 2 note 2",
        color: "#20B2AA"
    },
    {
        id: 2,
        text: "note 3 note 3 note 3",
        color: "#FFA700"
    },
    {
        id: 3,
        text: "note 4",
        color: "#87CEAF"
    },
    {
        id: 4,
        text: "note 5",
        color: "#87CEFA"
    }
];
  return (
    <div className="notes-app">
      NotesApp
<NotesEditor />
      <NotesGrid notes={notes}/>
    </div>
  );
}

export default NotesApp;

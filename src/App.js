import React, { useEffect, useRef } from 'react';
import './App.css';
import { tsPropertySignature } from '@babel/types';
import Masonry from 'masonry'

function Note(props) {
  const style = {backgroundColor: props.color}
  return (
    <div className='note' style={style}>
      {props.children}
    </div>
  );
}

function NotesGrid(props) {
/*   const grid = useRef();
  useEffect(() => {
   
    var msnry = new Masonry( grid, {
      // options
      itemSelector: '.note',
      columnWidth: 200,
      gutter: 10  
    })
  }) */

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
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
        text: "note 5 What is Masonry? Masonry is a JavaScript grid layout library. It works by placing elements in optimal position based on available vertical space, sort of like a mason fitting stones in a wall. You’ve probably seen it in use all over the Internet.",
        color: "#87CEFA"
    },
    {
      id: 5,
      text: "    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.     ",
      color: "#87CEFA"
  },
  {
    id: 6,
    text: "note 8",
    color: "#87CEAF"
},
{
  id: 7,
  text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  color: "#FFD700"
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

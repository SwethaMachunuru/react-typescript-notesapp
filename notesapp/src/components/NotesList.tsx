import * as React from "react";
import { Note } from "./models/note.model";
import Notes from "./Notes";

interface INotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList: React.FC<INotesListProps> = ({ notes, setNotes }) => {
    const handleDelete = (id: string) => {
        console.log("id of the card.."+id)
        setNotes(notes.filter(note => note.id !== id))
    }
  const renderNotes = () => {
    return notes.map((note) => (
      <Notes key={note.id} note={note} handleDelete={handleDelete}/>
    ));
  };

  return (
    <>
      <div>{renderNotes()}</div>
    </>
  );
};

export default NotesList;

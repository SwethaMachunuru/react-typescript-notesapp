import * as React from "react";
import { Note } from "./models/note.model";
import { Button, Card } from "react-bootstrap";

interface INotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <>
      <div className="mt-4">
        <Card style={{ backgroundColor: note.color, width: "50rem" }}>
          <Card.Body>
            <Card.Title>{note.title}</Card.Title>
           
            <Card.Text>{note.text}</Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              {note.date}
            </Card.Subtitle>
            <Button variant="danger" onClick={() => handleDelete(note.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Notes;

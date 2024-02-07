import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Note } from "./models/note.model";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const [error, setError] = useState<string>("");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const textRef = useRef<HTMLInputElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (titleRef.current?.value === '' || textRef.current?.value === '') {
      setError("All fields are mandatory");
    }else{
        setError("");
        setNotes([
          ...notes,
          {
            id: new Date().toString(),
            title: (titleRef.current as HTMLInputElement).value,
            text: (textRef.current as HTMLInputElement).value,
            color: (colorRef.current as HTMLInputElement).value, // Provide a default value if colorValue is undefined
            date: new Date().toString(),
          },
        ]);
        if (titleRef.current) titleRef.current.value = '';
        if(textRef.current) textRef.current.value = '';
        if(colorRef.current) colorRef.current.value = '#dfdfdf'
    }
  };

  return (
    <>
    {error && <Alert variant="danger" className="mt-4">{ error }</Alert>}
    <div
      style={{ border: "1px solid black", borderRadius: "8px", width: "50rem" }}
      className="mt-4"
    >
      <h2 className="m-4">Create Notes</h2>
      <Form className="m-4" onSubmit={(event) => handleSubmit(event)}>
        <Form.Group className="mt-2">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Meeting Title"
            ref={titleRef}
          />
        </Form.Group >
        <Form.Group className="mt-2">
          <Form.Label>Text</Form.Label>
          <Form.Control type="text" placeholder="Meeting Text" ref={textRef} />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label htmlFor="colorNote">Notes Color</Form.Label>
          <Form.Control type="color" defaultValue="#dfdfdf" ref={colorRef} />
        </Form.Group>
        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
    </>
  );
};

export default CreateNotes;

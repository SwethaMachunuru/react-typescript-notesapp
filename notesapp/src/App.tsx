import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Col, Container, Row } from 'react-bootstrap';
import NotesList from './components/NotesList';
import CreateNotes from './components/CreateNotes';
import { Note } from './components/models/note.model';

function App() {

  const [notes, setNotes] = useState<Note[]>([
  //   {
  //   title: "Meetings",
  //   color: "#dfdfdf",
  //   date: (new Date()).toString(),
  //   id: (new Date()).toString(),
  //   text: "Schedule meeting"
  // }
])

  return (
    <>
    <Header/>
    <Container className='mt-5'>
      <Row>
        <Col>
        <NotesList notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <CreateNotes notes={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;

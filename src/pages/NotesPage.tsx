import React, { useState } from 'react';
import Modal from '../components/custom-modal/modal.tsx';

interface Note {
    id: number;
    text: string;
    date: Date;
    color: string;
}

const NotesPage: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [notes, setNotes] = useState<Note[]>([]);

    const onCloseModal = () => {
        setShowModal(false);
    };

    const onOpenModal = () => {
        setShowModal(true);
    };

    const onAddNote = (note: string) => {
        setNotes((prevNotes) => [
            ...prevNotes,
            {
                id: Math.floor(Math.random() * 1000000),
                text: note,
                date: new Date(),
                color: genLightColor(),
            },
        ]);
    };

    const genLightColor = (): string => {
        return `hsl(${Math.random() * 360}, 100%, 75%)`;
    };

    return (
        <div className="app-cont">
            {showModal && <Modal onCloseModal={onCloseModal} onAddNote={onAddNote} />}
            <div className="container">
                <header>
                    <h1>Notes</h1>
                </header>
                <button className="react-btn" onClick={onOpenModal}>Add Note</button>
                <div className="cards-container">
                    {notes.map((note) => (
                        <div className="comp-cont card" key={note.id} style={{ backgroundColor: note.color }}>
                            <p className="main-text">{note.text}</p>
                            <p className="date">{note.date.toLocaleDateString('en-US')}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotesPage;

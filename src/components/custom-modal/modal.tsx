import React, { useState } from 'react';
import './styles.css';

interface ModalProps {
    onCloseModal: () => void;
    onAddNote: (note: string) => void;
}

const Modal: React.FC<ModalProps> = ({ onCloseModal, onAddNote }) => {
    const [newNote, setNewNote] = useState<string>('');

    const handleAddNote = () => {
        onAddNote(newNote);
        onCloseModal();
    };

    const handleOverlayClick = () => {
        onCloseModal();
    };

    return (
        <div className="modal-cont">
            <div className="overlay" onClick={handleOverlayClick}></div>
            <div className="modal">
                <textarea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    name="note"
                    id="note"
                    cols={30}
                    rows={10}
                    className="note"
                ></textarea>
                <button onClick={handleAddNote}>Add Note</button>
                <button className="close" onClick={onCloseModal}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
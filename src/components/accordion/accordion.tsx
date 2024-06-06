import React, { useState, MouseEvent } from 'react';
import './styles.css';

interface AccordionItem {
    id: string;
    title: string;
    content: string;
    selected: boolean;
}

interface AccordionProps {
    accItems: AccordionItem[];
    multiselect: boolean;
}


const Accordion: React.FC<AccordionProps> = ({ accItems, multiselect }) => {

    const [items, setItems] = useState<AccordionItem[]>(accItems);

    const handleSingleSelect = (currentId: string) => {
        const updatedItems = items.map(item => ({
            ...item,
            selected: item.id === currentId ? !item.selected : false
        }));
        setItems(updatedItems);
    };

    const handleMultiSelect = (currentId: string) => {
        const updatedItems = items.map(item => ({
            ...item,
            selected: item.id === currentId ? !item.selected : item.selected
        }));
        setItems(updatedItems);
    };

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const currentId = e.currentTarget.getAttribute("data-id")!;
        if (multiselect) handleMultiSelect(currentId);
        else handleSingleSelect(currentId);
    };

    return (
        <div className="accordion accordion-ts">
            {items.map((ai) => ( // Add parentheses around the arrow function
                <div className="accordion-item" key={ai.id}>
                    <button aria-expanded={ai.selected} data-id={ai.id} onClick={handleClick}>
                        <div className="accordion-title">{ai.title}</div>
                        <div className="icon" aria-hidden="true"></div>
                    </button>
                    <div className="accordion-content">
                        <p className="content">{ai.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Accordion;
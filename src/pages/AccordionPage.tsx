import Accordion from '../components/accordion/accordion.tsx';
import React from 'react';

interface AccordionItem {
    id: string;
    title: string;
    content: string;
    selected: boolean;
}

const AccordionPage: React.FC = () => {
    const accItems: AccordionItem[] = [
		{
			id: "1",
			title: "Why is the moon sometimes out during the day?",
			content: "The Earth's daily revolution on its axis means that the Moon is actually above the horizon for about 12 hours out of every 24. Usually, some portion of that time will be during daylight – you just need to look carefully, because its brightness is so much less than the Sun's.",
			selected: false
		},
		{
			id: "2",
			title: "Why is the sky blue?",
			content: "Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.",
			selected: false
		},
		{
			id: "3",
			title: "How many shipwrecks are on the ocean floor?",
			content: "The United Nations estimates that there are over three million shipwrecks on the ocean floors. Lost, destroyed, or deliberately sunk, these wrecks are of interest to divers, underwater archaeologists, and treasure hunters alike.",
			selected: false
		},
		{
			id: "4",
			title: "How much does the Earth weigh?",
			content: "Earth weighs about 13,170,000,000,000,000,000,000,000 pounds (or 5,974,000,000,000,000,000,000,000 kilograms). Since Earth is too big to be placed on a scale, scientists use mathematics and the laws of gravity to figure out Earth's weight.",
			selected: false
		},
		{
			id: "5",
			title: "How do airplanes stay up?",
			content: "According to Scientific American, airplanes stay up because wings push air down, which causes the air to push back up with an equal and opposite force, called lift. This applies to wings of any shape, curved or flat, symmetrical or not.",
			selected: false
		}
    ];

    return (
        <div className="app-cont">
            <div className="container">
                <header>
                    <h1>Accordion</h1>
                </header>
                <div className="comp-cont accordion-cont">
                    <Accordion accItems={accItems} multiselect={false} />
                </div>
            </div>
        </div>
    );
}

export default AccordionPage;

interface Item {
    title: string;
    description: string;
}

interface CardRowProps {
    rowName: string;
    items: Item[];
}
interface Row {
    name: string;
    items: Item[];
}

interface Message {
    name: string;
    time: string;
    message: string;
    image: string;
    tags?: string[];
}


export const testUsers = [
    {
        firstName: "Elmer",
        lastName: "Laverty",
        image: "https://via.placeholder.com/40",
        isOnline: true,
    },
    {
        firstName: "Elmer",
        lastName: "Laverty",
        image: "https://via.placeholder.com/40",
        isOnline: true,
    },
    {
        firstName: "Elmer",
        lastName: "Laverty",
        image: "https://via.placeholder.com/40",
        isOnline: false,
    },
];

export const messages: Message[] = [
    {
        name: "Elmer Laverty",
        time: "12m",
        message: "Haha oh man 😂",
        image: "https://via.placeholder.com/40", // Replace with actual image URL
        tags: ["Question", "Help wanted"],
    },
    // ... other messages
];
export const data: Row[] = [
    {
        name: "Images",
        items: [
            {
                title: "Captain Drake",
                description:
                    "Natural born leader with years of experience in space exploration.",
            },
            // More items...
        ],
    },
    {
        name: "Documents",
        items: [
            { title: "Character bios", description: "3 documents, 43832 words" },
            // More items...
        ],
    },
    // More rows...
];

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isOnline: boolean;
}

interface Project {
    id: string;
    name: string;
    description: string;
    image?: string;
    users: User[];
}

const generateUniqueIdFromName = (name: string): string => {
    // Simple approach: Concatenate the name with a random number or timestamp
    // This is for demonstration purposes and might not be suitable for all use cases
    return `${name.toLowerCase().replace(/\s+/g, '-')}`;
};

export const testProjectData: Project[] = [
    {
        name: 'Orbital Odyssey',
        description: 'A journey through the cosmos to explore and document uncharted territories.',
        image: 'https://via.placeholder.com/150',
        users: [
            { id: 'user-1', firstName: 'Ada', lastName: 'Lovelace', email: 'ada@lovelace.com', isOnline: false },
            { id: 'user-2', firstName: 'Grace', lastName: 'Hopper', email: 'grace@hopper.com', isOnline: true },
        ],
    },
    {
        name: 'Digital Product Launch',
        description: 'Launching a new suite of digital products aimed at improving online privacy.',
        users: [
            { id: 'user-3', firstName: 'Alan', lastName: 'Turing', email: 'alan@turing.com', isOnline: false },
            { id: 'user-4', firstName: 'Katherine', lastName: 'Johnson', email: 'katherine@johnson.com', isOnline: false },
            { id: 'user-3', firstName: 'Alan', lastName: 'Turing', email: 'alan@turing.com', isOnline: false },
            { id: 'user-4', firstName: 'Katherine', lastName: 'Johnson', email: 'katherine@johnson.com', isOnline: false },
            { id: 'user-3', firstName: 'Alan', lastName: 'Turing', email: 'alan@turing.com', isOnline: false },
            { id: 'user-4', firstName: 'Katherine', lastName: 'Johnson', email: 'katherine@johnson.com', isOnline: false },
        ],
    }, {
        name: 'Ai Research Lab',
        description: 'Ai Research Lab for conducting research on Artificial Intelligence.',
        users: [
            { id: 'user-3', firstName: 'Alan', lastName: 'Turing', email: 'alan@turing.com', isOnline: false },
            { id: 'user-4', firstName: 'Katherine', lastName: 'Johnson', email: 'katherine@johnson.com', isOnline: false },
            { id: 'user-3', firstName: 'Alan', lastName: 'Turing', email: 'alan@turing.com', isOnline: false },
            { id: 'user-4', firstName: 'Katherine', lastName: 'Johnson', email: 'katherine@johnson.com', isOnline: false },
            { id: 'user-3', firstName: 'Alan', lastName: 'Turing', email: 'alan@turing.com', isOnline: false },
            { id: 'user-4', firstName: 'Katherine', lastName: 'Johnson', email: 'katherine@johnson.com', isOnline: false },
        ],
    },
    // Add more projects as needed
].map(project => ({ ...project, id: generateUniqueIdFromName(project.name) }));


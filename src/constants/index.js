import { zettabyte } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    pricewise,
    react,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [

    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Backend Developer",
        company_name: "Zettabyte",
        icon: zettabyte,
        iconBg: "#ffffff",
        date: "December 2022 - December 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Man4ct',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/fahmi-fahreza-791a531b0/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: '3D Clothing Shop',
        description: 'Developed a 3D web application that enables you to custom your shirt color, patterns and logos.',
        link: 'https://3d-clothing-shop.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Cashew Export Business Company Website',
        description: 'Created a company website for cashew exporting business using plain HTML,CSS and Javascript.',
        link: 'https://universalcashew.vercel.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Chatting App for iOS (Cheesy Chat)',
        description: 'Built an iOS Native App for chatting.',
        link: 'https://www.linkedin.com/posts/fahmi-fahreza-791a531b0_cheesychat-iosapp-uikit-activity-7062064586325180416-La3G?utm_source=share&utm_medium=member_desktop',
    },
];
import { Container } from "@mui/material";
import { useState } from "react";
import styles from './Projects.module.scss'
import Image, { StaticImageData } from "next/image";
import Button from "@mui/material/Button";
import pic from '../../assets/profileArt.jpg'
import logo from '../../assets/LogoRS.png'
import NextPort from '../../assets/nextPortfolio.png'

interface Project {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    techStack: string;
    githubLink: string;
}

export default function Projects() {

    const [projects] = useState<Project[]>([
        {
            id: "1",
            title: "Piggy Bank App",
            description:
            "The page you are in is my most recent project! Updating as new thing are being builtThe page you are in is my most recent project! Updating as new thing are being builtThe page you are in is my most recent project! Updating as new thing are being built",
            image: pic,
            techStack:"Next, React, TypeScript, Figma, Material UI, Firebase", 
            githubLink: "https://github.com/rafael-saraiva-mielczarski/React-Portfolio",
        },
        {
            id: "2",
            title: "Piggy Bank App Landing Page",
            description:
            "The page you are in is my most recent project! Updating as new thing are being builtThe page you are in is my most recent project! Updating as new thing are being builtThe page you are in is my most recent project! Updating as new thing are being built",
            image: pic,
            techStack:"Next, React, JavaScript, Material UI", 
            githubLink: "https://github.com/rafael-saraiva-mielczarski/React-Portfolio",
        },
        {
            id: "3",
            title: "Portfolio",
            description:
            "The page you are in is my most recent project! Updating as new thing are being builtThe page you are in is my most recent project! Updating as new thing are being builtThe page you are in is my most recent project! Updating as new thing are being built",
            image: NextPort,
            techStack:"Javascript, React, Boostrap, Figma", 
            githubLink: "https://github.com/rafael-saraiva-mielczarski/React-Portfolio",
        },
        {
            id: "4",
            title: "React Portfolio",
            description:
            "When I first started learning React I wanted to create a page that would serve as a online resume.",
            image: logo,
            techStack:"Javascript, React, Boostrap, Figma", 
            githubLink: "https://github.com/rafael-saraiva-mielczarski/React-Portfolio",
        },
        {
            id: "5",
            title: "Shop Recipe",
            description:
            "My final project that I created from an Angular course, used it to practice my Front-End skills",
            image: logo,
            techStack:"Angular, TypeScript, Firebase, SCSS", 
            githubLink: "https://github.com/rafael-saraiva-mielczarski/Recipes-Shopping-List",
        },
        {
            id: "6",
            title: "College Enrollment",
            description:
            "My final project for my college's web development course. Focused on the MVT, a fullstack project",
            image: logo,
            techStack:"Python, Django, PostgreSQL, JavaScript", 
            githubLink: "https://github.com/rafael-saraiva-mielczarski/Aula-DevWeb",
        },
        {
            id: "7",
            title: "Word Guesser",
            description:
            "The Word Guesser game, an interactive yet very simple game. It was a project from a React course that I have taken, it was very basic but it was good to practice and learn some of the React foundations.",
            image: logo,
            techStack:"Javascript, React, CSS", 
            githubLink: "https://rafael-saraiva-mielczarski.github.io/Word-Guesser-Game/",
        },
    ]);

    const [count, setCount] = useState<number>(0)

    return (
        <div id="projects">
            <Container>
                <h1 className={styles.title}>Projects</h1>
                <p className={styles.subtitle}>By clicking on the image you will be redirected to the respective project Github Repositorie</p>
                <div className={styles.projects}>
                    <div>
                    <a href={projects[count].githubLink}><Image src={projects[count].image} alt="project" className={styles.projectImage} /></a>
                    </div>
                    <div className={styles.projectText} key={projects[count].id}>
                        <h1>{projects[count].title}</h1>
                        <p>{projects[count].description}</p>
                        <p>Techonologies Used: <p style={{fontWeight: "bold"}}>{projects[count].techStack}</p></p>
                        <div className={styles.buttons}>
                            <Button onClick={() => setCount(count - 1)} disabled={count === 0 ? true : false}>Previous</Button>
                            <Button onClick={() => (setCount(count + 1))} disabled={count === 4 ? true : false}>Next</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
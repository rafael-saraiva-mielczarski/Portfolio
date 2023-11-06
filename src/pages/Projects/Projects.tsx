import { Container } from "@mui/material";
import { useState } from "react";
import styles from "./Projects.module.scss";
import Image, { StaticImageData } from "next/image";
import Button from "@mui/material/Button";
import NextPort from "../../assets/nextPortfolio.png";
import ReactPort from "../../assets/ReactPort.png";
import PBA from "../../assets/PBA.png";
import PBALP from "../../assets/PBALP.png";
import WGGame from "../../assets/WGGame.png";
import WebDev from "../../assets/WebDev.png";
import RecipesApp from "../../assets/RecipesApp.png";
import SpacexApp from "../../assets/SpaceXAPP.png";
import Viajante from "../../assets/Viajante.png";
import QuizImortal from "../../assets/QuizImortal.png";

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
      title: "SpaceX App",
      description:
        "A project made for a interview process, fully build by me, from the Figma design to the code. It is an App that consumes SpaceX API to show their launches, it renders a list for the results and display aditional information, render a webView and a in-app video rendering.",
      image: SpacexApp,
      techStack: "React Native, Redux Toolkit, TypeScript, Styled Components",
      githubLink: "https://github.com/rafael-saraiva-mielczarski/SpaceX",
    },
    {
      id: "2",
      title: "Viajante",
      description:
        "This was a course project, which a changed some styles and implemented Firebase to it. It is a traveling app, in which the user can register the places he has been in the world. The map used is an implementation of the Leaflet Library.",
      image: Viajante,
      techStack: "React, TypeScript, Leaflet, ContextAPI, Firebase",
      githubLink: "https://github.com/rafael-saraiva-mielczarski/Viajante",
    },
    {
      id: "3",
      title: "Piggy Bank App",
      description:
        "This was my final and personal project to my College's Degree, fully build and developed by me, from the Figma design to the code. It is a financial application that allow users take control of their finances. Mainly a Front-end app, used Firebase database and authentication.",
      image: PBA,
      techStack: "Next, React, TypeScript, Figma, Material UI, Firebase",
      githubLink:
        "https://github.com/rafael-saraiva-mielczarski/Piggy-Bank-App",
    },
    {
      id: "4",
      title: "Piggy Bank App Landing Page",
      description:
        "This is the landing page for the Piggy Bank App. I made it so the product has a more professional structure to it. Also, I had never built a landing page to a product of mine, thinking of the design was something diferent to me. It is hosted on Vercel",
      image: PBALP,
      techStack: "Next, React, JavaScript, Material UI",
      githubLink:
        "https://github.com/rafael-saraiva-mielczarski/PBA-Landing-Page",
    },
    {
      id: "5",
      title: "Quiz Imortal",
      description:
        "This was a course project in which a changed some of the styles and all the quiz theme. It is an online quiz that presents some question about historical facts of my football team, Grêmio. It has a score, so the user has some type of reward while attempting it.",
      image: QuizImortal,
      techStack: "React, useReducer Hook, Firebase",
      githubLink: "https://github.com/rafael-saraiva-mielczarski/Quiz-Imortal",
    },
    {
      id: "6",
      title: "Shop Recipe",
      description:
        "My final project that I created from an Angular course. This was my first contact with a Front-end Framework. It helped me to understand how front-end developement works, I used it to practice my skills",
      image: RecipesApp,
      techStack: "Angular, TypeScript, Firebase, SCSS",
      githubLink:
        "https://github.com/rafael-saraiva-mielczarski/Recipes-Shopping-List",
    },
    {
      id: "7",
      title: "Portfolio",
      description:
        "This is the page you are in, it is my most recent project! Built with Next, React and Material UI, this is project is hosted on Vercel. The design was developed by me in Figma as well. Updating as I develop new projects!",
      image: NextPort,
      techStack: "Next, React, Material UI, Figma",
      githubLink: "https://github.com/rafael-saraiva-mielczarski/Portfolio",
    },
    {
      id: "8",
      title: "College Enrollment",
      description:
        "My final project for my college's web development course. Mainly focused on the understanding of Django's MVT concept, the front-end was very basic built with vanilla JS and Bootstrap. A fullstack project!",
      image: WebDev,
      techStack: "Python, Django, PostgreSQL, JavaScript",
      githubLink: "https://github.com/rafael-saraiva-mielczarski/Aula-DevWeb",
    },
    {
      id: "9",
      title: "React Portfolio",
      description:
        "When I first started learning React I wanted to create a page that would serve as a online resume. The ideia was to build some really simple to practice, show my projects and a little bit more about me.",
      image: ReactPort,
      techStack: "Javascript, React, Boostrap, Figma",
      githubLink:
        "https://github.com/rafael-saraiva-mielczarski/React-Portfolio",
    },
    {
      id: "10",
      title: "Word Guesser",
      description:
        "This project is an interactive yet very simple game. It was from a React course that I took, it was very basic but good to practice and learn some of the React foundations.",
      image: WGGame,
      techStack: "Javascript, React, CSS",
      githubLink:
        "https://rafael-saraiva-mielczarski.github.io/Word-Guesser-Game/",
    },
  ]);

  const [count, setCount] = useState<number>(0);

  return (
    <div id="projects">
      <Container>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          By clicking on the image you will be redirected to the respective
          project Github Repositorie
        </p>
        <section className={styles.projects}>
          <div>
            <a href={projects[count].githubLink}>
              <Image
                src={projects[count].image}
                alt="project preview"
                className={styles.projectImage}
              />
            </a>
          </div>
          <article className={styles.projectText} key={projects[count].id}>
            <h1>{projects[count].title}</h1>
            <p>{projects[count].description}</p>
            <p>
              Techonologies Used: <br />
              <span style={{ fontWeight: "bold" }}>
                {projects[count].techStack}
              </span>
            </p>
            <div className={styles.buttons}>
              <Button
                onClick={() => setCount(count - 1)}
                disabled={count === 0 ? true : false}
              >
                Previous
              </Button>
              <Button
                onClick={() => setCount(count + 1)}
                disabled={count === 9 ? true : false}
              >
                Next
              </Button>
            </div>
          </article>
        </section>
      </Container>
    </div>
  );
}

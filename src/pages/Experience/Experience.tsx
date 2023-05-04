import { Container } from "@mui/material";
import styles from './Experience.module.scss'
import BadgeIcon from '@mui/icons-material/Badge';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Button from '@mui/material/Button';

export default function Experience() {
    return (
        <div id="experience">
            <Container>
            <h1 className={styles.title}>Experience</h1>
                <div className={styles.experience}>
                    <div className={styles.xpText}>
                        <p>Take a brief look trough what I have done in my career. For a more detailed look feel free to download my resume in the button below.</p>
                        <a href="CV Rafael.pdf" target="_blank" rel="noopener noreferrer"download="Resume - Rafael Saraiva">
                        <Button className={styles.button}>Download Resume</Button>
                        </a>
                    </div>
                    <div className={styles.xpJobs}>
                        <div className={styles.jobs}>
                            <span><BadgeIcon fontSize="medium" sx={{color: "#FF0BE7"}}/></span>
                            <article>
                            <h3>Software Developer Intern - IBM -  June 2022 / Present</h3>
                            <p>- Building SPAs with React, Angular and Typescritp. Always caring for the user Experience, Figma for screens prototypes.</p>
                            <p>- Strong usage of APIs requests.</p>
                            <p>- Strong usage of Git for Version Control and Scrum as an agile methodologie.</p>
                            <p>- Python development for an automation solution.</p>
                            </article>
                        </div>
                        <div className={styles.jobs}>
                            <span><PostAddIcon fontSize="medium" sx={{color: "#FF0BE7"}}/></span>
                            <article>
                            <h3>Side Projects</h3>
                            <p>My side projects are mainly for studies purpose, I like to practice what Im learning by building real world applications. You will be able to discover all of them above.</p>
                            </article>
                        </div>
                    </div>
                    <div className={styles.blur}></div>
                </div>
            </Container>
        </div>
    )
}
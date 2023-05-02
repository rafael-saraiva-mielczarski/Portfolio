import { Container } from "@mui/material";
import styles from './Projects.module.scss'

export default function Projects() {
    return (
        <div id="projects">
            <Container>
                <h1 className={styles.title}>Projects</h1>
            </Container>
        </div>
    )
}
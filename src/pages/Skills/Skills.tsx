import { Container } from "@mui/material";
import styles from './Skills.module.scss'

export default function Skills() {

    return(
        <div>
            <Container>
                <div className={styles.skills}>
                    <div className={styles.iconsSection}>
                        <span className={styles.icons}><i className="devicon-react-original"></i></span>
                        <span className={styles.icons}><i className="devicon-typescript-plain"></i></span>
                    <span className={styles.icons}><i className="devicon-figma-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-css3-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-python-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-html5-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-javascript-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-angularjs-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-github-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-postgresql-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-java-plain"></i></span>
                        <span className={styles.icons}><i className="devicon-mysql-plain"></i></span>
                    </div>
                    <div className={styles.skillsText}>
                        <h1>Skills</h1>
                        <p>Check out a list of my skills, all of them listed here I consider to be capable of working with it. Certain skills were acquired through my college degree, others were taught in my internship, and the ones I have more knowledge about were a mix of college and internship studies, as well as self-taught study done on my free time.</p>
                    </div>
                    <div className={styles.blur}></div>
                </div>
            </Container>
        </div>
    )
}
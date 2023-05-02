import { Container } from "@mui/material"
import Image from "next/image"
import styles from './About.module.scss'
import profile from '../../assets/profileArt.jpg'

export default function About() {
    
    return(
        <div>
            <Container>
                <div className={styles.about}>
                    <div className={styles.text}>
                        <h1>Hello! I'm <br /><span>Rafael Saraiva</span><br/>Software Engineer</h1>
                        <p>An early professional aspiring to impact positively the world around me trough code.  Get to know me better in this personal website, find what I've been studying and working on, my skills and experiences and contacts. Feel free to explore!</p>
                    </div>
                    <Image src={profile} alt="profile art made with Leonardo AI" className={styles.profile}/>
                    <div className={styles.blur}></div>
                </div>
            </Container>
        </div>
    )
}
import { Container } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from './Contacts.module.scss'

export default function Contacts() {
    
    return (
        <div>
            <Container>
                <h1 className={styles.title}>Contacts</h1>
                <p className={styles.subtitle}>Reach out to me via the links below!</p>
                <section className={styles.contacts}>
                    <a href="https://github.com/rafael-saraiva-mielczarski" className={styles.icons}><GitHubIcon sx={{fontSize: 100}}/></a>
                    <a href="https://www.linkedin.com/in/rafael-saraiva-mielczarski/" className={styles.icons}><LinkedInIcon sx={{fontSize: 100}}/></a>
                    <a href="mailto:rafael.saraivam1@gmail.com" className={styles.icons}><EmailIcon sx={{fontSize: 100}}/></a>
                </section>
                <section className={styles.location}>
                    <p>+51 995124011</p>
                    <p>Porto Alegre, Brazil</p>
                </section>
                <p className={styles.rights}><CopyrightIcon fontSize='small'/> Rafael Saraiva, Brazil, 2023. All rights reserverd. </p>
                <div className={styles.blur}></div>
            </Container>
        </div>
    )
}
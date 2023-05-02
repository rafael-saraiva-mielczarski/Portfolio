import Image from 'next/image'
import styles from './header.module.scss'
import logo from '../../assets/LogoRS.png'
import { Container } from '@mui/material'

export default function Header() {

    return (
        <Container>
            <div className={styles.header}>
            <div className={styles.personal}>
                <Image src={logo} className={styles.img} alt="logo"/>
                <h3>Portfolio</h3>
            </div>
            <nav className={styles.nav}>
                <p>About</p>
                <p>Experience</p>
                <p>Skills</p>
                <p>Projects</p>
            </nav>
            </div>
        </Container>
    )
}
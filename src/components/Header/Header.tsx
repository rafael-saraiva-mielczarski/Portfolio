import Image from 'next/image'
import styles from './header.module.scss'
import logo from '../../assets/LogoRS.png'
import { Container } from '@mui/material'
import { Link } from 'react-scroll';

export default function Header() {

    return (
        <Container>
            <div className={styles.header}>
            <div className={styles.personal}>
                <Image src={logo} className={styles.img} alt="logo"/>
                <h3>Portfolio</h3>
            </div>
            <nav className={styles.nav}>
                <Link to='about' spy={true} smooth={true} offset={-50} duration={700}><p>About</p></Link>
                <Link to='skills' spy={true} smooth={true} offset={-120} duration={700}><p>Skills</p></Link>
                <Link to='experience' spy={true} smooth={true} offset={-60} duration={700}><p>Experience</p></Link>
                <Link to='projects' spy={true} smooth={true} offset={-80} duration={700}><p>Projects</p></Link>
            </nav>
            </div>
        </Container>
    )
}
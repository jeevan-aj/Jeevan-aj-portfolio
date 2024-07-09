import styles from './Footer.module.css'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <section className={`${styles.footerSection}`}>
        <p>Copyright <span>&#169;</span> 2024. All rights are reserved</p>
        <div className='flex gap-4'>
            <a href="https://github.com/jeevan-aj"><FaGithub size={30}/></a>
            <a href="https://www.linkedin.com/in/jeevan-joji-25b799275/"><BsLinkedin size={30}/></a>

        </div>
    </section>
  )
}

export default Footer
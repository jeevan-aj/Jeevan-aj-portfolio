import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <img className={styles.profile__img} />

      <h1 className={`${styles.heroHand}`}>Full-Stack React Developer </h1>

      <p>
        Hi, I amm Jeevan Abraham Joji. A passionate Front-end React Developer based
        in Kerala, India. 📍
      </p>
      <div className={`${styles.heroSocials}`}>
        <a href="https://github.com/jeevan-aj">
          <FaGithub size={40} />
        </a>
        <a href="https://www.linkedin.com/in/jeevan-joji-25b799275/">
          <BsLinkedin size={40} style={{fill:"#0a66c2"}}/>
        </a>
      </div>
    </section>
  );
};

export default Hero;

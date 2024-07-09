import styles from './AboutMe.module.css'
import aboutMe from '../../assets/about-img.62b47e7f183d4b4e9feb.webp'

const AboutMe = () => {
  return (
    <section className={`${styles.aboutMe}`}>
    
          <div>
          <img src={aboutMe} alt="about me Image"  />
          </div>
          <div className={`${styles.aboutMeContents}`}>
            <h3>About Me</h3>
            <h4>Full-stack Developer <br/> based in India 📍</h4>
            <p className=''>Hey, my name is Jeevan, and I am a Full-stack Developer. My passion is to create and develop clean and interactive and fast websites.</p>
            <p>My main stack currently is Mern in combination with Tailwind CSS and TypeScript.</p>
          </div>
        
  
    </section>
  )
}

export default AboutMe
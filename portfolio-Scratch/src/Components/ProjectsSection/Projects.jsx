import styles from "./Projects.module.css";
import rentaride from "../../assets/Rentaride.png";
import kanban from "../../assets/Kanban.png";

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h4 className={styles.projectsTitle}>Projects</h4>
      <div className={styles.projectsContent}>
        <img
          className={styles.project__img}
          src={rentaride}
          alt="Project 1 Rent a Ride"
        />
        <img
          className={styles.project__img}
          src={rentaride}
          alt="Project 1 Rent a Ride"
        />
        <img
          className={styles.project__img}
          src={kanban}
          alt="Project 1 Rent a Ride"
        />
        <div className={`flex flex-col justify-center items-center`}>
        <div className={` ${styles.miniProjectsOuterDiv}`}>
        <img
            id={styles.miniProjects}
            src={kanban}
            alt="Project 1 Rent a Ride"
          />
        </div>
         

          <div className={styles.miniProjectsText}>20+ Mini Projects</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

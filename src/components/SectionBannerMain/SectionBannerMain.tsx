import { Cta } from "../Cta/Cta";
import styles from "./styles.module.css";

export function SectionBannerMain() {
  return (
    <section className={`${styles.sectionBannerMain}`}>
      <div className="container">
        <div className={styles.containerTextBannerMain}>
          <h2>Victor Magaldi</h2>
          <h3 className={styles.animTypewriter}>
            Desenvolvedor Fullstack e Arquiteto de Soluções
          </h3>
          <p>
            Proin scelerisque massa vel odio elementum, ac vestibulum nisl
            vehicula. Vestibulum eleifend mollis nulla, vel semper nisl.
            Curabitur vitae neque pretium, facilisis velit in, semper leo. Donec
            a varius risus. Curabitur suscipit, quam vel pretium
          </p>
          <Cta />
        </div>

        <img
          src="https://github.com/victor-magaldi.png"
          alt="victor-magaldi-avatar-image"
          width={500}
          height={500}
          className={styles.imageProfile}
        />
      </div>
    </section>
  );
}

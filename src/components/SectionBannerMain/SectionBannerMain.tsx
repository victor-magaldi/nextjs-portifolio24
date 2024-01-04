// import styles from "../../styles/styles.module.css"
import styles from "./styles.module.css"

export function SectionBannerMain() {
  return (
        <section className={styles.sectionBannerMain}>
        <div className={styles.containerTextBannerMain}>
          <h2>Desenvolvedor Fullstack e Arquiteto de Soluções</h2>
          <h3 className={styles.animTypewriter}>Crio e Desenvolvo as Soluções</h3>
          <p>Proin scelerisque massa vel odio elementum, ac vestibulum nisl vehicula. Vestibulum eleifend mollis nulla, vel semper nisl. Curabitur vitae neque pretium, facilisis velit in, semper leo. Donec a varius risus. Curabitur suscipit, quam vel pretium</p>
        </div>

        <img src='https://github.com/victor-magaldi.png' alt='victor-magaldi'/>
      </section>
  )
}

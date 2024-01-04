import Image from 'next/image'
import styles from './page.module.css'
import { SectionBannerMain } from './components/SectionBannerMain'

export default function Home() {
  return (
    <main className={styles.main}>
 
        <SectionBannerMain/>
 
      <hr/>
      <section className={styles.sectionDescriptionMe}>
        <h2>Sobre mim</h2>
        <div className={styles.textMe}>
          <p>Proin scelerisque massa vel odio elementum, ac vestibulum nisl vehicula. Vestibulum eleifend mollis nulla, vel semper nisl. Curabitur vitae neque pretium, facilisis velit in, semper leo. Donec a varius risus. Curabitur suscipit, quam vel pretium ullamcorper, quam urna bibendum tellus, ac tincidunt nisi leo vel diam. Mauris sit amet ullamcorper elit. Sed interdum pulvinar urna, et venenatis enim volutpat sit amet. Quisque congue ex lacus, vel vulputate ligula egestas eu.Morbi porta, augue eu gravida hendrerit, massa augue tempor felis, id posuere felis nibh ac nibh. Phasellus pharetra vulputate elit, euismod malesuada orci viverra ut. Etiam tempor finibus sapien, nec pharetra odio porttitor ac. Fusce accumsan orci quis augue pellentesque, id volutpat ante feugiat. In blandit et eros sed volutpat. Nunc tellus quam, commodo et scelerisque a, semper et elit. Quisque accumsan vitae ipsum ac tincidunt. Maecenas in cursus magna. Donec eget luctus odio.</p>
          <p>Morbi porta, augue eu gravida hendrerit, massa augue tempor felis, id posuere felis nibh ac nibh. Phasellus pharetra vulputate elit, euismod malesuada orci viverra ut. Etiam tempor finibus sapien, nec pharetra odio porttitor ac. Fusce accumsan orci quis augue pellentesque, id volutpat ante feugiat. In blandit et eros sed volutpat. Nunc tellus quam, commodo et scelerisque a, semper et elit. Quisque accumsan vitae ipsum ac tincidunt. Maecenas in cursus magna. Donec eget luctus odio.</p>
        </div>
      </section>

      <hr/>
      <section className={styles.sectionSkills }>
        <h2>Habilidades</h2>
        <div className={styles.textMe}>
          <p>Proin scelerisque massa vel odio elementum, ac vestibulum nisl vehicula. Vestibulum eleifend mollis nulla, vel semper nisl. Curabitur vitae neque pretium, facilisis velit in, semper leo. Donec a varius risus. Curabitur suscipit, quam vel pretium ullamcorper, quam urna bibendum tellus, ac tincidunt nisi leo vel diam. Mauris sit amet ullamcorper elit. Sed interdum pulvinar urna, et venenatis enim volutpat sit amet. Quisque congue ex lacus, vel vulputate ligula egestas eu.Morbi porta, augue eu gravida hendrerit, massa augue tempor felis, id posuere felis nibh ac nibh. Phasellus pharetra vulputate elit, euismod malesuada orci viverra ut. Etiam tempor finibus sapien, nec pharetra odio porttitor ac. Fusce accumsan orci quis augue pellentesque, id volutpat ante feugiat. In blandit et eros sed volutpat. Nunc tellus quam, commodo et scelerisque a, semper et elit. Quisque accumsan vitae ipsum ac tincidunt. Maecenas in cursus magna. Donec eget luctus odio.</p>
          <p>Morbi porta, augue eu gravida hendrerit, massa augue tempor felis, id posuere felis nibh ac nibh. Phasellus pharetra vulputate elit, euismod malesuada orci viverra ut. Etiam tempor finibus sapien, nec pharetra odio porttitor ac. Fusce accumsan orci quis augue pellentesque, id volutpat ante feugiat. In blandit et eros sed volutpat. Nunc tellus quam, commodo et scelerisque a, semper et elit. Quisque accumsan vitae ipsum ac tincidunt. Maecenas in cursus magna. Donec eget luctus odio.</p>
        </div>
      </section>
      <hr/>
      <section className={styles.projects }>
        <h2>Projetos</h2>
        
      </section>
    <hr/>
      <section className={styles.contacts }>
        <h2>Contatos</h2>
        
      </section>

    </main>
  )
}

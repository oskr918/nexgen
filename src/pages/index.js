import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './components/Layout'


export default function Home() {
  return (
    <Layout >
      <div className={styles.contenedor}>
        <div className={styles.texto}>
          <h1>
            ¡Bienvenidos a NexGenDevOpsTeam! Somos una comunidad de desarrolladores junior que busca abrirse camino en la industria del desarrollo de software.
            Nuestra misión es ayudar a otros desarrolladores junior a encontrar su primer experiencia laboral trabajando en proyectos reales y poder demostrar su potencial.
            ¡Únete a nuestra comunidad y juntos construyamos el futuro del desarrollo de software!
          </h1>
        </div>
        <button className={styles.btn}><Link href='contacto' className={styles.link}>contactanos</Link></button>
      </div>
    </Layout>
  )
}

import styles from '../styles/abaut.module.css'
import { Layout } from './components/Layout'
const abaut = () => {
    return (
        <Layout>
            <div className={styles.container}>
            <h1 className={styles.title}>Acerca de NexGenDevOpsTeam</h1>
            <p className={styles.text}>NexGenDevOpsTeam es una comunidad de desarrolladores junior apasionados por la tecnología y la programación, que buscan abrirse camino en la industria del desarrollo de software. Nuestro objetivo es ayudar a otros desarrolladores junior a encontrar su primer experiencia laboral trabajando en proyectos reales y poder demostrar su potencial.</p>
            <p className={styles.text}>En NexGen DevOps Team, creemos en la colaboración y la construcción de relaciones sólidas, y esperamos poder conectarte con clientes potenciales que buscan talento en el desarrollo de software. Estamos comprometidos en mantenernos actualizados en las últimas tendencias en el desarrollo de software, y utilizamos tecnologías y herramientas modernas para lograr resultados excepcionales.</p>
            <p className={styles.text}>¡Únete a nuestra comunidad y juntos construyamos el futuro!</p>
        </div>
        </Layout>
    )
}

export default abaut
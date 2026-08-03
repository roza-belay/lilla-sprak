import languageTiles from '../../assets/language-tiles.svg'
import styles from './Header.module.css'

type HeaderProps = {
  title: string
  subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Barnens språkspel</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <img
          className={styles.illustration}
          src={languageTiles}
          alt="Färgglada kort med bokstäver och siffror"
        />
      </div>
    </header>
  )
}

export default Header

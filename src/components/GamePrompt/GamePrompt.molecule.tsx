import type { LearningItem } from '../../types/learning'
import styles from './GamePrompt.module.css'

type GamePromptProps = {
  item: LearningItem
  feedback?: string
}

const kindLabels: Record<LearningItem['kind'], string> = {
  letter: 'Bokstav',
  number: 'Siffra',
  animal: 'Djur',
  bodyPart: 'Kroppsdelar'
}

const GamePrompt = ({ item, feedback }: GamePromptProps) => {
  return (
    <section className={styles.prompt} aria-live="polite">
      <div className={styles.picture} aria-hidden="true">
        {item.picture}
      </div>

      <div className={styles.copy}>
        <div className={styles.meta}>
          <span>{kindLabels[item.kind]}</span>
          <span>{item.language}</span>
        </div>

        <h2>{item.prompt}</h2>

        <dl className={styles.words}>
          <div>
            <dt>Svenska</dt>
            <dd>{item.svenska}</dd>
          </div>
          <div>
            <dt>Tigrinja</dt>
            <dd>{item.tigrinja}</dd>
          </div>
          {item.sound ? (
            <div>
              <dt>Ljud</dt>
              <dd>{item.sound}</dd>
            </div>
          ) : null}
        </dl>

        {item.shape ? <p className={styles.shape}>{item.shape}</p> : null}
        <p className={feedback ? styles.feedback : ''}>
          {feedback ?? item.hint}
        </p>
      </div>
    </section>
  )
}

export default GamePrompt

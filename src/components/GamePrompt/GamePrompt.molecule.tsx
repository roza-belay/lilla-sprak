import type { LearningItem } from '../../types/learning'
import styles from './GamePrompt.module.css'

type GamePromptProps = {
  item: LearningItem
  feedback?: string
}

const kindLabels: Record<LearningItem['kind'], string> = {
  letter: 'Bokstav',
  number: 'Siffra',
  word: 'Ord',
}

const GamePrompt = ({ item, feedback }: GamePromptProps) => {
  return (
    <section className={styles.prompt} aria-live="polite">
      <div className={styles.meta}>
        <span>{kindLabels[item.kind]}</span>
        <span>{item.language}</span>
      </div>
      <h2>{item.prompt}</h2>
      <p>{feedback ?? item.hint}</p>
    </section>
  )
}

export default GamePrompt

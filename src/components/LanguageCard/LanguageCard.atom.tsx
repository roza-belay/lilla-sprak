import type { LearningOption } from '../../types/learning'
import styles from './LanguageCard.module.css'

type LanguageCardProps = {
  option: LearningOption
  isCorrect?: boolean
  isSelected?: boolean
  isLocked?: boolean
  onSelect: () => void
}

const LanguageCard = ({
  option,
  isCorrect = false,
  isSelected = false,
  isLocked = false,
  onSelect,
}: LanguageCardProps) => {
  const resultClass =
    isLocked && isSelected ? (isCorrect ? styles.correct : styles.wrong) : ''

  return (
    <button
      type="button"
      className={`${styles.card} ${resultClass}`}
      disabled={isLocked}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      {option.picture ? (
        <span className={styles.picture} aria-hidden="true">
          {option.picture}
        </span>
      ) : null}
      <span className={styles.label}>{option.label}</span>
      {option.subLabel ? (
        <span className={styles.subLabel}>{option.subLabel}</span>
      ) : null}
      {option.note ? <span className={styles.note}>{option.note}</span> : null}
    </button>
  )
}

export default LanguageCard

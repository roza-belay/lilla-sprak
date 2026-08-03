import styles from './LanguageCard.module.css'

type LanguageCardProps = {
  label: string
  isCorrect?: boolean
  isSelected?: boolean
  isLocked?: boolean
  onSelect: () => void
}

const LanguageCard = ({
  label,
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
      {label}
    </button>
  )
}

export default LanguageCard

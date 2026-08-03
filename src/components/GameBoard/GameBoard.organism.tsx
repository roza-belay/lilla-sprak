import { useMemo, useState } from 'react'
import { learningItems } from '../../data/learningItems'
import type { LearningKind } from '../../types/learning'
import Button from '../Button'
import GamePrompt from '../GamePrompt'
import LanguageCard from '../LanguageCard'
import ScoreBoard from '../ScoreBoard'
import styles from './GameBoard.module.css'

const categories: { label: string; value: LearningKind | 'all' }[] = [
  { label: 'Alla', value: 'all' },
  { label: 'Bokstäver', value: 'letter' },
  { label: 'Siffror', value: 'number' },
  { label: 'Ord', value: 'word' },
]

const GameBoard = () => {
  const [category, setCategory] = useState<LearningKind | 'all'>('all')
  const [roundIndex, setRoundIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const questions = useMemo(() => {
    return category === 'all'
      ? learningItems
      : learningItems.filter((item) => item.kind === category)
  }, [category])

  const currentItem = questions[roundIndex % questions.length]
  const isLocked = selectedAnswer !== null
  const isCorrect = selectedAnswer === currentItem.answer

  const feedback = isLocked
    ? isCorrect
      ? 'Rätt! Snyggt jobbat.'
      : `Nästan. Rätt svar är ${currentItem.answer}.`
    : undefined

  const handleAnswer = (answer: string) => {
    if (isLocked) {
      return
    }

    setSelectedAnswer(answer)
    if (answer === currentItem.answer) {
      setScore((currentScore) => currentScore + 1)
    }
  }

  const handleNext = () => {
    setRoundIndex((currentRound) => (currentRound + 1) % questions.length)
    setSelectedAnswer(null)
  }

  const handleCategoryChange = (nextCategory: LearningKind | 'all') => {
    setCategory(nextCategory)
    setRoundIndex(0)
    setScore(0)
    setSelectedAnswer(null)
  }

  return (
    <section className={styles.board}>
      <div className={styles.sidebar}>
        <ScoreBoard
          score={score}
          total={questions.length}
          round={roundIndex + 1}
        />
        <div className={styles.categoryList} aria-label="Välj kategori">
          {categories.map((item) => (
            <button
              type="button"
              key={item.value}
              className={item.value === category ? styles.activeCategory : ''}
              onClick={() => handleCategoryChange(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.playArea}>
        <GamePrompt item={currentItem} feedback={feedback} />

        <div className={styles.options}>
          {currentItem.options.map((option) => (
            <LanguageCard
              key={option}
              label={option}
              isLocked={isLocked}
              isSelected={selectedAnswer === option}
              isCorrect={option === currentItem.answer}
              onSelect={() => handleAnswer(option)}
            />
          ))}
        </div>

        <div className={styles.actions}>
          <Button
            label="Nästa fråga"
            onClick={handleNext}
            disabled={!isLocked}
            variant="secondary"
          />
        </div>
      </div>
    </section>
  )
}

export default GameBoard

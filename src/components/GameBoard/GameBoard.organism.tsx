import { useMemo, useState } from 'react'
import { learningItems } from '../../data/learningItems'
import type { LearningKind } from '../../types/learning'
import Button from '../Button'
import GamePrompt from '../GamePrompt'
import LanguageCard from '../LanguageCard'
import ScoreBoard from '../ScoreBoard'
import styles from './GameBoard.module.css'


const categories: { label: string; value: LearningKind | 'all' }[] = [
  { label: 'Allt', value: 'all' },
  { label: 'Bokstäver', value: 'letter' },
  { label: 'Siffror', value: 'number' },
  { label: 'Djur', value: 'animal' },
  { label: 'Kroppsdelar', value: 'bodyPart' },
]


type AudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext
  }

const playClap = () => {
  if (typeof window === 'undefined') {
    return
  }

  const AudioContextConstructor =
    window.AudioContext ?? (window as AudioWindow).webkitAudioContext

  if (!AudioContextConstructor) {
    return
  }

  const audioContext = new AudioContextConstructor()
  const bufferLength = Math.floor(audioContext.sampleRate * 0.08)
  const buffer = audioContext.createBuffer(
    1,
    bufferLength,
    audioContext.sampleRate,
  )
  const data = buffer.getChannelData(0)

  for (let index = 0; index < bufferLength; index += 1) {
    const fade = 1 - index / bufferLength
    data[index] = (Math.random() * 2 - 1) * fade
  }

  ;[0, 0.06, 0.12].forEach((delay) => {
    const source = audioContext.createBufferSource()
    const filter = audioContext.createBiquadFilter()
    const gain = audioContext.createGain()

    source.buffer = buffer
    filter.type = 'bandpass'
    filter.frequency.value = 1400
    gain.gain.setValueAtTime(0.42, audioContext.currentTime + delay)
    gain.gain.exponentialRampToValueAtTime(
      0.01,
      audioContext.currentTime + delay + 0.08,
    )

    source.connect(filter)
    filter.connect(gain)
    gain.connect(audioContext.destination)
    source.start(audioContext.currentTime + delay)
  })

  window.setTimeout(() => void audioContext.close(), 420)
}

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

const displayedOptions = useMemo(() => {
  const shuffled = [...currentItem.options]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}, [currentItem])

  const isLocked = selectedAnswer !== null
  const isCorrect = selectedAnswer === currentItem.answer

  const feedback = isLocked
    ? isCorrect
      ? 'Rätt! Klappa händerna.'
      : `Nästan. Rätt svar är ${currentItem.answer}.`
    : undefined

  const handleAnswer = (answer: string) => {
    if (isLocked) {
      return
    }

    setSelectedAnswer(answer)
    if (answer === currentItem.answer) {
      setScore((currentScore) => currentScore + 1)
      playClap()
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
          {displayedOptions.map((option) => {
            const isOptionCorrect = option.label === currentItem.answer

            return (
              <LanguageCard
                key={`${option.label}-${option.subLabel ?? ''}`}
                option={option}
                isLocked={isLocked}
                isSelected={selectedAnswer === option.label}
                isCorrect={isOptionCorrect}
                onSelect={() => handleAnswer(option.label)}
              />
            )
          })}
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

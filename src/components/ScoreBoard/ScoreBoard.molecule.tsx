import styles from './ScoreBoard.module.css'

type ScoreBoardProps = {
  score: number
  total: number
  round: number
}

const ScoreBoard = ({ score, total, round }: ScoreBoardProps) => {
  return (
    <section className={styles.scoreBoard} aria-label="Poäng">
      <div>
        <span>Poäng</span>
        <strong>{score}</strong>
      </div>
      <div>
        <span>Fråga</span>
        <strong>
          {round}/{total}
        </strong>
      </div>
    </section>
  )
}

export default ScoreBoard

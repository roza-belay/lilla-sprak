export type LearningKind = 'letter' | 'number' | 'word'

export type LearningItem = {
  id: string
  kind: LearningKind
  language: 'svenska' | 'tigrinja'
  prompt: string
  answer: string
  options: string[]
  hint: string
}

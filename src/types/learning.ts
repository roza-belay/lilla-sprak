export type LearningKind = 'letter' | 'number' | 'animal'

export type LearningOption = {
  label: string
  subLabel?: string
  picture?: string
  note?: string
}

export type LearningItem = {
  id: string
  kind: LearningKind
  language: 'Svenska och tigrinja'
  prompt: string
  answer: string
  options: LearningOption[]
  hint: string
  picture: string
  svenska: string
  tigrinja: string
  sound?: string
  shape?: string
}

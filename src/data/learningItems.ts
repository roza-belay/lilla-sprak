import type { LearningItem, LearningOption } from '../types/learning'

const language = 'Svenska och tigrinja' as const

const option = (
  label: string,
  subLabel: string,
  picture: string,
  note?: string,
): LearningOption => ({ label, subLabel, picture, note })

const letterItems: LearningItem[] = [
  {
    id: 'letter-a',
    kind: 'letter',
    language,
    prompt: 'Vilken bricka visar A och ኣ?',
    answer: 'A · ኣ',
    picture: '🦁',
    svenska: 'Apa',
    tigrinja: 'ኣንበሳ',
    options: [
      option('A · ኣ', 'Apa · ኣንበሳ', '🦁', 'a-ljud'),
      option('B · በ', 'Boll · በጊዕ', '🐑', 'b-ljud'),
      option('M · ማ', 'Måne · ማይ', '🌙', 'm-ljud'),
    ],
    hint: 'Säg A långsamt. ኣ börjar också med ett öppet a-ljud.',
  },
  {
    id: 'letter-b',
    kind: 'letter',
    language,
    prompt: 'Vilken bricka passar till B och በ?',
    answer: 'B · በ',
    picture: '🐑',
    svenska: 'Boll',
    tigrinja: 'በጊዕ',
    options: [
      option('D · ድ', 'Djur · ድሙ', '🐈', 'd-ljud'),
      option('B · በ', 'Boll · በጊዕ', '🐑', 'b-ljud'),
      option('K · ከ', 'Katt · ከልቢ', '🐕', 'k-ljud'),
    ],
    hint: 'B och በ känns mjuka på läpparna när barnet säger ljudet.',
  },
  {
    id: 'letter-d',
    kind: 'letter',
    language,
    prompt: 'Vilken bricka visar D och ድ?',
    answer: 'D · ድ',
    picture: '🐈',
    svenska: 'Djur',
    tigrinja: 'ድሙ',
    options: [
      option('D · ድ', 'Djur · ድሙ', '🐈', 'd-ljud'),
      option('F · ፈ', 'Fisk · ፈረስ', '🐎', 'f-ljud'),
      option('L · ላ', 'Lamm · ላሕሚ', '🐄', 'l-ljud'),
    ],
    hint: 'D låter kort. ድ är tigrinsk fidel för ett d-ljud.',
  },
  {
    id: 'letter-f',
    kind: 'letter',
    language,
    prompt: 'Vilken bricka passar till F och ፈ?',
    answer: 'F · ፈ',
    picture: '🐎',
    svenska: 'Fisk',
    tigrinja: 'ፈረስ',
    options: [
      option('S · ሰ', 'Sol · ሰላም', '☀️', 's-ljud'),
      option('F · ፈ', 'Fisk · ፈረስ', '🐎', 'f-ljud'),
      option('A · ኣ', 'Apa · ኣንበሳ', '🦁', 'a-ljud'),
    ],
    hint: 'F och ፈ blåser lite luft när barnet säger ljudet.',
  },
  {
    id: 'letter-k',
    kind: 'letter',
    language,
    prompt: 'Vilken bricka visar K och ከ?',
    answer: 'K · ከ',
    picture: '🐕',
    svenska: 'Katt',
    tigrinja: 'ከልቢ',
    options: [
      option('K · ከ', 'Katt · ከልቢ', '🐕', 'k-ljud'),
      option('M · ማ', 'Måne · ማይ', '🌙', 'm-ljud'),
      option('B · በ', 'Boll · በጊዕ', '🐑', 'b-ljud'),
    ],
    hint: 'K och ከ börjar långt bak i munnen.',
  },
  {
    id: 'letter-s',
    kind: 'letter',
    language,
    prompt: 'Vilken bricka passar till S och ሰ?',
    answer: 'S · ሰ',
    picture: '☀️',
    svenska: 'Sol',
    tigrinja: 'ሰላም',
    options: [
      option('F · ፈ', 'Fisk · ፈረስ', '🐎', 'f-ljud'),
      option('S · ሰ', 'Sol · ሰላም', '☀️', 's-ljud'),
      option('D · ድ', 'Djur · ድሙ', '🐈', 'd-ljud'),
    ],
    hint: 'S och ሰ låter som en stilla sss.',
  },
]

const numbers = [
  ['one', '1', 'ett', 'ሓደ', '☝️', 'pekfinger', '1 står rak som ett pekfinger.'],
  ['two', '2', 'två', 'ክልተ', '🦢', 'svans', '2 böjer sig som en fågel med svans.'],
  ['three', '3', 'tre', 'ሰለስተ', '🦋', 'vingar', '3 har två runda vingar som en fjäril.'],
  ['four', '4', 'fyra', 'ኣርባዕተ', '🪑', 'stol', '4 ser ut som en liten stol med rygg.'],
  ['five', '5', 'fem', 'ሓሙሽተ', '🖐️', 'hand', '5 påminner om en hand med fem fingrar.'],
  ['six', '6', 'sex', 'ሽዱሽተ', '🐌', 'snigel', '6 rullar ihop sig som en snigel.'],
  ['seven', '7', 'sju', 'ሸውዓተ', '🛝', 'rutschkana', '7 börjar med ett tak och glider ner som en rutschkana.'],
  ['eight', '8', 'åtta', 'ሸሞንተ', '⛄', 'två bollar', '8 är två runda bollar ovanpå varandra.'],
  ['nine', '9', 'nio', 'ትሽዓተ', '🎈', 'ballong', '9 är en ballong med ett snöre.'],
  ['ten', '10', 'tio', 'ዓሰርተ', '🔟', 'pinne och boll', '10 är en pinne och en rund boll tillsammans.'],
] as const

const numberOption = (index: number) => {
  const number = numbers[index % numbers.length]
  return option(
    number[1],
    `${number[2]} · ${number[3]}`,
    number[4],
    number[5],
  )
}

const numberItems: LearningItem[] = numbers.map((number, index) => ({
  id: `number-${number[0]}`,
  kind: 'number',
  language,
  prompt: `Vilken siffra är ${number[2]}?`,
  answer: number[1],
  picture: number[4],
  svenska: number[2],
  tigrinja: number[3],
  shape: number[6],
  options: [
    numberOption(index),
    numberOption(index + 3),
    numberOption(index + 6),
  ],
  hint: `${number[6]} Säg: ${number[2]}, ${number[3]}.`,
}))

const animals = [
  ['dog', 'Hund', 'ከልቢ', '🐕', 'voff voff'],
  ['cat', 'Katt', 'ድሙ', '🐈', 'mjau'],
  ['cow', 'Ko', 'ላሕሚ', '🐄', 'mu'],
  ['sheep', 'Får', 'በጊዕ', '🐑', 'bää'],
  ['goat', 'Get', 'ጤል', '🐐', 'bräk'],
  ['horse', 'Häst', 'ፈረስ', '🐎', 'gnägg'],
  ['lion', 'Lejon', 'ኣንበሳ', '🦁', 'raa'],
  ['elephant', 'Elefant', 'ሓርማዝ', '🐘', 'trumpet'],
  ['bird', 'Fågel', 'ዑፍ', '🐦', 'pip pip'],
  ['fish', 'Fisk', 'ዓሳ', '🐟', 'blubb'],
  ['chicken', 'Höna', 'ደርሆ', '🐔', 'kackel'],
  ['donkey', 'Åsna', 'ኣድጊ', '🫏', 'ii-åå'],
] as const

const animalLabel = (index: number) => {
  const animal = animals[index % animals.length]
  return `${animal[1]} · ${animal[2]}`
}

const animalOption = (index: number) => {
  const animal = animals[index % animals.length]
  return option(animalLabel(index), animal[4], animal[3])
}

const animalItems: LearningItem[] = animals.map((animal, index) => ({
  id: `animal-${animal[0]}`,
  kind: 'animal',
  language,
  prompt: `Vilket djur heter ${animal[1].toLowerCase()} och ${animal[2]}?`,
  answer: animalLabel(index),
  picture: animal[3],
  svenska: animal[1],
  tigrinja: animal[2],
  sound: animal[4],
  options: [
    animalOption(index),
    animalOption(index + 4),
    animalOption(index + 8),
  ],
  hint: `${animal[1]} säger ${animal[4]}.`,
}))


const bodyParts = [
  {
    id: 'eye',
    svenska: 'Öga',
    tigrinja: 'ዓይኒ',
    picture: '👀',
    functionSv: 'Ögat hjälper oss att se.',
    functionTi: 'ዓይኒ ንኽንርኢ ይሕግዘና።',
  },
  {
    id: 'ear',
    svenska: 'Öra',
    tigrinja: 'እዝኒ',
    picture: '👂',
    functionSv: 'Örat hjälper oss att höra.',
    functionTi: 'እዝኒ ንኽንሰምዕ ይሕግዘና።',
  },
  {
    id: 'nose',
    svenska: 'Näsa',
    tigrinja: 'ኣፍንጫ',
    picture: '👃',
    functionSv: 'Näsan hjälper oss att lukta.',
    functionTi: 'ኣፍንጫ ንኽንሽትት ይሕግዘና።',
  },
  {
    id: 'mouth',
    svenska: 'Mun',
    tigrinja: 'ኣፍ',
    picture: '👄',
    functionSv: 'Med munnen äter och pratar vi.',
    functionTi: 'ብኣፍና ንበልዕን ንዛረብን።',
  },
  {
    id: 'hand',
    svenska: 'Hand',
    tigrinja: 'ኢድ',
    picture: '🖐️',
    functionSv: 'Handen hjälper oss att hålla saker.',
    functionTi: 'ኢድና ነገራት ንኽንሕዝ ይሕግዘና።',
  },
  {
    id: 'foot',
    svenska: 'Fot',
    tigrinja: 'እግሪ',
    picture: '🦶',
    functionSv: 'Foten hjälper oss att gå.',
    functionTi: 'እግርና ንኽንከይድ ይሕግዘና።',
  },
] as const

const bodyPartItems: LearningItem[] = bodyParts.map((part, index) => {
  const answer = `${part.svenska} · ${part.tigrinja}`

  const otherParts = bodyParts.filter(
    (candidate) => candidate.id !== part.id,
  )

  const distractors = [
    otherParts[(index * 2) % otherParts.length],
    otherParts[(index * 2 + 1) % otherParts.length],
  ]

  return {
    id: `body-${part.id}`,
    kind: 'bodyPart',
    language,
    prompt: `Vad heter kroppsdelen på svenska och tigrinja?`,
    answer,
    picture: part.picture,
    svenska: part.svenska,
    tigrinja: part.tigrinja,
    hint: `${part.functionSv} ${part.functionTi}`,
    options: [
      option(answer, `${part.functionSv}\n${part.functionTi}`, part.picture),
      ...distractors.map((other) =>
        option(
          `${other.svenska} · ${other.tigrinja}`,
          `${other.functionSv}\n${other.functionTi}`,
          other.picture,
        ),
      ),
    ],
  }
})

export const learningItems: LearningItem[] = [
  ...letterItems,
  ...numberItems,
  ...animalItems,
  ...bodyPartItems,
]




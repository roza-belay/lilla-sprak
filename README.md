# Lilla Språk

Ett litet React + TypeScript-spel för barn som vill träna bokstäver, siffror och första ord.

Projektstrukturen är inspirerad av `fwk-femiral-components`: varje komponent har egen mapp, egen CSS module, Storybook-story, MDX-dokumentation och `index.ts` export.

## Projektstruktur

```txt
lilla-sprak/
├── .github/workflows/react-build.yml
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── vitest.setup.ts
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── GameBoard/
│   │   ├── GamePrompt/
│   │   ├── Header/
│   │   ├── LanguageCard/
│   │   ├── ScoreBoard/
│   │   └── index.ts
│   ├── data/
│   │   └── learningItems.ts
│   ├── types/
│   │   └── learning.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
└── vite.config.ts
```

## Kom igång

1. Gå in i projektet:

```bash
cd lilla-sprak
```

2. Använd rätt Node-version:

```bash
nvm use
```

3. Installera dependencies:

```bash
npm install
```

4. Starta appen:

```bash
npm run dev
```

5. Starta Storybook:

```bash
npm run storybook
```

## Så skriver du vidare själv

### Steg 1: Lägg till nya frågor

Öppna `src/data/learningItems.ts`.

Kopiera ett objekt och ändra:

```ts
{
  id: 'letter-m',
  kind: 'letter',
  language: 'svenska',
  prompt: 'Vilken bokstav börjar Mamma med?',
  answer: 'M',
  options: ['M', 'A', 'S'],
  hint: 'Mamma börjar med M.',
}
```

Viktigt:

- `answer` måste finnas i `options`.
- `kind` ska vara `letter`, `number` eller `word`.
- `id` ska vara unikt.

### Steg 2: Ändra hur svarskorten ser ut

Öppna:

- `src/components/LanguageCard/LanguageCard.atom.tsx`
- `src/components/LanguageCard/LanguageCard.module.css`

Här ändrar du korten som barnet klickar på.

### Steg 3: Ändra spelregler

Öppna `src/components/GameBoard/GameBoard.organism.tsx`.

Här finns:

- vald kategori
- vilken fråga som visas
- poäng
- vad som händer när barnet klickar rätt eller fel
- nästa fråga-knappen

### Steg 4: Skapa en ny komponent

Följ samma mönster som referensprojektet:

```txt
src/components/Namn/
├── Namn.atom.tsx
├── Namn.module.css
├── Namn.styles.ts
├── Namn.stories.tsx
├── Namn.mdx
└── index.ts
```

Om komponenten är större byter du `.atom.tsx` till:

- `.molecule.tsx` när den kombinerar flera små komponenter
- `.organism.tsx` när den är en större del av sidan

### Steg 5: Exportera komponenten

Öppna `src/components/index.ts` och lägg till:

```ts
export { default as Namn } from './Namn/Namn.atom'
```

### Steg 6: Kontrollera innan du pushar

Kör:

```bash
npm run build
npm run lint
```

CI-filen `.github/workflows/react-build.yml` kör build automatiskt på GitHub.

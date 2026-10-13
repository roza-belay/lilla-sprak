import type { Meta, StoryObj } from '@storybook/react-vite'
import GamePrompt from './GamePrompt.molecule'

const meta = {
  title: 'Components/GamePrompt',
  component: GamePrompt,
  args: {
    item: {
      id: 'animal-dog',
      kind: 'animal',
      language: 'Svenska och tigrinja',
      prompt: 'Vilket djur heter hund och ከልቢ?',
      answer: 'Hund · ከልቢ',
      picture: '🐕',
      svenska: 'Hund',
      tigrinja: 'ከልቢ',
      sound: 'voff voff',
      options: [
        {
          label: 'Hund · ከልቢ',
          subLabel: 'voff voff',
          picture: '🐕',
        },
        {
          label: 'Katt · ድሙ',
          subLabel: 'mjau',
          picture: '🐈',
        },
      ],
      hint: 'Hunden säger voff voff.',
    },
  },
} satisfies Meta<typeof GamePrompt>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

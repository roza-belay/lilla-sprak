import type { Meta, StoryObj } from '@storybook/react-vite'
import GamePrompt from './GamePrompt.molecule'

const meta = {
  title: 'Components/GamePrompt',
  component: GamePrompt,
  args: {
    item: {
      id: 'letter-a',
      kind: 'letter',
      language: 'svenska',
      prompt: 'Vilken bokstav börjar Apa med?',
      answer: 'A',
      options: ['A', 'S', 'M'],
      hint: 'Apa börjar med samma ljud som A.',
    },
  },
} satisfies Meta<typeof GamePrompt>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

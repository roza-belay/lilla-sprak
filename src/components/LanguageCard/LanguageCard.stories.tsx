import type { Meta, StoryObj } from '@storybook/react-vite'
import LanguageCard from './LanguageCard.atom'

const meta = {
  title: 'Components/LanguageCard',
  component: LanguageCard,
  args: {
    option: {
      label: 'Hund · ከልቢ',
      subLabel: 'voff voff',
      picture: '🐕',
      note: 'djur',
    },
    onSelect: () => undefined,
  },
} satisfies Meta<typeof LanguageCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Correct: Story = {
  args: {
    isLocked: true,
    isSelected: true,
    isCorrect: true,
  },
}

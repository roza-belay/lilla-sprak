import type { Meta, StoryObj } from '@storybook/react-vite'
import ScoreBoard from './ScoreBoard.molecule'

const meta = {
  title: 'Components/ScoreBoard',
  component: ScoreBoard,
  args: {
    score: 3,
    total: 6,
    round: 4,
  },
} satisfies Meta<typeof ScoreBoard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

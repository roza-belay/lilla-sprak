import type { Meta, StoryObj } from '@storybook/react-vite'
import GameBoard from './GameBoard.organism'

const meta = {
  title: 'Components/GameBoard',
  component: GameBoard,
} satisfies Meta<typeof GameBoard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
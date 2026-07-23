import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button.atom'

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Nästa fråga',
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    label: 'Spela igen',
    variant: 'secondary',
  },
}
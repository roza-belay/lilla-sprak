import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button.atom'

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Nästa fråga',
    variant: 'primary',
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

export const Quiet: Story = {
  args: {
    label: 'Hoppa över',
    variant: 'quiet',
  },
}
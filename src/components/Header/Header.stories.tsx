import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from './Header.organism'

const meta = {
  title: 'Components/Header',
  component: Header,
  args: {
    title: 'Lilla Språk',
    subtitle: 'Lek dig fram till bokstäver, siffror och första ord.',
  },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

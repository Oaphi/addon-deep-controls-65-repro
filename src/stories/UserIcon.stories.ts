import type { Meta, StoryObj } from '@storybook/vue3-vite'

import UserIcon  from '../UserIcon.vue'

const meta = {
  component: UserIcon,
  parameters: {
    deepControls: { enabled: true },
    layout: 'centered'
  }
} satisfies Meta<typeof UserIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      name: 'Martin',
      surname: 'Heidegger'
    }
  },
}

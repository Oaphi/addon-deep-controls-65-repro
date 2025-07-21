import type { Meta, StoryObj } from '@storybook/vue3-vite'

import UserIcon  from '../UserIcon.vue'

import type { TypeWithDeepControls } from 'storybook-addon-deep-controls'

const meta = {
  component: UserIcon,
  parameters: {
    deepControls: { enabled: true },
    layout: 'centered'
  }
} satisfies TypeWithDeepControls<Meta<typeof UserIcon>>

export default meta

type Story = TypeWithDeepControls<StoryObj<typeof meta>>

export const Default: Story = {
  args: {
    user: {
      name: 'Martin',
      surname: 'Heidegger'
    }
  },
}

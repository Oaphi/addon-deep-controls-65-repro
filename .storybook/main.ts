import type { StorybookConfig } from '@storybook/vue3-vite'

// https://storybook.js.org/docs/api/main-config/main-config
const config: StorybookConfig = {
  addons: [
    'storybook-addon-deep-controls',
  ],
  core: {
    // https://storybook.js.org/docs/configure/telemetry#how-to-opt-out
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    enableCrashReports: false,
  },
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      // https://storybook.js.org/docs/get-started/frameworks/vue3-vite#using-vue-component-meta
      docgen: 'vue-component-meta',
    },
  },
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
}

export default config

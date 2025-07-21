import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";

// https://storybook.js.org/docs/api/main-config/main-config
const config: StorybookConfig = {
  addons: ["storybook-addon-deep-controls"],
  core: {
    // https://storybook.js.org/docs/configure/telemetry#how-to-opt-out
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
    enableCrashReports: false,
  },
  framework: {
    name: "@storybook/vue3-vite",
    options: {
      // https://storybook.js.org/docs/get-started/frameworks/vue3-vite#using-vue-component-meta
      docgen: "vue-component-meta",
    },
  },
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  /**
   * For some reason if vue plugin is defined before the Storybook plugins this affects deep controls addon behavior.
   *
   * If a vite.config file exists with the plugins defined (e.g. the vue plugin), the Storybook plugins are added after those plugins
   * which then produces the behaviour change. So we override config here to ensure the vue plugin is defined last.
   */
  viteFinal: async (config) => {
    const defaultVuePlugin = vue();
    const vuePluginName = defaultVuePlugin.name;

    // check if the vue plugin already exists in the config
    const existingVuePlugin = config.plugins?.find((plugin) => {
      return plugin && "name" in plugin && plugin.name === vuePluginName;
    });

    // copy config to avoid mutating the original
    config = {
      ...config,
      plugins: [...(config.plugins || [])],
    };

    if (existingVuePlugin) {
      // move existing vue plugin to the end of the plugins array
      config.plugins = config.plugins?.filter((p) => p !== existingVuePlugin) || [];
      config.plugins.push(existingVuePlugin);
    } else {
      // add default vue plugin to the end of the plugins array
      config.plugins?.push(defaultVuePlugin);
    }

    return config;
  },
};

export default config;

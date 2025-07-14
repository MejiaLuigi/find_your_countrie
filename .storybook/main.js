

/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/nextjs-vite",
    "name":'@storybook/nextjs',
    "options": {}
  },
  "staticDirs": [
    "..\\public"
  ],
  webpackFinal: async (config) => {
    // Configuración para manejar archivos CSS con PostCSS
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                ['@tailwindcss/postcss', {}],
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};
export default config;
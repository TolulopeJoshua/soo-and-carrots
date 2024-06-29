export default ({ config }) => ({
  ...config,
  name: "Soo and Carrots",
  slug: "soo-and-carrots",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  plugins: [
    "expo-router"
  ],
  scheme: "myapp"
});

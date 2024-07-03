const { webpack: PigmentCssWebpackPlugin, extendTheme } = require('@pigment-css/unplugin');
const theme = extendTheme({});

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [
      PigmentCssWebpackPlugin({
        theme,
      })
    ],
  })
}
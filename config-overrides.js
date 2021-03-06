const { override, fixBabelImports, adjustStyleLoaders } = require('customize-cra');

module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	}),
	adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources:'./src/index.scss'  //全局引入scss
        }
      })
    }
  }),
);

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      require('@babel/plugin-proposal-decorators').default,
      {
        legacy: true
      }
    ],
    'babel-plugin-transform-typescript-metadata',
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@repositories': './src/repositories',
        '@database': './src/database',
        '@models': './src/models',
        '@utils': './src/utils',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};

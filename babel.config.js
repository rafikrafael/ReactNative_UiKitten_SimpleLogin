module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          src: './src',
          app: './src/app',
          screens: './src/screens',
          icons: './src/icons',
          navigation: './src/navigation',
          components: './src/components',
          'common-components': './src/common-components',
          contexts: './src/contexts',
        },
      },
    ],
  ],
};

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/transform-react-jsx-source',
      '@babel/plugin-transform-runtime',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ts', '.tsx', '.json', '.svg', '.png', '.jpg', '.jpeg'],
          alias: {
            '@assets': './src/assets',
            '@assets/': './src/assets/',
            '@components': './src/components',
            '@components/': './src/components/',
            '@navigation': './src/navigation',
            '@navigation/': './src/navigation/',
            '@constants': './src/constants',
            '@constants/': './src/constants/',
            '@hooks': './src/hooks',
            '@hooks/': './src/hooks/',
            '@screens': './src/screens',
            '@screens/': './src/screens/',
            '~types': './src/types',
            '~types/': './src/types/',
            '@store': './src/store',
            '@store/': './src/store/',
            '@api': './src/api',
            '@api/': './src/api/',
            '@modules': './src/modules',
            '@modules/': './src/modules/',
            '@utils': './src/utils',
            '@utils/': './src/utils/',
            '@theme': './src/theme',
            '@theme/': './src/theme/',
          },
        },
      ],
    ],
  };
};

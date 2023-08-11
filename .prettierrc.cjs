module.exports = {
   "trailingComma": "es5",
   "tabWidth": 2,
   "semi": false,
   "singleQuote": false,
   "astroAllowShorthand": false,
   plugins: [require.resolve('prettier-plugin-astro')],
   overrides: [
      {
         files: '*.astro',
         options: {
            parser: 'astro',
         },
      },
   ],
};
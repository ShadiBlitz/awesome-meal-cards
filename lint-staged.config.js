module.exports = {
  // this will run type checks on Typescript files
  '{app}/**/*.{ts,tsx}': () => 'pnpm type:check',

  // This will lint staged javascript files
  '{app}/**/*.{ts,tsx,js,jsx}': (files) => [`pnpm lint ${files.join(' ')}`],

  // This will format staged javascript files
  '*.{js,jsx,ts,tsx}': (files) => [`pnpm format ${files.join(' ')}`],
}

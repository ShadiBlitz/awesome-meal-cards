module.exports = {
  // This will format staged javascript files
  '*.{js,jsx,ts,tsx}': (files) => [`pnpm format ${files.join(' ')}`],
}

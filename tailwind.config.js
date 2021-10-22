module.exports = {
  mode: 'jit',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: [
    './**/*.liquid',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    namedGroups: ['one', 'two'],
    extend: {
      spacing: {
        header: '100px',
      },
      colors: {
        'button': 'rgba(var(--color-button),var(--tw-text-opacity))',
        'button-text': 'rgba(var(--color-button-text),var(--tw-text-opacity))',
        'base-text': 'rgba(var(--color-base-text),var(--tw-text-opacity))',
        'base-background-1': 'rgba(var(--color-base-background-1),var(--tw-text-opacity))',
        'base-background-2': 'rgba(var(--color-base-background-2),var(--tw-text-opacity))',
        'base-solid-button-labels': 'rgba(var(--color-base-solid-button-labels),var(--tw-text-opacity))',
        'base-outline-button-labels': 'rgba(var(--color-base-outline-button-labels),var(--tw-text-opacity))',
        'base-accent-1': 'rgba(var(--color-base-accent-1),var(--tw-text-opacity))',
        'base-accent-2': 'rgba(var(--color-base-accent-2),var(--tw-text-opacity))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('./tailwind/plugins/nestedGroup'),
    require('./tailwind/plugins/typography'),
    require('daisyui'),
  ],
}

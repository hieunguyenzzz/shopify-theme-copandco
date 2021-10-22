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
    daisyui: {
      themes: [
        {
          'mytheme': {
            'primary': '#c69c2a',
            'primary-focus': '#a07d1c',
            'primary-content': '#ffffff',
            'secondary': '#f000b8',
            'secondary-focus': '#bd0091',
            'secondary-content': '#ffffff',
            'accent': '#37cdbe',
            'accent-focus': '#2aa79b',
            'accent-content': '#ffffff',
            'neutral': '#000000',
            'neutral-focus': '#5f6166',
            'neutral-content': '#ffffff',
            'base-100': '#fcf8f2',
            'base-200': '#f6e8d5',
            'base-300': '#ecd1ac',
            'base-content': '#1f2937',
            'info': '#2094f3',
            'success': '#009485',
            'warning': '#ff9900',
            'error': '#ff5724',
          },
        },
      ],
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

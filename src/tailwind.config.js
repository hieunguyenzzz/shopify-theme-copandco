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
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
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
          'base-content': '#000000',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',

          '--rounded-box': '0.5rem',        /* border-radius for cards and other big elements */
          '--rounded-btn': '0rem',      /* border-radius for buttons and similar elements */
          '--rounded-badge': '1.9rem',    /* border-radius for badge and other small elements */
        
          '--animation-btn': '0.25s',     /* bounce animation time for button */
          '--animation-input': '.2s',     /* bounce animation time for checkbox, toggle, etc */
        
          '--padding-card': '2rem',       /* default card-body padding */
        
          '--btn-text-case': 'uppercase', /* default text case for buttons */
          '--navbar-padding': '.5rem',    /* default padding for navbar */
          '--border-btn': '1px',          /* default border size for button */
        },
      },
    ],
  },
}

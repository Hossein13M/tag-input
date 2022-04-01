const { colors: defaultColors } = require('tailwindcss/defaultTheme');

const colors = {
    ...defaultColors,
    ...{
        'custom-blue': {
            100: '#DDE1EE',
            900: '#5770CC',
        },
        'custom-red': {
            100: '#F2E1E1',
            200: '#CF4E67',
            800: '#361717',
            900: '#CA3B57',
        },
        'custom-grey': {
            100: '#EEEFF0',
            400: '#212425',
            500: '#AEB2BA',
            700: '#5A6474',
            800: '#262A2B',
            900: '#21242a',
        },
    },
};

module.exports = {
    prefix: '',
    important: true,
    content: ['./src/**/*.{html,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: colors,
            screen: {
                xs: { min: '320px', max: '640px' },
                sm: { min: '640px', max: '767px' },
                md: { min: '768px', max: '1023px' },
                lg: { min: '1024px', max: '1279px' },
                xl: { min: '1280px', max: '1535px' },
                '2xl': { min: '1536px' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};

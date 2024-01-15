/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        require('./tailwind/tailwind-plugin-debug-screens'),
        require('./tailwind/tailwind-plugin-overflow-overlay'),
    ],
};

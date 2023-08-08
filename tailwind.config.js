const plugin = require('tailwindcss/plugin')
const {colors} = require("./src/styles/colors");

module.exports = {
    important: true,
    theme: {
        colors: {
            ...colors
        },
        backgroundColor: () => ({
            ...colors
        }),
        extend: {
            borderWidth: {
                DEFAULT: 1
            }
        }
    },
};

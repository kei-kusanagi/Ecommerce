const Path = require("path");
const pwd = process.env.PWD;
console.log('current path ${pwd}');
const currentPath = Path.join(pwd, "../core/templates/**/*.html");

// We can add current project paths here
const projectPaths = [
    currentPath,
    "../core/static/**/*",
    // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log('tailwindcss will scan ${contentPaths}');

module.exports = {
    content: contentPaths,
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
}

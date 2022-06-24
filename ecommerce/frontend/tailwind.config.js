/** @type {import('tailwindcss').Config} */

const Path = require("path");

const pwd = process.env.PWD;
console.log(`current path ${pwd}`);
// const currentPath = Path.join(pwd, "../core/templates/**/*.html");

// We can add current project paths here
const projectPaths = [
    // currentPath,
    "../core/templates/core/*.html",
    "../core/static/css/*",
    "../core/static/js/*",
    "../build/js/*",
    // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log(`tailwindcss will scan ${contentPaths}`);

module.exports = {
    purge: contentPaths,
    // content: contentPaths,
    darkMode: 'class',
    theme: {
        extend: {},
    },
    plugins: [],
}

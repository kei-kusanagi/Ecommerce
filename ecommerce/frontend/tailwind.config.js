const Path = require("path");
const pwd = process.env.PWD;
console.log('current path ${pwd}');
const currentPath = Path.join(pwd, "../core/templates/**/*.html");

// We can add current project paths here
const projectPaths = [
    currentPath
    // add js file paths if you need
];

const contentPaths = [...projectPaths];
console.log('tailwindcss will scan ${contentPaths}');

module.exports = {
    content: contentPaths,
    darkMode: '',
    theme: {
        extend: {},
    },
    plugins: [],
}

// module.exports = {
//   content: [
//   './**/*.{html,js}',
//   './../core/templates/**/*.{html,js}',
//   '!./node_modules',
//   '!./build',
// ],
  
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
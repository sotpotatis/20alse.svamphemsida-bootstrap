/* purgecss.config.js
Konfigurationsfil för verktyget PurgeCSS för att ta bort använd CSS.
*/
module.exports = {
    content: ["./**/*,{html,js}"],
    css: ["./src/css/style.css"],
    output: "./dist/css/"
}
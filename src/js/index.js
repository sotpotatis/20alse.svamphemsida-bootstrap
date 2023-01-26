/* index.js
Index.js representerar den koden som laddas på varje sida på hemsidan.
Det kan verka som ett lite skumt namn, men det är min uppfattning att man
brukar döpa den till detta i JavaScript.
Tack vare bundler-verktyget Parcel (se README.md) så kommer require()
och import-kodraderna här automatiskt att inkluderas och minifieras. */

import * as bootstrap from "bootstrap"; // Importera Bootstrap
// Nu importerar jag de egna skripten jag skrivit.
import * as index from "./collapsibleButtons"; // Funktioner jag har skrivit för expanderbara knappar
import * as calendar from "./calendar.js"; // Skript för sidan "svampkalender"
// För ikoner använder jag Bootstrap-Icons, som är utvecklat av Bootstrap själva.
// De ligger i en CSS-fil som vi importerar
import "bootstrap-icons/font/bootstrap-icons.css";
// Initiera expanderbara knappar om det finns några sådana på sidan
const collapseButtons = document.querySelectorAll("[data-collapsed]")
if (collapseButtons.length > 0){
    for (const collapseButton of collapseButtons){
        collapseButton.addEventListener("click", ()=>{index.collapseButtonClicked(collapseButton)})
    }
    console.log(`Lade till en ${collapseButtons.length} expanderbara knappar på sidan.`)
}
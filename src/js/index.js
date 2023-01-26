/* index.js
Index.js representerar den koden som laddas på varje sida på hemsidan.
Det kan verka som ett lite skumt namn, men det är min uppfattning att man
brukar döpa den till detta i JavaScript.
Tack vare bundler-verktyget Parcel (se README.md) så kommer require()
och import-kodraderna här automatiskt att inkluderas och minifieras. */

import * as bootstrap from "bootstrap"; // Importera Bootstrap
// För ikoner använder jag Bootstrap-Icons, som är utvecklat av Bootstrap själva.
// De ligger i en CSS-fil som vi importera r
require("bootstrap-icons/font/bootstrap-icons.css");
// Nu importerar jag de egna skripten jag skrivit.
index = require("./indexFunctions.js"); // Funktioner jag har skrivit för startsidan
calendar = require("./calendar.js"); // Skript för sidan "svampkalender"

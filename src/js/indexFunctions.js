/* indexFunctions.js
En fil som innehåller lite funktioner för startsidan (index.html) på
hemsidan. */

/**
 * För att inte presentera användaren med överväldigande innehåll så vill jag ha pilknappar
 * där man kan klicka för att öppna och stänga (visa och gömma) information om olika svampar.
 * Denna funktion kan bindas till eventet onClick() på en av dessa knappar för att hantera byte
 * av ikonen.
 * @param {*} button Elementet som är själva ikonknappen.
 */
export function collapseButtonClicked(button) {
  // Statisk bestämmelse av ikoner för när det knappen kontrollerar är
  // gömt (collapsed) och när det visas (notCollapsed)
  const icons = {
    notCollapsed: "bi-caret-up-fill",
    collapsed: "bi-caret-down-fill",
  };
  // Jag har använt mig av data-attribut i HTML. Varje ikonknapp har attributet
  // data-collapsed satt till antingen "true" eller "false". Detta hjälper koden
  // att veta vilken klass som ska appliceras.
  // Att automatiskt gömma och visa innehållet när knappen trycks sköts av Bootstrap!
  // Det finns en inbyggd klass som heter "collapse" som till och med animerar saker och ting!
  if (button.dataset.collapsed === "true") {
    // Om det knappen just nu kontrollerar är gömt
    button.dataset.collapsed = "false";
    button.classList.remove(icons.collapsed);
    button.classList.add(icons.notCollapsed);
  } else {
    // Om det knappen just nu kontrollerar visas
    button.dataset.collapsed = "true";
    button.classList.add(icons.collapsed);
    button.classList.remove(icons.notCollapsed);
  }
}

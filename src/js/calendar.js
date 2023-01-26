/* calendar.js
Innehåller kod för att skapa, rendera och uppdatera
en svampkalender. Svampkalendern inneåller tre olika kolumner
för att visa när man kan hitta olika svampar. */

// Börja med att sätta lite konstanter. Notera att deras index börjar på 0.
const minMonthIndex = 6; // Tidigast månad för kalendern: Juli
const maxMonthIndex = 11; // Senaste månad för kalendern: December
const monthNames = [
  "Januari",
  "Feburari",
  "Mars",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Augusti",
  "September",
  "Oktober",
  "November",
  "December",
];

// Definiera klasser: se kommentarer nedan.
export class CalendarCard {
  /**
   * Ett CalendarCard motsvarar ett "kort" i kalendern, alltså en svamp som visas.
   * @param {*} mushroomData Data som finns om svampen. Denna data är den som satts i pug.config.js
   * om varje svamp.
   */
  constructor(mushroomData) {
    this.mushroomData = mushroomData;
  }
  /**
   * Funktion för att rendera upp ett kalenderkort som innehåller informationen om svampen.
   * @param {*} parent "Förälderelementet" som kortet ska läggas till i.
   */
  createElement(parent) {
    // Skapa en div som kommer att innehålla kortet med svampinfo och applicera klasser och stilar.
    const cardWrapper = document.createElement("div");
    const cardRow = document.createElement("div");
    cardWrapper.classList.add(...["row"]);
    cardRow.classList.add(
      ...[
        "bg-white",
        "align-items-center",
        "rounded",
        "text-black",
        "px-4",
        "py-3",
        "border",
        "border-light",
        "my-3",
        "mx-md-4",
        "mx-1", // Minska marginal på mobilen
        "row",
      ]
    );
    // Vi vill åstadkomma ett kort som har en titel och länk som en kolumn och en bild som en kolumn,
    // bredvid varandra. Därför behöver vi skapa två behållare som ska läggas till i cardWrapper.
    const [titleWrapper, imageWrapper] = [
      document.createElement("div"),
      document.createElement("div"),
    ];
    // Skapa en titel för kortet
    const cardHeading = document.createElement("h4");
    cardHeading.innerHTML = this.mushroomData.name;
    // Lägg till titel i diven vi skapade som ska innehålla information
    titleWrapper.appendChild(cardHeading);
    // Sen vill vi ha en bild på svampen också! En bild säger mer än tusen ord.
    const cardImage = document.createElement("img");
    cardImage.classList.add(...["img-fluid", "h-auto", "w-50"]);
    cardImage.src = this.mushroomData.image;
    cardImage.alt = `Bild som visar en ${this.mushroomData.name.toLowerCase()}`;
    imageWrapper.appendChild(cardImage);
    // Vi lägger till de ovan nämnda "wrapper-divsen" (kolumnerna) i kortet.
    // Vi applicerar också liknande klasser till båda.
    for (const childWrapper of [titleWrapper, imageWrapper]) {
      let classesToAppend = [];
      if (childWrapper === titleWrapper) {
        classesToAppend.push(...["col-md-8", "col-sm-12"]);
      } else {
        classesToAppend.push(...["col-md-4", "col-sm-12"]);
      }
      childWrapper.classList.add(...classesToAppend);
      cardRow.appendChild(childWrapper);
    }
    cardWrapper.appendChild(cardRow);
    // Lägg till det nya kortet i dess "förälder" satt av argumentet parent (en av kalenderkolumnerna)
    parent.appendChild(cardWrapper);
  }
}

export class Calendar {
  /**
   * Klassen Calendar representerar hela svampkalendern.
   * En kalender innehåller flera CalendarCard, se ovan.
   * Genom att kalla denna klass på fler ställen kan man skapa flera
   * svampkalendrar, om man så önskar
   * @param {*} rootElement "Förälderelementet" där kalendern ska skapas i. Detta element ska innehålla några taggar med
   * vissa IDn och tomma innehåll för att bli korrekt ifyllda av koden. Dessa IDs kan du hitta nedan i konstruktorn.
   * @param {*} mushroomCategories Data om alla svampar och dess kategorier. Detta argument ska motsvara
   * det format (och i mitt fall även det innehåll) som finns i pug.config.js under
   * "mushroom_categories"
   */
  constructor(rootElement, mushroomCategories) {
    console.log("Initierar en svampkalender i elementet...", rootElement);
    this.rootElement = rootElement;
    this.mushroomCategories = mushroomCategories;
    // Ställ in den valda månaden till den tidigaste månaden och namnet till detsamma.
    this.selectedMonth = minMonthIndex;
    this.selectedMonthName = monthNames[this.selectedMonth];
    // Hämta och spara element som kalendern uppdaterar. Dessa ska finnas i rootElement.
    this.monthTitle = rootElement.getElementById("calendar-month"); // Element för månadstitel
    // Inhämta "förälderelement"/"behållare" för de tre olika sätten som svampar ska visas: om de är på väg,
    // om det är högsäsong och om de är på väg ut.
    const onTheWayInWrapper = rootElement.getElementById("on-the-way-in");
    const primeTimeWrapper = rootElement.getElementById("prime-time");
    const onTheWayOutWrapper = rootElement.getElementById("on-the-way-out");
    // Initiera knappar för att växla mellan månader och lägg in event för de.
    const rightButton = rootElement.getElementById("right-button");
    const leftButton = rootElement.getElementById("left-button");
    this.onRightButtonClick = this.onRightButtonClick.bind(this);
    this.onLeftButtonClick = this.onLeftButtonClick.bind(this);
    rightButton.addEventListener("click", this.onRightButtonClick);
    leftButton.addEventListener("click", this.onLeftButtonClick);
    // Lagra de ovan inhämntade "behållarna" för att lägga in svampar i
    // i ett objekt
    this.periodWrappers = {
      onTheWayIn: onTheWayInWrapper,
      primeTime: primeTimeWrapper,
      onTheWayOut: onTheWayOutWrapper,
    };
    this.updateMonthsView(); // Rendera kalendern för första gången.
  }
  /**
   * Körs varje gång man har klickat på en knapp för att växla månad i svampkalendern.
   * @param {*} forward true eller false beroende på om knappen ska leda till att månaden
   * ökas (true) eller att månaden minskas (false).
   */
  monthButtonClicked(forward) {
    if (forward) {
      // Om man ska gå framåt
      if (this.selectedMonth < maxMonthIndex) {
        // Kan vi gå framåt?
        this.selectedMonth++;
      } else {
        // Om vi har nått maxindex, gå tillbaka till början
        this.selectedMonth = minMonthIndex;
      }
    } else {
      // Om man ska gå bakåt
      if (this.selectedMonth > minMonthIndex) {
        // Kan vi gå bakåt
        this.selectedMonth--;
      } else {
        // Om vi har nått minindex, gå till slutet
        this.selectedMonth = maxMonthIndex;
      }
    }
    this.selectedMonthName = monthNames[this.selectedMonth]; // Updatera månadsnamn
    console.log(`Uppdaterade månad till ${this.selectedMonthName}.`);
    this.updateMonthsView(); // Uppdatera kalendern för att matcha aktuella val
  }
  /**
   * "Hjälpfunktion" för att iterera över svampar och deras kategorier för att hitta de svampar
   * som ska visas i någon av de tre kategorierna (om de är på väg, om det är högsäsong och
   * om de är på väg ut) för en viss månad.
   * @returns Ett objekt som innehåller nycklar för de tre svampkategorierna samt en lista med svampar
   * inom respektive kategori.
   */
  getMushroomsForMonth() {
    let results = {
      onTheWayIn: [],
      primeTime: [],
      onTheWayOut: [],
    };
    // Iterera över alla svampkategorier
    for (const mushroomCategory of this.mushroomCategories) {
      // Iterera över alla svampar
      for (const mushroom of mushroomCategory.mushrooms) {
        // Hämta svampens olika perioder
        if (mushroom.monthData !== undefined) {
          // Vi vill ha en svamp för varje månad
          for (const [period, periodData] of Object.entries(
            mushroom.monthData
          )) {
            // Månadssiffror i configen är en större än indexet i listan, eftersom index i JavaScript börjar på noll,
            // men månadsnummer i konfigurationen för läsbarhetens skull börjar på ett.
            // Därför plussas månadsnumret vi kollar efter i listan på med ett.
            const selectedMonthNumber = this.selectedMonth + 1;
            // Om datan när svampen ska inkluderas i kategorin är en lista på månader, kolla om aktuell månad finns i den listan.
            // Om det är en enskild månad och den stämmer överrens med aktuell månad, inkludera svampen.
            if (
              (typeof periodData == "object" &&
                periodData.includes(this.selectedMonth)) ||
              periodData === this.selectedMonth
            ) {
              console.log(`Inkluderar svamp ${mushroom.name} i ${period}...`);
              results[period].push(new CalendarCard(mushroom));
            }
          }
        } else {
          // Fallback ifall en svamp skulle sakna månadsinfo. Underlättar testning.
          console.warn(
            `Det finns ingen månadsdata för svampen ${mushroom.name}.`
          );
        }
      }
    }
    return results;
  }
  /**
   * Uppdaterar en av elementen i this.periodWrappers för att
   * innehålla de svamparna som är aktuella för den nuvarande månaden.
   * @param {*} element Elementet som ska uppdateras.
   * @param {*} mushrooms Svamparna som ska finnas i elementet.
   */
  updateElementTo(element, mushrooms) {
    // Rensa element
    element.innerHTML = "";
    // Lägg till HTML för varje svamp med hjälp av funktionen createElement
    // i CalendarCard.
    if (mushrooms.length > 0) {
      for (const mushroom of mushrooms) {
        mushroom.createElement(element);
      }
    }
    // Om svampar inte hittades vill vi rendera en text som säger: Inga svampar här!
    else {
      const noMushroomsFoundText = document.createElement("h4");
      noMushroomsFoundText.innerHTML = "Inga svampar här!";
      noMushroomsFoundText.classList.add(...["text-secondary"]);
      element.appendChild(noMushroomsFoundText);
    }
  }
  /**
   * Funktion för att uppdatera kalendervyn till den data som ska visas för den aktuellt utvalda
   * månaden. Detta är huvudfunktionen man ska kalla för att uppdatera gränsnittet.
   */
  updateMonthsView() {
    console.log("Uppdaterar kalendervyn...");
    // Börja med att hämta svampar som ska inkluderas i kalendervyn för denna månad.
    const mushroomsForCurrentMonth = this.getMushroomsForMonth();
    console.log(
      "Hämtade svampars position för denna månad: ",
      mushroomsForCurrentMonth
    );
    // Iterera över data för varje kategori i "kalendern":
    // 1. Börjar komma
    // 2. Stor chans
    // 3. Snart ute
    for (const [periodWrapper, mushroomsInPeriod] of Object.entries(
      mushroomsForCurrentMonth
    )) {
      // Uppdatera "föräldern" för varje kategori/period i kalendern med de svampar som hittats
      // i perioden.
      this.updateElementTo(
        this.periodWrappers[periodWrapper],
        mushroomsInPeriod
      );
    }
    // Uppdatera så att texten som visar aktuell månad stämmer
    this.monthTitle.innerHTML = this.selectedMonthName;
  }
  /**
   * Funktion för när någon klickar på högerpilknappen i kalendern
   * för att gå framåt en månad.
   */
  onRightButtonClick() {
    this.monthButtonClicked(true);
  }
  /**
   * Funktion för när någon klickar på vänsterpilknappen i kalendern
   * för att gå bakåt en månad.
   */
  onLeftButtonClick() {
    this.monthButtonClicked(false);
  }
}

/* calendar.js
Innehåller kod för att skapa svampkalendern. */

const minMonthIndex = 5; // Tidigast månad för kalendern: Juni
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
    "December"
]
export class CalendarCard {
    constructor(mushroomData) {
        this.mushroomData = mushroomData
    }
    createElement(parent) {
        const cardWrapper = document.createElement("div") // Skapa en div som kommer att innehålla svampinfo
        cardWrapper.classList.add(...["bg-white", "rounded", "text-black", "px-4", "py-3", "border", "border-light"])
        const cardHeading = document.createElement("h4")
        cardHeading.innerHTML =  this.mushroomData.name // Skapa titel för kortet
        cardWrapper.appendChild(cardHeading) // Lägg till titel i kortet
        parent.appendChild(cardWrapper) // Lägg till det nya kortet i dess "förälder" (en av kalenderkolumnerna)
    }
}

export class Calendar {
    constructor(rootElement, mushroomCategories) {
        console.log("Initierar en kalender i elementet...", rootElement)
        this.rootElement = rootElement
        this.mushroomCategories = mushroomCategories
        this.selectedMonth = minMonthIndex
        this.selectedMonthName = monthNames[this.selectedMonth]
        // Hämta och spara element som kalendern uppdaterar
        this.monthTitle = rootElement.getElementById("calendar-month")
        const onTheWayInWrapper = rootElement.getElementById("on-the-way-in")
        const primeTimeWrapper = rootElement.getElementById("prime-time")
        const onTheWayOutWrapper = rootElement.getElementById("on-the-way-out")
        // Knappar för att växla mellan månader
        const rightButton = rootElement.getElementById("right-button")
        const leftButton = rootElement.getElementById("left-button")
        this.onRightButtonClick = this.onRightButtonClick.bind(this)
        this.onLeftButtonClick = this.onLeftButtonClick.bind(this)
        rightButton.addEventListener("click", this.onRightButtonClick)
        leftButton.addEventListener("click", this.onLeftButtonClick)
        // Lagra "behållare" för att lägga in svampar i
        this.periodWrappers = {
            onTheWayIn: onTheWayInWrapper,
            primeTime: primeTimeWrapper,
            onTheWayOut: onTheWayOutWrapper
        }
        this.updateMonthsView()
    }
    /**
     * Funktion som körs
     * @param {*} forward 
     */
    monthButtonClicked(forward) {
        if (forward) {
            if (this.selectedMonth < maxMonthIndex) {
                this.selectedMonth++
            }
            else {
                this.selectedMonth = minMonthIndex
            }
        }
        else {
            if (this.selectedMonth > minMonthIndex) {
                this.selectedMonth--
            }
            else {
                this.selectedMonth = maxMonthIndex
            }
        }
        this.selectedMonthName = monthNames[this.selectedMonth]
        console.log(`Uppdaterade månad till ${this.selectedMonthName}.`)
        this.updateMonthsView() // Uppdatera divs för att matcha svampar
    }
    getMushroomsForMonth() {
        let results = {
            onTheWayIn: [],
            primeTime: [],
            onTheWayOut: []
        }
        for (const mushroomCategory of this.mushroomCategories) {
            for (const mushroom of mushroomCategory.mushrooms) {
                // Hämta när svampen har olika perioder
                if (mushroom.monthData !== undefined) {
                    // Vi vill ha en svamp för varje månad
                    for (const [period, periodData] of Object.entries(mushroom.monthData)) {
                        console.log(periodData)
                        // Om datan när svampen finns är en lista på månader, kolla om aktuell månad finns i den listan.
                        // Om det är en enskild månad, inkludera månaden
                        const selectedMonthNumber = this.selectedMonth + 1 // Månadssiffror i configen är en större än indexet i listan, eftersom index börjar på noll.
                        if (typeof (periodData) == "object" && periodData.includes(this.selectedMonth) || periodData === this.selectedMonth) {
                            console.log(`Inkluderar svamp ${mushroom.name} i ${period}...`)
                            results[period].push(new CalendarCard(mushroom))
                        }
                    }
                }
                else {
                    console.warn(`Det finns ingen månadsdata för svampen ${mushroom.name}.`)
                }
            }
        }
        return results
    }
    /**
     * Uppdaterar en av elementen i this.periodWrappers för att
     * innehålla de svamparna som är aktuella för den nuvarande månaden. 
     * @param {*} element Elementet som ska uppdateras.
     * @param {*} mushrooms Svamparna som ska finnas i elementet.
     */
    updateElementTo(element, mushrooms) {
        // Rensa element
        element.innerHTML = ""
        // Lägg till text för varje svamp
        for (const mushroom of mushrooms) {
            mushroom.createElement(element)
        }
    }
    updateMonthsView() {
        console.log("Uppdaterar kalendervyn...")
        const mushroomsForCurrentMonth = this.getMushroomsForMonth()
        console.log("Hämtade svampars position för denna månad: ", mushroomsForCurrentMonth)
        // Iterera över data för varje kategori i "kalendern":
        // 1. Börjar komma
        // 2. Stor chans
        // 3.  Snart ute
        for (const [periodWrapper, mushroom] of Object.entries(mushroomsForCurrentMonth)) {
            this.updateElementTo(this.periodWrappers[periodWrapper], mushroom)
        }
        // Uppdatera så att texten som visar aktuell månad stämmer
        this.monthTitle.innerHTML = this.selectedMonthName
    }
    onRightButtonClick() {
        this.monthButtonClicked(true)
    }
    onLeftButtonClick() {
        this.monthButtonClicked(false)
    }
}


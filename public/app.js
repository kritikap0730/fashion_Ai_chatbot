// ==========================================
// FASHIONAI - LOCAL FASHION CHATBOT
// NO API REQUIRED
// ==========================================


// Get HTML elements
const form = document.getElementById("chatForm");
const input = document.getElementById("input");
const messages = document.getElementById("messages");
const sendButton = document.getElementById("send");
const typing = document.getElementById("typing");
const newChatButton = document.getElementById("new");


// ==========================================
// ADD MESSAGE TO CHAT
// ==========================================

function addMessage(type, text) {

    const row = document.createElement("div");

    row.className = `message-row ${type}`;


    const bubble = document.createElement("div");

    bubble.className = "bubble";


    bubble.textContent = text;


    row.appendChild(bubble);

    messages.appendChild(row);


    // Scroll to newest message
    messages.scrollTop = messages.scrollHeight;
}



// ==========================================
// ANALYZE USER MESSAGE
// ==========================================

function analyzeMessage(text) {

    const message = text.toLowerCase();


    const details = {

        occasion: "unusual occasion",

        vibe: "effortless",

        time: "",

        weather: "",

        location: "",

        clothes: [],

        colors: []

    };


    // ======================================
    // OCCASIONS
    // ======================================

    if (
        message.includes("interview") ||
        message.includes("internship") ||
        message.includes("job")
    ) {

        details.occasion = "interview / professional event";

    }


    else if (
        message.includes("concert") ||
        message.includes("festival") ||
        message.includes("gig")
    ) {

        details.occasion = "concert / music event";

    }


    else if (
        message.includes("date") ||
        message.includes("crush")
    ) {

        details.occasion = "date";

    }


    else if (
        message.includes("birthday") ||
        message.includes("party")
    ) {

        details.occasion = "birthday / party";

    }


    else if (
        message.includes("wedding") ||
        message.includes("reception")
    ) {

        details.occasion = "wedding";

    }


    else if (
        message.includes("college") ||
        message.includes("university") ||
        message.includes("campus")
    ) {

        details.occasion = "college";

    }


    else if (
        message.includes("dinner") ||
        message.includes("restaurant")
    ) {

        details.occasion = "dinner";

    }


    else if (
        message.includes("beach") ||
        message.includes("pool") ||
        message.includes("resort")
    ) {

        details.occasion = "beach / resort";

    }


    else if (
        message.includes("brunch") ||
        message.includes("coffee") ||
        message.includes("cafe")
    ) {

        details.occasion = "coffee / brunch";

    }


    else if (
        message.includes("puja") ||
        message.includes("temple") ||
        message.includes("family ceremony")
    ) {

        details.occasion = "cultural / family event";

    }


    // ======================================
    // LOCATION
    // ======================================

    if (message.includes("rooftop")) {

        details.location = "rooftop";

    }


    if (
        message.includes("outdoor") ||
        message.includes("outside")
    ) {

        details.location = "outdoor";

    }


    if (
        message.includes("office") ||
        message.includes("workplace")
    ) {

        details.location = "office";

    }


    if (
        message.includes("restaurant") ||
        message.includes("cafe")
    ) {

        details.location = "restaurant / cafe";

    }


    if (
        message.includes("beach") ||
        message.includes("pool")
    ) {

        details.location = "beach";

    }


    // ======================================
    // TIME
    // ======================================

    if (
        message.includes("morning") ||
        message.includes("sunrise") ||
        message.includes("am")
    ) {

        details.time = "morning";

    }


    if (
        message.includes("afternoon") ||
        message.includes("noon")
    ) {

        details.time = "afternoon";

    }


    if (
        message.includes("evening") ||
        message.includes("sunset") ||
        message.includes("pm")
    ) {

        details.time = "evening";

    }


    if (
        message.includes("night") ||
        message.includes("late night")
    ) {

        details.time = "night";

    }


    // ======================================
    // VIBES
    // ======================================

    const vibes = [

        "cute",
        "classy",
        "elegant",
        "edgy",
        "feminine",
        "casual",
        "comfortable",
        "minimal",
        "y2k",
        "streetwear",
        "bold",
        "romantic",
        "sexy",
        "professional",
        "sporty",
        "cool"

    ];


    for (const vibe of vibes) {

        if (message.includes(vibe)) {

            details.vibe = vibe;

            break;

        }

    }


    // ======================================
    // CLOTHING
    // ======================================

    const clothingItems = [

        "black top",
        "white top",
        "crop top",
        "tank top",
        "t-shirt",
        "shirt",
        "blouse",
        "bodysuit",
        "dress",
        "skirt",
        "mini skirt",
        "midi skirt",
        "jeans",
        "baggy jeans",
        "wide leg jeans",
        "trousers",
        "cargo pants",
        "shorts",
        "blazer",
        "hoodie",
        "jacket",
        "cardigan",
        "sneakers",
        "heels",
        "boots",
        "sandals"

    ];


    for (const item of clothingItems) {

        if (message.includes(item)) {

            details.clothes.push(item);

        }

    }


    // ======================================
    // COLORS
    // ======================================

    const colors = [

        "black",
        "white",
        "red",
        "blue",
        "pink",
        "green",
        "brown",
        "beige",
        "cream",
        "purple",
        "lavender",
        "grey",
        "gray"

    ];


    for (const color of colors) {

        if (message.includes(color)) {

            details.colors.push(color);

        }

    }


    // ======================================
    // WEATHER
    // ======================================

    if (
        message.includes("hot") ||
        message.includes("summer") ||
        message.includes("humid")
    ) {

        details.weather = "hot";

    }


    if (
        message.includes("cold") ||
        message.includes("winter") ||
        message.includes("chilly")
    ) {

        details.weather = "cold";

    }


    if (
        message.includes("rain") ||
        message.includes("rainy") ||
        message.includes("monsoon")
    ) {

        details.weather = "rainy";

    }


    return details;

}



// ==========================================
// GENERATE FASHION RECOMMENDATION
// ==========================================

function generateRecommendation(text) {

    const d = analyzeMessage(text);


    let outfit = "";

    let shoes = "";

    let accessories = "";

    let styling = "";

    let reason = "";


    // ======================================
    // INTERVIEW
    // ======================================

    if (
        d.occasion === "interview / professional event"
    ) {

        outfit =
            "a clean blouse or fitted shirt with tailored trousers or a knee-length skirt";

        shoes =
            "loafers, polished flats or low heels";

        accessories =
            "small earrings, a structured handbag and minimal jewelry";

        styling =
            "Keep your hair neat and your makeup natural.";

        reason =
            "An interview needs to look polished, confident and professional without being distracting.";

    }


    // ======================================
    // CONCERT
    // ======================================

    else if (
        d.occasion === "concert / music event"
    ) {

        if (d.vibe === "edgy") {

            outfit =
                "a graphic tee or fitted dark top with black cargo pants or relaxed dark jeans";

            shoes =
                "chunky boots or comfortable sneakers";

            accessories =
                "silver jewelry and a crossbody bag";

        }

        else {

            outfit =
                "a fitted top or statement tee with baggy or straight-leg jeans";

            shoes =
                "platform sneakers or comfortable boots";

            accessories =
                "statement earrings and a small crossbody bag";

        }


        styling =
            "Keep the outfit comfortable because you will probably be standing, walking and moving.";

        reason =
            "Concert outfits work best when they look stylish but still let you move comfortably.";

    }


    // ======================================
    // DATE
    // ======================================

    else if (
        d.occasion === "date"
    ) {

        if (d.clothes.length > 0) {

            outfit =
                `Use your ${d.clothes.slice(0, 2).join(" and ")} as the base, then add one polished piece`;

        }

        else {

            outfit =
                "a fitted top or cute blouse with straight-leg jeans, trousers or a flattering skirt";

        }


        shoes =
            "low heels, ballet flats or clean sneakers";

        accessories =
            "delicate jewelry and a small shoulder bag";

        styling =
            "Keep one part of the outfit fitted and let the other part stay relaxed.";

        reason =
            "The goal is to look attractive and intentional without making the outfit feel overly planned.";

    }


    // ======================================
    // BEACH
    // ======================================

    else if (
        d.occasion === "beach / resort"
    ) {

        outfit =
            "a lightweight sundress, linen shirt with shorts, or a cute tank with a flowy skirt";

        shoes =
            "flat sandals or simple slides";

        accessories =
            "sunglasses and a small woven or shoulder bag";

        styling =
            "Choose breathable fabrics and lighter colors.";

        reason =
            "Beach outfits should stay lightweight and comfortable while still looking put together.";

    }


    // ======================================
    // WEDDING
    // ======================================

    else if (
        d.occasion === "wedding"
    ) {

        outfit =
            "an elegant midi/maxi dress or a coordinated dressy set";

        shoes =
            "block heels or elegant flats";

        accessories =
            "small earrings, a clutch and one refined statement piece";

        styling =
            "Add one noticeably elegant detail while keeping the overall outfit balanced.";

        reason =
            "Wedding dressing benefits from a refined silhouette and elevated accessories.";

    }


    // ======================================
    // BIRTHDAY
    // ======================================

    else if (
        d.occasion === "birthday / party"
    ) {

        outfit =
            "a cute fitted top or statement blouse with dark jeans, tailored trousers or a skirt";

        shoes =
            "platform sneakers, boots or low heels";

        accessories =
            "statement earrings and a small bag";

        styling =
            "If one piece is bold, keep the rest of the outfit cleaner.";

        reason =
            "A birthday outfit can be playful and dressed-up without becoming uncomfortable.";

    }


    // ======================================
    // COLLEGE
    // ======================================

    else if (
        d.occasion === "college"
    ) {

        if (d.clothes.length > 0) {

            outfit =
                `Start with your ${d.clothes.slice(0, 2).join(" and ")} and add a relaxed everyday layer`;

        }

        else {

            outfit =
                "a fitted tee or casual blouse with straight-leg, baggy or wide-leg jeans";

        }


        shoes =
            "clean sneakers";

        accessories =
            "small hoops and a tote or crossbody bag";

        styling =
            "Keep everything comfortable enough for a full day on campus.";

        reason =
            "College outfits work best when they feel effortless while still showing your personal style.";

    }


    // ======================================
    // DINNER
    // ======================================

    else if (
        d.occasion === "dinner"
    ) {

        outfit =
            "a fitted blouse, elegant top or simple dress with tailored trousers or a midi skirt";

        shoes =
            "low heels, loafers or sleek flats";

        accessories =
            "small earrings and a compact shoulder bag";

        styling =
            "Add one polished detail such as a sleek hairstyle or statement earrings.";

        reason =
            "Dinner is a good opportunity to look refined without going completely formal.";

    }


    // ======================================
    // CULTURAL EVENT
    // ======================================

    else if (
        d.occasion === "cultural / family event"
    ) {

        outfit =
            "a modest kurta set, elegant midi/maxi dress or traditional-inspired coordinated outfit";

        shoes =
            "comfortable flats or low block heels";

        accessories =
            "small earrings and a simple bracelet or watch";

        styling =
            "Keep the silhouette polished, respectful and comfortable.";

        reason =
            "Family and cultural events usually benefit from looking elegant while staying practical.";

    }


    // ======================================
    // UNUSUAL OCCASION
    // ======================================

    else {

        if (d.clothes.length > 0) {

            outfit =
                `Build the outfit around your ${d.clothes.slice(0, 3).join(", ")}`;

        }

        else {

            outfit =
                "a versatile fitted top or statement blouse with straight-leg jeans, tailored trousers or a midi skirt";

        }


        shoes =
            "clean sneakers, flats or ankle boots";

        accessories =
            "simple jewelry and a small shoulder or crossbody bag";

        styling =
            "Start with one statement piece and keep everything else balanced.";

        reason =
            "Your occasion doesn't fit a standard category, so I'm building around the setting, mood and details you gave me instead of rejecting it.";

    }


    // ======================================
    // TIME
    // ======================================

    if (
        d.time === "evening" ||
        d.time === "night"
    ) {

        styling +=
            " Since it is later in the day, you can deepen the colors and add one slightly dressier detail.";

    }


    if (
        d.time === "morning"
    ) {

        styling +=
            " Since it is morning, keep the outfit fresh, light and comfortable.";

    }


    // ======================================
    // WEATHER
    // ======================================

    if (
        d.weather === "hot"
    ) {

        styling +=
            " Because it sounds hot, choose breathable fabrics and avoid unnecessary layers.";

    }


    if (
        d.weather === "cold"
    ) {

        styling +=
            " Because it sounds cold, add a cardigan, jacket, blazer or structured coat.";

    }


    if (
        d.weather === "rainy"
    ) {

        styling +=
            " Since rain is involved, choose practical shoes and avoid delicate fabrics.";

    }


    // ======================================
    // LOCATION
    // ======================================

    if (
        d.location === "rooftop"
    ) {

        styling +=
            " For a rooftop setting, choose shoes that are comfortable on the ground and bring a light layer in case it gets breezy.";

    }


    if (
        d.location === "outdoor"
    ) {

        styling +=
            " Since you are outdoors, prioritize comfort and weather-appropriate fabrics.";

    }


    // ======================================
    // COLORS
    // ======================================

    if (
        d.colors.length > 0
    ) {

        styling +=
            ` Since you mentioned ${d.colors.slice(0, 3).join(", ")}, keep those as your main color palette.`;

    }


    // ======================================
    // FINAL ANSWER
    // ======================================

    return `✨ FashionAI recommendation

**Occasion:** ${d.occasion}

**Vibe:** ${d.vibe}

**1. Main outfit:** ${outfit}

**2. Shoes:** ${shoes}

**3. Accessories:** ${accessories}

**4. Styling:** ${styling}

**Why it works:** ${reason}

💡 Tell me another item you already own and I can build the outfit around it.`;

}



// ==========================================
// SEND MESSAGE
// ==========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const text = input.value.trim();


    // Do nothing if empty
    if (text === "") {

        return;

    }


    // Remove welcome message
    const welcome = document.querySelector(".welcome");

    if (welcome) {

        welcome.remove();

    }


    // Show user message
    addMessage("user", text);


    // Clear input
    input.value = "";


    // Disable send button
    sendButton.disabled = true;


    // Show typing
    typing.style.display = "block";


    // Generate response
    setTimeout(function () {

        const answer =
            generateRecommendation(text);


        // Hide typing
        typing.style.display = "none";


        // Show AI response
        addMessage("assistant", answer);


        // Enable button
        sendButton.disabled = false;


        // Focus input
        input.focus();

    }, 500);

});



// ==========================================
// ENTER TO SEND
// ==========================================

input.addEventListener("keydown", function (event) {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        form.requestSubmit();

    }

});



// ==========================================
// NEW CHAT
// ==========================================

newChatButton.addEventListener("click", function () {

    messages.innerHTML = `

        <div class="welcome">

            <div class="logo">
                ✦
            </div>

            <h3>
                Hey! I’m FashionAI.
            </h3>

            <p>
                Tell me the occasion, your clothes,
                your vibe, or even something completely
                unusual. I’ll build a look around it.
            </p>

        </div>

    `;

    input.value = "";

    input.focus();

});



// ==========================================
// QUICK QUESTIONS
// ==========================================

const quickButtons =
    document.querySelectorAll(".quick");


quickButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        input.value =
            button.textContent.trim();

        input.focus();

    });

});
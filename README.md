# 👗 FashionAI — AI Fashion Recommendation Chatbot

FashionAI is a web-based fashion recommendation chatbot that helps users create outfit ideas based on their **occasion, personal style, clothing items, time of day, and overall vibe**.

The project provides a simple conversational interface where users can describe what they are looking for, and FashionAI responds with a complete outfit recommendation including clothing, shoes, accessories, styling suggestions, and why the combination works.

> **Your personal AI fashion stylist ✨**

---

## 📌 Project Overview

FashionAI was created as a lightweight conversational fashion assistant that makes outfit recommendations through natural-language user input.

Instead of requiring users to select from a fixed list of occasions, the chatbot analyses keywords in the user's message and builds a recommendation around the information provided.

For example, users can mention:

* An occasion such as a concert, interview, date, wedding, or party
* Clothing they already own
* Their preferred style or vibe
* Shoes they want to wear
* Time of day
* The type of outfit they want

The backend processes the message and returns a structured fashion recommendation.

---

## ✨ Features

### 💬 Conversational Fashion Recommendations

Users can describe their outfit requirements naturally, such as:

```text
I have black jeans and white sneakers and I'm going to a concert.
```

FashionAI responds with a complete styling recommendation based on the information provided.

### 👚 Clothing-Based Styling

The chatbot recognises clothing items such as:

* Jeans
* Denim
* Dresses
* Skirts
* Black tops
* White sneakers
* Heels
* Boots

It can incorporate items the user already owns into the recommendation.

### 🎉 Occasion-Based Recommendations

FashionAI provides different styling approaches for occasions including:

* 🎤 Concerts
* 🎪 Festivals
* 💼 Interviews
* 🎓 Internships
* 📊 Presentations
* ❤️ Dates
* 🍽️ Dinner
* 🎂 Birthdays
* 🌃 Night outs
* 💍 Weddings
* 🛕 Puja / temple visits
* 👨‍👩‍👧 Family occasions

Each occasion has its own styling logic and level of formality.

### 🎨 Style & Vibe Detection

The chatbot recognises style-related words and adapts recommendations to different aesthetics, including:

* Feminine
* Cute
* Soft
* Girly
* Cool
* Edgy
* Street
* Hip-hop
* Classy
* Elegant
* Formal
* Professional
* Casual
* Comfortable

This allows the recommendations to change depending on the user's desired aesthetic.

### 🌤️ Time & Weather Considerations

Users can mention daytime or evening settings, and the chatbot adjusts its styling suggestions accordingly.

It also provides general guidance for warm or cool weather, such as choosing breathable fabrics or adding a light layer.

### 👠 Complete Outfit Suggestions

Each recommendation includes:

1. **Main piece**
2. **Bottom**
3. **Shoes**
4. **Accessories**
5. **Styling advice**
6. **Why the outfit works**

This creates a complete look rather than recommending a single clothing item.

---

## 🛠️ Technologies Used

| Technology       | Purpose                |
| ---------------- | ---------------------- |
| **HTML**         | Frontend structure     |
| **CSS**          | User interface styling |
| **JavaScript**   | Frontend interaction   |
| **Node.js**      | Backend runtime        |
| **Express.js**   | Web server and API     |
| **Git & GitHub** | Version control        |

The project uses Express 5.1.0 and runs as an ES module-based Node.js application.

---

## 🏗️ System Architecture

```text
                 User
                   │
                   ▼
          FashionAI Web Interface
                   │
                   ▼
             POST /api/chat
                   │
                   ▼
             Express Server
                   │
                   ▼
          Message Processing
                   │
        ┌──────────┼──────────┐
        ▼          ▼          ▼
      Vibe      Occasion    Clothing
     Detection  Detection   Detection
        │          │          │
        └──────────┼──────────┘
                   ▼
          Outfit Recommendation
                   │
                   ▼
             Chat Interface
```

The frontend communicates with the Express backend through the `/api/chat` endpoint. The backend receives the user's message, processes it, and returns a generated fashion recommendation.

---

## 📂 Project Structure

```text
fashion_Ai_chatbot/
│
├── public/
│   └── Frontend files and assets
│
├── server.js
│   └── Express server and recommendation logic
│
├── package.json
│   └── Project configuration and dependencies
│
├── package-lock.json
│   └── Dependency lock file
│
└── README.md
```

---

## ⚙️ How It Works

### 1. User Input

The user enters a fashion-related request into the chatbot.

Example:

```text
I have a black top and jeans and I'm going to dinner.
```

### 2. Message Processing

The Express backend receives the message through:

```text
POST /api/chat
```

The message is converted to lowercase and analysed for relevant keywords.

### 3. Style Detection

The system identifies the user's preferred vibe, such as:

```text
feminine
cool
classy
casual
```

### 4. Occasion Detection

The system identifies the context, such as:

```text
concert
interview
date
wedding
party
```

### 5. Outfit Generation

Based on the detected information, FashionAI selects suitable:

* Tops
* Bottoms
* Shoes
* Accessories
* Styling suggestions

### 6. Recommendation

The completed recommendation is returned to the chatbot interface.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed.

Check your installation:

```bash
node --version
```

and:

```bash
npm --version
```

### Clone the Repository

```bash
git clone https://github.com/kritikap0730/fashion_Ai_chatbot.git
```

Navigate to the project:

```bash
cd fashion_Ai_chatbot
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```

The Express server runs locally on:

```text
http://localhost:3000
```

The project configuration defines `npm start` as `node server.js`.

---

## 💡 Example Prompts

Try asking FashionAI:

```text
I need an outfit for a concert.
```

```text
I have jeans and white sneakers. Make me an outfit.
```

```text
I have a black skirt and I'm going on a date.
```

```text
I need something classy for an interview.
```

```text
I want a cute feminine outfit for a birthday.
```

```text
I have boots and want an edgy outfit.
```

---

## 🎯 Project Objectives

The main objectives of FashionAI are to:

* Create an interactive fashion chatbot.
* Provide personalised outfit recommendations.
* Understand natural-language fashion requests.
* Incorporate clothing users already own.
* Adapt recommendations to different occasions.
* Demonstrate backend and frontend integration.
* Practice API-based communication between frontend and backend.
* Build a practical conversational AI-style application.

---

## 🔮 Future Improvements

FashionAI could be expanded with more advanced AI capabilities, including:

* 🤖 Integration with an actual LLM
* 👗 AI-powered outfit generation
* 📸 Image-based clothing recognition
* 🧍 Personalised recommendations based on body proportions
* 🎨 Colour palette recommendations
* 🌦️ Real-time weather integration
* 💰 Budget-based outfit recommendations
* 🛍️ Product recommendations and shopping links
* 👚 Digital wardrobe management
* ❤️ Saved outfits and favourites
* 👤 User profiles and preferences
* 🌎 Location-aware fashion recommendations
* 🧠 Machine-learning-based personalisation

---

## ⚠️ Current Limitations

The current recommendation engine is lightweight and primarily uses **keyword-based logic** rather than a trained machine-learning model or external large language model. The backend checks the user's message for relevant words and selects the appropriate styling rules.

This makes the project:

* Fast
* Lightweight
* Easy to run locally
* Easy to understand and modify

However, a future version could use an LLM or machine-learning model for deeper natural-language understanding and more personalised recommendations.

---

## 👩‍💻 Author

**Kritika Pandey**

GitHub: **@kritikap0730**

---

## 📄 License

This project was developed for educational and academic purposes.

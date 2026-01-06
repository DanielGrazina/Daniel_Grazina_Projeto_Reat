# 🏎️ F1 Telemetry Dashboard

This project is a web application built with **React** that consumes real Formula 1 data via the **OpenF1 API**. The goal is to simulate a TV Broadcast interface, allowing users to browse sessions, race results, and detailed driver telemetry.

Project developed for the **UC00610** course unit [React + Rest API].

This project is deployed online via Vercel: [Live Site](https://daniel-grazina-projeto-reat.vercel.app/)

## 📋 Key Features

The project goes beyond basic API consumption by implementing several advanced features:

### 1. Navigation and Search
* **Session Listing:** View all sessions available in the API.
* **Advanced Filters:** Dynamic filtering by **Season (Year)** and **Grand Prix (Location)**.
* **Search Bar:** Real-time search by circuit or session name.
* **Pagination:** Fluid navigation between result pages.

### 2. Session Details (Session Hub)
* **Session Drivers:** Drivers are sorted by car number.
* **Weather Widget:** Session weather data (Air Temp, Track Temp, and Humidity).
* **Official Design:** Visual identity inspired by official FIA/F1 graphics (Fonts, Colors, and Geometric shapes).

### 3. Driver Telemetry (Driver Overlay)
* **Interactive Modal:** Clicking on a driver opens an overlay detail panel.
* **Best Lap Analysis:** Automatic calculation of the driver's fastest lap in the session.
* **Sector Analysis:** Proportional visual chart showing performance in Sectors 1, 2, and 3.

---

## 🛠️ Technologies Used

* **React** (Vite)
* **Bootstrap 5** (Layout and Responsiveness)
* **Custom CSS** ("F1 Broadcast" theme with CSS variables)
* **OpenF1 API** (Data)

---

## 📡 About the API (OpenF1)

This project uses the [OpenF1 API](https://openf1.org/), a free and public API that provides timing and telemetry data.

**Endpoints used:**
* `/sessions` - To list races and practice sessions.
* `/drivers` - To get the driver list for each session.
* `/laps` - To calculate lap times, sectors, and final classification.
* `/weather` - To get track conditions.

> **Important Note regarding API Limits:**
> The free version of OpenF1 has request limits (Rate Limiting). If console errors appear (429 Too Many Requests), the project is programmed to handle this gracefully (showing empty lists or loaders) to avoid crashes.

---

## 🚀 Installation and Execution Instructions

To run this project locally, follow the steps below:

### 1. Prerequisites
Ensure you have **Node.js** installed on your machine.

### 2. Install Dependencies
Open the terminal in the project folder and run:

```bash
npm install
```

### 3. Start Development Server
To start the application:

```bash
npm run dev
```
The terminal will indicate the local address (usually http://localhost:5173/). Open this link in your browser.

---

## 📂 Project Structure

* `src/components/` - Reusable components (Navbar, Cards, Modals, Filters).

* `src/pages/` - Main pages (Home, Sessions, SessionDetail).

* `src/services/` - API communication logic (Fetch and error handling).

* `src/f1-theme.css` - Global styles and visual theme.

---

## 👤 Author

* Daniel Grazina 
    - Developed for the UC00610 course unit - December 2025/January 2026.

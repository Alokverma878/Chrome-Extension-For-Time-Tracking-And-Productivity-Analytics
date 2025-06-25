#  Chrome-Extension-For-Time-Tracking-And-Productivity-Analytics


COMPANY: CODTECH IT SOLUTIONS

NAME: VERMA ALOKKUMAR AMARDAYAL

INTERN ID: CT06DF1774

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 6 WEEKS

MENTOR: NEELA SANTOSH


A Chrome Extension that tracks the time you spend on different websites, classifies them as **productive**, **unproductive**, or **neutral**, and displays a **weekly productivity 
report** using a dashboard. All tracking data is stored in a **local Node.js + MongoDB backend**.

---

## 🚀 Features

- ✅ Tracks time spent on active browser tabs
- ✅ Classifies websites into:
  - **Productive**: e.g., GitHub, LeetCode, Stack Overflow
  - **Unproductive**: e.g., Facebook, Instagram, YouTube
  - **Neutral**: all others
- ✅ Stores data in a local MongoDB database
- ✅ Displays a dashboard with time breakdown per category
- ✅ Fully customizable and extensible

---

📦 Technologies Used
Chrome Extension API

* JavaScript (ES6)
* Node.js + Express
* MongoDB + Mongoose
* HTML + CSS


## ⚙️ Setup Instructions

### 1. 🔧 Requirements

- Node.js and npm
- MongoDB (running locally)
- Google Chrome (with Developer Mode)

---

### 2. 🧱 Start MongoDB

# Windows: MongoDB runs automatically if installed as service
# Or manually type in cmd: 
mongod

---
3. 🚀 Start Backend Server
     - cd TimeTracker/backend
     - npm install
     - node server.js

     - You should see:
  Backend running on http://localhost:3000


4. 🌐 Load Chrome Extension
- Open Chrome and go to chrome://extensions/

- Enable Developer mode

- Click Load unpacked

- Select the TimeTracker/extension/ folder


5. Using the Extension
- Open websites like github.com, youtube.com, or example.com

- The extension tracks how long you stay on each site

- Time is sent to your local backend

- Click the extension icon → click “Open Dashboard”

- The dashboard shows total time in minutes spent on:

* Productive websites
* Unproductive websites
* Neutral websites

-----


## 📷 Screenshots





  

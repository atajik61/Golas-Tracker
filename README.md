#  Goals Tracker App

A modern and responsive **Goals Tracking Web Application** built with React and Material UI.  
This project helps users manage their goals, track progress, build streaks, earn XP, and stay productive with a clean dashboard UI.

---

##  Project Overview

This application allows users to:

- Create personal goals (e.g., React practice, fitness, study)
- Track daily progress using logs
- Monitor streaks (consecutive daily activity)
- Earn XP based on activity and consistency
- Organize goals by categories
- View statistics in a dashboard
- Manage completed and active goals
- Switch between dark and light mode
- Use the app in English or Persian (RTL/LTR support)

---

##  Features

- Create, edit, and delete goals
- Add daily progress logs
- Streak tracking system
- XP reward system
- Categories for goals
- Dashboard analytics
- Active / Completed goals pages
- Goal details page
- Settings page (theme + language)
- Dark / Light mode support
- Fully responsive design
- Multi-language support (EN / FA)
- RTL / LTR layout switching

---

##  Streak & XP Rules

###  Streak System
- A streak increases when the user completes a goal on consecutive days
- If a day is missed, the streak resets to zero

###  XP System
- Each completed action gives XP
- Higher streak increases XP bonus
- XP is shown in dashboard statistics

---

## Language & RTL / LTR Support

The app supports:

- English → Left to Right (LTR)
- Persian → Right to Left (RTL)

Handled dynamically using:

```js id="rtl1"
document.body.dir = i18n.language === "fa" ? "rtl" : "ltr";
```

## Pages
🏠 Dashboard → overview of stats and active goals<br/>
🎯 Goals → list of all active goals<br/>
📁 Categories → grouped goals by category<br/>
🏁 Completed → finished goals list<br/>
➕ Create Goal → add new goal<br/>
✏️ Edit Goal → modify existing goal<br/>
📄 Goal Details → full goal information<br/>
⚙️ Settings → theme and language control<br/>

## Screenshots
public/images

## How to Run the Project
Clone the repository
```

git clone https://github.com/your-username/goals-tracker.git
```
### Install dependencies


```
npm install
```

### Start the development server


```
npm run dev
```

## Project Structure

src/<br/>
 ├── components/<br/>
 ├── pages/<br/>
 ├── data/<br/>
 ├── utils/<br/>
 ├── theme/<br/>
 ├── i18n/<br/>
 └── App.jsx<br/>

## Author
Developed by Afsana Tajik




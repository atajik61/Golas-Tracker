import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        dashboard: "Dashboard",
        goals: "Goals",
        completed: "Completed",
        categories: "Categories",
        settings: "Settings",

        navigation: "Navigation",
        loggedIn: "Logged in as",
        admin: "Admin",

        goalsTracker: "Goals Tracker",

        newGoals: "New Goals",
        completedGoals: "Completed Goals",
        streak: "Streak",
        score: "Score",

        activeGoals: "Active Goals",
        newGoal: "New Goal",
        viewAllGoals: "View All Goals",

        add: "Add",
        edit: "Edit",
        delete: "Delete",

        language: "Language",
        darkMode: "Dark Mode",

        notFound: "Page Not Found",
        goHome: "Go to Dashboard",
        health: "Health",
        coding: "Coding",
        learning: "Learning",
        language: "Language",
        stats: "Stats",
        all: "All",
        active: "Active",
        paused: "Paused",
        completed: "Completed"
      },
    },

    fa: {
      translation: {
        dashboard: "داشبورد",
        goals: "هدف‌ها",
        completed: "تکمیل‌شده",
        categories: "دسته‌بندی‌ها",
        settings: "تنظیمات",
        stats: "آمار",
        navigation: "منو",
        loggedIn: "وارد شده به عنوان",
        admin: "مدیر",

        goalsTracker: "ردیابی اهداف",

        newGoals: "هدف‌های جدید",
        completedGoals: "هدف‌های تکمیل‌شده",
        streak: "استریک",
        score: "امتیاز",

        activeGoals: "هدف‌های فعال",
        newGoal: "هدف جدید",
        viewAllGoals: "مشاهده همه هدف‌ها",

        add: "افزودن",
        edit: "ویرایش",
        delete: "حذف",

        language: "زبان",
        darkMode: "حالت تاریک",

        notFound: "صفحه پیدا نشد",
        goHome: "بازگشت به داشبورد",
        health: "سلامت",
        coding: "برنامه‌نویسی",
        learning: "یادگیری",
        language: "زبان",
        all: "همه",
        active: "فعال",
        paused: "متوقف",
        completed: "تکمیل‌شده"
      },
    },
  },

  lng: localStorage.getItem("lang") || "en", // 🔥 مهم
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
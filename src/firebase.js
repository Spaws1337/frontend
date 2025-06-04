// Импорт необходимых функций
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // <-- добавляем Realtime DB

// Конфигурация твоего Firebase проекта
const firebaseConfig = {
  apiKey: "AIzaSyCsWA-od8zCe060K37ETn-C-YuYoGi6an4",
  authDomain: "kodobuk02072003.firebaseapp.com",
  databaseURL: "https://kodobuk02072003-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kodobuk02072003",
  storageBucket: "kodobuk02072003.firebasestorage.app",
  messagingSenderId: "937122724091",
  appId: "1:937122724091:web:71685ccd3b360f452c585e"
};

// Инициализация приложения Firebase
const app = initializeApp(firebaseConfig);

// Экспорт нужных сервисов
export const auth = getAuth(app);
export const db = getDatabase(app); // <-- вот здесь подключается Realtime DB

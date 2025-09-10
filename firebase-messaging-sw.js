importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCZHMr_G5wujOEJ8xdyHVgQXDc6dKZjaYs",
  authDomain: "pwa-not.firebaseapp.com",
  projectId: "pwa-not",
  storageBucket: "pwa-not.firebasestorage.app",
  messagingSenderId: "951266645907",
  appId: "1:951266645907:web:22602c723ba3277dedba66",
  measurementId: "G-1R0YSLKRW9"
};

    messaging.onBackgroundMessage((ms) => {
        console.log("[firebase-messaging-sw.js] Menssagem recebida", ms);

        const notificacaoTitulo = ms.notification.title;
        const notificacaoOpcao = {
            body: ms.notification.body,
            icons: '/img.jpg'
        }
        self.registration.showNotification(notificacaoTitulo, notificacaoOpcao);
    });
const firebaseConfig = {
  apiKey: "AIzaSyCZHMr_G5wujOEJ8xdyHVgQXDc6dKZjaYs",
  authDomain: "pwa-not.firebaseapp.com",
  projectId: "pwa-not",
  storageBucket: "pwa-not.firebasestorage.app",
  messagingSenderId: "951266645907",
  appId: "1:951266645907:web:22602c723ba3277dedba66",
  measurementId: "G-1R0YSLKRW9"
};

const app = initializeApp(firebaseConfig);
const messaging = firebaseConfig.messaging();

function solicitarPermissao(){
    Notification.requestPermission().then((permissao) => {
        if(permissao === 'granted'){
            console.log('Permissao aceito');

            messaging.getToken({vapidKey:'BPpPlKbmik5PxRiBRzbnbKiyxYr147HUqEnq55of_jj1gXr9NII-vSgLMtlCFw4pdPA_LtMJT0T_D5gIT6Lzv94'}).then((cToken) => {
                if (cToken){
                    console.log('Token do dispositivo OK!');
                    alert(cToken);
                }else{
                    console.log("Token do dispositivo nao recebido.");
                }
            }).catch((erro) => {
                console.error("Ocorreu um erro no Token", erro);
            });
        }else{
            console.log("Permissao negada!");
        }
    });
}

const btn_permissao = document.getElementById("btn-permissao");
btn_permissao.addEventListener('click', solicitarPermissao());
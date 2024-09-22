// Configura Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDFvVdX6vxGx02PUub6hxnqypbrFXFQ5HU",
  authDomain: "listado-8f443.firebaseapp.com",
  projectId: "listado-8f443",
  storageBucket: "listado-8f443.appspot.com",
  messagingSenderId: "368727482227",
  appId: "1:368727482227:web:f29f46dab2f88ca1bcef06",
  measurementId: "G-YM84JC8LHT"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Maneja el inicio de sesión
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          // Redirigir a la página principal o a la sección de asistencia
          window.location.href = 'dashboard.html'; // Asegúrate de crear esta página
      })
      .catch((error) => {
          const errorMessage = error.message;
          document.getElementById('error-message').innerText = errorMessage;
      });
});

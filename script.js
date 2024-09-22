// Inicializa Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3rgkwXr8mn-VwQR2QPrWepP5Cop0b5ws",
  authDomain: "gestion-pagos-74211.firebaseapp.com",
  projectId: "gestion-pagos-74211",
  storageBucket: "gestion-pagos-74211.appspot.com",
  messagingSenderId: "404811861479",
  appId: "1:404811861479:web:bc09d8d523ed8a757cc142",
  measurementId: "G-E2DBN1Y2S4"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('registrar').onclick = async () => {
  const nombre = document.getElementById('nombre').value;
  const numeroCedula = document.getElementById('numeroCedula').value;
  const deuda = document.getElementById('deuda').value;

  await db.collection('usuarios').add({
      nombre,
      numeroCedula,
      deuda,
      estado: 'no pagado',
      fecha: new Date()
  });

  // Generar y mostrar factura
  generarFactura(nombre, numeroCedula, deuda);
};

function generarFactura(nombre, numeroCedula, deuda) {
  const fecha = new Date().toLocaleString();
  const factura = `Factura\nNombre: ${nombre}\nCédula: ${numeroCedula}\nMonto: ${deuda}\nFecha: ${fecha}`;
  document.getElementById('factura').innerText = factura;
}

document.getElementById('descargar').onclick = () => {
  const facturaTexto = document.getElementById('factura').innerText;
  const blob = new Blob([facturaTexto], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'factura.txt';
  a.click();
  URL.revokeObjectURL(url);
};

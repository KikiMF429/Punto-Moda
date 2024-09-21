const data_location = "/data/login.json" // direccion del archivo JSON que contiene los usuarios registrados

const getData = async () => { // Funcion para cargar los datos de el archivo JSON en la variable data
    const dataObject = await fetch(data_location);
    const data = await dataObject.json(); // <- variable data
    return data // devolvemos la variable
}

async function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
  
    const users = await getData();
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
  
    const messageElement = document.getElementById('message');
  
    if (user) {
      setTimeout(() => {
        window.location.href = '/index.html';
      }, 100);
    } else {
      messageElement.innerHTML = 'Usuario o contraseña incorrectos';
      messageElement.style.color = 'red';
    }
  }
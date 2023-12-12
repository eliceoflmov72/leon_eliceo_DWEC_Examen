class DatosGitHub {
  // Creamos la clase DatosHitHub
  
    constructor(userData) {
    // Ponemos el userData como parametro de entrada que será el JSON que recice
      this.nuevoJSON = JSON.parse.userData;
      // Aquí pongo todos los datos para que seran recibidos
      this.id = this.userData.id;
      this.email = this.userData.email
      this.publicRepos = this.userData.publicRepos;
    }
  
    datosRecibidos() {
      console.log(`El Usuario de GitHub ${this.name || 'No tiene nombre'} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.publicRepos} repositorios públicos.`);
    }
  }
  
  // Suponiendo que tienes el objeto userData desde la respuesta de la API
  const userData = JSON.stringify({
    "id": "123",
    "email": "ejemplo@correo.com",
    "public_repos": "5",
    // ... y mas atributos
  });
  
  const datosGitHubInstancia = new DatosGitHub(userData);
  // Creo la instracia
  datosGitHubInstancia.datosRecibidos();
  
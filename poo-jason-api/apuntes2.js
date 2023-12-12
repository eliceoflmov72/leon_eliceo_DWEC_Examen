class DatosGitHub {
    constructor(userData) {
      this.userData = userData;
    }
  
    datosRecibidos() {
      const { name, id, email, public_repos } = this.userData;
      console.log(`El Usuario de GitHub ${name || 'sin nombre'} tiene un id ${id || 'sin id'} cuyo correo es ${email || 'sin correo'} y tiene ${public_repos || 'sin'} repositorios públicos.`);
    }
  }
  
  const jasonData = {
    "name": "Jason Doe",
    "id": 123456,
    "email": "jason@example.com",
    "public_repos": 25
  };
  
  const datosGitHubInstancia = new DatosGitHub(jasonData);
  datosGitHubInstancia.datosRecibidos();
  
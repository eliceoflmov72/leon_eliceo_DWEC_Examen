class DatosGitHub {
    constructor(userData) {
      this.id = userData.id;
      this.email = userData.email || 'Not available';
      this.publicRepos = userData.public_repos;
    }
  
    datosRecibidos() {
      console.log(`El Usuario de GitHub ${this.name || 'No tiene nombre'} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.publicRepos} repositorios públicos.`);
    }
  }
  
  // Suponiendo que tienes el objeto userData desde la respuesta de la API
  const userData = {
    id: 123,
    email: 'ejemplo@correo.com',
    public_repos: 5,
    // ... otros atributos
  };
  
  const datosGitHubInstancia = new DatosGitHub(userData);
  datosGitHubInstancia.datosRecibidos();
  
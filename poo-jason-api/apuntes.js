class DatosGitHub {
    constructor(userData) {
      this.userData = userData;
    }
  
    datosRecibidos() {
      const { name, id, email, public_repos } = this.userData;
  
      const formattedEmail = email || 'Not available';
      const formattedInfo = `El Usuario de GitHub ${name || 'N/A'} tiene un id ${id || 'N/A'} cuyo correo es ${formattedEmail} y tiene ${public_repos || 'N/A'} repositorios públicos.`;
  
      console.log(formattedInfo);
    }
  }
  
  // Reemplaza 'jsonString' con la cadena JSON recolectada
  const jsonString = `{"name":"John Doe","id":123456,"email":"johndoe@example.com","public_repos":10}`; // Ejemplo de cadena JSON
  
  const userData = JSON.parse(jsonString); // Convierte la cadena JSON a un objeto JavaScript
  const datosGitHubInstancia = new DatosGitHub(userData);
  datosGitHubInstancia.datosRecibidos();
  
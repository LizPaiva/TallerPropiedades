function libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.prestado = false;
    // Crear funcion prestado
    this.prestar = function () {
        if (this.prestado) {
            console.log("El libro ya está prestado" );
        } else {
            this.prestado = true;
            console.log("El libro ya ha sido prestado");
        }
    };
}
let libro1 = new libro("Jumanji", "Carlos");
let libro2 = new libro("Harry Potter", "Javier");

libro1.prestar(); 
libro1.prestar();
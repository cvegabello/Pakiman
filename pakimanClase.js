class Pakiman
{
  constructor(_nombre, _vida, _ataque)
  {
      this.imagen = new Image();
      this.nombre = _nombre;
      this.vida = _vida;
      this.ataque = _ataque;

      this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
      document.body.appendChild(this.imagen);
      //document.write("<p>");
      document.write("<br /><strong>" + this.nombre + "</strong><br />");
      document.write("Vida!: " + this.vida + "<br />");
      document.write("Ataque!: " + this.ataque + "<hr />");
      //document.write("</p>");
  }
}

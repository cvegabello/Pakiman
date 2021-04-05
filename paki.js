var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

/*var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);*/

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var p in coleccion) //p es el indice del array
{
  console.log(coleccion[p]);
}

for(var p of coleccion) //p es el objeto, no el indice del array
{
  console.log(p);
  p.mostrar();
}

/*pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();*/

//console.log(cauchin, pokacho, tocinauro);

//pokacho.hablar();
